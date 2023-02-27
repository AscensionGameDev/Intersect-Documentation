---
title: Aplicar parches
---


Los parches de GitHub son muy sencillos de aplicar y permiten comprobar su compatibilidad antes de proceder a ello.


Ten en cuenta que aplicar parches git modifica el código fuente de Intersect, lo que puede afectar el rendimiento e introducir errores en tu juego. ¡Sólo instala parches procedentes de desarrolladores de confianza!

Descarga tu parche y muévelo a la raíz de tu repositorio de Intersect. A continuación, abre una ventana de comandos y navega a tu repositorio local de Intersect. Esto se puede hacer fácilmente desde la aplicación de GitHub haciendo click en Repositorio -> Abrir en símbolo del sistema.

![commandprompt](https://www.ascensiongamedev.com/resources/filehost/62ed0b264c03f8d3b61c17195771c044.png)

Para comprobar la compatibilidad, introduce el siguiente comando (sustituyendo el nombre del parche por el que has descargado). Si hay problemas de compatibilidad, es posible que el autor del parche tenga que rehacer el parche utilizando su versión de Intersect, o tal vez estás tratando de aplicar varios parches que entran en conflicto y no son compatibles entre sí.

```
git apply --check patchName.patch
```

![check](https://www.ascensiongamedev.com/resources/filehost/e3e6c8d588a49bd1ef2ebd69c67f115f.png)

Si no aparecen errores, quiere decir que el parche es compatible, por lo que puedes continuar y ejecutar el siguiente comando para aplicar el parche. Es posible que aparezcan algunas advertencias, pero mientras no haya errores, ¡ya puedes aplicar el parche sin miedo!

```
git am --signoff < patchName.patch
```

![apply](https://www.ascensiongamedev.com/resources/filehost/7fb32c944b7147a3397c8a39e634af1f.png)


Si necesitas eliminar un parche, utiliza el comando ``git apply -R`` como se muestra a continuación

```
git apply -R patchName.patch
```

![reverting](https://www.ascensiongamedev.com/resources/filehost/cbd407c31ce1c87beaaea3277e32a788.png)
