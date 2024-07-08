# ToDo List App

Esta es una aplicación de lista de tareas (ToDo List) construida con React y Next.js. Permite a los usuarios crear, marcar como completadas y eliminar tareas de manera sencilla y eficiente.

## Tecnologías utilizadas

- React
- Next.js
- Tailwind CSS
- Axios (para consumir la API de prueba)

## Requisitos

- Node.js versión 18.17.0 o superior

## Instalación y ejecución

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Instala las dependencias ejecutando el siguiente comando:

- `npm install`

4. Una vez instaladas las dependencias, puedes iniciar la aplicación en modo de desarrollo con el siguiente comando:

- `npm run dev`

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

## Detalles adicionales

- La aplicación consume una API de prueba (JSONPlaceholder) para simular la interacción con un servidor y almacenar las tareas. En una aplicación real, se utilizaría una base de datos o un servicio de backend para almacenar y recuperar los datos de manera persistente.
- Se han aplicado estilos CSS personalizados y se ha utilizado la biblioteca Tailwind CSS para lograr un diseño atractivo y responsive.

## Problemas encontrados

Durante el desarrollo de esta aplicación, me enfrente a varios desafíos:

1. **Gestión del estado**: Uno de los principales retos fue mantener una gestión adecuada del estado de la aplicación, especialmente al manejar la actualización de las tareas y el filtrado de las mismas.

2. **Consumo de API**: Aunque se utilizó una API de prueba, hubo algunos problemas relacionados con la generación de IDs únicos para las nuevas tareas, lo que causó algunos errores al marcar tareas como completadas o eliminarlas.
