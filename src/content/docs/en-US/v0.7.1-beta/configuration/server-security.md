---
title: Server Security
---

| Name           | Type                                  | Example                      | Description                                                                   |
| -------------- | ------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| PacketFlooding | See [PacketFlooding](#packetflooding) |
| IpBlacklist    | array                                 | ["127.0.0.1, 192.168.100.4"] | Configures a blacklist of IP Addresses to not allow to connect to the server. |

## PacketFlooding

| Name                   | Type                                                  | Example | Description |
| ---------------------- | ----------------------------------------------------- | ------- | ----------- |
| EditorFloodThreshholds | See [EditorFloodThreshholds](#EditorFloodThreshholds) |
| PlayerFloodThreshholds | See [PlayerFloodThreshholds](#PlayerFloodThreshholds) |
| FloodThreshholds       | See [FloodThreshholds](#FloodThreshholds)             |

## EditorFloodThreshholds

| Name                | Type   | Example    | Description                                                                                               |
| ------------------- | ------ | ---------- | --------------------------------------------------------------------------------------------------------- |
| MaxPacketSize       | number | 2147483647 | Configures the maximum size an editor networking packet is allowed to be before kicking the editor.       |
| MaxPacketPerSec     | number | 2147483647 | Configures the maximum packets per second an editor is allowed to send before kicking the editor.         |
| KickAvgPacketPerSec | number | 2147483647 | Configures the maximum average packets per second an editor is allowed to send before kicking the editor. |

## PlayerFloodThreshholds

| Name                | Type   | Example    | Description                                                                                                        |
| ------------------- | ------ | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| MaxPacketSize       | number | 2147483647 | Configures the maximum size a logged in player networking packet is allowed to be before kicking the player.       |
| MaxPacketPerSec     | number | 2147483647 | Configures the maximum packets per second a logged in player is allowed to send before kicking the player.         |
| KickAvgPacketPerSec | number | 2147483647 | Configures the maximum average packets per second a logged in player is allowed to send before kicking the player. |

## FloodThreshholds

| Name                | Type   | Example    | Description                                                                                              |
| ------------------- | ------ | ---------- | -------------------------------------------------------------------------------------------------------- |
| MaxPacketSize       | number | 2147483647 | Configures the maximum size a client networking packet is allowed to be before kicking the client.       |
| MaxPacketPerSec     | number | 2147483647 | Configures the maximum packets per second a client is allowed to send before kicking the client.         |
| KickAvgPacketPerSec | number | 2147483647 | Configures the maximum average packets per second a client is allowed to send before kicking the client. |
