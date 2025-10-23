---
title: Visão Geral do Editor
---

![Game Editor](https://www.ascensiongamedev.com/resources/filehost/c399bc35aad37d828ddda1986538e7bd.png)

Nosso editor é bastante avançado e pode parecer um pouco intimidante no início.
Esta página apresentará rapidamente o nome e a função de cada painel e área, oferecendo uma visão geral de como tudo se encaixa.

&nbsp;

## Map Editor(Editor de Mapas)

Vamos começar pela grande área central — este é o Editor de Mapas.
Diferente da imagem acima, o seu mapa provavelmente estará vazio no início.(Tudo preto, pronto para nascer um novo mundo.)

Usando o painel Map Layers (Camadas do Mapa) à esquerda, você pode posicionar blocos (tiles) dos tilesets no mapa para começar a criar o mundo do seu jogo.

**Começando a Criar Mapas:**

> - Clique na** Ferramenta Caneta**(Pen Tool) ![Pen Tool](https://www.ascensiongamedev.com/resources/filehost/a20847da4a43f52234ccda97b1125a88.png) na barra de menus acima do seu mapa.
> - Selecione o sprite do **piso**(Tile) no painel **Camada de Mapas**(Map Layers) a esquerda.
> - Use o mouse para selecionar um tile clicando nele, ou um grupo de tiles mantendo o clique e arrastando o mouse. Então posicione o mouse dentro do map editor(que esta vazio). <a href="http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif" data-lity><i class="fa fa-play-circle"></i></a>
> - Por fim, apenas clique e solte ou clique e arraste o mouse sobre o mapa vazio para desenhar os tiles selecionados. <a href="http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif" data-lity><i class="fa fa-play-circle"></i></a>
> - Parabéns! Você está criando seu mapa! 🎉
> - Não se esqueça de salvar suas alterações clicando no ícone de Salvar no canto superior esquerdo da tela. ![](https://www.ascensiongamedev.com/resources/filehost/7f974a7fc91ef6666e3211c8622fe088.png)

Não entraremos em detalhes sobre o editor de mapas aqui.
Para mais informações, consulte a seção Desenho de Mundo(World Design).

&nbsp;

## Map Layers (Camadas do Mapa)

Esta é a área onde você pode selecionar diferentes tiles, atributos, luzes, eventos e NPCs para posicionar no mapa.

![Map Layers](https://www.ascensiongamedev.com/resources/filehost/ffcf5ccf19de31db8389a08b9bafea3c.png)

- Pisos(Tiles) são os gráficos que compõem o mundo do jogo.
- Atributos(Attributes) são colocados sobre os tiles e dizem ao jogo como o jogador pode interagir com eles. Os Atribbutos incluem blocos (para impedir o acesso a certas áreas), teletransportes (warps), animações e muito mais!
- Luzes(Lights) são luzes. Por fim, você configurará como deseja que o tempo passe no seu jogo e se deseja que ele fique escuro à noite. Se for o caso, você poderá usar luzes para criar efeitos visuais incríveis.
- Eventos(Events) são mais complexos e serão abordados mais adiante. Em resumo, eles permitem criar a história, diálogos, missões, sistemas(por evento), interações e quebra-cabeças do seu jogo.
- NPCs (personagens não jogáveis): Por último, mas não menos importante, é aqui que você adiciona inimigos, monstros e chefes ao mundo. (Mais sobre isso depois!)

&nbsp;

## Lista de Mapas(Map List)

Jogos grandes podem ter dezenas ou até centenas de mapas.
A lista de mapas é onde você pode navegar, organizar e gerenciar todos os mapas criados.

![Map List](https://www.ascensiongamedev.com/resources/filehost/fd600e2516e3b6a54193c5ce5bfce958.png)

Clicando duas vezes em um mapa dessa lista, ele será aberto para edição.
Você também pode criar pastas, reorganizar, renomear ou excluir mapas por aqui.

&nbsp;

## Propriedades do Mapa(Map Properties)

![Map Properties](https://www.ascensiongamedev.com/resources/filehost/6fa0203860907911f251ed13f174b7d2.png)

O painel Map Properties permite personalizar várias configurações do mapa, como:
- Música de fundo
- Nome do mapa
- Opções de clima
- Definir se o mapa é uma zona de combate
- Iluminação
- E muito mais!

&nbsp;

## Barra de Menu(Menu Bar)

![Menu Bar](https://www.ascensiongamedev.com/resources/filehost/f951597a65ac34164090c46e3a640680.png)

A Barra de Menu no topo do editor é o seu ponto de acesso a todas as ferramentas do Intersect.
A linha inferior contém ferramentas de mapeamento, que serão explicadas na página World Design.
Os menus **Arquivo**(File), **Editar**(Edit), e **Vista**(View) oferecem diversas opções de edição de mapas, mas você não precisa se preocupar com elas agora.

Os componentes mais importantes são:
- O menu suspensos **Editores do Jogo**(Game Editors).
- E o menu **Ajuda**(Help).
- (Oque é um menu suspenso? São menus que aparecem em janelas, diferente dos que estão a vista.)

O **Editores do Jogo**(Game Editors) fornece acesso rápido para editar todos os principais componentes do seu jogo.

![Game Editors](https://www.ascensiongamedev.com/resources/filehost/6ab2903c37f843bc11f61e14d1130e90.png)

&nbsp;
O menu de **Ajuda**(Help) dá acesso direto à comunidade do Intersect, onde você pode fazer perguntas ou relatar bugs encontrados.

![Help Menu](https://www.ascensiongamedev.com/resources/filehost/e3bde40e1969c06417565d7c7542951f.png)

O restante desta documentação explicará como usar cada um dos editores acima e como unir tudo isso para criar um jogo incrível.
Quando estiver pronto, clique em Próximo(Next) abaixo para aprender mais sobre **Desenho de Mundo**(World Design).

&nbsp;

## Notas Extras

NAgora é um bom momento para mencionar um recurso útil que adicionamos recentemente ao Intersect.
Abra o teu **Arquivo**(File) -> Menu de **Opções**(Options).
Nele clique no botão **Navegar**(Browse) e selecione o seu **Cliente Intersect.exe**(Intersect Client.exe).

Depois disso, você poderá clicar no ícone verde de ![Play Icon](https://www.ascensiongamedev.com/resources/filehost/b793679bc50386069948727977d26ad5.png) na barra de menu para iniciar o cliente a qualquer momento!
