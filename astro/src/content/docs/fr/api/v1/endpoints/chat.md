---
title: Chat
---



## Message Global

Envoie un message chat à toutes les personnes actuellement connectées au jeu.

### Requête

**URL** : `/api/v1/chat/global`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| Message | String  | Le message chat à envoyer. | :heavy_check_mark: |
| Color | Object  | Objet Json avec valeurs RGBA du message chat. | :heavy_minus_sign: |
| Target | String  | Nom de joueur associé au message, si il y en a un. | :heavy_minus_sign: |

**Exemple**

```json
{
	"Message": "Bonjour tout le monde!",
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

* Target est utilisé pour ajouter rapidement des amis ou pour émettre des actions administratives. Par exemple, si le panneau d'administration est ouvert et qu'un message chat est cliqué, la cible (si elle est définie) apparaîtra automatiquement dans la fenêtre cible du panneau administrateur pour la bannir, mettre sous silence, téléporter rapidement, etc.  Dans la plupart des cas la cible est omise ou laissée nulle.

---

### Réponse

**Condition** : Le message a été envoyé avec succès.

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"success": true,
	"chatMessage":{
		"Message": "Bonjour tout le monde!",
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


## Message de Proximité

Envoie un message à tout ceux à proximité d'une carte donnée.

### Requête

**URL** : `/api/v1/chat/proximity/[mapId]`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type de Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| Message | String  | Le message chat à envoyer. | :heavy_check_mark: |
| Color | Object  | Objet Json avec valeurs RGBA du message chat. | :heavy_minus_sign: |
| Target | String  | Nom de joueur associé au message, si il y en a un. | :heavy_minus_sign: |

**Exemple**

```json
{
	"Message": "Bonjour tout le monde!",
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
* Target est utilisé pour ajouter rapidement des amis ou pour émettre des actions administratives. Par exemple, si le panneau d'administration est ouvert et qu'un message chat est cliqué, la cible (si elle est définie) apparaîtra automatiquement dans la fenêtre cible du panneau administrateur pour la bannir, mettre sous silence, téléporter rapidement, etc.  Dans la plupart des cas la cible est omise ou laissée nulle.

---

### Réponse

**Condition** : Le message a été envoyé avec succès.

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"success": true,
	"mapId": "8102053e-28f9-4452-91d4-ee2a3ffb84cf",
	"chatMessage":{
		"Message": "Bonjour tout le monde!",
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


## Message Direct

Envoie un message à un joueur spécifique.

### Requête

**URL** : `/api/v1/chat/direct/[lookupkey]`

**Clé de Recherche** : `Username or character name`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| Message | String  | Le message chat à envoyer. | :heavy_check_mark: |
| Color | Object  | Objet Json avec valeurs RGBA du message chat. | :heavy_minus_sign: |
| Target | String  | Nom de joueur associé au message, si il y en a un. | :heavy_minus_sign: |

**Exemple**

```json
{
	"Message": "Bonjour tout le monde!",
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
* Target est utilisé pour ajouter rapidement des amis ou pour émettre des actions administratives. Par exemple, si le panneau d'administration est ouvert et qu'un message chat est cliqué, la cible (si elle est définie) apparaîtra automatiquement dans la fenêtre cible du panneau administrateur pour la bannir, mettre sous silence, téléporter rapidement, etc.  Dans la plupart des cas la cible est omise ou laissée nulle.

---

### Réponse

**Condition** : Le message a été envoyé avec succès.

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"success": true,
	"lookupKey": "jcsnider",
	"chatMessage":{
		"Message": "Bonjour tout le monde!",
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
