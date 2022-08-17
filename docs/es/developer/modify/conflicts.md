# Abordando conflictos
Un conflicto de _fusión_ sucede cuando se intenta combinar ramas en las que se han modificado las mismas líneas o secciones de código. Desafortunadamente, en estos casos Git requiere un poco de ayuda para resolver las cosas.

Tanto si trabajas con pull requests como si intentas fusionar ramas localmente, en algún momento tendrás que enfrentarte a un conflicto de fusión.

En el caso de un conflicto de fusión, Git te alertará de los archivos que necesitan atención. Dentro de cada archivo encontrarás bloques conflictivos.

![conflictalert](https://www.ascensiongamedev.com/resources/filehost/46efc74d34c68ffe9a424b898f365cb8.png)

He aquí un conflicto con el que tuve que lidiar recientemente.

El código original tenía el siguiente aspecto:

```cs
//Player Out of Range Or Offline
PacketSender.SendChatMsg(
    client, Strings.Trading.outofrange.ToString(),
    CustomColors.NoTarget
);
```

Estábamos trabajando en la refactorización de nuestro código en dos ramas diferentes al mismo tiempo. En una rama estábamos sustituyendo los usos de cliente por los de jugador. En otra rama estábamos refactorizando los colores.

Al fusionar la segunda rama, me quedaba por resolver el siguiente conflicto:

```cs
//Player Out of Range Or Offline
PacketSender.SendChatMsg(
<<<<<<< HEAD
    player, Strings.Trading.outofrange.ToString(),
    CustomColors.NoTarget
=======
    client, Strings.Trading.outofrange.ToString(),
    CustomColors.Combat.NoTarget
>>>>>>> updating-colors
);
```

El ======= separa el código de ambas ramas. En la mitad superior cambiamos cliente por jugador. En la mitad inferior cambiamos CustomColors.NoTarget por CustomColors.Combat.NoTarget.

En algunos casos decidirás mantener el código por encima del divisor, en otros mantendrás el código por debajo del divisor. En este caso queremos mantener el código de ambos, así que actualicé manualmente el archivo para terminar con el código resultante.

```cs
//Player Out of Range Or Offline
PacketSender.SendChatMsg(
    player, Strings.Trading.outofrange.ToString(),
    CustomColors.Combat.NoTarget
);
```

Tras resolver el conflicto, eliminar los marcadores de conflicto y guardar el archivo, GitHub permitió que la fusión se realizara según lo previsto.

![mergeable](https://www.ascensiongamedev.com/resources/filehost/98036a1ec4daea465a9526987444d8c7.png)

En tus actividades de programación eventualmente acabarás encontrando conflictos de fusión. Aunque son molestos, generalmente son fáciles de resolver. Esperamos que este ejemplo y su explicación te ayuden a lidiar con este proceso.
