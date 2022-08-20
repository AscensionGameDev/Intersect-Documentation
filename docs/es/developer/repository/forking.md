# Bifurcación
#### Una bifurcación (_Fork_ en inglés) es una copia de un repositorio. Hacer un bifurcamiento de un repositorio te permite experimentar libremente con cambios sin afectar al proyecto original.

Lo más común es que las bifurcaciones se utilicen para proponer cambios en el proyecto de otra persona sobre el que no se tiene acceso de escritura, o para utilizar el proyecto de otra persona como punto de partida para tu propia idea. Puedes bifurcar un repositorio para crear una copia del mismo y realizar cambios sin afectar al repositorio original.

## Proponer cambios a nuestro repositorio oficial

_Por ejemplo_, puedes hacer bifurcaciones para proponer cambios relacionados con la corrección de un error. Así, en lugar de sólo limitarte a informar de un problema encontrado, también puedes:

![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/d7f0cafd118bcffebb9716b74c5c16d3.png)

* Hacer una bifurcación del repositorio oficial de Intersect Engine.
* Realizar la corrección.
* Enviar un solicitud de extracción al repositorio oficial de Intersect Engine.


## Bifurcar nuestro repositorio oficial

Puedes bifurcar un proyecto para proponer cambios en el repositorio original. En este caso, es una buena práctica sincronizar regularmente tu bifurcación con el repositorio original.


1. En GitHub.com, navega al repositorio [AscensionGameDev/Intersect-Engine](https://github.com/AscensionGameDev/Intersect-Engine).


3. En la esquina superior derecha de la página, haz click en **Fork**.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/680070ea8ea1cc078d13271227e078c9.png)


3. Selecciona un propietario para el repositorio a bifurcar.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/4521b82af1c14fe325839e450294be23.png)


4. Por defecto, las bifurcaciones tienen el mismo nombre que sus repositorios de origen. Puedes cambiar el nombre de la bifurcación para distinguirla mejor del resto.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/acb38e896a45b54b16e1a0dfa596d585.png)


5. Opcionalmente, puedes añadir una descripción a tu bifurcación.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/73f66cba456ed797c3bef98bc5d5bbdd.png)


6. Selecciona si quieres copiar sólo la rama por defecto o todas las ramas a la nueva bifurcación. En muchos casos de bifurcación, como cuando se contribuye a proyectos de código abierto, sólo es necesario copiar la rama por defecto (``main``).

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/499f34fc98661c79f34f9facce24c7ba.png)


7. Haz click en Crear Bifurcación (``Create Fork``).

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/b8ac87ff48db5b6b34e23f86abfbce8b.png)


**Nota:** _Si quieres copiar ramas adicionales del repositorio principal, puedes hacerlo desde la página de Ramas._

## Bifurcar con GitHub CLI

Para crear una bifurcación de un repositorio, utiliza el subcomando ``gh repo fork``.
```
gh repo fork repository
```

Para saber más sobre GitHub CLI, puedes consultar ["Acerca del CLI de GitHub" (Github Docs en Español)](https://docs.github.com/es/github-cli/github-cli/about-github-cli)