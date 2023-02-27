---
title: Ramas
---


El repositorio tiene múltiples ramas para separar varias versiones y permitir la corrección de errores tanto en las versiones más antiguas como en la actual, en lugar de poner sólo las correcciones de errores en la nueva versión y decirle a la gente que "espere" hasta que llegue su fecha de lanzamiento.

Actualmente, Intersect tiene 2 ramas separadas para diferentes versiones.

|      Nombre | Versión Actual | Notas                                                                                                                                      |
|------------:|----------------|--------------------------------------------------------------------------------------------------------------------------------------------|
|        main | 0.7.1          | Recibe todas las correcciones de errores con soluciones relativamente menores, así como características con un impacto menor en el código. |
| development | 0.8.0          | Volátil. Puede tener cambios importantes tanto en el código base como en la estructura de la base de datos.                                |

Cuando se publican nuevas versiones, la rama **development** sustituye a la rama **main**.

Las versiones de prueba (Beta 8+ actualmente) permanecerán en **desarrollo** hasta que estén listas para que el público en general comience a probarlas.

Cuando las versiones de prueba se actualizan a **main** (listo para público general), la rama **development** se convierte en la siguiente versión de prueba.

Para las betas, las versiones de lanzamiento seguirán este patrón: `0.<número de la beta>.<número del parche>`.

Para las versiones posteriores a la 1.0, los números de versión se ajustarán a este patrón: `<principal>.<menor>.<parche/corrección>`.

Puedes crear y cambiar de rama utilizando la aplicación de escritorio de GitHub haciendo click en el menu desplegable de la rama:

![GitHub desktop app branch dropdown](https://www.ascensiongamedev.com/resources/filehost/7cb30357ee4dd2a55bc24b20eeb63d78.png)

Cuando se bifurca una rama, siempre procura obtener los últimos cambios de ella (_fetch_). Cuando se corrige un error, se crea una nueva rama basada en la rama con el número de versión más bajo que se ve afectada por el error.

Una de las ventajas del sistema de commits y ramificaciones es que podemos fusionar los cambios en la rama _main_, y luego fusionar dichos cambios de _main_ en la rama _development_. De esta manera no estamos arreglando independientemente el error en cada rama desde cero, y en su lugar sólo tenemos que resolver el o los conflictos relacionados con los cambios entre versiones en caso de existir alguno.

Las ramas para corregir errores suelen nombrarse con la siguiente convención:

`fix-<issue number>-<bug name>`

Las ramas para implementar nuevas características suelen nombrarse con la siguiente convención:

`feat-<issue number>-<feature name>`
