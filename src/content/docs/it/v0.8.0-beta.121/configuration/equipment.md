---
title: Equipment
---

| Name       | Type                        | Example                                | Description                                                                |
| ---------- | --------------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| Paperdoll  | See [Paperdoll](#paperdoll) |
| ShieldSlot | number                      | 3                                      | Configures the equipment slot (counting from 0) which is used for shields. |
| Slots      | string[]                    | `Helmet, Armor, Weapon, Shield, Boots` | Configures the available equipment slots.                                  |
| ToolTypes  | string[]                    | `Axe, Pickaxe, Shovel, Fishing Rod`    | Configures the available tool types for use with Resources.                |
| WeaponSlot | number                      | 2                                      | Configures the equipment slot (counting from 0) which is used for weapons. |

## Paperdoll

| Name  | Type     | Example                                        | Description                                                                           |
| ----- | -------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| Down  | string[] | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configures the order in which paperdoll sprites are rendered for the Down direction.  |
| Left  | string[] | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configures the order in which paperdoll sprites are rendered for the Left direction.  |
| Right | string[] | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configures the order in which paperdoll sprites are rendered for the Right direction. |
| Up    | string[] | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configures the order in which paperdoll sprites are rendered for the Up direction.    |
