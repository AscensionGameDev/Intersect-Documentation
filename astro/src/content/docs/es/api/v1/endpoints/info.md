---
title: Server Info
---


## Authorized

Checks token and returns whether or not you're authorized to access protected api endpoints.

### Request

**URL** : `/api/v1/info/authorized`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body**
Empty

---

### Response

**Condition** : NA

**Code** : `200 SUCCESS`

**Example**

```json
{
	"authorized": true
}
```

## Game Name & Port

Retrieves the game name and port number from your server.

### Request

**URL** : `/api/v1/info`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body**
Empty

---

### Response

**Condition** : NA

**Code** : `200 SUCCESS`

**Example**

```json
{
	"name": "Intersect",
	"port": 5400
}
```

## Stats

Retrieves active server stats such as online player count, uptime, cps, etc.

### Request

**URL** : `/api/v1/info/stats`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body**
Empty

---

### Response

**Condition** : NA

**Code** : `200 SUCCESS`

**Example**

```json
{
	"uptime": 1258852,
	"cps": 92,
	"connectedClients": 0,
	"onlineCount": 0
}
```


## Config

Retrieves the active server configuration.

### Request

**URL** : `/api/v1/info/config`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body**
Empty

---

### Response

**Condition** : NA

**Code** : `200 SUCCESS`

**Example**

```json
{
	"GameName": "Intersect",
	"ServerPort": 5400,
	"AdminOnly": false,
	"UPnP": true,
	"OpenPortChecker": true,
	...
}
```