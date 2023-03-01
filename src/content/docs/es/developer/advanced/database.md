---
title: Base de datos
---

Intersect tiene dos bases de datos, una que almacena los datos del juego (como objetos, mapas, recursos, eventos) y otra que almacena todos los datos relacionados con las cuentas de usuario.

Las tablas de ambas bases de datos se generan automáticamente en función de los contextos. El contexto del jugador (_PlayerContext_) y el contexto del juego (_GameContext_) se definen en los siguientes archivos de la solución:

- Intersect.Server/Database/GameData/GameContext.cs
- Intersect.Server/Database/PlayerData/PlayerContext.cs

Los contextos consisten en DBSets que acaban siendo tablas. Los DBSets se crean a partir de clases en C#.

Las clases de contexto también definen las relaciones entre las tablas. Puedes aprender más sobre esto en la documentación de _Entity Framework Core_ si estás interesado.

## Campos en la base de datos

Los campos se crean automáticamente a partir de propiedades públicas en una clase, al igual que las tablas se crean automáticamente a partir de clases dentro de los DBSets en un contexto.

Si observas la clase `Users` en el proyecto del servidor (`Interect.Server/Database/PlayerData/User.cs`), encontrarás campos para el nombre, la contraseña, el correo electrónico, y más.

Ten en cuenta que Entity Framework sólo puede controlar tipos básicos (enteros, cadenas, blobs y referencias a otras clases que existen como DBSet). Debido a estas limitaciones, hemos marcado algunos campos complejos con la etiqueta `[NotMapped]` y luego tenemos un campo de cadena secundaria que convierte ese campo complejo en json. Para un ejemplo de esto, revisa User.Power y User.PowerJson. Observa como la propiedad PowerJson tiene una propiedad de nombre de columna de manera que se almacena en la base de datos en el campo Power.

## Añadir campos a la base de datos

Para añadir un campo a la base de datos, crea una nueva **propiedad pública** en una clase que se almacene dentro del `Entity Framework`. En este ejemplo voy a añadir un campo para rastrear la última dirección IP utilizada por cada usuario.

He añadido la siguiente propiedad a la clase `User`:

```
public string LastUsedIp { get; set; }
```

## Crear una migración

Después de realizar los cambios en las clases del Entity Framework, tendrás que crear una migración. Para crear la migración hay varios pasos a seguir:

1. Establece tu proyecto de inicio como `Intersect.Server`, y el tipo de compilación como `NoFody`.
   ![](https://www.ascensiongamedev.com/resources/filehost/13a8de43d24b7595cacb37c5c99c65f1.png)

2. Ahora, compila tu servidor. La compilación con la configuración NoFody generará varios archivos dlls necesarios.
   ![](https://www.ascensiongamedev.com/resources/filehost/73271e21395e697efb06cf7d28f0f14d.png)

3. En VS, abre la consola del gestor de paquetes Nuget. (Herramientas -> Gestor de Paquetes Nuget -> Consola del Gestor de Paquetes)
   ![](https://www.ascensiongamedev.com/resources/filehost/c51298fbaf5e35a654b43c915ab5375f.png)

4. Dentro de la consola del gestor de paquetes, establece `Intersect.Server` como tu proyecto por defecto.
   ![](https://www.ascensiongamedev.com/resources/filehost/2eea276e85b6258c5b844f392acdfd15.png)

Ahora estás listo para generar los archivos de migración. Introduce el siguiente comando en la consola del gestor de paquetes:

```
Add-Migration -Context [ContextHere] [InsertMigrationNameHere]
```

Reemplaza `[ContextHere]` por GameContext o PlayerContext (dependiendo de la base de datos que hayas modificado).

Reemplaza `[InsertMigrationNameHere]` con un nombre corto que identifique para qué es la migración.

Por ejemplo, he añadido una propiedad `LastUsedId` a la clase `Users`. En este caso usaría el siguiente comando:

```
Add-Migration -Context PlayerContext AddingLastUsedIpToUsers
```

Tu migración debería aparecer como un [nuevo archivo de código fuente](https://www.ascensiongamedev.com/resources/filehost/500983d59ef1b372947c3c2e9ff5aa47.png). Continúa y guárdalo.

Ahora que hemos terminado, reestablece la configuración de la solución de `NoFody` a `Debug` nuevamente y **ejecuta** tu servidor.

Al ejecutar el servidor, serás bienvenido con un [aviso de migración](https://www.ascensiongamedev.com/resources/filehost/a0eca1c08ed9ad5b5324ef4502cded49.png).

## Limitaciones de migración

Debido a las limitaciones (actuales) de Sqlite, los campos de las bases de datos no pueden ser renombrados ni eliminados. Tenemos algunos campos que mantenemos por ahí que no están actualmente en uso debido a estas limitaciones ya mencionadas. Se espera que esta funcionalidad esté disponible algún día.

## Las migraciones son únicas

Lamentablemente, las migraciones son únicas debido a las limitaciones mencionadas anteriormente con Sqlite. Si los usuarios quieren desinstalar las modificaciones de origen que alteran la base de datos, tendrán que utilizar herramientas externas para eliminar los campos de la base de datos o volver a una copia de seguridad anterior a la instalación de la modificación.
