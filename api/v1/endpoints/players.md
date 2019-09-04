# Players

## List Players

Retrieves characters from the server along with their ids and stored information.

### Request

**URL** : `/api/v1/players`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| page | int  | Page of characters to retrieve. | :heavy_minus_sign: |
| count | int  | Number of characters to retrieve. | :heavy_minus_sign: |

**Example**

```json
{
  "page": 0,
  "count": 5
}
```

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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

Example is truncated, for full response [click here](https://www.ascensiongamedev.com/resources/filehost/42c3988911273609ceeeb424f13f7ac2.json).

## List Online Players

Retrieves online characters from the server along with their ids and stored information.

### Request

**URL** : `/api/v1/players/online`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| page | int  | Page of characters to retrieve. | :heavy_minus_sign: |
| count | int  | Number of characters to retrieve. | :heavy_minus_sign: |

**Example**

```json
{
  "page": 0,
  "count": 5
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
        {"Name": "jcsnider", "InBank": false, "UserId": "cf995c16-8c2e-4ab3-a5b8-a39d6051adc6", "MaxVitals":[680,…}
    ]
}
```

Example is truncated, for full response [click here](https://www.ascensiongamedev.com/resources/filehost/dad4454a2bcf16e95bd579906ce9ea92.json).

## Online Count

Retrieves the number of online players.

### Request

**URL** : `/api/v1/players/online/count`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

```json
1
```

## Lookup

Retrieves online characters from the server along with their ids and stored information.

### Request

**URL** : `/api/v1/players/[lookupKey]`

**Lookup Key:** `Character's name or id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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

Example is truncated, for full response [click here](https://www.ascensiongamedev.com/resources/filehost/f9cbcdebafc4acff54318cb314871fba.json).

## Get Variables

Retrieves player variables and values for a character.

### Request

**URL** : `/api/v1/players/[lookupKey]/variables`

**Lookup Key:** `Character's name or id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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

## Get Variable

Retrieves player variable and value for a given player variable id.

### Request

**URL** : `/api/v1/players/[lookupKey]/variables/[variableId]`

**Lookup Key:** `Character's name or id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

```json
{
    "VariableId": "d6f5b6b9-6de9-4893-b028-0c8c386ee05c",
    "Value": true
}
```

## Get Variable Value

Retrieves player variable value for a given player variable id.

### Request

**URL** : `/api/v1/players/[lookupKey]/variables/[variableId]/value`

**Lookup Key:** `Character's name or id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

```json
true
```

## Set Variable Value

Sets the value of a player's variable.

### Request

**URL** : `/api/v1/players/[lookupKey]/variables/[variableId]`

**Lookup Key:** `Character's name or id.`

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

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

```json
{
    "VariableId": "d6f5b6b9-6de9-4893-b028-0c8c386ee05c",
    "Value": 10
}
```

## Get Items

Retrieves inventory and bank items for a player.

### Request

**URL** : `/api/v1/players/[lookupKey]/items`

**Lookup Key:** `Character's name or id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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

## Get Inventory Items

Retrieves inventory items for a player.

### Request

**URL** : `/api/v1/players/[lookupKey]/items/inventory`

**Lookup Key:** `Character's name or id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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

## Get Bank Items

Retrieves bank items for a player.

### Request

**URL** : `/api/v1/players/[lookupKey]/items/bank`

**Lookup Key:** `Character's name or id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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

## Get Bag

Retrieves stored items and metadata of a bag.

### Request

**URL** : `/api/v1/players/bag/[bagId]`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

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

## Give Item

Gives a player an item with the option to overflow to the players bank if their inventory is full.

### Request

**URL** : `/api/v1/players/[lookupKey]/items/give`

**Lookup Key:** `Character's name or id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| itemid | guid | Id of the item to give. | :heavy_check_mark: |
| quantity | int | Quantity of the item to give. | :heavy_check_mark: |
| bankoverflow | boolean | Whether or not to try to overflow to bank if the inventory is too full. | :heavy_minus_sign: |

**Example**

```json
{
  "itemid": "be82ae1a-0c50-40c8-a929-7d55335467fc",
  "quantity": 5,
  "bankoverflow": false
}
```

### Response

**Condition** : When item(s) given successfully, returns player count of the items in both inventory and bank.

**Code** : `200 OK`

**Example**

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

## Take Item

Takes an item from the players inventory.

### Request

**URL** : `/api/v1/players/[lookupKey]/items/take`

**Lookup Key:** `Character's name or id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| itemid | guid | Id of the item to take. | :heavy_check_mark: |
| quantity | int | Quantity of the item to take. | :heavy_check_mark: |

**Example**

```json
{
  "itemid": "be82ae1a-0c50-40c8-a929-7d55335467fc",
  "quantity": 5
}
```

### Response

**Condition** : Item(s) taken successfully, returns the item id and quantity taken.

**Code** : `200 OK`

**Example**

```json
{
    "ItemId": "be82ae1a-0c50-40c8-a929-7d55335467fc",
    "Quantity": 5
}
```

## Get Spells

Retrieves a player's known spells.

### Request

**URL** : `/api/v1/players/[lookupKey]/spells`

**Lookup Key:** `Character's name or id.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Example**

```json
[
    {
        "Slot": 2,
        "SpellId": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
    }
]
```

## Teach Spell

Teaches a player a spell.

### Request

**URL** : `/api/v1/players/[lookupKey]/spells/teach`

**Lookup Key:** `Character's name or id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| spellid | guid | Id of the spell to teach. | :heavy_check_mark: |

**Example**

```json
{
  "spellid": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
}
```

### Response

**Condition** : Spell was taught successfully.

**Code** : `200 OK`

**Example**

```json
{
    "SpellId": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
}
```

## Forget Spell

Makes a player forget a spell.

### Request

**URL** : `/api/v1/players/[lookupKey]/spells/forget`

**Lookup Key:** `Character's name or id.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| spellid | guid | Id of the spell to forget. | :heavy_check_mark: |

**Example**

```json
{
  "spellid": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
}
```

### Response

**Condition** : Spell was forgotten successfully.

**Code** : `200 OK`

**Example**

```json
{
    "SpellId": "c54378ba-5632-4ad9-a7cf-6ec0b0264b4e"
}
```