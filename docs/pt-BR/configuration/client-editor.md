# Client and Editor `config.json`

| Name           | Type     | Example                           | Description                                                                                                              |
| -------------- | -------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Host           | string   | localhost                         | O endereço IP ou nome do host do servidor.                                                                               |
| Port           | integer  | 5400                              | Porta do servidor                                                                                                        |
| GameFont       | string   | sourcesansproblack                | O nome da fonte a ser usada para renderização sem interface do usuário                                                   |
| EntityNameFont | string   | sourcesansproblack                | O nome da fonte a ser usada para nomes de entidade.                                                                      |
| ChatBubbleFont | string   | sourcesansproblack                | O nome da fonte a ser usada para o texto do balão de bate-papo.                                                          |
| ActionMsgFont  | string   | sourcesansproblack                | O nome da fonte a ser usada para mensagens de ação.                                                                      |
| UIFont         | string   | sourcesansproblack,8              | O nome e tamanho da fonte a ser usada para janelas sem estilo (como debug/admin) delimitadas por vírgulas (`name,size`). |
| ChatLines      | integer  | 100                               | O número de linhas a serem salvas para rolagem de bate-papo.                                                             |
| MenuMusic      | string   | Game-Menu_Looping.ogg             | O nome do arquivo de música a ser reproduzido no menu principal (o arquivo deve estar em `resources/music`).             |
| MenuBackground | string   | background.png                    | O nome do arquivo de imagem a ser exibido no menu principal (o arquivo deve estar em `resources/gui`).                   |
| IntroImages    | string[] |                                   |                                                                                                                          |
| UpdateUrl      | string   | http://localhost:8080/update.json | A URL para o arquivo de manifesto de atualização gerado pelo editor (veja: [Auto Updater](./deploy/autoupdater.html)).   |
