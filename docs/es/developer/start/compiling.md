# Compilando
El primer paso antes de realizar cambios en el proyecto original es compilar la solución. Intersect se basa en docenas de bibliotecas y herramientas externas (por ejemplo, MonoGame, Newtonsoft Json.Net, etc.) y nuestro proyecto está diseñado para buscar dichas dependencias automáticamente mediante Nuget.

Para comenzar, abra el archivo Intersect.sln en la carpeta Intersect-Engine. La solución debería abrirse en Visual Studio 2019.

![solution](https://www.ascensiongamedev.com/resources/filehost/bb694eabb570f22d541f87d1db2fc68f.png)

En la mayoría de los casos, todo lo que debe hacer es presionar Build (Generar) -> Build Solution (Generar solución) en la parte superior de la ventana de Visual Studio y así obtendrá todas las dependencias automáticamente.

![building](https://www.ascensiongamedev.com/resources/filehost/c1c27a3366987a9279610e40667eecf0.png)

Tu primera compilación probablemente fallará con errores similares a los que se ven a continuación. Esto se debe a que el proyecto descarga las dependencias durante la compilación misma, dependencias que son necesarias para una compilación exitosa.

![errors](https://www.ascensiongamedev.com/resources/filehost/3ddd530d599409f7a8a69a510fa3ab70.png)

Si experimentas los errores anteriores o similares, simplemente haz click en Build (Generar) > Clean Solution (Limpiar solución) y luego en Build -> Build Solution (Generar solución) nuevamente. Si eso no funciona, intenta reiniciar Visual Studio.

![clean](https://www.ascensiongamedev.com/resources/filehost/068c7b0d67e8fa94d998f8b2151f98a1.png)

Visual Studio te notificará de una compilación exitosa en la esquina inferior izquierda del IDE.

![success](https://www.ascensiongamedev.com/resources/filehost/cfbb467b54914238dcadcde9383f342f.png)

Podras encontrar la versión compilada de Intersect en el directorio Intersect-Engine/build. Habrá muchos archivos xml junto con los ejecutables, pero por ahora solo deberías preocuparte por los archivos .exe y .pdb para el Cliente, el Editor y el Servidor.

![output](https://www.ascensiongamedev.com/resources/filehost/5c0070679608ae4d663de3bc34c4527b.png)


** Ten en cuenta que si deseas ejecutar tu cliente o editor utilizando el depurador, deberás [Descargar y ubicar estos recursos ](https://github.com/AscensionGameDev/Intersect-Assets) en las carpetas /build/debug/client y /build/debug/editor . **
