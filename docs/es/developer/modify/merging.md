# Fusionando
En este punto deberías haber creado una rama, hecho algunas modificaciones de código, realizado commits de esos cambios, probado que funcionan (idealmente), y ahora estás listo para traer esos cambios de vuelta a una de tus ramas principales (es decir, _Main_ o _Development_).

Llamamos a este proceso **_Fusión_**, es muy sencillo y puedes hacerlo a través de la aplicación de escritorio y/o interfaz web de GitHub. A continuación se muestran ambas formas de fusionar.

## Fusionando con GitHub Desktop
Antes de intentar fusionar, es importante asegurarse de cambiar a la rama en la que quieres fusionar tus cambios. (¡No la rama en la que has estado trabajando!) Selecciona esa rama en la aplicación GitHub Desktop.

![selectbase](https://www.ascensiongamedev.com/resources/filehost/193129a8fb4dd77d1eec2c29b2583df3.png)

A continuación, haz click en _Branch_ (Rama) en la parte superior y luego en _Merge into current branch..._ (Fusionar en la rama actual...)

![startmerge](https://www.ascensiongamedev.com/resources/filehost/d22e9b7cbf41e3073217ad58a6597002.png)

Selecciona la rama que quieres fusionar (la que has estado trabajando) (1). A continuación, pulsa el botón de fusión (2).

![selectbranch](https://www.ascensiongamedev.com/resources/filehost/cbb1f1c35f427e1025d4036032203f27.png)

GitHub Desktop mostrará que la fusión fue exitosa.

![successfulmerge](https://www.ascensiongamedev.com/resources/filehost/55464e25d7bc626f09db13a49229474b.png)

Por último, sube tu rama (_push_) con los cambios fusionados a GitHub.

![push](https://www.ascensiongamedev.com/resources/filehost/d068a4be230a1b9dd5160cdec27854dd.png)

## Fusionando con GitHub Online
Alternativamente, puedes utilizar la interfaz de solicitudes de extracción (_pull requests_) en línea de GitHub para gestionar la fusión de ramas. Si tienes configurada la protección de ramas, o si quieres que las fusiones en tus ramas primarias requieran revisiones, entonces el método anterior usando la aplicación de escritorio no funcionará. Además, la interfaz de solicitud de extracción es lo que se utiliza con la finalidad de llevar las actualizaciones oficiales a tu repositorio privado y enviar el código que has escrito para contribuir al repositorio oficial si alguna vez decides hacerlo. Crear solicitudes de extracción es sumamente sencillo.

Comienza por ir a GitHub.com y navegar hasta tu repo personal de Intersect. Haz click en la pestaña _Pull Requests_ y luego en el botón _New Pull Request_.

![repo](https://www.ascensiongamedev.com/resources/filehost/c2325ab7d146e6c14c8ee0b8fd55126e.png)

Estamos fusionando código dentro de nuestros propios repositorios ahora mismo, así que asegúrate de que los menús desplegables del repositorio base y del repositorio principal apuntan a tu repo.

![selectbase](https://www.ascensiongamedev.com/resources/filehost/233438cb778047f05be3123090091b91.png)

¿Ves la flecha? Eso significa que la selección de la derecha se fusionará con la selección de la izquierda. Queremos fusionar la rama en la que estábamos trabajando con la rama original con la que empezamos. Estoy fusionando mi rama "_cleaning-up_" en la rama "_development_".

![selectbranches](https://www.ascensiongamedev.com/resources/filehost/bd156fb7af53cdaf8d85815adc61a3d7.png)

Una vez seleccionados los repositorios y ramas, GitHub debería decirte que puedes fusionar y crear la solicitud de extracción (_"Able to merge"_).

![createpr](https://www.ascensiongamedev.com/resources/filehost/ec2f2f1b96426a6cf319204c69d0d11f.png)

GitHub te llevará a una última pantalla en la que puedes proporcionar un título y una descripción para tu solicitud de extracción. Una vez listo, puedes pulsar el botón _Create Pull Request_ por última vez.

![submitpr](https://www.ascensiongamedev.com/resources/filehost/aad119f6989a96665daabbd920183621.png)

Con la solicitud de extracción abierta, puedes finalmente hacer click en el botón _Merge pull request_ para fusionar tu código.

![merge](https://www.ascensiongamedev.com/resources/filehost/906da6cf3ccd473900c5b30c6768266f.png)

Una vez completada la fusión, puedes volver a la aplicación de escritorio de GitHub, seleccionar tu rama base y extraer los cambios desde GitHub. (¡Puede que tengas que hacer un fetch primero!)

![pull](https://www.ascensiongamedev.com/resources/filehost/cfb1dc1b3d9c6cb5aef42d20eff0a3ed.png)
