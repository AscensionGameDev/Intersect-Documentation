# Estructura de archivos

La estructura de archivos del repositorio es la siguiente para la versión actual:

|         Archivo/Directorio | Descripción                                                                                                                                                                                               |
|---------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|              Documentation | Licencias para cada proyecto individual y accesos directos a estos documentos.                                                                                                                            |
|           Intersect (Core) | Ensamblaje compartido entre el Cliente, el Editor y el Servidor. Contiene definiciones de clases para objetos del juego, configuraciones y más.                                                           |
| Intersect.Client.Framework | Código de cliente abstracto para la reproducción de audio, gestión de archivos, salida de gráficos y más. También contiene nuestra biblioteca altamente modificada de interfaz gráfica de usuario _Gwen_. |
|           Intersect.Client | El código actual de Intersect Client. MonoGame hereda el Framework del Cliente para potenciar el motor usando MonoGame DesktopGl para el soporte de plataformas cruzadas.                                 |
|           Intersect.Editor | El editor para los juegos basados en este motor, el cual también es impulsado por MonoGame DirectX. DirectX es necesario debido a nuestro uso de SwapChainRenderTargets.                                  |
|           Intersect.Server | El servidor para los juegos basados en este motor, el cual se ejecuta como una aplicación de consola. Este servidor autoritario controla todas las acciones realizadas en los juegos de Intersect.        |
|           Intersect.Shared | Funciones de ayuda e información compartidas para todos los proyectos anteriores.                                                                                                                         |
|          Intersect.Tests.* | Unidades de prueba para todos los proyectos mencionados anteriormente.                                                                                                                                    |
|                 AUTHORS.md | Lista de autores y colaboradores de Intersect.                                                                                                                                                            |
|         CODE_OF_CONDUCT.md | Documentación con las directrices del código de conducta del repositorio Intersect.                                                                                                                       |
|            CONTRIBUTING.md | Documentación para contribuir al código base de Intersect.                                                                                                                                                |
|              Intersect.sln | Archivo de solución de Visual Studio que carga todos los proyectos mencionados de la solución en Visual Studio.                                                                                           |
|                  README.md | Archivo Readme para GitHub que describe el motor de Intersect, las bibliotecas que utilizamos y mucho más.                                                                                                |
