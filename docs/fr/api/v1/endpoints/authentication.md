# Authentification


## Obtenir un jeton

Obtenez un jeton d'autorisation pour les demandes d'API qui nécessitent une authentification.

### Requête

**URL** : `/api/oauth/token`

**Methode** : `POST`

**Autorisation requise** : `No`

**Content Type** : `application/json`

**Body**

| Nom  | Type | Description | Obligatoire |
| ----- | ---- |------------ | -------- |
| grant_type | String  | Type d'autorisation. | :heavy_check_mark: |
| username | String  | Nom d'utilisateur du compte autorisé pour l'API | :heavy_check_mark: |
| password | String  | SHA256 Hachage du mot de passe du compte | :heavy_check_mark: |

**Exemple**

```json
{
	"grant_type": "password",
	"username": "jcsnider",
	"password": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8",
}
```

**Notes**

* Le type d'autorisation pour recevoir un jeton d'authentification est 'password'.
* Le mot de passe doit être un hachage SHA256 du mot de passe de l'utilisateur, sans les tirets.
* Vous pouvez générer un hachage SHA256 d'un mot de passe en clair [here](https://passwordsgenerator.net/sha256-hash-generator/).
---

### Réponse

**Condition** : Si l'authentification a réussi et que le jeton a été généré.

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"access_token":  "4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87",

	"token_type":  "bearer",

	"expires_in":  299,

	"refresh_token":  "efd947fe-a874-4259-9b06-41a8a9505e35",

	".issued":  "Mon, 29 Jul 2019 19:52:04 GMT",

	".expires":  "Mon, 29 Jul 2019 19:57:04 GMT"
}
```


### Notes

* Le refresh_token est l'identifiant du token, il est utilisé pour rafraîchir ou supprimer le token en utilisant les routes ci-dessous.
* Pour toutes les demandes nécessitant une authentification, vous devrez fournir le jeton d'accès dans l'en-tête de la demande. Le format approprié peut être trouvé ci-dessous.

| Header | Type | Valeur | 
| ----- | ---- |------------ |
| authorization | String  | Bearer [access_token] |


**Exemple**

```
authorization: Bearer 4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87
```



## Rafraichir le token
Actualise un jeton existant en retardant son expiration.

### Requête

**URL** : `/api/oauth/token`

**Methode** : `POST`

**Autorisation requise** : `Yes`

**Content Type** : `application/json`

**Body**

| Nom  | Type | Description | Obligatoire |
| ----- | ---- |------------ | -------- |
| grant_type | String  | Type d'autorisation. | :heavy_check_mark: |
| refresh_token | String  | L'identifiant du jeton d'actualisation | :heavy_check_mark: |

**Exemple**

```json
{
	"grant_type": "refresh_token",
	"refresh_token": "efd947fe-a874-4259-9b06-41a8a9505e35",
}
```


**Notes**

* Le type d'autorisation doit être 'refresh_token'.

---

### Réponse

**Condition** : Jeton actualisé

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"access_token": "3OSlfC8yg_fcSGdAGa9n63mDnvwfVhSOo1lgdj0-q4l2EsFvZ1nbZYVoqJd27TI4ksZALxJbzpwcvDHJwg8Frmvlvys-VHE0TLSNK-_o7YvgT2TA3BIASI2nQdA6dx_LIuB5LJhQpIWrlypCpEgP_FRtDfGevUEVpskTP7wB0VDw02RsVaNW19qKWMNwdqU07KxvtY-ghWquMVw1UQfR5LQTbt48b-e741CeFSa1zCD7Zt3UCjaG5NYt7YawOnS-qsA0dL3fCNhQbhjVVe2UZ613JledeiZowKmoIMPqxH9wuTbSvMOqx-YRH2GItVIzk5EfV-gnpZvFUlAtpZjmQqsxUlWX0CWpvpT6Vcr4NMnNCB8MhSuOjNBDQBkA5Z7QVxgEuywa3lyYDuWnD6OpystzuyTWnF3ETzgb8DfgmbGu_VxpdpBgufq9yeVE0KPh8XaIEVkICDIzJCArmPWgrgHr_AXnsl-OwBL-VoNgs7j6BlN_jHQ_Wd6A5LoJU_mv",
	"token_type": "bearer",
	"expires_in": 299,
	"refresh_token": "e27a8020-f9bb-419b-8a06-5421a1452a78",
	".issued": "Thu, 01 Aug 2019 19:44:09 GMT",
	".expires": "Thu, 01 Aug 2019 19:49:09 GMT"
}
```

## Supprimer le jeton
Supprime le jeton associé à un en-tête d'autorisation.

### Requête

**URL** : `/api/oauth/token/[username]`

**Methode** : `DELETE`

**Autorisation requise** : `Yes`

**Body** : `None`


**Notes**

* Le `tokenId` dans l'url de la demande est renvoyé en tant que `refresh_token` dans les réponses Get Token et Refresh Token.

---

### Réponse

**Condition** : Jeton supprimé

**Code** : `200 SUCCESS`

**Exemple**

```json
{
	"username": "jcsnider"
}
```


## Supprimer le jeton par identifiant
Supprime un jeton d'autorisation empêchant toute utilisation ultérieure.

### Requête

**URL** : `/api/oauth/token/[username]/[tokenId]`

**Methode** : `DELETE`

**Autorisation requise** : `No`

**Body** : `None`


**Notes**

* Le `tokenId` dans l'url de la demande est renvoyé en tant que `refresh_token` dans les réponses Get Token et Refresh Token.

---

### Response

**Condition** : Jeton supprimé

**Code** : `200 SUCCESS`

**Example**

```json
{
	"username": "jcsnider",
	"tokenId": "c7edff1c-ef0a-47e5-ba5f-a08b169c411e"
}
```
