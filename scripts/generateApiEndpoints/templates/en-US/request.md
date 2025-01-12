### Request

**Content Type** : `application/json`

**Body**

| Name       | Type   | Description                        | Required           |
| ---------- | ------ | ---------------------------------- | ------------------ |
| grant_type | String | Auth Type.                         | :heavy_check_mark: |
| username   | String | Username of API Authorized Account | :heavy_check_mark: |
| password   | String | SHA-256 Hash of Account Password   | :heavy_check_mark: |

**Example**

```json
{
    "grant_type": "password",
    "username": "jcsnider",
    "password": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
}
```

**Notes**

- The grant type to receive an auth token is 'password'.
- Password must be a SHA-256 hash of the user's password, with hyphens removed.
- You can generate a SHA-256 hash of a plaintext password [here (on this site)](../../tools/hash-generators.mdx).