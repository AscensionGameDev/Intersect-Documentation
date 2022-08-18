# Usuarios

**These endpoints require the [users.query API Role](https://docs.freemmorpgmaker.com/api/v1/introduction/roles.html#users-query)!**

## Listar Usuarios

Retrieves users from the server along with their ids and stored information.

### Request

**URL** : `/api/v1/users`

**Method** : `GET`

**Authorization Required** : `Yes`

**Query Parameters**

| Name  | Type | Description | Required | Default |
| ----- | ---- |------------ | -------- | ------- |
| page | int  | Offset of users as a page number | :heavy_minus_sign: | 0 |
| pageSize | int  | Number of users per page | :heavy_minus_sign: | 5 |
| limit | int  | Limit of how many users are returned | :heavy_minus_sign: | `pageSize` |

**Example**

```http
GET /api/v1/users?page=32&pageSize=5
```

---

### Response

```http
Status Code: 200 OK
Content-Type: application/json; charset=utf-8
```

```json
{
    "Total": 162,
    "Page": 32,
    "PageSize": 5,
    "Count": 2,
    "Values": [
        {
            "Id": "f71a2f48-ce7b-4420-ae37-8802b8c4fb60",
            "Name": "tester",
            "Email": "testr@testr.com",
            "Power":{
                "Editor": false,
                "Ban": false,
                "Kick": false,
                "Mute": false,
                "Api": false,
                "PersonalInformation": false
            },
            "PasswordResetCode": null,
            "IsMuted": false,
            "MuteReason": null
        },
        {
            "Id": "fb19a81b-000f-4679-b30d-778dc8895594",
            "Name": "jcsnider",
            "Email": "test@test.com",
            "Power":{
                "Editor": false,
                "Ban": false,
                "Kick": false,
                "Mute": false,
                "Api": false,
                "PersonalInformation": false
            },
            "PasswordResetCode": null,
            "IsMuted": false,
            "MuteReason": null
        }
    ]
}
```

## Lookup User

Retrieves a user from the server by looking up their username or id.

### Request

**URL** : `/api/v1/users/[lookupKey]`

**Lookup Key** : `Username or user id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

```json
{
    "Id": "fb19a81b-000f-4679-b30d-778dc8895594",
    "Name": "jcsnider",
    "Email": "test@test.com",
    "Power":{
        "Editor": false,
        "Ban": false,
        "Kick": false,
        "Mute": false,
        "Api": false,
        "PersonalInformation": false
    },
    "PasswordResetCode": null,
    "IsMuted": false,
    "MuteReason": null
}
```

## Register User

Creates an account on the server for a user given a username, password, and email address.

### Request

**URL** : `/api/v1/users/register`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| username | string  | Username for the new user. | :heavy_check_mark: |
| password | string  | Sha256 hash of the new user's password. | :heavy_check_mark: |
| email | string  | Email address for the new user. | :heavy_check_mark: |

**Example**

```json
{
  "username": "jcsnider",
  "password": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8",
  "email": "jcsnider@ascensiongamedev.com"
}
```
**Notes**

* Password must be a SHA256 hash of the plaintext password, with hyphens removed.
* You can generate a SHA256 hash of a plaintext password [here](https://passwordsgenerator.net/sha256-hash-generator/).

---

### Response

**Condition** : User created successfully.

**Code** : `200 OK`

**Example**

```json
{
    "Username": "jcsnider",
    "Email": "jcsnider@ascensiongamedev.com"
}
```

## Validate Password

Checks whether a user provided password is valid.

### Request

**URL** : `/api/v1/users/[lookupKey]/password/validate`

**Lookup Key** : `Username or user id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| password | string  | SHA256 hash of password to validate. | :heavy_check_mark: |

**Example**

```json
{
  "password": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
}
```

---

### Response

**Condition** : Password is valid.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "Password Correct"
}
```

## Change Email

Change the email address associated with a user given the users' password.

### Request

**URL** : `/api/v1/users/[lookupKey]/email/change`

**Lookup Key** : `Username or user id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| new | string  | The new email address. | :heavy_check_mark: |
| authorization | string  | The sha256 hash of the users' current password. | :heavy_check_mark: |

**Example**

```json
{
  "new": "test100@test.com",
  "authorization": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
}
```

---

### Response

**Condition** : Email was changed.

**Code** : `200 OK`

**Example**

```json
{
    "Id": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6",
    "Name": "jcsnider",
    "Email": "test100@test.com",
    "Power":{
        "Editor": true,
        "Ban": true,
        "Kick": true,
        "Mute": true,
        "Api": true,
        "ApiPersonalInformation": true,
        "ApiUserManagement": true
    },
    "PasswordResetCode": null,
    "IsMuted": false,
    "MuteReason": null
}
```


## Change Password

Change the password associated with a user given the users' current password.

### Request

**URL** : `/api/v1/users/[lookupKey]/password/change`

**Lookup Key** : `Username or user id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| new | string  | The sha256 hash of the users' new password. | :heavy_check_mark: |
| authorization | string  | The sha256 hash of the users' current password. | :heavy_check_mark: |

**Example**

```json
{
  "new": "1B4F0E9851971998E732078544C96B36C3D01CEDF7CAA332359D6F1D83567014",
  "authorization": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
}
```

---

### Response

**Condition** : Password was changed.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "Password Updated"
}
```

