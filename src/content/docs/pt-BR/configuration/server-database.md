---
title: Server Database
---

| Name     | Type   | Example   | Description                                                                                                      |
| -------- | ------ | --------- | ---------------------------------------------------------------------------------------------------------------- |
| Type     | string | sqlite    | Configura o tipo de banco de dados ao qual o servidor se conectará. Atualmente suporta **sqlite** e **mysql**.   |
| Server   | string | localhost | Configura o servidor de banco de dados ao qual o servidor se conectará. (se aplicável)                           |
| Port     | number | 3306      | Configura a porta do banco de dados à qual o servidor se conectará. (se aplicável)                               |
| Database | string |           | Configura o nome do banco de dados ao qual o servidor se conectará. (se aplicável)                               |
| Username | string |           | Configura o nome de usuário que o servidor usará para se conectar ao banco de dados. (se aplicável)              |
| Password | string |           | Configura a senha que o servidor usará para se conectar ao banco de dados. (se aplicável)                        |
| LogLevel | string | Error     | Configura o nível de log a ser mantido em relação às interações com o banco de dados. (Erro, Aviso, Informações) |
