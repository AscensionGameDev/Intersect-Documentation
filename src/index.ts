import { Plugin } from 'unified';
import { Root, Element } from 'hast';
import { visit } from 'unist-util-visit';
import { detailsNode } from './detailsNode';

export type Size = '0' | `${number}%` | `${number}em` | `${number}px` | `${number}rem`;

export type RehypeVideoOptions = {
  /**
   * If controls should be displayed on the video.
   *
   * @default true
   */
  controls?: boolean;

  /**
   * Support `<details>` tag to wrap <video>.
   * @default false
   */
  details?: boolean;

  /**
   * The maximum height to constraint the <video> element to.
   *
   * @default undefined
   */
  maxHeight?: Size;

  /**
   * The maximum height to constraint the <video> element to.
   *
   * @default '100%'
   */
  maxWidth?: Size;

  /**
   * If the video should be muted.
   *
   * @default true
   */
  muted?: boolean;

  /**
   * URL suffix verification.
   * @default /\/(.*)(.mp4|.mov)$/
   */
  test?: RegExp;
}

const properties = { muted: 'muted', controls: 'controls' };
const queryStringToObject = (url: string) => {
  return [...new URLSearchParams(url.split('?!#')[1])].reduce(
    (a: Record<string, string>, [k, v]) => ((a[k] = v), a),
    {}
  );
}

function reElement(node: Element, options: RehypeVideoOptions, url: URL) {
  const properties = new Map<string, string>();

  if (options.controls) {
    properties.set('controls', 'true');
  }

  const styleParts = [];
  if (options.maxHeight) {
    styleParts.push(`max-height: ${options.maxHeight};`);
  }

  if (options.maxWidth) {
    styleParts.push(`max-width: ${options.maxWidth};`);
  }

  if (options.muted) {
    properties.set('muted', 'true');
  }

  if (styleParts.length > 0) {
    properties.set('style', styleParts.join(' '));
  }

  const attributes = new URLSearchParams(url.hash.slice(1));
  for (const [name, value] of attributes.entries()) {
    properties.set(name, value);
  }

  const title = properties.get('title');
  if (title && !properties.has('aria-label')) {
    properties.set('aria-label', title);
  }

  if (!properties.has('aria-role')) {
    properties.set('aria-role', 'figure');
  }

  const urlToEmit = new URL(url);
  urlToEmit.hash = '';
  properties.set('src', urlToEmit.href.replace(/http:\/\/localhost/, ''));

  node.children = [];

  node.properties = node.properties ?? {};
  for (const [name, value] of properties.entries()) {
    node.properties[name] = value;
  }

  node.tagName = 'video';

  if (options.details) {
    const newNode = detailsNode(properties.get('title') ?? urlToEmit.pathname);
    newNode.children.push({ ...node });
    Object.assign(node, newNode);
  }
}

function parseUrl(href: string | URL, base?: string | URL): URL | null {
  if (href instanceof URL) {
    return href;
  }

  if (typeof href !== 'string') {
    return null;
  }

  const resolvedBase = base ?? new URL('http://localhost');
  try {
    return new URL(href, resolvedBase);
  } catch {
    return null;
  }
}

const defaultOptions: RehypeVideoOptions = {
  controls: true,
  details: false,
  maxWidth: '100%',
  muted: true,
  test: /\/(.*)(.mp4|.mov)$/
};

export const legacyPreset: RehypeVideoOptions = {
  controls: true,
  details: true,
  maxHeight: '640px',
  muted: true,
  test: /\/(.*)(.mp4|.mov)$/
};

const RehypeVideo: Plugin<[RehypeVideoOptions?], Root> = (options) => {
  const sanitizedOptions = Object.assign(
    typeof options === 'object' && options !== null ? options : {},
    defaultOptions
  );

  const { test = defaultOptions.test! } = sanitizedOptions;
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      const child = node.children[0];

      if (node.tagName !== 'p' || node.children.length !== 1) {
        return;
      }

      let possibleUrl: string | undefined;
      switch (child.type) {
        case 'text':
          possibleUrl = child.value;
          break;

        case 'element':
          if (child.tagName === 'a' && typeof child.properties?.href === 'string') {
            possibleUrl = child.properties.href;
          }
          break;
      }

      if (possibleUrl === undefined) {
        return;
      }

      const url = parseUrl(possibleUrl);
      if (url === null) {
        return;
      }

      if (!test.test(url.pathname)) {
        return;
      }

      reElement(node, sanitizedOptions, url);
    });
  }
}

export default RehypeVideo;
