---
title: Crear Parches
---

Los _Parches Git_ son archivos que contienen uno o más commits. Mediante GitHub puedes exportar muy fácilmente tu trabajo en parches para distribuirlo fuera de las típicas fusiones y solicitudes de extracción. El uso de parches es el método más común para compartir ediciones de código en Ascension Game Dev.

La mejor práctica a realizar para crear parches git consiste en copiar la rama `main` o `development`, hacer tus cambios en la rama copiada, realizar el commit, y luego crear el parche basado en tu rama.

Abre el símbolo del sistema en el directorio de tu repositorio local. Esto se puede hacer fácilmente desde la aplicación de GitHub haciendo click en Repositorio -> Abrir en símbolo del sistema.

![commandprompt](https://www.ascensiongamedev.com/resources/filehost/62ed0b264c03f8d3b61c17195771c044.png)

A continuación, escribe el siguiente comando y asegúrate de que sigues en la rama donde hiciste tus modificaciones. En el comando sustituye `main` por `development` si originalmente trabajaste desde la rama de desarrollo.

```
git format-patch main --stdout > patchName.patch
```

![createpatch](https://www.ascensiongamedev.com/resources/filehost/ad6434b2e74bb658b8565b6dd227d961.png)

El archivo `.patch` que has creado se encontrará en el directorio de tu repositorio local.

Puedes subir tu parche a [Diffy](https://diffy.org) para ver su contenido.
