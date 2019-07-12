# **DataDex**

## **Índice**

* [Preámbulo](#preámbulo)
* [Descripción](#resumen-del-proyecto)
* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Parte obligatoria](#parte-obligatoria)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## **1. Preámbulo**

El 6 de julio de 2016 fue lanzado el juego Pokemon GO para celulares Android
y IPhone. A diferencia del juego de consolas portátiles, Pokemon Go permite 
llevar la aventura al mundo real, animando al jugador a recorrer los lugares
que habita y frecuenta.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario.

![json-interfaz](readmeImg/pokemon-go.jpg)

## **2. Resumen del proyecto**

En este proyecto **construímos una _página web_ para visualizar _Datos Pokémon_**
según las necesidades del usuario. Hemos elegido como usuario a un jugador de
Pokémon Go principiante joven, cuyo objetivo sea buscar a los pokémones por tipo
para conocer sus características. Consideramos que el usuario general está dirigido
a menores de edad que al menos puedan reconocer las imágenes.

Trabajamos con esta data:

**[Pokémon](src/data/pokemon/pokemon.json):**
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](https://pokemongolive.com).

Nuestra página web que permite **visualizar la data,filtrarla por tipo y mostrar
el promedio de pokémones elegidos en relación con el total**. 

## **3. Etapas del Proyecto**

### **3.1 Definición del producto**

_Cómo fue el proceso de diseño y cómo creemos que el producto resuelve
el problema (o problemas) que de nuestro usuario._

En primer lugar consideramos un diseño de interfaz que tuviera los requerimientos
mínimos para que se visualice sin dudas que se trata de una página relacionada
con Pokemon y con botones que permiten buscar datos importantes de interés para
un jugador principiante.

Elaboramos un primer prototipado que nos permite testear con algún usuario.
También definimos preguntas para identificar si las necesidades detectadas son
realmente lo que un usuario principiante necesita.

Identificamos que el usuario primeramente necesita conocer los tipos de Pokemon
como primer acercamiento para conocer sus características comunes. Luego están
las debilidades y fortalezas. Todo esto es tán útil para Pokémon GO como para
cualquier juego relacionado con Pokémon (consolas, cartas, etc.) Luego, específico
dentro de Pokémon GO está conocer las horas de aparición: si a un jugador 
principiante le llama la atención algún pokémos que fue de su agrado, querrá saber
a qué hora lo puede encontrar para capturarlo.

### **3.2 Historia de usuario**

_Yo como jugador niño de Pokemon Go quiero buscar a los Pokémon por Tipo para
conocer sus características._

### **3.3 Diseño de la Interfaz de Usuario**

#### Prototipo de baja fidelidad

-Sketches (boceto) de tu solución usando papel y lápiz._
Se enlistarán las carpetas guardadas en SCL010-data-lovers/readmeImg/ para
describir el proceso de creación del boceto y de corrección gracias a los
testeos.

* Prototipo1: Elaboramos un primer esquema de la página y pensamos en cómo
mostrar estadísticas de la misma. Con el feedback entre compañeras que 
eligieron la misma data reconocimos elementos que no se entendían y
replanteamos la estadística. También elaboramos preguntas para una futura
entrevista con algún conocedor de Pokémon. Como primer paso, buscamos
conocer a alguien ligado a Pokémon, no necesariamente ligado a Pokémon GO.

_Escuchar entrevista a Hector Quezada por Claudia Quezada en 
SCL010-data-lovers/readmeImg/entrevistaHectorQuezada.flac_

* Prototipo2: Tras la entrevista detectamos que es muy importante conocer a
los pokémon por Tipo, independiente del tipo de juego. Luego están las
debilidades, pero faltan algunas características propias de Pokemon GO. 
Construímos este prototipo considerando que podría ser importande buscar
datos acerca de los candies, ya que es un elemento propio de Pokémon GO y
son indispensables para mejoras en tus pokémon.

* Prototipo3: Tras recibir feedback, consideramos importante testear nuestro 
prototipo con alguna persona desconocida que nos permita conocer qué efectos 
tiene nuestro prototipo en un usuario que no tiene lazos afectivos con nosotras.
También descubrimos que más importante que los candies son la hora de aparición
del pokémon, ya que el usuario principiante al indagar un poco en los tipos de
pokémon, querrá saber a qué hora conviene buscarlos si se interesa especialmente
en alguno.

_Testeo de Carolina Medina_
Este testeo no fue grabado. Carolina llevó el Prototipo2 a personas que
juegan Pokémon GO y que no son unos expertos jugadores, lo más cercano a
jugadores principiantes. Destacan los siguientes comentarios:
_Logo Tipo_ parece un grupo de botones en lugar de un único botón. El usuario
piensa que puede presionar esos cuatro botones.
_Falta Claridad_ Se ve boníto el dibujo pero no se sabe para qué es ni a
quién va dirigido. Usuario sugiere frases breves y concisas.
_Botón GO de más_ Usuario quiere pinchar sobre un tipo y que el tipo aparezca
en seguida, no tener que pinchar el tipo y después presionar el botón GO.
_Iconos de Tipo_ Es importante que aparezca un logo grande que represente al
tipo sobre el cual se pone la flecha y además que al lado de cada tipo se vea
su logo pequeño. Esto es porque si el usuario es un niño principiante, puede
haber olvidado el tipo que quiere buscar, pero a lo mejor recuerda cómo se ve.
Tenerlo a la vista mejora su experiencia.

* Prototipo4: Tras el testeo anterior, corregimos nuevamente el prototipado
agregando el feedback obtenido en el testeo. Se pueden observar en las imágenes
en carpeta las observaciones.

* Prototipo5: Prototipo definitivo utilizado para construir nuestra página.
Como error se puede reconocer que no tiene considerada la estadística. Tras
obtener feedback con una de las coach, comprendimos que debe ubicarse en una
posición preferencial de arriba hacia abajo en lugar de un footer, porque si
está al pie de página, el usuario va a encontrar el Pokémon por tipo que le 
interesa posiblemente al medio de los pokémon que se desplegaron y no va a ver
nunca la estadística interesante. Decidimos posicionar la estadística debajo del
menú desplegable de tipos.

#### Prototipo de alta fidelidad

No contamos con prototipo de alta fidelidad.

#### Testeos de usabilidad

Datos de testeo los puedes encontrar en la sección Prototipo de baja fidelidad
más arriba.

### **3.4 Funciones Importantes**

* `arrayDataType(stringType)`: Función que retorna arreglo con los pokemones 
  del tipo ingresado. Recibe string que indica Tipo de Pokémon (ejemplo, para
  tipo Planta recibe "Grass").

* `pokePercentage(stringType)`: Función que recibe string del tipo de Pokémon
  y calcula el porcentaje de Pokémones de ese tipo en relación con el total de
  151 pokémon. Utiliza la función `amountOfPokesByType(stringType)` la cual
  recibe el mismo string y retorna cuántos pokémones hay de ese tipo.

* `pokeWeaknesses(stringPokeName)`: Función que recibe el nombre de un Pokémon
  y retorna un string con todas las debilidades que posee (Los pokémones que 
  le hacen más daño de lo normal).

### **4 Organización del Equipo**

  - `master`: Claudia Quezada.
  - `develop`: Carolina Medina.

