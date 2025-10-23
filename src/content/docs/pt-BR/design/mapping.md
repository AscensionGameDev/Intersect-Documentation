---
title: Criação de Mapa(Mapping)
---

## Geral
![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/d5dc511e-619c-4e17-bced-6a22d6eba440)

Grande parte do seu tempo criando um ORPG 2D(RPG Online 2D) será dedicada a projetar mapas, para construir um mundo de jogo amplo e detalhado.

Os passos a seguir ajudarão você a criar seu primeiro mapa.

## Criando ou Editando Mapas ##

> - Clique na ferramenta **Caneta**(Pen Tool) ![Pen Tool](https://www.ascensiongamedev.com/resources/filehost/a20847da4a43f52234ccda97b1125a88.png) na barra de menus acima do seu mapa.
> - Selecione **Pisos**(Tiles) no painel **Camadas do Mapa**(Map Layers).
> - Use o teu mouse para clicar em um piso(tile) clicando com o botão esquerdo do mouse, ou selecionar varios pisos segurando o clique do mouse, arrastando o mesmo e soltando botão de clique.
> - Por fim, clique e arraste o mouse sobre o mapa para desenhar os pisos(tiles) selecionados.
![](http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif)
> - Parabéns! Você está criando seu mapa! 🎉 Não se esqueça de salvar suas alterações clicando no ícone de Salvar no canto superior esquerdo da tela.![](https://www.ascensiongamedev.com/resources/filehost/7f974a7fc91ef6666e3211c8622fe088.png)

## Camadas(Layers)

Durante a criação de mapas, você perceberá que precisa posicionar objetos como casas, árvores e arbustos acima do chão.
É aí que entram as camadas (layers).
Na aba **Tiles** do painel **Map Layers** há um grupo com cinco ícones:

![Map Layers](https://www.ascensiongamedev.com/resources/filehost/e96fbf144210c97ebdd679bfac49e06a.png)

Cada ícone representa uma camada de tile.
Ao clicar em um deles com o botão esquerdo, você muda para essa camada.
O ícone selecionado exibirá o rosto do personagem colorido, indicando qual camada está ativa.

- Os tiles da primeira camada aparecem abaixo de todas as outras camadas. Costuma ser o abismo(vazio em preto), ou o chão gramado, ou pisos de um castelo, ou o chão de areia de um deserto, etc.
- A segunda camada(Mask) se sobrepõe(fica em cima) a primeira(Ground[chão]) mas fica abaixo da terceira(Mask 2).
- A terceira camada(Mask 2) se sobrepõe a segunda(Mask 1) mas não sobrepõe a quarta camada(Fringe).
- E a quarta camada(Fringe 2) se sobrepõe a terceira(Fringe).
- Por tanto, um layer sobrepõe o outro para que você possa desenhar um estrutura em cima de outra estrutura.

Antes de continuar, vamos nomeá-las:

- [1º Camada(Layer)] Ground (Terreno/terra/chão)
- [2º Camada(Layer)] Mask (Mascara 1)
- [3º Camada(Layer)] Mask 2 (Mascara 2)
- [4º Camada(Layer)] Fringe (Sobreposição 1)
- [5º Camada(Layer)] Fringe 2 (Sobreposição 2)

Usar múltiplas camadas é o que permite colocar árvores e outros objetos sobre outros tiles.
![](http://www.ascensiongamedev.com/resources/filehost/1b0126badf74d9bcdd0fd115e476c106.gif)

Perceba que os dois últimos ícones têm desenhos sobre o rosto do personagem — essas são as camadas Fringe, que aparecem acima dos jogadores e NPCs no jogo.

No exemplo acima, as árvores inteiras foram colocadas na camada Mask.
Os tiles do chão (Ground) e as árvores (Mask) são desenhados abaixo do personagem, dando o efeito indesejado de o jogador caminhar sobre as árvores:

![](https://www.ascensiongamedev.com/resources/filehost/5db4fbdae4be4fe060651bb3849d2300.gif)

A solução não é simplesmente mover a árvore inteira para a camada Fringe, pois não queremos que o tronco apareça acima do personagem.
![](href="http://www.ascensiongamedev.com/resources/filehost/6814ea253162f66d65bae1012f9ca605.gif)
Então precisamos encontrar um meio-termo.

O equilíbrio ideal é colocar a parte inferior da árvore na camada Mask e a parte superior na camada Fringe. 
![](http://www.ascensiongamedev.com/resources/filehost/be935bfd755be1bf55ed9ec34e989949.gif)

Assim, obtemos exatamente o efeito desejado — graças às camadas!

![Working Layers](https://www.ascensiongamedev.com/resources/filehost/6c2d4d1d52fd65145f5e44271b3b1bd1.gif)

### Conjunto de Tiles(Tilesets) e Tipos de Tiles(Tile Types)
Nas propriedades da camada, estão os conjuntos de tiles e os tipos de tiles.
Os tilesets podem ser encontrados na subpasta do seu cliente, `resources\tilesets`.

![Tileset and Types](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/639e0c20-f146-440b-a8ce-bc4e7d3fcd2e)

- A lista de tipos de tiles é descrita abaixo.
	- *Normal*: Permite definir tiles normais no mapa. Você pode selecionar vários tiles clicando e arrastando a seleção pelo conjunto de tiles.
 	- *Autotile (VX Format)*: Permite selecionar um autotile de tile 2x3.
  - *Fake (VX Format)*: Permite simular um autotile usando 1 tile.
  - *Animated {VX Format)*: Permite selecionar um tile animado 6x3.
  - *Cliff (VX Format)*: Permite selecionar um tile 2x2.
  - *Waterfall (VX Format)*: Permite selecionar um tile de cachoeira animado 2x3.
  - *Autotile (XP Format)*: Permite selecionar um autotile de tile 3x4.
  - *Animated (XP Format)*: Permite selecionar um tile animado 9x4.

## Atributos(Attributes)

Se você seguiu os passos acima, deve ter notado um grande problema: você pode **atravessar** a árvore! 😅
![Working Layers](http://www.ascensiongamedev.com/resources/filehost/194f6d759286418f42910c9aafca0962.gif)

Mas não se preocupe — vamos corrigir isso!
Os atributos funcionam como uma sexta camada do mapa.
Eles permitem atribuir propriedades especiais aos tiles, como bloqueios que impedem o jogador de passar.

No editor, abra a aba **Attributes** no painel **Map Layers**.
Selecione o atributo **Block** e posicione-o sobre o tronco da árvore.
![Working Layers](http://www.ascensiongamedev.com/resources/filehost/60984ce488de64b42ddec0bed012cb52.gif)

Com o atributo **Block**, sua árvore agora será exibida corretamente e o jogador não conseguirá mais atravessá-la — mesmo tentando! 💪

![No More No Clip!](https://www.ascensiongamedev.com/resources/filehost/8ae4ea6cfdb97b1f7e1cf0efa4d1677a.gif)

O atributo Block será o que você mais usará.
Mas aqui está um resumo rápido dos outros atributos e suas funções:

| Atributo       | Descrição                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block           | Marca um tile como intransponível — nem jogadores nem NPCs podem atravessá-lo.                                                                                                                                                              |
| NPC Avoid       | Funciona como um bloqueio apenas para NPCs. Útil para impedir que monstros entrem ou nasçam em áreas seguras ou bloqueiem passagens estreitas.                                                                                                                                                |
| Warp            | Quando o jogador pisa nesse tile, ele é teletransportado para um local do jogo definido por você. (Uma porta ou entrade de uma caverna por exemplo.)                                                                                                                                                                 |
| Item Spawn      | Um item criado por você aparecerá periodicamente nesse tile.                                                                                                                                                                                              |
| Map Sound       | Toca um efeito sonoro nesse tile. O som aumenta ou diminui de volume conforme o jogador se aproxima ou se afasta. (Como um ferreiro ou uma cachoeira.)                                                                                           |
| Resource        | Faz com que recursos coletáveis apareçam nesse tile (como madeira, minério ou peixes). Será detalhado na documentação do Resource Editor.                                                                                     |
| Animation       | Exibe uma animação configurada no editor de animações. Isso pode dar vida ao seu mundo — por exemplo, um moinho girando. <a href="https://www.freemmorpgmaker.com/wp-content/uploads/2017/10/windmill.gif">Exemplo</a>
| Grappling Stone | Permite o uso de ganchos (grappling hooks) para o jogador alcançar áreas inacessíveis. Explicado em detalhe na documentação do Projectile Editor.                                             |
| Slide           | Faz o jogador escorregar em uma direção pré-definida. Ideal para criar puzzles, armadilhas, desafios e mais!                                                                                                                                                    |

## Lights
![light](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/573ea6be-bfe5-4e35-ae25-c40569506d6c)

Clicar na aba **Lights** exibirá a janela acima. Clique duas vezes no mapa para definir sua iluminação e abrir a janela de opções.

- *Select Color*: Permite definir uma cor para sua luz.
- *Offset X*: Permite definir um deslocamento horizontal em pixels, um número negativo desloca para a esquerda, um número positivo desloca para a direita.
- *Offset Y*: Permite definir um deslocamento vertical em pixels, um número negativo desloca para cima, um número positivo desloca para baixo.
- *Intensity*: Permite definir a intensidade da sua luz. Isso intensifica a cor em 255, enquanto 0 seria alfa.
- *Size*: Permite definir o tamanho da sua luz.
- *Expand Amt*: Permite expandir o seu raio.

Ao terminar de definir suas opções, clique em 'Save' para salvar a luz (certifique-se de salvar também o seu mapa!). Clicar em "Reverter" redefinirá(desfará) as opções de luz.

## Events
![event](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/822d6a85-bfe5-4979-bac4-0ad742f3df2b)

Ao clicar na aba **Events** janela acima será exibida. Clique duas vezes no mapa para definir seu evento e o editor de eventos será exibido.
Clique [aqui](../events/introduction.md) para obter mais informações sobre como configurar eventos!

## NPC's
![npc](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/bbce0279-7ee7-4b1b-8685-83fd2099e693)

Clicando na aba **Npcs**, será exibida a janela do mesmo. Veremos para que servem todas as configurações.

- *Declared*: Clicar aqui permitirá que você defina um ponto de spawn no seu mapa que declara onde seu NPC irá aparecer. Clique duas vezes no mapa após adicionar seu NPC.
- *Random*: Clicar aqui irá randomizar(deixará aleatório) o ponto de spawn do NPC.
- *Direction*: Permite que você defina uma direção para o NPC aparecer.
- *Add/Remove Map Npcs*: Permite que você selecione um NPC para adicionar/remover. Clique no NPC na lista e depois clique em "Remover" para remover o NPC. Clique em "Adicionar" para adicionar o NPC à lista do mapa.

## Map Properties
![Properties](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/4342f1e9-6080-49c0-97fa-557bc6510550)

No canto inferior direito do editor de mapas, você verá uma janela chamada "Propriedades do Mapa". Vamos explicar todas as configurações.

### Audio

- *Music*: Permite que você defina música para o seu mapa. As músicas estão localizadas na subpasta do seu cliente `resources\music` e estão no formato `.ogg`.
- *Sound*: Permite que você defina som para o seu mapa. Os sons estão localizados na subpasta do seu cliente `resources\sounds` e estão no formato `.wav`.

### Fog(Neblina)

- *Fog*: Permite que você defina neblina para o seu mapa. As neblinas estarão localizadas na subpasta do seu cliente `resources\fogs`.
- *Fog Alpha*: Permite que você defina o alfa(transparencia) da sua neblina, sendo 255 sólido e 0 invisível.
- *Fog X Speed*/*Fog Y Speed*: Permite definir a velocidade de movimento horizontal/vertical da Névoa (0 sendo nenhum movimento, 5 sendo o mais forte).

### General

- *Name*: Permite definir um nome para o seu mapa.
- *Zone Type*: Permite definir um tipo de zona, as opções são (`Normal`, `Safe`(seguro), `Arena`). Normal e Arena são habilitados para PvP. Safe são lugares seguros, como cidade e dentro de casas ou lojas.

### Lighting

- *Brightness*: Permite definir o brilho dos mapas internos. 100 é o mais claro, enquanto 0 é a escuridão. (Tipo dentro de uma caverna ou porão que precisa de uma tocha ou lanterna.)
- *Is Indoors*: Permite definir seu mapa como um mapa interno. Os interiores não são afetados pelas configurações dia/noite, nem pelas configurações de neblina ou clima. (Tipo dentro de um bar, ou uma loja, casa ou igreja que está sempre claro.)
- *Player Light Color*: Permite dar aos jogadores uma fonte de luz colorida para quando estiver escuro.
- *Player Light Expand*: Permite definir um esmaecimento em torno da luz do jogador, de 0,00 a 1,00. (O alcance da luz que vai se apagando conforme se afasta do alcance do personagem.)
- *Player Light Intensity*: Permite definir a intensidade da luz do jogador. 255 é o mais forte, enquanto 0 é invisível.
- *Player Light Size*: Permite definir o tamanho da luz do jogador.

### Misc

- *Overlay Graphic*(Gráfico de Sobreposição): Permite definir um gráfico que aparecerá acima do mapa. As imagens serão encontradas na subpasta do seu cliente, `resources\images`.
- *Panorama*: Permite definir um gráfico que aparecerá abaixo do mapa. Também na mesma subpasta. (O fundo quando se esta em cima de uma montanha e se vê ao longe uma floresta um ma cidadezinha.)

### Overlay(Sobreposição)

- *AHue*: Permite definir um matiz de cor alfa(transparência). 0 sendo invisível, 255 sendo sólido.
- *BHue*: Permite definir um matiz azul(Tonalidade em azul). 255 sendo a cor mais forte.
- *GHue*: Permite definir um matiz verde(Tonalidade em verde). 255 sendo a cor mais forte.
- *RHue*: Permite definir um matiz vermelho(Tonalidade em vermelho). 255 sendo a cor mais forte.

### Player

- *Hide Equipment*: Permite que você pare de renderizar os equipamentos do jogador.(Paperdoll)

### Weather

- *Weather*: Permite definir partículas climáticas neste mapa. Ele mostrará uma lista de animações do editor de animação. (Tipo nevando, chovendo ou tempestade de areia.)
- *Weather Imtemsity*: Permite definir a intensidade do clima. 255 é o mais forte, enquanto 0 é invisível.
- *Weather X Speed*: Permite definir o movimento horizontal do clima. 5 é o mais forte, 0 é a ausência de movimento.
- *Weather Y Speed*: Permite definir o movimento vertical do clima. 5 é o mais forte, 0 é a ausência de movimento.

## Toolbar

![Toolbox](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/c2cb7981-72fa-4af9-bf4f-800d3c2318c5)

- Clicando em ![New](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/08cb6470-ee6f-44ed-83fb-ceba6237d98d) criará um novo mapa.
- Clicando em ![Save](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/9ce7858d-28b8-4362-993c-0bd17ea06ee0)permitirá que você salve o mapa atual em que está. (Atalho: Ctrl+S)
- Clicando em ![Cut](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/a033e928-7677-46ad-8bd2-24d94c13e425) permitirá que você recorte tiles. (Atalho: Ctrl+X)
- Clicando em ![Copy](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/0b31a6dd-0dba-49da-90c3-52969ff81fa7) permitirá copiar tiles. (Atalho: Ctrl+C)
- Clicando em ![Paste](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/ceb38220-946a-4ae7-b4e5-6724f532fd26) irá colar tiles copiado ou recortado. (Atalho: Ctrl+V)
- Clicando em ![Undo](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/0a8e2083-1b93-42cc-af33-bfef97bb7c00) desfará uma ação. (Atalho: Ctrl+Z)
- Clicando em ![Redo](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/42ccc2c4-ec4f-4ddc-bb5b-8b291b982c05) refará a ação desfeita. (Atalho: Ctrl+Y)
- Clicando em ![Brush](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/a19f4919-ec53-4a45-830e-8ea36a3454fd) permitirá colar tiles individuais. (Atalho: B)
- Clicando em ![Selection](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/96404e36-e55d-4ce7-803f-3612270a95d7) permitirá que você selecione blocos em um mapa ao clicar e arraste com as teclas cima/baixo e esquerda/direita. (Atalho: M)
- Clicando em ![Rectangle](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/3bacadf7-b4c6-4e41-888b-e69fb6afd4e8) permitirá desenhar vários blocos em forma de retângulo. (Atalho: R)
- Clicando em ![Flip H](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/77971fb1-4b5f-4bc5-abce-569970572714) irá inverter sua seleção horizontalmente. (Atalho: PageUp)
- Clicando em ![Flip V](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/b6fa6df9-9497-4e61-8aae-55740bbfcf6f) inverterá sua seleção verticalmente. (Atalho: PageDown)
- Clicando em ![Fill](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/522e4255-4df0-4b9c-acd0-9ff5d9745f72) permitirá que você preencha o mapa inteiro com um bloco selecionado na camada em que estiver desenhando o mapa. (Atalho: F)
- Clicando em ![Erase](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/22f4a026-b40a-4393-9821-7ba45fd50e04) permitirá que você apague qualquer camada selecionada. (Atalho: E)
- Clicando em ![Eyes](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/b49e9119-2b4f-4d63-bd37-44592a0a46f0) permitirá que você clique em um bloco para duplicá-lo. (Atalho: I)
- Clicando em ![Sim Day Night](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/5a14f1e1-964e-4968-8a4d-b24a56d6f19e) permitirá que você simule dia/noite dentro do editor.
- Clicando em ![Screenshot](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/4f024576-364d-4ad4-8852-1e0c2835b1ac) permitirá que você faça uma captura de tela do seu mapa.
- Clicando em ![Start Client](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/715c2a6c-e963-4c52-8f5d-c5e8ff5bc2ea) permitirá que você execute o cliente depois que a configuração do caminho for definida em (`File`, `Options`).

> Por favor, acesse [World Design](./world.md) ara obter informações sobre como conectar/desconectar mapas!

