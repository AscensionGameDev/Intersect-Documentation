# Game Objects

## Object Types

| Type  | Key | 
| ----- | ---------- |
| Animations | animation  |
| Classes | class  |
| Items | item  |
| Npcs | npc  |
| Projectiles | projectile  |
| Quests | quest  |
| Resources | resource  |
| Shops | shop  |
| Spells | spell  |
| Crafting Tables | crafttables  |
| Crafts | crafts  |
| Maps | map  |
| Events | event  |
| Player Variables | playervariable  |
| Server Variables | servervariable  |
| Tilesets | tileset  |
| Time | * |

* Time is a singular object, and has its own retrieval endpoint below.

## Obtaining Ids

Right click on a map in the map list and select 'copy id' to copy the maps id to your clipboard.

For tilesets, select the tileset in the editor and then right click on the dropdown and the id will be copied to your clipboard automatically.

In all other editors right clicking on an object will copy the id to your clipboard automatically.


## Get List

Grabs a list of game objects and their stored information from the server given it's type and paging information.

### Request

**URL** : `/api/v1/gameobjects/[typeKey]`

**Type Key** : `One of the keys in the table above.`

**Method** : `POST`

**Authorization Required** : `Yes`

**Content Type** : `application/json`

**Body**

| Name  | Type | Description | Required |
| ----- | ---- |------------ | -------- |
| page | int  | Page of users to retrieve. | :heavy_minus_sign: |
| count | int  | Number of users to retrieve. | :heavy_minus_sign: |

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
[
    {
        "Key": "bf34b04c-17e1-4633-ba1e-d5df11f2c30d",
        "Value":{"Name": "Cheese", "UsageRequirements":{"Lists": "[]" }, "AnimationId": "00000000-0000-0000-0000-000000000000",…}
    },
    {
        "Key": "886f5278-3a03-4d05-ae67-8545922363db",
        "Value":{"Name": "Life potion", "UsageRequirements":{"Lists": "[]" }, "AnimationId": "b0d85352-5b80-4917-9ac0-c853b67e9a8c",…}
    },
    {
        "Key": "ffda773e-9451-48b2-aab6-db1b8066f487",
        "Value":{"Name": "Big life potion", "UsageRequirements":{"Lists": "[]" }, "AnimationId": "b0d85352-5b80-4917-9ac0-c853b67e9a8c",…}
    },
    {
        "Key": "1e5451c7-e02d-429e-9533-46a6fe9502fd",
        "Value":{"Name": "Level up", "UsageRequirements":{"Lists": "[]" }, "AnimationId": "00000000-0000-0000-0000-000000000000",…}
    },
    {
        "Key": "0f15d461-3e55-4413-9988-8ce06824e20a",
        "Value":{"Name": "Mana potion", "UsageRequirements":{"Lists": "[]" }, "AnimationId": "00000000-0000-0000-0000-000000000000",…}
    }
]
```

Example is truncated, for full response [click here](https://www.ascensiongamedev.com/resources/filehost/bcd9e08a636671fccf0dcafca3d3bf71.json).


## Get Object

Retrieves the config for a singular game object from the server given it's type and id.

### Request

**URL** : `/api/v1/gameobjects/[typeKey]/[id]`

**Type Key** : `One of the keys in the table above.`

**Method** : `GET`

**Authorization Required** : `Yes`

**Content Type** : `NA`

**Body** : `NA`

---

### Response

**Condition** : NA

**Code** : `200 OK`

**Map Example**

```json
{
    "Name": "Town Shore",
    "EventIds":[
        "9d89fa82-1aa5-45f6-94ff-9a9d6c4a3b10",
        "08198577-6688-430b-953d-9eabbb754a64",
        "fe5e5d59-899b-4efa-9d0c-c2bb0905dedc",
        "adc098e6-d453-403f-8f57-e76d40705306",
        "a5817278-d482-4101-8102-271a0fe8e405",
        "2fddd530-53ff-4c86-bd81-5a4a3b57226f",
        "6f9db43c-8a51-45df-ba97-8875970ce644"
    ],
    "Up": "7c2fea75-7817-486e-bbe0-0b6a82e5a162",
    "Down": "00000000-0000-0000-0000-000000000000",
    "Left": "cd86fce9-d976-4565-9713-807122ed7045",
    "Right": "7fe6c3d6-ef31-4bb0-a669-366085e8b774",
    "Revision": 82,
    "Lights":[],
    "LocalEventsJson": "{}",
    "Spawns":[
        {
            "Direction": 0,
            "NpcId": "3b2ccf0d-e732-4148-b627-7d694180ed3f",
            "X": -1,
            "Y": -1
        }
    ],
    "Music": "battle-of-the-ancients.ogg",
    "Sound": "None",
    "IsIndoors": false,
    "Panorama": "None",
    "Fog": "None",
    "FogXSpeed": 0,
    "FogYSpeed": 0,
    "FogTransparency": 0,
    "RHue": 0,
    "GHue": 0,
    "BHue": 0,
    "AHue": 0,
    "Brightness": 100,
    "ZoneType": 1,
    "PlayerLightSize": 300,
    "PlayerLightIntensity": 255,
    "PlayerLightExpand": 0,
    "PlayerLightColor":{
        "A": 255,
        "R": 255,
        "G": 255,
        "B": 255
    },
    "OverlayGraphic": "None",
    "WeatherAnimationId": "00000000-0000-0000-0000-000000000000",
    "WeatherXSpeed": 0,
    "WeatherYSpeed": 0,
    "WeatherIntensity": 0,
    "Id": "693b7c8f-61ac-4517-b27c-f3b0a3b98542",
    "TimeCreated": -8586627254977472901
}
```


## Get Time

Retrieves the servers timing configuration and color hues for each time of day.

### Request

**URL** : `/api/v1/gameobjects/time`

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
    "DaylightHues":[
        {"A": 204, "R": 0, "G": 0, "B": 64},
        {"A": 204, "R": 0, "G": 0, "B": 64},
        {"A": 204, "R": 0, "G": 0, "B": 64},
        {"A": 173, "R": 0, "G": 0, "B": 64},
        {"A": 163, "R": 0, "G": 0, "B": 160},
        {"A": 102, "R": 0, "G": 0, "B": 255},
        {"A": 102, "R": 0, "G": 128, "B": 255},
        {"A": 84, "R": 255, "G": 0, "B": 255},
        {"A": 102, "R": 255, "G": 128, "B": 128},
        {"A": 51, "R": 255, "G": 128, "B": 0},
        {"A": 255, "R": 255, "G": 255, "B": 255},
        {"A": 255, "R": 255, "G": 255, "B": 255},
        {"A": 255, "R": 255, "G": 255, "B": 255},
        {"A": 255, "R": 255, "G": 255, "B": 255},
        {"A": 255, "R": 255, "G": 255, "B": 255},
        {"A": 53, "R": 255, "G": 128, "B": 128},
        {"A": 122, "R": 255, "G": 128, "B": 255},
        {"A": 84, "R": 255, "G": 0, "B": 255},
        {"A": 102, "R": 128, "G": 0, "B": 128},
        {"A": 122, "R": 64, "G": 0, "B": 128},
        {"A": 112, "R": 0, "G": 0, "B": 128},
        {"A": 124, "R": 0, "G": 0, "B": 64},
        {"A": 153, "R": 0, "G": 0, "B": 64},
        {"A": 170, "R": 0, "G": 0, "B": 64}
    ],
    "Id": "75196252-9830-4fe0-aa38-f66bdbce62e2",
    "RangeInterval": 60,
    "Rate": 500,
    "SyncTime": false
}
```