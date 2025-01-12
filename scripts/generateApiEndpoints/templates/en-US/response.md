### Response

**Condition** : If authentication was successful and token was generated.

**Code** : `200 SUCCESS`

**Example**

```json
{
    "access_token": "4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87",

    "token_type": "bearer",

    "expires_in": 299,

    "refresh_token": "efd947fe-a874-4259-9b06-41a8a9505e35",

    ".issued": "Mon, 29 Jul 2019 19:52:04 GMT",

    ".expires": "Mon, 29 Jul 2019 19:57:04 GMT"
}
```

### Notes

- The refresh_token is the token's id, it is used to refresh or delete the token using the routes below.
- For all requests that require authentication you will need to supply the access token within the request header. The proper format can found below.

| Header        | Type   | Value                 |
| ------------- | ------ | --------------------- |
| authorization | String | Bearer [access_token] |

**Example**

```
authorization: Bearer 4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87
```