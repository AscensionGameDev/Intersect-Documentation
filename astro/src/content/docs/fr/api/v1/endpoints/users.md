---
title: Utilisateurs
---

**Ces points de terminaison requièrent [users.query API Role](https://docs.freemmorpgmaker.com/api/v1/introduction/roles.html#users-query)!**

## Liste Utilisateurs

Récupère les utilisateurs du serveur avec leur id et les informations stockées.

### Requête

**URL** : `/api/v1/users`

**Méthode** : `GET`

**Autorisation Requise** : `Yes`

**Paramêtres Requête**

| Nom      | Type | Description                                 | Requis             | Par Défaut |
| -------- | ---- | ------------------------------------------- | ------------------ | ---------- |
| page     | int  | Décalage des utilisateurs en numéro de page | :heavy_minus_sign: | 0          |
| pageSize | int  | Nombre d'utilisateurs par page              | :heavy_minus_sign: | 5          |
| limit    | int  | Limite du nombre d'utilisateurs retournés   | :heavy_minus_sign: | `pageSize` |

**Exemple**

```http
GET /api/v1/users?page=32&pageSize=5
```

---

### Réponse

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
			"Power": {
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
			"Power": {
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

## Recherche Utilisateur

Récupère un utilisateur du serveur par recherche avec leur nom d'utilisateur ou leur id.

### Requête

**URL** : `/api/v1/users/[lookupKey]`

**Clé de Recherche** : `Username or user id.`

**Méthode** : `GET`

**Autorisation Requise** : `Yes`

**Type Contenus** : `application/json`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
	"Id": "fb19a81b-000f-4679-b30d-778dc8895594",
	"Name": "jcsnider",
	"Email": "test@test.com",
	"Power": {
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

## Enregistrer Utilisateur

Créé un compte sur le serveur pour un joueur qui a donné son nom d'utilisateur, son mot de passe et son adresse email.

### Requête

**URL** : `/api/v1/users/register`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom      | Type   | Description                                        | Requis             |
| -------- | ------ | -------------------------------------------------- | ------------------ |
| username | string | Nom d'utilisateur pour le nouvel utilisateur.      | :heavy_check_mark: |
| password | string | Hash sha256 du mot de passe du nouvel utilisateur. | :heavy_check_mark: |
| email    | string | Adresse Email pour le nouvel utilisateur.          | :heavy_check_mark: |

**Exemple**

```json
{
	"username": "jcsnider",
	"password": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8",
	"email": "jcsnider@ascensiongamedev.com"
}
```

**Notes**

- Le mot de passe doit être un hash SHA256 du texte en clair du mot de passe, avec les traits d'union retirés.
- Vous pouvez générer un hash SHA256 du texte en clair du mot de passe [ici](https://passwordsgenerator.net/sha256-hash-generator/).

---

### Réponse

**Condition** : Utilisateur créé avec succès.

**Code** : `200 OK`

**Exemple**

```json
{
	"Username": "jcsnider",
	"Email": "jcsnider@ascensiongamedev.com"
}
```

## Valider Mot de Passe

Vérifie si un mot de passe utilisateur est valide.

### Requête

**URL** : `/api/v1/users/[lookupKey]/password/validate`

**Clé de Recherche** : `Username or user id.`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom      | Type   | Description                               | Requis             |
| -------- | ------ | ----------------------------------------- | ------------------ |
| password | string | Hash SHA256 du mot de passe pour valider. | :heavy_check_mark: |

**Exemple**

```json
{
	"password": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
}
```

---

### Réponse

**Condition** : Le mot de passe est valide.

**Code** : `200 OK`

**Exemple**

```json
{
	"Message": "Password Correct"
}
```

## Changer Email

Change l'adresse email associée à un utilisateur ayant donné le mot de passe utilisateur.

### Requête

**URL** : `/api/v1/users/[lookupKey]/email/change`

**Clé de Recherche** : `Username or user id.`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom           | Type   | Description                                             | Requis             |
| ------------- | ------ | ------------------------------------------------------- | ------------------ |
| new           | string | L'adresse email.                                        | :heavy_check_mark: |
| authorization | string | Le hash sha256 du mot de passe actuel de l'utilisateur. | :heavy_check_mark: |

**Exemple**

```json
{
	"new": "test100@test.com",
	"authorization": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
}
```

---

### Réponse

**Condition** : L' email a été changé.

**Code** : `200 OK`

**Exemple**

```json
{
	"Id": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6",
	"Name": "jcsnider",
	"Email": "test100@test.com",
	"Power": {
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

## Changer Mot de Passe

Change le mot de passe associé d'un utilisateur ayant donné le mot de passe actuel.

### Requête

**URL** : `/api/v1/users/[lookupKey]/password/change`

**Clé de Recherche** : `Username or user id.`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom           | Type   | Description                                              | Requis             |
| ------------- | ------ | -------------------------------------------------------- | ------------------ |
| new           | string | Le hash sha256 du nouveau mot de passe de l'utilisateur. | :heavy_check_mark: |
| authorization | string | Le hash sha256 du mot de passe actuel de l'utilisateur.  | :heavy_check_mark: |

**Exemple**

```json
{
	"new": "1B4F0E9851971998E732078544C96B36C3D01CEDF7CAA332359D6F1D83567014",
	"authorization": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8"
}
```

---

### Réponse

**Condition** : Le mot de passe a été changé.

**Code** : `200 OK`

**Exemple**

```json
{
	"Message": "Password Updated"
}
```

**Notes**

- Le mot de passe doit être un hash SHA256 du texte en clair du mot de passe, avec les traits d'union retirés.
- Vous pouvez générer un hash SHA256 du texte en clair du mot de passe [ici](https://passwordsgenerator.net/sha256-hash-generator/).

## Requête Email Réinitialisation Mot de Passe

Envoie à l'utilisateur un code de réinitialisation de mot de passe. Cela requiert que les réglages SMTP du serveur soient configurés.

### Requête

**URL** : `/api/v1/users/[lookupKey]/password/reset`

**Clé de Recherche** : `Username or user id.`

**Méthode** : `GET`

**Autorisation Requise** : `Yes`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : L' email a été envoyé.

**Code** : `200 OK`

**Exemple**

```json
{
	"Message": "Password reset email sent."
}
```

## Obtenir Personnages

Retourne un tableau des personnages d'un utilisateur.

### Requête

**URL** : `/api/v1/users/[lookupKey]/players`

**Clé de Recherche** : `Username or user id.`

**Méthode** : `GET`

**Autorisation Requise** : `Yes`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : Personnages trouvés.

**Code** : `200 OK`

**Exemple**

```json
[
    {"Name": "deleteme", "InBank": false, "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6", "MaxVitals":[510,…},
    {"Name": "jcsnider", "InBank": false, "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6", "MaxVitals":[1680,…},
    {"Name": "sadasd23", "InBank": false, "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6", "MaxVitals":[500,…}
]
```

L'exemple est tronqué, pour une réponse complète [cliquez ici](https://www.ascensiongamedev.com/resources/filehost/dd42d59003bcc6c387452f40832fb97f.json).

## Obtenir Personnage

Retourne un des personnages de cet utilisateur

### Requête

**URL** : `/api/v1/users/[lookupKey1]/players/[lookupKey2]`

**Clé de Recherche 1** : `Username or user id.`

**Clé de Recherche 2** : `Character name, character id, or integer index of character in characters list.`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : Personnage trouvé.

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

L'exemple est tronqué, pour une réponse complète [cliquez ici](https://www.ascensiongamedev.com/resources/filehost/4abdebecac07d35de4a66ef4dbbe4124.json).

## Changer l'Email (w/ Rôle Users.Manage)

Change l'adresse email d'un utilisateur sans son mot de passe. **Requiert le rôle Users.Manage .**

### Requête

**URL** : `/api/v1/users/[lookupKey]/manage/email/change`

**Clé de Recherche** : `Username or user id.`

**Méthode** : `POST`

**Autorisation Requise** : `Yes`

**Type Contenus** : `application/json`

**Corps**

| Nom | Type   | Description                | Requis             |
| --- | ------ | -------------------------- | ------------------ |
| new | string | La nouvelle adresse email. | :heavy_check_mark: |

**Exemple**

```json
{
	"new": "test100@test.com"
}
```

---

### Réponse

**Condition** : L'email a été changé.

**Code** : `200 OK`

**Exemple**

```json
{
	"Id": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6",
	"Name": "jcsnider",
	"Email": "test100@test.com",
	"Power": {
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

## Changer Mot de Passe (w/ Rôle Users.Manage)

Change le mot de passe d'un utilisateur sans son mot de passe existant. **Requiert le rôle the Users.Manage .**

### Requête

**URL** : `/api/v1/users/[lookupKey]/manage/password/change`

**Clé de Recherche** : `Username or user id.`

**Méthode** : `POST`

**Autorisation Requise** : `Yes`

**Type Contenus** : `application/json`

**Corps**

| Nom | Type   | Description                                              | Requis             |
| --- | ------ | -------------------------------------------------------- | ------------------ |
| new | string | Le hash sha256 du nouveau mot de passe de l'utilisateur. | :heavy_check_mark: |

**Exemple**

```json
{
	"new": "1B4F0E9851971998E732078544C96B36C3D01CEDF7CAA332359D6F1D83567014"
}
```

**Notes**

- Le mot de passe doit être un hash SHA256 du texte en clair du mot de passe, avec les traits d'union retirés.
- Vous pouvez générer un hash SHA256 du texte en clair du mot de passe [ici](https://passwordsgenerator.net/sha256-hash-generator/).

---

### Réponse

**Condition** : Le mot de passe a été changé.

**Code** : `200 OK`

**Exemple**

```json
{
	"Message": "Password Correct"
}
```

**Notes**

- Le mot de passe doit être un hash SHA256 du texte en clair du mot de passe, avec les traits d'union retirés.
- Vous pouvez générer un hash SHA256 du texte en clair du mot de passe [ici](https://passwordsgenerator.net/sha256-hash-generator/).

## Liste Utilisateurs (`POST`) (_Obsolète_)

Récupère des utilisateurs du serveur avec leur id et les informations stockées.

### Requête

**URL** : `/api/v1/users`

**Méthode** : `POST`

**Autorisation Requise** : `Yes`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description                        | Requis             |
| ----- | ---- | ---------------------------------- | ------------------ |
| page  | int  | Page d'utilisateurs à récupérer.   | :heavy_minus_sign: |
| count | int  | Nombre d'utilisateurs à récupérer. | :heavy_minus_sign: |

**Exemple**

```json
{
	"page": 32,
	"count": 5
}
```

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
	"total": 162,
	"Page": 32,
	"count": 2,
	"entries": [
		{
			"Id": "f71a2f48-ce7b-4420-ae37-8802b8c4fb60",
			"Name": "tester",
			"Email": "testr@testr.com",
			"Power": {
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
			"Power": {
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
