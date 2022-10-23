# WebScrapper del video "This video has X Views"
## Ejecucion

`npm start`

`localhost:3000`

Actualizar la pagina para que vaya actualizando el contador

NOTA: LAS VISITAS DE YOUTUBE TARDAN VARIOS MINUTOS EN APARECER

## Funcionamiento
Mandamos un mensaje GET a "https://www.youtube.com/watch?v=BxV14h0kFs0" y de ahi recibimos el .html de la pagina

En el .html las views estan guardadas en el contenedor "interactionCount" el cual es unico en toda la pagina, buscamos en el .html ese contenedor y hacemos un shift para encontrar el numero de visitas que tiene el video

Y por ultimo con un diseño basico de html y css presentamos una pagina con una pequeña explicacion y las visitas de este video
