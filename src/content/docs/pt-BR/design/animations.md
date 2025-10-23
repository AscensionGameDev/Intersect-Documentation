---
title: Animações
---

## Guias
- [Guia de Animações Sinalizadas.](./telegraphing.md)

## Visão Geral
A criação de animações é feita através do Editor de Animações `Animation Editor`, localizado na aba `Game Editors` da interface principal.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/67b4d83a-8209-4bca-9165-4bd77f3532dd)


## Gerenciando Animações
![CRUD and Sorting Menu](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/618685af-4820-4490-a647-7d05230cbf1f)

- Para adicionar uma nova animação, clique no primeiro ícone no canto superior esquerdo ou use o atalho Ctrl+N.
- Para excluir uma animação existente, selecione-a na lista e clique no segundo ícone.
- Para organizar a lista em ordem alfabética, clique no terceiro ícone.
- Você pode copiar uma animação existente clicando na animação na lista e depois clicando no quarto ícone superior esquerdo ou usando o atalho Ctrl+C.
- Você pode colar a cópia dentro de uma Nova Animação ou substituir outra clicando naquela Animação na lista e depois clicando no quinto ícone superior esquerdo ou usando o atalho Ctrl+V.
- Para desfazer uma alteração, clique no sexto ícone (Isso não reverte exclusões de animações).

## Editando Animações
É importante notar que existem duas seções no editor: A seção à direita reproduzirá a animação abaixo do alvo, enquanto a seção à esquerda reproduzirá a animação sobre o alvo. Tenha isso em mente ao criar sua animação, pois você só precisará utilizar uma seção.

### Geral
![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/6b969e1d-7416-47ee-aa13-aa12034a038e)

- *Name*: Defina um nome para a animação.
- *Sound*: Quando a animação for reproduzida, ela reproduzirá esse som.
- *Simulate Darkness*: Permite testar como a animação ficará em mapas claros ou escuros.
- *Folder*: Você pode clicar no X ao lado desse campo para criar uma nova pasta na lista de animações, ajudando na organização.
- *Complete Sound Playback After Anim Dies*(Reproduzir Som até o Fim após o Fim da Animação): Com essa opção marcada, o som será reproduzido até o fim, mesmo após o término da animação.
- *Swap Upper/Lower*(Alternar Superior/Inferior): Move a animação entre as duas seções (acima ou abaixo do alvo).

### Opções de Quadro (Frame Options)
![Frame Opts Lower](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/ab4efb7c-c159-4e0a-9c64-ebfa0c6f894a)![Frame Opts Higher](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/7bbe0be7-56d0-4810-9993-f81b5142c133)

- *Graphic*(Gráfico): Escolha um arquivo gráfico localizado na pasta do cliente `resources\animations folder`.
- *Frames*: Isso permite que você role por cada quadro para definir opções de iluminação por quadro(frame).
- *Playback*: Mostra a animação em tempo real, incluindo os efeitos de iluminação ao simular escuridão.
- *Clone Previous Frame*: (Clonar Quadro Anterior): Copia as configurações do quadro(frame) anterior para agilizar a edição.
- *Horizontal*: Define quantos quadros a animação possui na horizontal.
- *Graphic Vertical*: Define quantos quadros a animação possui na vertical.
- *Frame Duration (ms)*(Duração do Quadro): Define o tempo de exibição de cada quadro, em milissegundos (1000 ms = 1 segundo).
- *Loop Count*(Contagem de Loops): Define o número de repetições da sequência de animação. (Não é necessário para animações de mapa ou eventos.)
- *Disable Rotations*(Desativar Rotações): Marque esta opção para animações estáticas, que não têm direção. Rotações são ideais para animações de projéteis.
- *Render Above Player*(Renderizar Acima do Jogador): Faz a animação ser exibida acima do personagem.
- *Render Below Fringe*(Renderizar Abaixo da Camada Fringe): Faz a animação ser exibida atrás de paredes, árvores ou outros tiles na camada Fringe.

### Edição de Luz (Light Editing)
![Light Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/d2b28036-b64b-4a63-911d-03a497aa76a3)

- *Offset X*: Desloca horizontalmente a luz em pixels. Valores positivos movem para a direita, negativos movem para a esquerda.
- *Offset Y*: Desloca verticalmente a luz em pixels. Valores positivos movem para baixo, negativos movem para cima.
- *Size*(Tamanho): Define o tamanho da área de luz.
- *Expand Amt*(Expansão): Aumenta a intensidade e alcance da luz.
- *Intensity*(Intensidade): O valor padrão é 255, que representa brilho total. Reduza o valor para tornar a animação menos iluminada.
- *Color*(Cor): Permite selecionar a cor da luz.![Dripper](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/ba14438f-b82f-4cd7-8f54-46a375052dd9)
- *Revert*(Reverter): Retorna às configurações anteriores. ![Revert](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/789c9690-9551-4ca6-ac02-98786d112082)

Agora que abordamos todo o processo de criação de animações, podemos clicar em 'Salvar' e utilizar a animação nos demais editores.
As animações podem ser aplicadas em vários lugares dentro do Intersect:

- *Spell Editor*: Fundamental para criar feitiços e magias.
- *Projectile Editor*: Usada em animações de projéteis, como flechas e magias lançadas.
- *Map Editor*: Pode ser usada no atributo Animation, adicionando efeitos diretamente ao mapa.
- *Item Editor*: Pode ser aplicada à maioria dos itens (ou até todos).
- *Class Editor*: Sim, há até uma opção de animação aqui para magos desarmados!
- *Event Editor*: Permite exibir animações durante eventos — ideal para ícones de NPCs de missão ou efeitos em diálogos.
- *Resource Editor*: Sim, elas estão em todos os lugares!

Se precisar de ajuda para configurar suas animações em qualquer um desses editores, consulte a documentação correspondente de cada editor para mais detalhes!
