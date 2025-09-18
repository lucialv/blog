---
title: Primera clase de Programación
published: 2025-09-12
description: Guía para principiantes para configurar el entorno de desarrollo y crear tu primera aplicación web con HTML y JavaScript.
tags: [Programación, Tutorial, HTML, JavaScript, VSCode]
category: Clases-Programacion
draft: false
---

# Primera clase de Programación

## Instalación del IDE y extensiones

### Instalar Visual Studio Code (VSCode)

1. Ve al sitio de descargas de Visual Studio Code y descarga la versión correspondiente a tu sistema operativo.
2. Ejecuta el instalador y acepta los términos de la licencia.
3. Haz clic en el botón "Next" (normalmente no es necesario modificar las opciones) hasta completar la instalación.

### Instalar la extensión Live Server

Cuando VSCode se abre, el último icono de la columna izquierda permite instalar extensiones.

Debes buscar e instalar **Live Server**.

## Primera aplicación web

El primer programa recomendado al empezar a aprender un lenguaje es "Hello World".
Este programa simplemente escribe el mensaje "Hello World" en la pantalla.

No importa si aún no sabes nada del lenguaje; copia el código y sigue unas instrucciones para comprobar que el entorno que has instalado funciona correctamente.
También puede servir como plantilla para crear tus primeros programas.

En el caso de aplicaciones web, aunque todo el código puede ponerse en un solo archivo, se recomienda separarlo para facilitar el mantenimiento a medida que la aplicación crece.
Por ahora, la separación más simple es:

- Un **archivo HTML** donde irá el contenido del documento (texto, imágenes, enlaces...).
- Un **archivo CSS** donde poner los estilos para distintos tipos de elementos (tipo y tamaño de fuente general, encabezados...).
- Un **archivo JS** donde escribiremos el código JavaScript que ejecutará la aplicación.

## Código HTML, CSS y JavaScript

Primero, necesitas crear una carpeta para el proyecto.
Se recomienda crear la estructura **PROG → INTRODUCTION → HELLO** dentro de tu carpeta de usuario.

Luego, abre VSCode y, en el menú principal, selecciona **File → Open Folder** para abrir la carpeta HELLO que fue creada anteriormente.
Al abrir una carpeta por primera vez, te preguntará si confías en los autores de la carpeta y de los archivos que contiene: marca la casilla y haz clic en el botón **Yes, I trust the authors**.

En la columna EXPLORER aparecerá la carpeta HELLO.
Haciendo clic derecho dentro y eligiendo la opción **New File...** crearás un nuevo archivo y tendrás que darle un nombre.

Debes crear los archivos: `hello.html` y `hello.js` (por ahora, no es necesario crear el archivo de estilos).
Al seleccionar un archivo, se abrirá en la ventana principal y deberás copiar el código correspondiente que se muestra a continuación.

### Documento HTML (hello.html):

```html
<!doctype html>
<html lang="en">
    <head>
        <title>Hello</title>
        <meta charset="UTF-8" />
        <script defer src="hello.js"></script>
    </head>

    <body>
    </body>
</html>
```

### Documento JavaScript (hello.js):

```javascript
"use strict";

// El método alert() se usa para mostrar mensajes y datos
alert("Hello World");
```

## Ejecutar la aplicación

Para abrir la aplicación en un navegador web, haz clic derecho sobre el archivo `hello.html` y selecciona la opción **Open with Live Server**.

Esto hará que la aplicación se abra en el navegador predeterminado y muestre un mensaje con el texto "Hello World".
Si modificas y guardas el código de los archivos de la página (o pulsando la tecla F5), el mensaje se mostrará de nuevo.

## Manipulación del DOM - Modificar contenido HTML

Más allá de mostrar alertas simples, JavaScript puede interactuar con y modificar el contenido HTML de tu página web. A esto se le llama **manipulación del DOM (Document Object Model)**.

A continuación, un ejemplo de cómo seleccionar y modificar un elemento HTML:

```javascript
let paragraf1 = document.getElementById("p1");
paragraf1.innerHTML = "This is the second paragraph";
```

### Explicación:

1. **`document.getElementById("p1")`** - Este método busca un elemento HTML que tenga un atributo `id` con el valor "p1". Devuelve una referencia a ese elemento.

2. **`let paragraf1 =`** - Guardamos la referencia al elemento HTML en una variable llamada `paragraf1`. Esto nos permite trabajar con ese elemento más adelante.

3. **`paragraf1.innerHTML =`** - La propiedad `innerHTML` permite cambiar el contenido dentro del elemento HTML. Podemos poner texto, etiquetas HTML o ambos.

4. **`"This is the second paragraph"`** - Este es el nuevo contenido que reemplazará lo que hubiera dentro del elemento con id "p1".

### Ejemplo completo:

Para verlo en acción, necesitas modificar tu archivo HTML para incluir un párrafo con un id:

```html
<!doctype html>
<html lang="en">
    <head>
        <title>Hello</title>
        <meta charset="UTF-8" />
        <script defer src="hello.js"></script>
    </head>

    <body>
        <p id="p1">This is the original paragraph content</p>
    </body>
</html>
```

Y tu archivo JavaScript contendrá:

```javascript
"use strict";

// Primero muestra el alert
alert("Hello World");

// Luego modifica el contenido del párrafo
let paragraf1 = document.getElementById("p1");
paragraf1.innerHTML = "This is the second paragraph";
```

Cuando ejecutes esta aplicación, primero verás el alert de "Hello World" y, tras cerrarlo, verás que el texto del párrafo en la página web ha cambiado de "This is the original paragraph content" a "This is the second paragraph".