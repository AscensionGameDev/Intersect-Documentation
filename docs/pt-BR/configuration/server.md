# Server `config.json`

| Name                          | Type                                                     | Example                     | Description                                                                                                                                                                    |
| ----------------------------- | -------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GameName                      | string                                                   | Intersect                   | Configura o nome do jogo que este servidor hospeda.                                                                                                                            |
| ServerPort                    | number                                                   | 5400                        | Configura a porta em que este servidor escutará.                                                                                                                               |
| AdminOnly                     | boolean                                                  | false                       | Configura se este servidor permitirá que apenas membros da equipe (Acesso 1 ou superior) efetuem login.                                                                        |
| BlockClientRegistrations      | boolean                                                  | false                       | Configura se este servidor irá bloquear novos registros de usuários ou não.                                                                                                    |
| AnimatedSprites               | array                                                    | ["bat.png", "beholder.png"] | Configura quais sprites devem estar sempre animando, mesmo estando com a movimentação parada.                                                                                  |
| EventWatchdogKillThreshold    | number                                                   | 5000                        | Configura a quantidade de comandos que um evento pode executar dentro de um único tick de servidor antes que o servidor considere que ele esteja em loop infinito e o elimine. |
| OpenPortChecker               | boolean                                                  | true                        | Configura se o servidor verificará se ele pode ser acessado pela Internet toda vez que for iniciado.                                                                           |
| ValidPasswordResetTimeMinutes | number                                                   | 30                          | Configura o tempo (em minutos) pelo qual um link de redefinição de senha é válido.                                                                                             |
| UPnP                          | boolean                                                  | true                        |                                                                                                                                                                                |
| Chat                          | Veja: [Chat](#chat)                                      |
| Combat                        | Veja: [Combat](#combat)                                  |
| Equipment                     | Veja: [Equipment](./configuration/equipment)             |
| GameDatabase                  | Veja: [Server Database](./configuration/server-database) |
| PlayerDatabase                | Veja: [Server Database](./configuration/server-database) |
| Map                           | Veja: [Map](#map)                                        |
| NPC                           | Veja: [NPC](#npc)                                        |
| Loot                          | Veja: [Loot](#loot)                                      |
| Player                        | Veja: [Player](#player)                                  |
| Party                         | Veja: [Party](#party)                                    |
| Security                      | Veja: [Server Security](./configuration/server-security) |
| SmtpSettings                  | Veja: [SMTP](#smtp)                                      |
| Sprites                       | Veja: [Sprites](#sprites)                                |
| Passability                   | Veja: [Passability](#passability)                        |

## Chat

| Name                    | Type   | Example | Description                                                                             |
| ----------------------- | ------ | ------- | --------------------------------------------------------------------------------------- |
| MaxChatLength           | number | 120     | Configura o comprimento máximo permitido de cada mensagem de chat.                      |
| MinIntervalBetweenChats | number | 400     | Configura o intervalo mínimo (em milissegundos) necessário entre cada mensagem de chat. |

## Combat

| Name          | Type   | Example | Description                                                                                                                                          |
| ------------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlockingSlow  | number | 30      | Configura a porcentagem para desacelerar um jogador enquanto ele está bloqueando.                                                                    |
| CombatTime    | number | 10000   | Configura a quantidade de tempo que leva para um jogador não ser mais considerado em combate após seu último ataque ou a última vez que sofreu dano. |
| MaxAttackRate | number | 200     | Configura a taxa máxima na qual uma entidade pode atacar potencialmente.                                                                             |
| MaxDashSpeed  | number | 200     | Configura a velocidade máxima na qual um jogador pode correr.                                                                                        |
| MinAttackRate | number | 500     | Configura a taxa mínima na qual uma entidade pode potencialmente atacar.                                                                             |
| RegenTime     | number | 3000    | Configura o tempo (em milissegundos) entre cada tick de regeneração Vital.                                                                           |

## Map

| Name                     | Type    | Example | Description                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GameBorderStyle          | number  | 0       | Configura o método no qual a câmera é manipulada pelo mecanismo. **0** usará um mundo contínuo e tentará evitar a exibição de áreas sem mapas. **1** usará um mundo contínuo e não restringirá a câmera à visualização do mapa, sempre centralizando a câmera no player. **2** não usará um mundo contínuo e mostrará cada mapa individualmente enquanto você atravessa o mundo. |
| Height                   | number  | 26      | Configura a quantidade de blocos disponíveis no eixo Y (vertical) em cada mapa. **AVISO:** Este valor não pode ser alterado em tempo real e exigirá que você exclua seus mapas existentes quando alterado!                                                                                                                                                                       |
| ItemAttributeRespawnTime | number  | 15000   | Configura a quantidade de tempo (em milissegundos) que leva para os itens gerados através do Atributo do Mapa de Itens para reaparecer.                                                                                                                                                                                                                                          |
| TileHeight               | number  | 32      | Configura a quantidade de pixels que cada bloco de mapa está no eixo Y (vertical).                                                                                                                                                                                                                                                                                               |
| TileWidth                | number  | 32      | Configura a quantidade de pixels que cada bloco de mapa está no eixo X (horizontal).                                                                                                                                                                                                                                                                                             |
| Width                    | number  | 32      | Configura a quantidade de blocos disponíveis no eixo X (horizontal) em cada mapa. **AVISO:** Este valor não pode ser alterado em tempo real e exigirá que você exclua seus mapas existentes quando alterado!                                                                                                                                                                     |
| ZDimensionVisible        | boolean | false   | Configura se a Z-Dimension está habilitada. Veja: [Z-Dimensions](./advanced/zdimensions)                                                                                                                                                                                                                                                                                         |

## NPC

| Name                              | Type    | Example | Description                                                                                                                                                  |
| --------------------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AllowResetRadius                  | boolean | false   | Configura se os NPCs serão redefinidos após serem movidos para longe do ponto inicial em que foram atacados pela primeira vez ou começaram a atacar.         |
| AllowNewResetLocationBeforeFinish | boolean | false   | Configura se os NPCs têm permissão para obter um novo ponto central do qual foram puxados antes de serem totalmente redefinidos para o último.               |
| ResetVitalsAndStatusses           | boolean | false   | Configura se os NPCs irão redefinir totalmente seus sinais vitais e status ao redefinir.                                                                     |
| ResetRadius                       | number  | 8       | Configura o intervalo (em blocos) no qual um NPC pode se mover do ponto inicial em que foi atacado pela primeira vez ou começou a atacar antes de reiniciar. |

## Loot

| Name                | Type    | Example | Description                                                                                                                                                        |
| ------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ItemDespawnTime     | number  | 15000   | Configura o tempo (em milissegundos) que leva para loot e itens descartados desaparecerem do mapa.                                                                 |
| ItemOwnershipTime   | number  | 5000    | Configura o tempo (em milissegundos) que leva para um item descartado não pertencer mais ao jogador que o fez cair matando NPCs e Jogadores ou soltando-o no mapa. |
| ShowUnownedItems    | boolean | false   | Configura se todos no mapa podem ver itens dos quais não são proprietários no momento e não estão qualificados para pegar.                                         |
| ConsolidateMapDrops | boolean | true    | Configura se soltar vários itens no mapa de uma vez consolida os descartes em um único objeto no mapa ou se descarta vários no mapa de uma só vez.                 |

## Player

| Name           | Type   | Example | Description                                                                                                                                          |
| -------------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| ItemDropChance | number | 0       | Configura a chance (porcentagem) de quando um jogador largará itens após a morte.                                                                    |
| MaxBank        | number | 100     | Configura a quantidade máxima de slots de banco que cada jogador possui.                                                                             |
| MaxCharacters  | number | 1       | Configura a quantidade máxima de caracteres que cada conta de usuário pode ter.                                                                      |
| MaxInventory   | number | 35      | Configura a quantidade máxima de slots de inventário que cada jogador possui.                                                                        |
| MaxLevel       | number | 100     | Configura o nível máximo que um personagem do jogador pode alcançar.                                                                                 |
| MaxSpells      | number | 35      | Configura a quantidade máxima de slots de feitiços que cada jogador possui.                                                                          |
| MaxStat        | number | 255     | Configura a quantidade máxima de pontos de estatística que qualquer estatística pode ter.                                                            |
| RequestTimeout | number | 300000  | Configura a quantidade máxima de tempo (em milissegundos) que uma solicitação de negociação pode ficar pendente antes de cancelá-la automaticamente. |
| TradeRange     | number | 6       | Configura o intervalo (em tiles) no qual o jogador e o jogador com o qual eles estão tentando negociar devem residir.                                |

## Party

| Name                          | Type   | Example | Description                                                                                                                                          |
| ----------------------------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaximumMembers                | number | 4       | Configura a quantidade máxima de membros do grupo permitidos.                                                                                        |
| InviteRange                   | number | 40      | Configura o intervalo (em blocos) no qual o jogador e o jogador que eles estão tentando convidar para um grupo devem residir.                        |
| SharedXpRange                 | number | 40      | Configura o intervalo (em blocos) em que os membros do grupo devem estar para compartilhar experiência em mortes.                                    |
| NpcDeathCommonEventStartRange | number | 0       | Configura o intervalo (em blocos) em que os membros do grupo devem estar para acionar Eventos Comuns de mortes causadas por outros membros do grupo. |

## SMTP

### Veja: [Passwords](./advanced/passwords)

| Name        | Type    | Example                      | Description                                                              |
| ----------- | ------- | ---------------------------- | ------------------------------------------------------------------------ |
| FromAddress | string  | noreply@ascenciongamedev.com | Configura o endereço a partir do qual o servidor enviará e-mails.        |
| FromName    | string  | Ascencion Game Development   | Configura o nome que o servidor usará para se identificar nos e-mails.   |
| Host        | string  | smtp.myprovider.com          | Configura o servidor SMTP que o servidor usará para enviar e-mails.      |
| Port        | number  | 587                          | Configura o número da porta usada para se comunicar com o servidor SMTP. |
| UseSsl      | boolean | true                         | Configura se o servidor SMTP usa SSL.                                    |
| Username    | string  | myusername@myprovider.com    | Configura o nome de usuário usado para autenticar com o servidor SMTP.   |
| Password    | string  | mypassword                   | Configura a senha usada para autenticar com o servidor SMTP.             |

## Sprites

| Name                   | Type   | Example | Description                                                                                                                                 |
| ---------------------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| IdleFrames             | number | 4       | Configura a quantidade de quadros que o sprite de animação idle contém.                                                                     |
| NormalFrames           | number | 4       | Configura a quantidade de quadros que o sprite de animação normal contém.                                                                   |
| CastFrames             | number | 4       | Configura a quantidade de quadros que o sprite de animação de conjuração contém.                                                            |
| AttackFrames           | number | 4       | Configura a quantidade de quadros que o sprite de animação de ataque contém.                                                                |
| ShootFrames            | number | 4       | Configura a quantidade de quadros que o sprite de animação de ataque de tiro contém.                                                        |
| WeaponFrames           | number | 4       | Configura a quantidade de quadros que o sprite de animação de ataque de arma contém.                                                        |
| NormalSheetAttackFrame | number | 3       | Configura a animação da planilha normal para usar para atacar quando não houver sprites de animação disponíveis.                            |
| NormalSheetDashFrame   | number | 1       | Configura a animação da planilha normal a ser usada para traço quando não há sprites de animação disponíveis.                               |
| MovingFrameDuration    | number | 200     | Configura o tempo (em milissegundos) que cada quadro de movimento é exibido antes de passar para o próximo.                                 |
| IdleFrameDuration      | number | 200     | Configura o tempo (em milissegundos) que cada quadro idle é exibido antes de passar para o próximo.                                         |
| TimeBeforeIdle         | number | 4000    | Configura o tempo (em milissegundos) que leva após a última ação de um jogador antes que o idle comece a ser reproduzida quando disponível. |

## Passability

| Name   | Type    | Example | Description                                                                         |
| ------ | ------- | ------- | ----------------------------------------------------------------------------------- |
| Arena  | boolean | false   | Configura se os jogadores podem caminhar entre si nos tipos de mapa Arena.          |
| Normal | boolean | false   | Configura se os jogadores podem percorrer uns aos outros em tipos de mapas normais. |
| Safe   | boolean | true    | Configura se os jogadores podem percorrer uns aos outros em tipos de mapas seguros. |
