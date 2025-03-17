---
title: Classes
---
# Editor de clases

![](https://ascensiongamedev.com/resources/filehost/663b6bd4587c0e451a23f50c9b55c16f.png)

## Configuration
En el editor de clases se crearán las diferentes razas o especializaciones de tu juego. aquí está el sistema de escalado por nivel, velocidades de ataque base y muchos detalles más
![](https://ascensiongamedev.com/resources/filehost/b37912da2048fee32f4f24425bbec162.png)
## Ajustes Básicos:
- **General:**
	- **Nombre:** el nombre de la clase a crear (Arquero, Paladín, Mago, etc).
	- **carpeta:** esto es más que nada para organizar tus clases por carpetas.
	- **Bloqueo:** con esto, bloqueas la clase para que **NO PUEDA** ser elegida desde la creación de personajes.
- **Sprite y Rostro:**
	- **Género:** como su nombre lo dice, esto indicará el género inicial de la clase (Hombre o Mujer)
	- **Opciones:**
		- **Agregar Sprite:** esto añadirá un sprite en base a tu selección de la derecha de esta imágen.

## Subida de nivel:
![](https://ascensiongamedev.com/resources/filehost/45fcdcb0efe9f0ba6ca807ef6caf78a1.png)
En este apartado podrás asignar los atributos que se sumarán por cada nivel y también modificar la experiencia base y la requerida adicional por cada nivel para incrementar la dificultad!
- **Exp base para +Lvl:** este es el monto de experiencia requerido para subir al nivel 2
- **Incremento Exp (Por nivel %):** esto es para indicar en un porcentaje ¿cúanto más subirá la dificultad? (Ej: Base 100 para subir + Incremento de 50% = requieres 150 puntos de experiencia para subir a nivel 3, luego se toma el valor 150 y se le suma 50% y así a cada valor hasta alcanzar el nivel máximo.)
- **Grilla Exp:** Aquí podrás ver más detalladamente como se dará en cada nivel los valores modificados en `Exp base para +Lvl:` y `Incremento Exp (Por nivel %):`.

## Estadísticas base:
![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/704d1eae56d1d24dcdb0d9fe34a62bb1.png)
Aquí podrás configurar las estadísticas con la que esta clase empezará el juego.
- **Puntos:** esto es por si prefieres que un jugador se autoasigne sus puntos en vez de darle puntos predefinidos.

## Punto inicial y Hechizos:
![](https://ascensiongamedev.com/resources/filehost/fdf3ec736c3e7d0c18bc1d91f27e63af.png)
En estos dos apartados podrás elegir el punto de reaparición de la clase en caso de muerte y qué hechizos aprenderá al alcanzar "X" nivel

## Regeneraciones
![](https://ascensiongamedev.com/resources/filehost/0f170164adb07931c1714c2392fa89fc.png)
Aquí podrás configurar cuanto porcentaje de vida o maná se regenerará esta clase por cada tick del servidor

## Combate desarmado:
![](https://ascensiongamedev.com/resources/filehost/3cd5454aff375287e23c49427d63e993.png)
Esta sección es principalmente para modificar los valores de combate sin un arma equipada.
- **Daño base:** es el daño que el jugador hará sin tener en cuenta otros valores (Ejemplo: Daño base: 3)
- **Chance de crítico (%):** la chance de que el jugador en el combate **desarmado** aplique un golpe crítico
- **Multiplicador daño crítico:** cúanto se multiplicará el daño de esta clase al dar un golpe crítico.
- **Tipo de daño:** El tipo de daño que hará al pelear desarmado (valores permitidos: `Físico`, `Mágico` o `Real`)
- **Estadística para escalar:** Básicamente esto se refiere a ¿en qué valor escalará/incrementará su daño base? (Valores permitidos: `Físico`, `Mágico` o `Real`)
- **Cantidad para escalar:** la cantidad de daño que incrementará la estadística (EJ: Daño base 10 y supongamos que el jugador tiene de base 10 de ataque, le ponemos un escalado de 100% en ataque, entonces esta clase pegará de base 10 + 10 [Siendo 20 en total])
- **Sprite ataque:** Que sprite de movimiento usará para animar el golpe.
- **Animación de ataque:** Aquí se cargará la animación que desees (combinable con el sprite de ataque)

![](https://ascensiongamedev.com/resources/filehost/408a75fa2f5f85cf16ba24e13dd64e5c.png)
Los modificadores de velocidad de ataque aceptan 3 tipos:
- **Deshabilitado:** la velocidad de ataque desarmado no se verá alterada
- **Porcentaje:** valores altos implican que ataque más rápido, valores bajos indican que pegará más lento (EJ: 50% indicaría que pegará a la mitad de velocidad normal)
- **Milisegundos:** aquí los valores bajos representan ataques más rápidos, ejemplo: 500ms = un golpe cada medio segundo mientras que 2000 ms es un golpe cada 2 segundos.
