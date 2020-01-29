# MVC

El patrón MVC nos propone separar el código de acuerdo a sus responsabilidades.

Está compuesto por tres elementos:

1. El modelo: que trabaja con los datos. No conoce cómo se ve la aplicación.
2. El controlador: es el nexo entre los otros dos elementos. Es el que toma las decisiones.
3. La vista: presenta la información al usuario, y éste interactúa con la vista.

## Etapa 2.

Ya tenemos dividas las responsabilidades en distintos componentes.

Ahora deberíamos comenzar a darle funcionalidad a nuestra aplicación para que el usuario pueda interactuar.

1. En la vista: vamos a crear una función que cree los elementos de la lista, y los muestre en la vista.
    - el método que vamos a añadir debe recibir como parámetro las tareas (que viven en el modelo);
    - vamos a verificar si estas tareas existen primero (si el length es mayor que 0) en ese caso, creamos un párrafo, y lo appendiamos a la propiedad this.listaTareas.
    - en el caso de que tareas tenga elementos (haya tareas) vamos a crear un elemento li por cada tarea (forEach o for), le añadimos como atributo id el id de la tarea. Y le añadimos el texto de la tarea.
    Al finalizar lo appendiamos a la listaTareas.
    - vamos a tener un error sobre esta última acción. Lo solucionamos estableciendo var that = this; antes del forEach (si lo han utilizado). En el caso de que hayan usado un for no habrá problemas.

2. En el controlador:
    - Vamos a mostrar inicialmente la lista de elementos. Debemos llamar la función mostrarTareas de la vista, y pasarle como parámetro las tareas que están en el modelo.

3. En el modelo:
    - Vamos a agregar una función para "agregar" una nueva tarea. Cómo podría ser? miremos la propiedad tareas del modelo, cómo son cada una de las tareas? qué propiedades tienen?
    Como la añadimos al array de tareas? 