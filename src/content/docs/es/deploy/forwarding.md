---
title: Port Forwarding
---

_**Para VPS o servidores dedicados proporcionados por una compañía, generalmente solo se requiere abrir el puerto en el firewall de la máquina, no debería existir reenvío de puertos con este tipo de servidores - de cualquier forma, consulta a tu proveedor de alojamiento para obtener detalles específicos si encuentras algún problema.**_

_Ten en cuenta que el proceso de configuración de reenvío de puertos (Port Forwarding) puede variar dependiendo del router específico que estés utilizando y su configuración. Por lo tanto, se recomienda consultar la documentación del router o contactar a tu proveedor de servicios de Internet para obtener ayuda._

Para configurar el reenvío de puertos (del inglés _Port Forwarding_), procede con los siguientes pasos:

1. **Encontrar la dirección IP del router.** _(Saltar al paso 2 si ya conoces la dirección IP del router)._
   - El router podría utilizar `192.168.0.1` , `192.168.1.1` ó `10.0.0.1` como dirección IP.
   - Si no es ninguna de las anteriores, consultar la documentación proporcionada con el router (usualmente suministrada por el proveedor de servicios de Internet). Alternativamente, puedes encontrar la IP con un dispositivo conectado a la red del router siguiendo estos pasos:
      - En Linux: abrir una *Terminal* y ejecutar el siguiente comando: `ip route`. La línea de salida que comienza con `default via` te da la IP de la puerta de enlace, que es la dirección IP de tu router.
      - En Mac: abrir *Preferencias del sistema*, navegar a Red > Avanzado > TCP/IP y tomar nota de la dirección IP junto a *"Router"*.
      - En Windows: abrir *Símbolo del sistema*, ejecutar `ipconfig` y tomar nota de la dirección IP junto a *"Puerta de enlace predeterminada"*.

2. **Acceder a la interfaz web del router.**
   - Abrir un navegador web, ingresar la dirección IP del router en la barra de direcciones y _presionar enter_.
   - Iniciar sesión con las credenciales del dispositivo o las proporcionadas por el proveedor de servicios de internet correspondiente.

3. Encontrar la sección **port forwarding** (reenvío de puertos) en la interfaz del router.
   - Esto suele encontrarse en encabezados como "Puertos", "Reenvío de puertos" (Port Forwarding), "NAT" o "Firewall", y puede estar listado en una sección etiquetada como "Avanzado".

4. **Crear nueva regla** para el servidor del juego especificando:
   - Protocolo: `UDP`.
   - Puerto público: `5400` (valor por defecto de Intersect, este número es diferente si lo has cambiado en las configuraciones).
   - Dirección IP y puerto privado del dispositivo que ejecuta el servidor Intersect.
   - Ten en cuenta que si pretendes usar la API REST para un sitio web alojado fuera de tu red, necesitarás agregar una regla para el protocolo TCP, pero **la mayoría de los routers permiten crear una sola regla combinada para ambos TCP y UDP**.
     - Si los puertos del juego y la API no son los mismos, debes crear dos reglas separadas; el puerto del juego (UDP) se configura en `resources/config.json`, y el puerto de la API (TCP) se configura en `resources/config/api.config.json`.

5. **Guardar** la regla.

6. **Verificar el reenvío del puerto.**
   - Puedes usar un servicio como [canyouseeme.org](https://canyouseeme.org/), que te permite verificar si un puerto específico está abierto en una dirección IP determinada.
   - Si el puerto no se ha reenviado correctamente, verificar que se siguieron todos los pasos de configuración correctamente y que la configuración de la regla para el reenvío del puertos en el router se encuentre guardada. También puedes intentar usar otro dispositivo en la red para verificar si el puerto está abierto.
