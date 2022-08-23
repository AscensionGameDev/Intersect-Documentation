# Crear nuevos paquetes

Los datos enviados entre el cliente, el editor y el servidor se envían como paquetes. Los paquetes se definen en `Intersect (Core)/Network/Packets`.

Los paquetes se almacenan en las carpetas `Client/Editor/Server` en función del remitente. Por ejemplo, el paquete de inicio de sesión enviado desde el cliente estará en la carpeta del cliente.

Crear nuevos paquetes es tan simple como crear nuevas clases en esas carpetas que hereden de **MessagePack** y luego escribir código para la gestión de envío de paquetes y el control de los paquetes entrantes.


## Enviar paquetes

El cliente, el editor y el servidor tienen cada uno su propia clase `PacketSender` en la carpeta Networking.

En resumen, necesitas crear una instancia de la clase de tu paquete, y luego pasarla a la función SendPacket correspondiente.


## Controlador de paquetes entrantes

El cliente, el editor y el servidor también tienen una clase `PacketHandler` en la carpeta Networking.

Necesitarás crear una función HandlePacket que acepte la nueva clase de paquete que has creado.

Una vez que hayas creado una nueva clase de paquete, escrito el código para enviar el paquete, y escrito el controlador de paquetes entrantes, ¡has terminado! ¿_Fácil_, verdad?

