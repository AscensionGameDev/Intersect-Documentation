# Base de donné du serveur

| Nom                          | Type    | Example     | Description |
|-------------------------------|---------|-------------|-------------|
| Type                          | string  | sqlite      | Configure le type de BDD que le serveur se connectera dessus. Supporte actuellement **sqlite** et **mysql**.|
| Server                        | string  | localhost   | Configures the database server the server will connect to. (if applicable) |
| Port                          | number  | 3306        | Configures the database port the server will connect to. (if applicable) |
| Database                      | string  |             | Configures the database name the server will connect to. (if applicable) |
| Username                      | string  |             | Configures the username the server will use to connect to the database. (if applicable) |
| Password                      | string  |             | Configures the password the server will use to connect to the database. (if applicable) |
| LogLevel                      | string  | Error       | Configures the log level to maintain regarding interactions with the database. (Error, Warning, Info) |
