---
title: Actions administrateurs
---


**Toutes les commandes ci-dessous utilisant l'endpoint /users/ nécessitent le rôle Users.Query.**

## Bannir

Bannir un compte.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/ban` OR `/api/v1/players/[playerLookup]/admin/ban`

**User Lookup** : `Nom d'utilisateur ou id du compte.`

**Player Lookup** : `Nom ou id du du personnage.`

**Methode** : `POST`

**Autorisation requise** : `Yes`

**Content Type** : `application/json`

**Body**

| Nom  | Type | Description | Obligatoire |
| ----- | ---- |------------ | -------- |
| duration | int  | Nombre de jours pour le ban | :heavy_check_mark: |
| reason | string  | La raison du ban. | :heavy_minus_sign: |
| moderator | string  | Le nom du modérateur qui a banni. | :heavy_minus_sign: |
| ip | boolean  | Interdire ou non l'adresse IP la plus récente des utilisateurs. | :heavy_minus_sign: |

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

**Condition** : L'opération "bannir" a été un succès.

**Code** : `200 OK`

**Exemple**

```json
{
    "Message": "jcsnider has been banned!"
}
```

## Mute

Mutes un compte.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/mute` OR `/api/v1/players/[playerLookup]/admin/mute`

**User Lookup** : `Nom d'utilisateur ou id du compte.`

**Player Lookup** : `Nom ou id du du personnage.`

**Methode** : `POST`

**Autorisation requise** : `Yes`

**Content Type** : `application/json`

**Body**

| Nom  | Type | Description | Obligatoire |
| ----- | ---- |------------ | -------- |
| duration | int  | Nombre de jours pour mute. | :heavy_check_mark: |
| reason | string  | Raison du mute. | :heavy_minus_sign: |
| moderator | string  | Le nom du modérateur qui a mute. | :heavy_minus_sign: |
| ip | boolean  | Interdire ou non l'adresse IP la plus récente des utilisateurs. | :heavy_minus_sign: |

**Exemple**

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

**Condition** : L'opération "mute" a été un succès..

**Code** : `200 OK`

**Exemple**

```json
{
    "Message": "jcsnider has been muted!"
}
```

## Débannir

Débannir un compte.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/unban` OR `/api/v1/players/[playerLookup]/admin/unban`

**User Lookup** : `Nom d'utilisateur ou id du compte.`

**Player Lookup** : `Nom ou id du du personnage.`

**Methode** : `POST`

**Autorisation requise** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : L'opération "débannir" a été un succès.

**Code** : `200 OK`

**Example**

```json
{
    "Message": "jcsnider has been unbanned!"
}
```

## Démute

Démute un compte.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/unmute` OR `/api/v1/players/[playerLookup]/admin/unmute`

**User Lookup** : `Nom d'utilisateur ou id du compte.`

**Player Lookup** : `Nom ou id du du personnage.`

**Methode** : `POST`

**Autorisation requise** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : L'opération "démute" a été un succès.

**Code** : `200 OK`

**Exemple**

```json
{
    "Message": "jcsnider has been unmuted!"
}
```

## Téléporter vers

Téléporter un joueur sur une carte spécifiée tout en conservant ses coordonnées actuelles.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/warpto` OR `/api/v1/players/[playerLookup]/admin/warpto`

**User Lookup** : `Nom d'utilisateur ou id du compte.`

**Player Lookup** : `Nom ou id du du personnage.`

**Methode** : `POST`

**Autorisation requise** : `Yes`

**Content Type** : `application/json`

**Body**

| Nom  | Type | Description | Obligatoire |
| ----- | ---- |------------ | -------- |
| mapid | guid  | Id de la carte vers laquelle téléporter le joueur. | :heavy_check_mark: |

**Exemple**

```json
{
  "MapId": "693b7c8f-61ac-4517-b27c-f3b0a3b98542"
}
```

---

### Response

**Condition** : L'opération "téléporter vers" a été un succès.

**Code** : `200 OK`

**Exemple**

```json
{
    "Message": "Warped 'jcsnider' to 693b7c8f-61ac-4517-b27c-f3b0a3b98542 (13, 19)."
}
```

## Téléporter jusqu'à l'emplacement

Téléporter un joueur à des coordonnées spécifiées sur une carte spécifiée.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/warptoloc` OR `/api/v1/players/[playerLookup]/admin/warptoloc`

**User Lookup** : `Nom d'utilisateur ou id du compte.`

**Player Lookup** : `Nom ou id du du personnage.`

**Methode** : `POST`

**Autorisation requise** : `Yes`

**Content Type** : `application/json`

**Body**

| Nom  | Type | Description | Obligatoire |
| ----- | ---- |------------ | -------- |
| mapid | guid  |Id de la carte vers laquelle téléporter le joueur. | :heavy_check_mark: |
| x | int  | Coordonnée X sur la carte pour téléporter le joueur. | :heavy_check_mark: |
| y | int  | Coordonnée Y sur la carte pour téléporter le joueur vers. | :heavy_check_mark: |

**Exemple**

```json
{
  "MapId": "693b7c8f-61ac-4517-b27c-f3b0a3b98542",
  "X": 0,
  "Y": 10
}
```

---

### Response

**Condition** : L'opération "téléporter jusqu'à l'emplacement" a été un succès.

**Code** : `200 OK`

**Exemple**

```json
{
    "Message": "Warped 'jcsnider' to 693b7c8f-61ac-4517-b27c-f3b0a3b98542 (0, 10)."
}
```

## Kick

Expulse un joueur du jeu.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/kick` OR `/api/v1/players/[playerLookup]/admin/kick`

**User Lookup** : `Nom d'utilisateur ou id du compte.`

**Player Lookup** : `Nom ou id du du personnage.`

**Methode** : `POST`

**Autorisation requise** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : l'opération "expulser" a été un succès.

**Code** : `200 OK`

**Exemple**

```json
{
    "Message": "jcsnider has been kicked by the server!"
}
```

## Kill

Tuer un joueur dans le jeu.

### Request

**URL** : `/api/v1/users/[userLookup]/admin/kill` OR `/api/v1/players/[playerLookup]/admin/kill`

**User Lookup** : `Nom d'utilisateur ou id du compte.`

**Player Lookup** : `Nom ou id du du personnage.`

**Methode** : `POST`

**Autorisation requise** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : l'opération "kill" a été un succès.

**Code** : `200 OK`

**Exemple**

```json
{
    "Message": "jcsnider has been killed!"
}
```
