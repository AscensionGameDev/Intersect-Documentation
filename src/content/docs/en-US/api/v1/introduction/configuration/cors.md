---
title: CORS (Cross-Origin Resource Sharing)
---

CORS is used to control from which websites requests can be made to the API. Permitting Origin, Headers, and Methods are **all** required for this to work, setting one is not sufficient.

## `Cors` key in the configuration `Array<CorsConfiguration>`

## `CorsConfiguration`

Example complete configuration for the website "myintersectgame.com" **note that this is not complete**:

```json
{
  "Origin": "myintersectgame.com",
  "Headers": [
    "Accepts",
    "Authorization",
    "Content-Length"
    "Content-Type"
  ],
  "Methods": [
    "*"
  ]
}
```

### Origin `string`

A string denoting which origin the following headers and methods are permitted for. `*` can be used to denote all origins (**this is not recommended**).

### Headers `Array<string>`

An array of strings denoting which headers are permitted for cross-origin resource requests. `["*"]` can be used to allow all headers **but is not recommended for non-local development usage**.

Typical headers that would be needed for the various API endpoints Intersect provides would include (but are not limited to): `Content-Type`, `Content-Length`, `Accepts`, `Authorization`

### Methods `Array<string>`

An array of strings denoting which request methods are permitted for cross-origin resource requests. `["*"]` can be used to allow all methods.

A likely scenario is that all methods will be necessary, but at minimum `GET` will be for endpoints that do not require authorization, and `POST` will be required for the authorization endpoints (the ones that include `token` for example).
