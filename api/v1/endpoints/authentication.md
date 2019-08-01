# Authentication


## Get Token

Get an authorization token for api requests that require auth.

### Request

**URL** : `/api/oauth/token`

**Method** : `POST`

**Authorization Required** : `No`

**Content Type** : `application/x-www-form-urlencoded`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| grant_type | String  | Auth Type. | :heavy_check_mark: |
| username | String  | Username of API Authorized Account | :heavy_check_mark: |
| password | String  | SHA256 Hash of Account Password | :heavy_check_mark: |


**Notes**

* The only available grant type right now is 'password'.
* Password must be a SHA256 hash of the user's password, with hyphens removed.

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


### Notes

* The refresh_token is the token's id, it is used to refresh or delete the token using the routes below.
* For all requests that require authentication you will need to supply the access token within the request header. The proper format can found below.

> | Header | Type | Value | 
> | ----- | ---- |------------ |
> | authorization | String  | Bearer [access_token] |


> **Example**

> ```
> authorization: Bearer 4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87
> ```



## Refresh Token
Refreshes an existing token delaying it's expiration.

### Request

**URL** : `/api/oauth/token`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/x-www-form-urlencoded`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| grant_type | String  | Auth Type. | :heavy_check_mark: |
| refresh_token | String  | Refresh Token Id | :heavy_check_mark: |


**Notes**

* The grant type should be 'refresh_token'.

---

### Response

**Condition** : Token Refreshed

**Code** : `200 SUCCESS`

**Example**

```json
{
	"access_token": "3OSlfC8yg_fcSGdAGa9n63mDnvwfVhSOo1lgdj0-q4l2EsFvZ1nbZYVoqJd27TI4ksZALxJbzpwcvDHJwg8Frmvlvys-VHE0TLSNK-_o7YvgT2TA3BIASI2nQdA6dx_LIuB5LJhQpIWrlypCpEgP_FRtDfGevUEVpskTP7wB0VDw02RsVaNW19qKWMNwdqU07KxvtY-ghWquMVw1UQfR5LQTbt48b-e741CeFSa1zCD7Zt3UCjaG5NYt7YawOnS-qsA0dL3fCNhQbhjVVe2UZ613JledeiZowKmoIMPqxH9wuTbSvMOqx-YRH2GItVIzk5EfV-gnpZvFUlAtpZjmQqsxUlWX0CWpvpT6Vcr4NMnNCB8MhSuOjNBDQBkA5Z7QVxgEuywa3lyYDuWnD6OpystzuyTWnF3ETzgb8DfgmbGu_VxpdpBgufq9yeVE0KPh8XaIEVkICDIzJCArmPWgrgHr_AXnsl-OwBL-VoNgs7j6BlN_jHQ_Wd6A5LoJU_mv",
	"token_type": "bearer",
	"expires_in": 299,
	"refresh_token": "e27a8020-f9bb-419b-8a06-5421a1452a78",
	".issued": "Thu, 01 Aug 2019 19:44:09 GMT",
	".expires": "Thu, 01 Aug 2019 19:49:09 GMT"
}
```


## Delete Token
Deletes an authorization token preventing further use.

### Request

**URL** : `/api/oauth/token/[tokenId]`

**Method** : `DELETE`

**Authorization Required** : `Yes`

**Content Type** : `application/x-www-form-urlencoded`

**Body**
Empty


**Notes**

* The tokenId within the request url is returned as the 'refresh_token' in the Get Token and Refresh Token responses.

---

### Response

**Condition** : Token Refreshed

**Code** : `200 SUCCESS`

**Example**

```json
{
	"revoked_refresh_token": "358dc42a-1ae1-47d2-ac60-18cd46e6b9be"
}
```
