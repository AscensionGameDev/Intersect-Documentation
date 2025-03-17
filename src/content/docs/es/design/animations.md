---
title: Animations
---
# <p align="Center" style="color: gray; bold;"> ANIMACIONES:</p>

## Descripción general:

_Las animaciones se realizan a través del_ `Editor de animaciones` en la pestaña `Editores`.
![Editor de animaciones](https://ascensiongamedev.com/resources/filehost/7807f961172692c40d1a715cbe115d2d.png)

## Administrar animaciones:

![principal](https://ascensiongamedev.com/resources/filehost/42a98db0ca69ae6d39efc2f64b35a06a.png)

- Para añadir una nueva animación haga click en el primer ícono o use el atajo `Ctrl + N`
- Para eliminar una animación, haga click en la animación en la lista a eliminar, luego haga click en la cruz para eliminarlo (o presione el botón `Supr`)
- Puede organizar la lista en orden alfabético haciendo click en el tercer ícono superior izquierdo.
- Puedes copiar una animación existente haciendo click en la animación a copiar de la lista y luego haciendo click en el cuarto ícono superior izquierdo (o utilizando el atajo `Ctrl + C`)
- Puedes pegar la copia dentro de una nueva animación o sobreescribir otra haciendo click en esa animación de la lista y luego haciendo click en el quinto ícono superior izquierdo (o utilizando el atajo `Ctrl + V`)
- Puedes deshacer un cambio haciendo click en el sexto ícono superior izquierdo (Pero esto NO REVIERTE una eliminación de animación!) 🔥

![](https://ascensiongamedev.com/resources/filehost/6088cb4bf1e96360c1700f32ff545215.png)

- **Nombre:** El nombre de tu animación.
- **Carpeta:** Si es que será agrupado en alguna carpeta específica _(EJ: Curaciones, DOTS, etc)._
	- Con el botón de la derecha podrás crear una nueva carpeta.
- **Sonido:** Aquí se cargará el sonido que usará la animación mientras se reproduce.
- **Reproducir sonido una vez finalizada la anim.:** Esto es para que si la animación está finalizada, el sonido continue reproduciéndose hasta finalizar su duración.
- **Repetir sonido:** Esto es para repetir el sonido hasta que se finalice la animación _(Similar al punto anterior)_
- **Intercambiar sup/inf:** Esto es para "rotar" las animaciones entre reproducir la animación debajo del jugador o sobre este.
- **Simulador de sombra: 0** este elemento se usa para simular una sombra y ver como se ve afectada la iluminación del mismo.

![](https://ascensiongamedev.com/resources/filehost/408fa4fe5b91ee4b897cc38db15c4e37.png)

- _En esta ventana lo que haremos será cargar un gráfico y luego pasar al punto siguiente_

![](https://ascensiongamedev.com/resources/filehost/a085c7bc9bef70d9e2f3198a2a7961ba.png)

- **Reproducción:** Con este botón reproduciremos la vista previa de la animación
	- **Opciones de frame:**
	- **Frames:** Acá se hará un conteo de frames, el valor no puede superar el número de tiles "horizontal / vertical" _ejemplo: En la imagen de abajo se aprecia que solo hay 4 Frames en total (4 horizontales y 0 Verticales)_![](https://ascensiongamedev.com/resources/filehost/807976e4b7c5bb1443ea45da95ea51ce.png)
	- **Duración de Frame (ms):** Aquí se establecerá la duración de cada frame en milisegundos (1 segundo = 1000 milisegundos o **ms**)
	- **Conteo vueltas:** aquí irá la cantidad de veces que debe repetirse una animación (por defecto es **o**, no se repetirá).
- **Opciones extra:**
	- **Deshabilitar rotación:** esto impedirá que las animaciones roten junto al personaje u objetivo.
	- **Reproducir por encima:** esto hace que en caso de estarse reproduciendo debajo del jugador, se reproduzca la animación **por encima** (forzándolo).

![](https://ascensiongamedev.com/resources/filehost/a05359a0e3c98b5a752096c6f94cdea7.png")

El editor de luz básicamente hace que cualquier animación tenga a su disposición una "luz" que puede estar por encima o por debajo de la animación como tal.

- **Offset X:** esto es un desplazamiento de la luz sobre el eje X
- **Offset Y:** esto es un desplazamiento de la luz sobre el eje Y
- **Tamaño:** esto indica que tan grande será la luz
- **Expandir cant:** esto multiplica la fuerza de la luz
- **Intensidad:** esto indica que tan intensa (como lo dice su nombre) es la luz, permitiendo valores entre `0` y `255`
