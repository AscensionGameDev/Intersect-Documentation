---
title: Chat
---



## Global Message

Sends a chat message to everyone currently logged into your game.

### Request

**URL** : `/api/v1/chat/global`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| Message | String  | The chat message to send. | :heavy_check_mark: |
| Color | Object  | Json object with RGBA values of the chat message. | :heavy_minus_sign: |
| Target | String  | Player name associated with the message, if any. | :heavy_minus_sign: |

**Example**

```json
{
	"Message": "Hello World!",
	"Color":{
		"A": 255,
		"R": 255,
		"G": 255,
		"B": 255
	},
	"Target": ""
}
```


**Notes**

* Target is used for quickly adding friends or issuing administrative actions. For example, if the admin panel is open, and a chat message is clicked, the target (if provided) will auto populate in the admin panel's target box for quickly banning, muting, warping, etc.  In most cases Target should be omitted or left as null.

---

### Response

**Condition** : The message was sent successfully.

**Code** : `200 SUCCESS`

**Example**

```json
{
	"success": true,
	"chatMessage":{
		"Message": "Hello World!",
		"Color":{
			"A": 255,
			"R": 255,
			"G": 255,
			"B": 255
		},
		"Target": ""
	}
}
```


## Proximity Message

Sends a chat message to everyone in the proximity of a given map.

### Request

**URL** : `/api/v1/chat/proximity/[mapId]`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| Message | String  | The chat message to send. | :heavy_check_mark: |
| Color | Object  | Json object with RGBA values of the chat message. | :heavy_minus_sign: |
| Target | String  | Player name associated with the message, if any. | :heavy_minus_sign: |

**Example**

```json
{
	"Message": "Hello World!",
	"Color":{
		"A": 255,
		"R": 255,
		"G": 255,
		"B": 255
	},
	"Target": ""
}
```


**Notes**
* Target is used for quickly adding friends or issuing administrative actions. For example, if the admin panel is open, and a chat message is clicked, the target (if provided) will auto populate in the admin panel's target box for quickly banning, muting, warping, etc.  In most cases Target should be omitted or left as null.

---

### Response

**Condition** : The message was sent successfully.

**Code** : `200 SUCCESS`

**Example**

```json
{
	"success": true,
	"mapId": "8102053e-28f9-4452-91d4-ee2a3ffb84cf",
	"chatMessage":{
		"Message": "Hello World!",
		"Color":{
			"A": 255,
			"R": 255,
			"G": 255,
			"B": 255
		},
		"Target": ""
	}
}
```


## Direct Message

Sends a chat message to a specific player.

### Request

**URL** : `/api/v1/chat/direct/[lookupkey]`

**Lookup Key** : `Username or character name`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| Message | String  | The chat message to send. | :heavy_check_mark: |
| Color | Object  | Json object with RGBA values of the chat message. | :heavy_minus_sign: |
| Target | String  | Player name associated with the message, if any. | :heavy_minus_sign: |

**Example**

```json
{
	"Message": "Hello World!",
	"Color":{
		"A": 255,
		"R": 255,
		"G": 255,
		"B": 255
	},
	"Target": ""
}
```


**Notes**
* Target is used for quickly adding friends or issuing administrative actions. For example, if the admin panel is open, and a chat message is clicked, the target (if provided) will auto populate in the admin panel's target box for quickly banning, muting, warping, etc.  In most cases Target should be omitted or left as null.

---

### Response

**Condition** : The message was sent successfully.

**Code** : `200 SUCCESS`

**Example**

```json
{
	"success": true,
	"lookupKey": "jcsnider",
	"chatMessage":{
		"Message": "Hello World!",
		"Color":{
			"A": 255,
			"R": 255,
			"G": 255,
			"B": 255
		},
		"Target": ""
	}
}
```
