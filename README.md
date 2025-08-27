# Módulo 4. Funciones.

## 1. Instalar el proyecto para poder revisar el laboratorio.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## 2. CSS y HTML

Tras iniciar el proyecto he maquetado la parte visual tomando como punto de partida el código facilitado. He creado las estructura y estilos necesarios: botones y cajas de texto que nos permitirán cambiar el número que aparece en el visualizador de turnos.

## 3. Funcionalidad

Con toda la parte visual montada trabajé en añadir funcionalidad al proyecto.

1. En la caja principal se muestra el turno.
2. Al pulsar sobre los botones **Siguiente** o **Anterior** el número mostrado cambia. Para ello inicializamos el marcador en 0 indicando `let turn: number = 0;`, definimos las funciones con las que sumaremos y restaremos 1 y hacemos que se apliquen al hacer click sobre los botones correspondientes.
3. El botón **Reset** pone el marcador a _0_.
4. El operario puede decidir que número mostrar escribiéndolo en la caja de texto y publicándolo al hacer click en el botón **Ver en marcador**.

## 4. Challenge

Para que el marcador use siempre un formato de mínimo 2 números (01, 02, 03,...12,13, etc) utilizamos la funcion `padStar`, con la que definimos el número de caracteres mínimo o longitud y que elemento queremos usar para mostrarlo.

En este caso vamos a incluir `padStart(2, "0");`para que se muestre en el HTML al reflejar el resultado.
