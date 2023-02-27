---
title: Equipment
---


| Name       | Type                         | Example                                | Description                                                                         |
| ---------- | ---------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------- |
| Paperdoll  | Veja [Paperdoll](#paperdoll) |
| ShieldSlot | number                       | 3                                      | Configura o slot do equipamento (contando a partir de 0) que é usado para o escudo. |
| Slots      | string[]                     | `Helmet, Armor, Weapon, Shield, Boots` | Configura os slots de equipamentos disponíveis.                                     |
| ToolTypes  | string[]                     | `Axe, Pickaxe, Shovel, Fishing Rod`    | Configura os tipos de ferramentas disponíveis para uso com Recursos.                |
| WeaponSlot | number                       | 2                                      | Configura o slot de equipamento (contando a partir de 0) que é usado para armas.    |

## Paperdoll

| Name  | Type     | Example                                        | Description                                                                      |
| ----- | -------- | ---------------------------------------------- | -------------------------------------------------------------------------------- |
| Down  | string[] | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configura a ordem em que os sprites do paperdoll são renderizados para baixo.    |
| Left  | string[] | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configura a ordem em que os sprites do paperdoll são renderizados para esquerda. |
| Right | string[] | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configura a ordem em que os sprites do paperdoll são renderizados para direita.  |
| Up    | string[] | `Player, Armor, Helmet, Weapon, Shield, Boots` | Configura a ordem em que os sprites do paperdoll são renderizados para cima.     |
