<template>
    <article class="hash-generator">
        <input name="input" type="password" :placeholder="inputPlaceholder" @input="inputChanged" />
        <span class="output">
            <code name="digest">{{digestPlaceholder}}</code>
            <!-- https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acontent_copy%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048 -->
            <svg @click="copyDigest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z"/></svg>
        </span>
    </article>
</template>

<script>
const algorithms = ['sha-1', 'sha-256', 'sha-384', 'sha-512'];
const textEncoder = new TextEncoder();
export default {
    props: {
        algorithm: {
            type: String,
            required: true,
            validator(value) {
                if (typeof value !== 'string' || value.length < 1) {
                    return false;
                }

                return algorithms.includes(value.toLowerCase());
            }
        },
        inputPlaceholder: {
            type: String,
            default() {
                return 'Input text to be hashed (this is treated like a password!)';
            }
        },
        digestPlaceholder: {
            type: String,
            default() {
                return 'This will update with the hash once input is provided';
            }
        }
    },
    emits: ['digest'],
    mounted() {

    },
    methods: {
        copyDigest() {
            const digest = this.$el.querySelector('code[name=digest]')?.textContent;
            navigator.clipboard.writeText(digest ?? '');
        },
        async inputChanged(event) {
            const input = event.originalTarget?.value ?? '';
            const codeElement = this.$el.querySelector('code[name=digest]');
            if (input.length < 1) {
                codeElement.textContent = this.digestPlaceholder;
                return;
            }

            const encodedInput = textEncoder.encode(input);
            const digestBuffer = await crypto.subtle.digest(this.algorithm, encodedInput);
            const digestArray = new Uint8Array(digestBuffer);
            const digest = [...digestArray].map(byte => `00${byte.toString(16)}`.slice(-2)).join('');
            codeElement.textContent = digest;
            this.$emit('digest', digest);
        }
    }
}
</script>

<style scoped>
article.hash-generator {
    width: 100%;
    display: flex;
    flex-direction: column;
}

article.hash-generator > * {
    flex: 1;
    margin: 0.5em 0;
    min-height: 1em;
}

input[name=input] {
    padding: 0.5em;
}

span.output {
    display: flex;
    flex-direction: row;
}

span.output > code {
    flex: 1;
    margin-right: 0.5em;
}

span.output > svg {
    width: 1.5em;
    height: 1.5em;
    max-width: 1.5em;
    max-height: 1.5em;
    scale: calc(1.5em / (0 + 48px));
    fill: #111;
    cursor: pointer;
}

@media (prefers-color-scheme: dark) {
    span.output > svg {
        fill: #eee;
    }
}

</style>