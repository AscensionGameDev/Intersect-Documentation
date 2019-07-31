# Authentication


## Get Token
Get an authorization token for api requests that require auth.

### Request
**URL** : `/api/oauth/token`

**Method** : `POST`

**Permissions required** : `User must have API Access enabled via server console.`

**Content Type** : `application/x-www-form-urlencoded`

**Body**
| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| grant_type | String  | Auth Type. | :heavy_check_mark: |
| username | String  | Username of API Authorized Account | :heavy_check_mark: |
| password | String  | SHA256 Hash of Account Password | :heavy_check_mark: |


**Notes**
`Only available grant type right now is 'password'.`
`Password must be a SHA256 hash of the user's password, with hyphens removed.`

---

### Response

**Condition** : If authentication was successful and token was generated.

**Code** : `200 SUCCESS`

**Example**
```json
{
	"access_token":  "4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87",

	"token_type":  "bearer",

	"expires_in":  299,

	"refresh_token":  "efd947fe-a874-4259-9b06-41a8a9505e35",

	".issued":  "Mon, 29 Jul 2019 19:52:04 GMT",

	".expires":  "Mon, 29 Jul 2019 19:57:04 GMT"
}
```


**Usage**
For all requests that require authentication you will need to supply the access token within the request header. The proper format can found below.

| Header | Type | Value | 
| ----- | ---- |------------ |
| authorization | String  | Bearer [access_token] |


**Example** (truncated)
`authorization: Bearer 4RoC_BqVns0p7guzWe-Ah4...`

The refresh_token is the token's id, it is used to refresh or delete the token using the routes below.



## Refresh Token


## Delete Token

