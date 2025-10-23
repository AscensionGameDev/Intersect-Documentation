---
title: Sobre
---

O Intersect é um motor de jogos MMORPG 2D de código aberto, desenvolvido em C# com MonoGame.

## Requisitos mínimos

### Cliente

- Sistema operacional: Windows 7(com o .NET Framework 4.6.2); macOS 10.10+ (com Mono); Linux(com Mono).
- Processor: Intel i3
- Memória: 1 GB RAM
- Processador gráfico: 1 GB VRAM
- OpenGL: Versão 2.1+ e extensões ARB
- Armazenamento: 1 GB de espaço disponível

### Editor

- Sistema operacional: Windows 7+ (.NET Framework 4.6.2) — sem suporte multiplataforma
- Processor: Intel i3
- Memória: 1 GB de RAM
- Processador gráfico: 1 GB VRAM
- DirectX: 9.0c+ com suporte a shaders
- Armazenamento: 1 GB de espaço disponível

### Servidor

- Sistema operacional: Windows 7(com o .NET Framework 4.6.2); macOS 10.10+ (com Mono); Linux(com Mono).
- Processor: Intel i3
- Memória: 2 GB RAM
- Rede: Conexão de internet banda larga

## Compatibilidade Multiplataforma

- Windows: (100% compatível)
- Linux: Compatível (Servidor e Cliente)
- macOS: Compatível (Servidor e Cliente)

O Editor do Intersect utiliza várias bibliotecas de terceiros, incluindo DockPanelSuite, que fazem diversas chamadas à API Win32. Por causa disso, o editor não pode ser executado em outros sistemas operacionais.
Essas bibliotecas desempenham um papel fundamental em tornar o Intersect amigável e fácil de usar — por esse motivo, não pretendemos (e provavelmente nunca iremos) oferecer compatibilidade multiplataforma para o programa do editor.

## Licença e Custo (100% Gratuito!)

Você pode criar jogos com o Intersect e distribuí-los, vendê-los ou lucrar com eles livremente.
O Intersect é dividido em três componentes principais:
- Cliente do Jogo (licença MIT)
- Editor (licença GPL)
- Servidor (licença GPL)

A única razão pela qual aplicamos licenças um pouco mais restritivas ao Editor e ao Servidor é para impedir que outros desenvolvedores vendam o motor sem divulgar as modificações feitas no código-fonte.
