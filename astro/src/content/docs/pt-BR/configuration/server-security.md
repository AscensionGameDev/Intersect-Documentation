---
title: Server Security
---

| Name           | Type                                   | Example                      | Description                                                                           |
| -------------- | -------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------- |
| PacketFlooding | Veja [PacketFlooding](#packetflooding) |
| IpBlacklist    | array                                  | ["127.0.0.1, 192.168.100.4"] | Configura uma lista negra de endereços IP para não permitir a conexão com o servidor. |

## PacketFlooding

| Name                   | Type                                                   | Example | Description |
| ---------------------- | ------------------------------------------------------ | ------- | ----------- |
| EditorFloodThreshholds | Veja [EditorFloodThreshholds](#EditorFloodThreshholds) |
| PlayerFloodThreshholds | Veja [PlayerFloodThreshholds](#PlayerFloodThreshholds) |
| FloodThreshholds       | Veja [FloodThreshholds](#FloodThreshholds)             |

## EditorFloodThreshholds

| Name                | Type   | Example    | Description                                                                                   |
| ------------------- | ------ | ---------- | --------------------------------------------------------------------------------------------- |
| MaxPacketSize       | number | 2147483647 | Configura o tamanho máximo que um pacote de rede do editor pode ter antes de chutar o editor. |
| MaxPacketPerSec     | number | 2147483647 | Configura o máximo de pacotes por segundo que um editor pode enviar antes de chutá-lo.        |
| KickAvgPacketPerSec | number | 2147483647 | Configura a média máxima de pacotes por segundo que um editor pode enviar antes de chutá-lo.  |

## PlayerFloodThreshholds

| Name                | Type   | Example    | Description                                                                                                  |
| ------------------- | ------ | ---------- | ------------------------------------------------------------------------------------------------------------ |
| MaxPacketSize       | number | 2147483647 | Configura o tamanho máximo que um pacote de rede de jogador logado pode ter antes de chutar o jogador.       |
| MaxPacketPerSec     | number | 2147483647 | Configura o máximo de pacotes por segundo que um jogador logado pode enviar antes de chutar o jogador.       |
| KickAvgPacketPerSec | number | 2147483647 | Configura a média máxima de pacotes por segundo que um jogador logado pode enviar antes de chutar o jogador. |

## FloodThreshholds

| Name                | Type   | Example    | Description                                                                                     |
| ------------------- | ------ | ---------- | ----------------------------------------------------------------------------------------------- |
| MaxPacketSize       | number | 2147483647 | Configura o tamanho máximo que um pacote de rede do cliente pode ter antes de chutar o cliente. |
| MaxPacketPerSec     | number | 2147483647 | Configura o máximo de pacotes por segundo que um cliente pode enviar antes de chutá-lo.         |
| KickAvgPacketPerSec | number | 2147483647 | Configura a média máxima de pacotes por segundo que um cliente pode enviar antes de chutá-lo.   |
