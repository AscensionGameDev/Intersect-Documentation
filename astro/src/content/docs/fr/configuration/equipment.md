---
title: Equipement
---


| Nom                           | Type      | Exemple                                | Description |
|-------------------------------|-----------|----------------------------------------|-------------|
| Paperdoll                     | Voir [Paperdoll](#paperdoll)                                      |
| ShieldSlot                    | number    | 3                                      | Configure le slot d'équipement (en comptantà partir de 0) qui est utilisé pour les protections. |
| Slots                         | string[]  | `Helmet, Armor, Weapon, Shield, Boots` | Configure les slots d'équipement disponibles. |
| ToolTypes                     | string[]  | `Axe, Pickaxe, Shovel, Fishing Rod`    | Configure les types d'outils disponibles à utiliser avec des ressources. |
| WeaponSlot                    | number    | 2                                      | le slot d'équipement (en comptantà partir de 0) qui est utilisé pour les armes. |

## Paperdoll
| Nom                           | Type      | Exemple                                        | Description |
|-------------------------------|-----------|------------------------------------------------|-------------|
| Down                          | string[]  | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configure l'ordre dans lequel les sprites du paperdoll sont rendus pour la direction bas. |
| Left                          | string[]  | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configure l'ordre dans lequel les sprites du paperdoll sont rendus pour la direction gauche. |
| Right                         | string[]  | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configure l'ordre dans lequel les sprites du paperdoll sont rendus pour la direction droite. |
| Up                            | string[]  | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configure l'ordre dans lequel les sprites du paperdoll sont rendus pour la direction haut. |