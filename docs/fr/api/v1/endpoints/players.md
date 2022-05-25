# Joueurs

## Liste Joueurs

Renvoie les personnages du serveur avec leur id et les informations stockées.

### Requête

**URL** : `/api/v1/players`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Paramêtres de Requête**

| Nom   | Type | Description | Requis | Par Défaut |
| ----- | ---- |------------ | -------- | ------- |
| page | int  | Décalage des joueurs en numéro de page | :heavy_minus_sign: | 0 |
| pageSize | int  | Nombre de joueurs par page | :heavy_minus_sign: | 5 |
| limit | int  | Limite du nombre de joueurs renvoyés | :heavy_minus_sign: | `pageSize` |

**Exemple**

```http
GET /api/v1/players?page=1&pageSize=5
```

---

### Réponse

```http
Status Code: 200 OK
Content-Type: application/json; charset=utf-8
```

```json
{
    "Total": 151,
    "Page": 1,
    "PageSize": 5,
    "Count": 5,
    "Values": [
        {"Name": "Kassie", "InBank": false, "UserId": "08d655ec-fbdf-aac6-0d22-408e20479301", "MaxVitals":[500,…},
        {"Name": "Euzinho", "InBank": false, "UserId": "08d6c8b4-e33f-feb8-67eb-197306686578", "MaxVitals":[500,…},
        {"Name": "bob", "InBank": false, "UserId": "2662c500-0f7f-479c-b6b0-c51042258d87", "MaxVitals":[500,…},
        {"Name": "Beatz", "InBank": false, "UserId": "08d65649-b98e-9d0a-e0f1-8ba43edb34e2", "MaxVitals":[500,…},
        {"Name": "test1658", "InBank": false, "UserId": "08d64d4a-e86e-d4f8-0c0a-3c6759c5a3f6", "MaxVitals":[500,…}
    ]
}
```

## Rang Joueurs

Renvoie les personnages du serveur avec leur id et les informations stockées, classés par leur `Niveau` et leur `Expérience`.

### Requête

**URL** : `/api/v1/players/rank`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Paramêtres de Requête**

| Nom   | Type | Description | Requis | Par Défaut |
| ----- | ---- |------------ | -------- | ------- |
| page | int  | Décalage des joueurs en numéro de page | :heavy_minus_sign: | 0 |
| pageSize | int  | Nombre de joueurs par page | :heavy_minus_sign: | 5 |
| limit | int  | Limite du nombre de joueurs renvoyés | :heavy_minus_sign: | `pageSize` |
| sortDirection | `Ascending`/`Descending`  | direction de classement | :heavy_minus_sign: | `Descending` |

**Exemple**

```http
GET /api/v1/players/rank?page=1&pageSize=5&sortDirection=Descending
```
---

### Réponse

```http
Status Code: 200 OK
Content-Type: application/json; charset=utf-8
```

```json
{
    "Total": 151,
    "Page": 1,
    "PageSize": 5,
    "Count": 5,
    "Values": [
        {"Name": "Kassie", "InBank": false, "UserId": "08d655ec-fbdf-aac6-0d22-408e20479301", "MaxVitals":[500,…},
        {"Name": "Beatz", "InBank": false, "UserId": "08d65649-b98e-9d0a-e0f1-8ba43edb34e2", "MaxVitals":[500,…},
        {"Name": "bob", "InBank": false, "UserId": "2662c500-0f7f-479c-b6b0-c51042258d87", "MaxVitals":[500,…},
        {"Name": "Euzinho", "InBank": false, "UserId": "08d6c8b4-e33f-feb8-67eb-197306686578", "MaxVitals":[500,…},
        {"Name": "test1658", "InBank": false, "UserId": "08d64d4a-e86e-d4f8-0c0a-3c6759c5a3f6", "MaxVitals":[500,…}
    ]
}
```

## Liste Joueurs En Ligne

Renvoie les personnages en ligne du serveur avec leur id et les informations stockées.

### Requête

**URL** : `/api/v1/players/online`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| page | int  | Page de personnages à récupérer. | :heavy_minus_sign: |
| count | int  | Nombre de personnages à récupérer. | :heavy_minus_sign: |

**Exemple**

```json
{
  "page": 0,
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
    "total": 1,
    "Page": 0,
    "count": 1,
    "entries":[
        {"Name": "jcsnider", "InBank": false, "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6", "MaxVitals":[680,…}
    ]
}
```

L'exemple est tronqué, pour une réponse complète [cliquez ici](https://www.ascensiongamedev.com/resources/filehost/dad4454a2bcf16e95bd579906ce9ea92.json).

## Comptes En Ligne

Renvoie le nombre de joueurs en ligne.

### Requête

**URL** : `/api/v1/players/online/count`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "onlineCount": 1
}
```

## Recherche

Renvoie les personnages en ligne du serveur avec leur id et les informations stockées.

### Requête

**URL** : `/api/v1/players/[lookupKey]`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `GET`

**Autorisation Requise** : `Yes`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "Name": "jcsnider",
    "InBank": false,
    "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6",
    "MaxVitals":[
        680,
        110
    ],
    ...
}
```

