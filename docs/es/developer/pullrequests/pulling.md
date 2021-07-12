# Extracción de actualizaciones desde el repositorio oficial.
Una vez que tengas tu propio repositorio en GitHub, podrás extraer manualmente las actualizaciones desde el repositorio oficial.

Empieza por ir a GitHub.com e ingresa a tu repositorio personal de Intersect. Luego dirigete a la pestaña de _Solicitudes de extracción_ ("Pull Requests") y presiona el botón _Nueva solicitud de extracción_ ("New Pull Request").

![repo](https://www.ascensiongamedev.com/resources/filehost/c2325ab7d146e6c14c8ee0b8fd55126e.png)

Al configurar una solicitud de extracción, observa la dirección de la flecha. En esta ocasión, queremos extraer desde el repositorio oficial de Ascension Game Dev a tu repositorio personal.

![compare](https://www.ascensiongamedev.com/resources/filehost/dc60b081a0dd64cecca6039487ca959b.png)

Selecciona qué _rama_ ("branch") te gustaría actualizar (Master ó Development) y luego da click en _Crear solicitud de extracción_ ("Create Pull Request").

![branches](https://www.ascensiongamedev.com/resources/filehost/2d8a6049391654cbcc1053a70b70fbdb.png)

Se te dará la opción de especificar un título y una descripción para la solicitud de extracción, pero ya que solo estamos actualizando _tus ramas de código_, no importa demasiado y queda a tu elección. Una vez que esté listo, dale click en _Crear solicitud de extracción_ ("Create Pull Request") nuevamente.

![openpr](https://www.ascensiongamedev.com/resources/filehost/18224901e5a893e5ba501e823b005efb.png)

Continúa e intenta fusionar la solicitud de extracción haciendo click en el botón _"Merge pull request"_.

![merge](https://www.ascensiongamedev.com/resources/filehost/5133efdbc9b8ae2ef1b44c29e40b49e3.png)

Dependiendo de los cambios que hayas realizado en _tus ramas_, es posible que te encuentres con conflictos de fusión. Click [aquí](./developer/modify/conflicts.md) para obtener más información sobre los conflictos de fusión y cómo resolverlos.

Después de fusionar, asegúrate de extraer los cambios en la aplicación Github Desktop. (¡Quizas debas realizar un _"fetch"_ antes! lo que descargará el contenido remoto, pero no actualizará el estado de trabajo del repositorio local, por lo que tu trabajo actual no se verá afectado sino hasta que realizes la extracción desde el origen remoto.)

![pull](https://www.ascensiongamedev.com/resources/filehost/cfb1dc1b3d9c6cb5aef42d20eff0a3ed.png)




