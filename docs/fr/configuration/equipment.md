# Équipment

| Nom                          | Type      | Example                                | Description |
|-------------------------------|-----------|----------------------------------------|-------------|
| Paperdoll                     | See [Paperdoll](#paperdoll)                                      |
| ShieldSlot                    | number    | 3                                      | Configure l'emplacement de l'équipement (comptant de 0) qui est utilisé comme bouclier. |
| Slots                         | string[]  | `Helmet, Armor, Weapon, Shield, Boots` | Configure les emplacements d'équipements valides. |
| ToolTypes                     | string[]  | `Axe, Pickaxe, Shovel, Fishing Rod`    | Configure les types d'outils valides à utiliser avec les ressources. |
| WeaponSlot                    | number    | 2                                      | Configure l'emplacement de l'équipement (comptant de 0) qui est utilisé comme arme. |

## Paperdoll
| Nom                          | Type      | Example                                        | Description |
|-------------------------------|-----------|------------------------------------------------|-------------|
| Down                          | string[]  | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configure l'ordre dans lequel les paperdoll seront affiché dans la direction Bas. |
| Left                          | string[]  | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configure l'ordre dans lequel les paperdoll seront affiché dans la direction Gauche. |
| Right                         | string[]  | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configure l'ordre dans lequel les paperdoll seront affiché dans la direction Droite. |
| Up                            | string[]  | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configure l'ordre dans lequel les paperdoll seront affiché dans la direction Haut. |
