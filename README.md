# Intersect Engine Documentation v0.7.1-beta

## Running the local development server

### `ERR_OSSL_EVP_UNSUPPORTED` Error

When running `pnpm run dev` (or `yarn dev` or `npm run dev`) and you see an error that looks approximately like the following:
```
node:internal/crypto/hash:71
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (<repo>/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (<repo>/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (<repo>/node_modules/webpack/lib/NormalModule.js:471:10)
    at <repo>/node_modules/webpack/lib/NormalModule.js:503:5
    at <repo>/node_modules/webpack/lib/NormalModule.js:358:12
    at <repo>/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (<repo>/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at Array.<anonymous> (<repo>/node_modules/loader-runner/lib/LoaderRunner.js:205:4)
    at Storage.finished (<repo>/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)
    at <repo>/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9
    at <repo>/node_modules/graceful-fs/graceful-fs.js:123:16
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

You need to run the command with `NODE_OPTIONS=--openssl-legacy-provider` like the following:

```shell
NODE_OPTIONS=--openssl-legacy-provider pnpm run dev
```
