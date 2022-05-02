# Variables

## Obtenir Variables

Récupère les variables globales du serveur avec leur id et leur valeur.

### Requête

**URL** : `/api/v1/variables/global`

**Méthode** : `POST`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| page | int  | Page de variable à récupérer. | :heavy_minus_sign: |
| count | int  | Nombre de variables à récupérer. | :heavy_minus_sign: |

**Exemple**

```json
{
	"page": 0,
	"count": 10
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
        {
            "Name": "New Global Variable",
            "TextId": "",
            "Type": 2,
            "Folder": "Globals 1",
            "Value": 0,
            "Id": "ed82a700-6ce7-4136-93c3-aeb4acea43fc",
            "TimeCreated": -8586599203473051578
        }
    ]
}
```

## Obtenir Variable

Récupère une variable et sa valeur du serveur par id.

### Requête

**URL** : `/api/v1/variables/global/[variableId]`

**Méthode** : `GET`

**Autorisation Requise** : `Oui`

**Type Contenus** : `application/json`

**Corps**: `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "Name": "New Global Variable",
    "TextId": "",
    "Type": 2,
    "Folder": "Globals 1",
    "Value": 0,
    "Id": "ed82a700-6ce7-4136-93c3-aeb4acea43fc",
    "TimeCreated": -8586599203473051578
}
```

## Obtenir Valeur Variable

Récupère la valeur stockée d'une variable du serveur par id.

### Requête

**URL** : `/api/v1/variables/global/[variableId]/value`

**Méthode** : `GET`

**Autorisation Requise** : `Yes`

**Type Contenus** : `application/json`

**Corps**: `NA`

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "value": 0
}
```



## Définir Valeur Variable

Défini la valeur d'une variable spécifiée en donnant son id.

### Requête

**URL** : `/api/v1/variables/global/[variableId]`

**Méthode** : `POST`

**Autorisation Requise** : `Yes`

**Type Contenus** : `application/json`

**Corps**

| Nom   | Type | Description | Requis |
| ----- | ---- |------------ | -------- |
| value | int or boolean | Valeur de variable désirée. | :heavy_check_mark: |

**Exemple**

```json
{
  "value": 10
}
```

---

### Réponse

**Condition** : NA

**Code** : `200 OK`

**Exemple**

```json
{
    "Name": "New Global Variable",
    "TextId": "",
    "Type": 2,
    "Folder": "Globals 1",
    "Value": 10,
    "Id": "ed82a700-6ce7-4136-93c3-aeb4acea43fc",
    "TimeCreated": -8586599203473051578
}
```
