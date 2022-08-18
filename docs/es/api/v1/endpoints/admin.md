# Acciones de Administrador

**Los siguientes comandos usan el punto de conexión /users/ y requiren el rol "Users.Query".**

## Banear

Prohíbe el acceso y utilización de una cuenta.

### Petición

**URL** : `/api/v1/users/[userLookup]/admin/ban` O `/api/v1/players/[playerLookup]/admin/ban`

**User Lookup** : `Nombre de usuario o user id.`

**Player Lookup** : `Nombre de jugador o player id.`

**Método** : `POST`

**Authorization Required** : `Yes`

**Tipo de Contenido** : `application/json`

**Body**

| Name      | Type    | Description                                             | Required           |
|-----------|---------|---------------------------------------------------------|--------------------|
| duration  | int     | Number of days for the ban to last.                     | :heavy_check_mark: |
| reason    | string  | Reason for the ban.                                     | :heavy_minus_sign: |
| moderator | string  | Name of the banner.                                     | :heavy_minus_sign: |
| ip        | boolean | Whether or not to ban the users most recent ip address. | :heavy_minus_sign: |

**Ejemplo**

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

**Código** : `200 OK`

**Ejemplo**

```json
{
    "Message": "jcsnider has been banned!"
}
```

## Mutear

Mutea una cuenta.

### Petición

**URL** : `/api/v1/users/[userLookup]/admin/mute` O `/api/v1/players/[playerLookup]/admin/mute`

**User Lookup** : `Nombre de usuario o user id.`

**Player Lookup** : `Nombre de jugador o player id.`

**Método** : `POST`

**Authorization Required** : `Yes`

**Tipo de Contenido** : `application/json`

**Body**

| Name      | Type    | Description                                              | Required           |
|-----------|---------|----------------------------------------------------------|--------------------|
| duration  | int     | Number of days for the mute to last.                     | :heavy_check_mark: |
| reason    | string  | Reason for the mute.                                     | :heavy_minus_sign: |
| moderator | string  | Name of the muter.                                       | :heavy_minus_sign: |
| ip        | boolean | Whether or not to mute the users most recent ip address. | :heavy_minus_sign: |

**Ejemplo**

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

**Código** : `200 OK`

**Ejemplo**

```json
{
    "Message": "jcsnider has been muted!"
}
```

## Desbanear

Desbanea una cuenta.

### Petición

**URL** : `/api/v1/users/[userLookup]/admin/unban` O `/api/v1/players/[playerLookup]/admin/unban`

**User Lookup** : `Nombre de usuario o user id.`

**Player Lookup** : `Nombre de jugador o player id.`

**Método** : `POST`

**Authorization Required** : `Yes`

**Tipo de Contenido** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : Unban was successful.

**Código** : `200 OK`

**Ejemplo**

```json
{
    "Message": "jcsnider has been unbanned!"
}
```

## Desmutear

Desmutea una cuenta.

### Petición

**URL** : `/api/v1/users/[userLookup]/admin/unmute` O `/api/v1/players/[playerLookup]/admin/unmute`

**User Lookup** : `Nombre de usuario o user id.`

**Player Lookup** : `Nombre de jugador o player id.`

**Método** : `POST`

**Authorization Required** : `Yes`

**Tipo de Contenido** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : Unmute was successful.

**Código** : `200 OK`

**Ejemplo**

```json
{
    "Message": "jcsnider has been unmuted!"
}
```

## Teletransportarse a un jugador a un mapa (mantener coordenadas)

Warps a player to a specified map while retaining their current coordinates.

### Petición

**URL** : `/api/v1/users/[userLookup]/admin/warpto` O `/api/v1/players/[playerLookup]/admin/warpto`

**User Lookup** : `Nombre de usuario o user id.`

**Player Lookup** : `Nombre de jugador o player id.`

**Método** : `POST`

**Authorization Required** : `Yes`

**Tipo de Contenido** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| mapid | guid  | Id of the map to warp the player to. | :heavy_check_mark: |

**Ejemplo**

```json
{
  "MapId": "693b7c8f-61ac-4517-b27c-f3b0a3b98542"
}
```

---

### Response

**Condition** : Warp was successful.

**Código** : `200 OK`

**Ejemplo**

```json
{
    "Message": "Warped 'jcsnider' to 693b7c8f-61ac-4517-b27c-f3b0a3b98542 (13, 19)."
}
```

## Teletransportar un jugador a una ubicación específica

Warps a player to specified coordinates on a specified map.

### Petición

**URL** : `/api/v1/users/[userLookup]/admin/warptoloc` O `/api/v1/players/[playerLookup]/admin/warptoloc`

**User Lookup** : `Nombre de usuario o user id.`

**Player Lookup** : `Nombre de jugador o player id.`

**Método** : `POST`

**Authorization Required** : `Yes`

**Tipo de Contenido** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| mapid | guid  | Id of the map to warp the player to. | :heavy_check_mark: |
| x | int  | X coordinate on the map to warp the player to. | :heavy_check_mark: |
| y | int  | Y coordinate on the map to warp the player to. | :heavy_check_mark: |

**Ejemplo**

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

**Código** : `200 OK`

**Ejemplo**

```json
{
    "Message": "Warped 'jcsnider' to 693b7c8f-61ac-4517-b27c-f3b0a3b98542 (0, 10)."
}
```

## Desconectar

Desconecta a un jugador del servidor.

### Petición

**URL** : `/api/v1/users/[userLookup]/admin/kick` O `/api/v1/players/[playerLookup]/admin/kick`

**User Lookup** : `Nombre de usuario o user id.`

**Player Lookup** : `Nombre de jugador o player id.`

**Método** : `POST`

**Authorization Required** : `Yes`

**Tipo de Contenido** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : Kick was successful.

**Código** : `200 OK`

**Ejemplo**

```json
{
    "Message": "jcsnider has been kicked by the server!"
}
```

## Matar (a un jugador)

Mata a un jugador en el servidor.

### Petición

**URL** : `/api/v1/users/[userLookup]/admin/kill` O `/api/v1/players/[playerLookup]/admin/kill`

**User Lookup** : `Nombre de usuario o user id.`

**Player Lookup** : `Nombre de jugador o player id.`

**Método** : `POST`

**Authorization Required** : `Yes`

**Tipo de Contenido** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : Kill was successful.

**Código** : `200 OK`

**Ejemplo**

```json
{
    "Message": "jcsnider has been killed!"
}
```