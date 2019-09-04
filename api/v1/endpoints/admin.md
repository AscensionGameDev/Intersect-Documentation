# Admin Actions

## Ban

Ban an account.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/ban` OR `/api/v1/players/[playerLookup]/admin/ban`

**User Lookup** : `Username or user id.`

**Player Lookup** : `Player name or player id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| duration | int  | Number of days for the ban to last. | :heavy_check_mark: |
| reason | string  | Reason for the ban. | :heavy_minus_sign: |
| moderator | string  | Name of the banner. | :heavy_minus_sign: |
| ip | boolean  | Whether or not to ban the users most recent ip address. | :heavy_minus_sign: |

**Example**

```json
{
  "duration": 5,
  "reason": "For breaking rule #4",
  "moderator": "Damian666",
  "ip": true
}
```

---

### Response

**Condition** : Ban was successful.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "jcsnider has been banned!"
}
```

## Mute

Mutes an account.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/mute` OR `/api/v1/players/[playerLookup]/admin/mute`

**User Lookup** : `Username or user id.`

**Player Lookup** : `Player name or player id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| duration | int  | Number of days for the mute to last. | :heavy_check_mark: |
| reason | string  | Reason for the mute. | :heavy_minus_sign: |
| moderator | string  | Name of the muter. | :heavy_minus_sign: |
| ip | boolean  | Whether or not to mute the users most recent ip address. | :heavy_minus_sign: |

**Example**

```json
{
  "duration": 5,
  "reason": "For breaking rule #4",
  "moderator": "Damian666",
  "ip": true
}
```

---

### Response

**Condition** : Mute was successful.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "jcsnider has been muted!"
}
```

## Unban

Unbans an account.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/unban` OR `/api/v1/players/[playerLookup]/admin/unban`

**User Lookup** : `Username or user id.`

**Player Lookup** : `Player name or player id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : Unban was successful.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "jcsnider has been unbanned!"
}
```

## Unmute

Unmutes an account.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/unmute` OR `/api/v1/players/[playerLookup]/admin/unmute`

**User Lookup** : `Username or user id.`

**Player Lookup** : `Player name or player id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : Unmute was successful.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "jcsnider has been unmuted!"
}
```

## Warp To

Warps a player to a specified map while retaining their current coordinates.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/warpto` OR `/api/v1/players/[playerLookup]/admin/warpto`

**User Lookup** : `Username or user id.`

**Player Lookup** : `Player name or player id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| mapid | guid  | Id of the map to warp the player to. | :heavy_check_mark: |

**Example**

```json
{
  "MapId": "693b7c8f-61ac-4517-b27c-f3b0a3b98542"
}
```

---

### Response

**Condition** : Warp was successful.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "Warped 'jcsnider' to 693b7c8f-61ac-4517-b27c-f3b0a3b98542 (13, 19)."
}
```

## Warp To Location

Warps a player to specified coordinates on a specified map.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/warptoloc` OR `/api/v1/players/[playerLookup]/admin/warptoloc`

**User Lookup** : `Username or user id.`

**Player Lookup** : `Player name or player id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| mapid | guid  | Id of the map to warp the player to. | :heavy_check_mark: |
| x | int  | X coordinate on the map to warp the player to. | :heavy_check_mark: |
| y | int  | Y coordinate on the map to warp the player to. | :heavy_check_mark: |

**Example**

```json
{
  "MapId": "693b7c8f-61ac-4517-b27c-f3b0a3b98542",
  "X": 0,
  "Y": 10
}
```

---

### Response

**Condition** : Warp was successful.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "Warped 'jcsnider' to 693b7c8f-61ac-4517-b27c-f3b0a3b98542 (0, 10)."
}
```

## Kick

Kicks a player from the game.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/kick` OR `/api/v1/players/[playerLookup]/admin/kick`

**User Lookup** : `Username or user id.`

**Player Lookup** : `Player name or player id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : Kick was successful.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "jcsnider has been kicked by the server!"
}
```

## Kill

Kills a player in the game.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/kill` OR `/api/v1/players/[playerLookup]/admin/kill`

**User Lookup** : `Username or user id.`

**Player Lookup** : `Player name or player id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : Kill was successful.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "jcsnider has been killed!"
}
```