L'exemple est tronqué, pour une réponse complète [cliquez ici](https://www.ascensiongamedev.com/resources/filehost/f9cbcdebafc4acff54318cb314871fba.json).

## Obtention Variables

Renvoie les variables joueurs et leur valeur pour un personnage.

### Requête

**URL** : `/api/v1/players/[lookupKey]/variables`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
[
    {
    "VariableId": "d6f5b6b9-6de9-4893-b028-0c8c386ee05c",
    "Value": true
    },
    {
    "VariableId": "873270c0-924e-467b-b881-a97e2ab92858",
    "Value": 5
    }
]
```

## Obtention Variable

Renvoie une variable joueur et sa valeur pour l'id d'une variable joueur donnée.

### Requête

**URL** : `/api/v1/players/[lookupKey]/variables/[variableId]`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "VariableId": "d6f5b6b9-6de9-4893-b028-0c8c386ee05c",
    "Value": true
}
```

## Obtention Valeur Variable

Retrieves player variable value for a given player variable id.

### Requête

**URL** : `/api/v1/players/[lookupKey]/variables/[variableId]/value`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "value": true
}
```

## Définir Valeur Variable

Défini la valeur d'une variable joueur.

### Requête

**URL** : `/api/v1/players/[lookupKey]/variables/[variableId]`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| value | int or boolean | Valeur désirée de la variable. | :heavy_check_mark: |

**Exemple**

```json
{
  "value": 10
}
```

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "VariableId": "d6f5b6b9-6de9-4893-b028-0c8c386ee05c",
    "Value": 10
}
```

## Obtention Objets

Renvoie les objets d'inventaire et de banque pour un joueur.

### Requête

**URL** : `/api/v1/players/[lookupKey]/items`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "inventory":[
        {
            "Slot": 22,
            "BagId": null,
            "ItemId": "1b19803a-6c28-484f-95fe-9c99f967d73f",
            "Quantity": 1,
            "StatBuffs":[0, 0, 0, 0, 0]
        },
        {
            "Slot": 15,
            "BagId": "08d649a8-643f-1bde-0487-3175a8badde2",
            "ItemId": "bda7b222-b549-4e95-982f-cc04e680471e",
            "Quantity": 1,
            "StatBuffs":[0, 0, 0, 0, 0]
        }
    ],
    "bank": [
        {
            "Slot": 87,
            "BagId": null,
            "ItemId": "00000000-0000-0000-0000-000000000000",
            "Quantity": 0,
            "StatBuffs":[0, 0, 0, 0, 0]
        },
        {
            "Slot": 91,
            "BagId": null,
            "ItemId": "00000000-0000-0000-0000-000000000000",
            "Quantity": 0,
            "StatBuffs":[0, 0, 0, 0, 0]
        }
    ]
}
```

## Obtenir Objets Inventaire

Renvoie les objets de l'inventaire pour un joueur.

### Requête

**URL** : `/api/v1/players/[lookupKey]/items/inventory`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
[
    {
        "Slot": 22,
        "BagId": null,
        "ItemId": "1b19803a-6c28-484f-95fe-9c99f967d73f",
        "Quantity": 1,
        "StatBuffs":[0, 0, 0, 0, 0]
    },
    {
        "Slot": 15,
        "BagId": "08d649a8-643f-1bde-0487-3175a8badde2",
        "ItemId": "bda7b222-b549-4e95-982f-cc04e680471e",
        "Quantity": 1,
        "StatBuffs":[0, 0, 0, 0, 0]
    }
]
```

## Obtenir Objets Banque

Renvoie les objets en banque pour un joueur.

### Requête

**URL** : `/api/v1/players/[lookupKey]/items/bank`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `GET`

**Autorisation Requise** : `Yes`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
[
    {
        "Slot": 87,
        "BagId": null,
        "ItemId": "00000000-0000-0000-0000-000000000000",
        "Quantity": 0,
        "StatBuffs":[0, 0, 0, 0, 0]
    },
    {
        "Slot": 91,
        "BagId": null,
        "ItemId": "00000000-0000-0000-0000-000000000000",
        "Quantity": 0,
        "StatBuffs":[0, 0, 0, 0, 0]
    }
]
```

## Obtenir Informations Sac

Renvoie objets stockées et données meta d'un sac.

### Requête

**URL** : `/api/v1/players/bag/[bagId]`

**Méthode** : `GET`

**Autorisation Requise** : `Yes`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "Id": "08d649a8-643f-1bde-0487-3175a8badde2",
    "SlotCount": 3,
    "Slots":[
        {
            "Slot": 0,
            "BagId": null,
            "ItemId": "be82ae1a-0c50-40c8-a929-7d55335467fc",
            "Quantity": 10,
            "StatBuffs":[0, 0, 0, 0, 0]
        },
        {
            "Slot": 1,
            "BagId": null,
            "ItemId": "0d06aeef-b040-4048-8a85-2821144cc99b",
            "Quantity": 1,
            "StatBuffs":[0, 0, 0, 0, 0]
        },
        {
            "Slot": 2,
            "BagId": null,
            "ItemId": "0d06aeef-b040-4048-8a85-2821144cc99b",
            "Quantity": 1,
            "StatBuffs":[0, 0, 0, 0, 0]
        },
    ]
}
```

