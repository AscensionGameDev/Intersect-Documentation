# Variables

## Get Variables

Retrieves global variables from the server along with their ids and values.

### Request

**URL** : `/api/v1/variables/global`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| page | int  | Page of variables to retrieve. | :heavy_minus_sign: |
| count | int  | Number of variables to retrieve. | :heavy_minus_sign: |

**Example**

```json
{
	"page": 0,
	"count": 10
}
```

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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

## Get Variable

Retrieves a variable and it's value from the server by id.

### Request

**URL** : `/api/v1/variables/global/[variableId]`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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

## Get Variable Value

Retrieves the stored value of a variable from the server by id.

### Request

**URL** : `/api/v1/variables/global/[variableId]/value`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**: `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

```json
0
```



## Set Variable Value

Sets a specified variable's value given it's id.

### Request

**URL** : `/api/v1/variables/global/[variableId]`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| value | int or boolean | Variable's desired value. | :heavy_check_mark: |

**Example**

```json
{
  "value": 10
}
```

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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