**Notes**

* Password must be a SHA256 hash of the plaintext password, with hyphens removed.
* You can generate a SHA256 hash of a plaintext password [here](https://passwordsgenerator.net/sha256-hash-generator/).

## Request Password Reset Email

Sends the user an email with a password reset code. This requires your server SMTP settings to be configured.

### Request

**URL** : `/api/v1/users/[lookupKey]/password/reset`

**Lookup Key** : `Username or user id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : Email was sent.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "Password reset email sent."
}
```


## Get Characters

Returns an array of a users characters.

### Request

**URL** : `/api/v1/users/[lookupKey]/players`

**Lookup Key** : `Username or user id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : Characters found.

**Code** : `200 OK`

**Example**

```json
[
    {"Name": "deleteme", "InBank": false, "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6", "MaxVitals":[510,…},
    {"Name": "jcsnider", "InBank": false, "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6", "MaxVitals":[1680,…},
    {"Name": "sadasd23", "InBank": false, "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6", "MaxVitals":[500,…}
]
```

Example is truncated, for full response [click here](https://www.ascensiongamedev.com/resources/filehost/dd42d59003bcc6c387452f40832fb97f.json).


## Get Character

Returns one of this users characters

### Request

**URL** : `/api/v1/users/[lookupKey1]/players/[lookupKey2]`

**Lookup Key 1** : `Username or user id.`

**Lookup Key 2** : `Character name, character id, or integer index of character in characters list.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : Character found.

**Code** : `200 OK`

**Example**

```json
{
    "Name": "jcsnider",
    "InBank": false,
    "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6",
    "MaxVitals":[
    1680,
    510
    ],
    ...
}
```

Example is truncated, for full response [click here](https://www.ascensiongamedev.com/resources/filehost/4abdebecac07d35de4a66ef4dbbe4124.json).

## Change Email (w/ Users.Manage Role)

Change a users email address without their password. **Requires the Users.Manage role.**

### Request

**URL** : `/api/v1/users/[lookupKey]/manage/email/change`

**Lookup Key** : `Username or user id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| new | string  | The new email address. | :heavy_check_mark: |

**Example**

```json
{
  "new": "test100@test.com"
}
```

---

### Response

**Condition** : Email was changed.

**Code** : `200 OK`

**Example**

```json
{
    "Id": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6",
    "Name": "jcsnider",
    "Email": "test100@test.com",
    "Power":{
        "Editor": true,
        "Ban": true,
        "Kick": true,
        "Mute": true,
        "Api": true,
        "ApiPersonalInformation": true,
        "ApiUserManagement": true
    },
    "PasswordResetCode": null,
    "IsMuted": false,
    "MuteReason": null
}
```

## Change Password (w/ Users.Manage Role)

Change a users password without their existing password. **Requires the Users.Manage role.**

### Request

**URL** : `/api/v1/users/[lookupKey]/manage/password/change`

**Lookup Key** : `Username or user id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| new | string  | The sha256 hash of the users' new password. | :heavy_check_mark: |

**Example**

```json
{
  "new": "1B4F0E9851971998E732078544C96B36C3D01CEDF7CAA332359D6F1D83567014"
}
```

**Notes**

* Password must be a SHA256 hash of the plaintext password, with hyphens removed.
* You can generate a SHA256 hash of a plaintext password [here](https://passwordsgenerator.net/sha256-hash-generator/).

---

### Response

**Condition** : Password was changed.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "Password Correct"
}
```

**Notes**

* Password must be a SHA256 hash of the plaintext password, with hyphens removed.
* You can generate a SHA256 hash of a plaintext password [here](https://passwordsgenerator.net/sha256-hash-generator/).

## Listar Usuarios (`POST`) (_Deprecated_)

Retrieves users from the server along with their ids and stored information.

### Request

**URL** : `/api/v1/users`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| page | int  | Page of users to retrieve. | :heavy_minus_sign: |
| count | int  | Number of users to retrieve. | :heavy_minus_sign: |

**Example**

```json
{
  "page": 32,
  "count": 5
}
```

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

```json
{
    "total": 162,
    "Page": 32,
    "count": 2,
    "entries":[
        {
            "Id": "f71a2f48-ce7b-4420-ae37-8802b8c4fb60",
            "Name": "tester",
            "Email": "testr@testr.com",
            "Power":{
                "Editor": false,
                "Ban": false,
                "Kick": false,
                "Mute": false,
                "Api": false,
                "PersonalInformation": false
            },
            "PasswordResetCode": null,
            "IsMuted": false,
            "MuteReason": null
        },
        {
            "Id": "fb19a81b-000f-4679-b30d-778dc8895594",
            "Name": "jcsnider",
            "Email": "test@test.com",
            "Power":{
                "Editor": false,
                "Ban": false,
                "Kick": false,
                "Mute": false,
                "Api": false,
                "PersonalInformation": false
            },
            "PasswordResetCode": null,
            "IsMuted": false,
            "MuteReason": null
        }
    ]
}
```