## Donner Objet

Donne un objet à un joueur avec l'option de transposer à la banque de joueur si leur inventaire est plein.

### Requête

**URL** : `/api/v1/players/[lookupKey]/items/give`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| itemid | guid | Id de l'objet à donner. | :heavy_check_mark: |
| quantity | int | Quantité de l'objet à donner. | :heavy_check_mark: |
| bankoverflow | boolean | si il faut tenter ou non de transposer à la banque si l'inventaire est plein. | :heavy_minus_sign: |

**Exemple**

```json
{
  "itemid": "be82ae1a-0c50-40c8-a929-7d55335467fc",
  "quantity": 5,
  "bankoverflow": false
}
```

### Réponse

**Condition** : Quand l'(les) objet(s) sont donnés avec succès, retourne le compte des objets de l'inventaire et de la banque du joueur.

**Code** : `200 OK`

**Exemple**

```json
{
    "id": "be82ae1a-0c50-40c8-a929-7d55335467fc",
    "quantity":{
        "total": 311,
        "bank": 5,
        "inventory": 306
    }
}
```

## Prendre Objet

Prend un objet de l'inventaire d'un joueur.

### Requête

**URL** : `/api/v1/players/[lookupKey]/items/take`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `POST`

**Autorisation Requise** : `Yes`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| itemid | guid | Id de l'objet à prendre. | :heavy_check_mark: |
| quantity | int | Quantité de l'objet à prendre. | :heavy_check_mark: |

**Exemple**

```json
{
  "itemid": "be82ae1a-0c50-40c8-a929-7d55335467fc",
  "quantity": 5
}
```

### Réponse

**Condition** : Quand l'(les) objet(s) est(sont) pris avec succès, retourne l'id de l'objet et la quantité prise.

**Code** : `200 OK`

**Exemple**

```json
{
    "ItemId": "be82ae1a-0c50-40c8-a929-7d55335467fc",
    "Quantity": 5
}
```

## Obtenir Sorts

Renvoie les sorts connus d'un joueur.

### Requête

**URL** : `/api/v1/players/[lookupKey]/spells`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `NA`

**Corps** : `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
[
    {
        "Slot": 2,
        "SpellId": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
    }
]
```

## Enseigner Sort

Enseigne un sort à un joueur.

### Requête

**URL** : `/api/v1/players/[lookupKey]/spells/teach`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| spellid | guid | Id du sort à enseigner. | :heavy_check_mark: |

**Exemple**

```json
{
  "spellid": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
}
```

### Réponse

**Condition** : Le sort a été enseigné avec succès.

**Code** : `200 OK`

**Exemple**

```json
{
    "SpellId": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
}
```

## Oublier sort

Fait oublier un sort à un joueur.

### Requête

**URL** : `/api/v1/players/[lookupKey]/spells/forget`

**Clé de Recherche:** `Character's name or id.`

**Méthode** : `POST`

**Autorisation Requise** : `Yes`

**Type Contenu** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| spellid | guid | Id du sort à oublier. | :heavy_check_mark: |

**Exemple**

```json
{
  "spellid": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
}
```

### Réponse

**Condition** : Le sort a été oublié avec succès.

**Code** : `200 OK`

**Exemple**

```json
{
    "SpellId": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
}
```

## Liste Joueurs (`POST`) (_Obsolète_)

Renvoie les personnages du serveur avec leur id et les informations stockées.

### Requête

**URL** : `/api/v1/players`

**Méthode** : `POST`

**Autorisation Requise** : `Yes`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| page | int  | Page de personnages à récupérer. | :heavy_minus_sign: |
| count | int  | Nombre de personnages à récupérer. | :heavy_minus_sign: |

**Exemple**

```json
{
  "page": 0,
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
    "total": 151,
    "Page": 0,
    "count": 5,
    "entries":[
        {"Name": "Kassie", "InBank": false, "UserId": "08d655ec-fbdf-aac6-0d22-408e20479301", "MaxVitals":[500,…},
        {"Name": "Euzinho", "InBank": false, "UserId": "08d6c8b4-e33f-feb8-67eb-197306686578", "MaxVitals":[500,…},
        {"Name": "bob", "InBank": false, "UserId": "2662c500-0f7f-479c-b6b0-c51042258d87", "MaxVitals":[500,…},
        {"Name": "Beatz", "InBank": false, "UserId": "08d65649-b98e-9d0a-e0f1-8ba43edb34e2", "MaxVitals":[500,…},
        {"Name": "test1658", "InBank": false, "UserId": "08d64d4a-e86e-d4f8-0c0a-3c6759c5a3f6", "MaxVitals":[500,…}
    ]
}
```

L'exemple est tronqué, pour une réponse complète [cliquez ici](https://www.ascensiongamedev.com/resources/filehost/42c3988911273609ceeeb424f13f7ac2.json).
