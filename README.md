# BACKEND_RPG_NODE.JS_EXPRESS

API REST desarrollada con Node.js y Express para gestionar personajes y simular batallas entre ellos.

Esta API permite:

Crear, listar, actualizar y eliminar personajes
Simular batallas entre personajes
Calcular resultados basados en estadísticas (fuerza, agilidad, magia, conocimiento)

*CLONAR¨*

git clone <tu-repo>
cd <tu-proyecto>

install dependencias.

npm install

ejecutar.
node app.js

Endpoints

GET	/api/characters	Listar todos

GET	/api/characters/:id	Obtener por ID

POST	/api/characters	Crear personaje

PUT	/api/characters/:id	Actualizar personaje


DELETE	/api/characters/:id	Eliminar personaje

Batallas

POST /api/battles Simular batalla


 Lógica de batalla
 
Se juegan 3 rondas

Se calculan:

Ataque

Defensa

Daño

Se agrega un factor aleatorio para mayor realismo

Gana quien tenga más rondas
