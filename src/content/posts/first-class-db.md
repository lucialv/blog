---
title: Primera clase de BD
published: 2025-09-15
description: Una introducción para principiantes a las bases de datos SQL.
tags: [Base de Datos, Tutorial, SQL, JavaScript, VSCode]
category: Clases-Base-de-Datos
draft: false
---

# Introducción y Conceptos

## 1.1. Datos y Bases de Datos

### Datos:

> **Hechos conocidos que pueden registrarse y que tienen un significado implícito.**
> Por ejemplo: `nombres`, `números de teléfono`, `direcciones`, ...

Uno de los elementos más preciados por una empresa ya no son los trabajadores y la experiencia de estos, que también, sino los **datos** que esta empresa gestiona, acumula e interroga para mejorar el rendimiento y extraer estrategias de mercado.

Estos datos y/o hechos no nos servirán de nada si no los organizamos de forma adecuada.

Por eso muchas veces hablamos del concepto de **base de datos**:

### Definiciones de base de datos:

> **Una `base de datos` es un conjunto organizado de información que se almacena mediante algún tipo de soporte y que se puede consultar y mantener.**
> Ej: `recopilación de temperaturas`, `padrón de habitantes`.

> **Conjunto estructurado de `datos` relacionados entre sí. Entendemos como datos hechos conocidos que pueden registrarse y que tienen un significado implícito.**
> Por ejemplo: `recopilación de temperaturas`, `padrón de habitantes de un municipio`, `nombres y teléfonos de las personas que conocemos`, etc...

Dada la definición anterior podríamos considerar que el conjunto de palabras y frases que forman esta página de texto como datos relacionados entre sí, de manera que son una base de datos. Pero esta aceptación es un poco más restrictiva y debe cumplir las siguientes propiedades:

### Requisitos de las Bases de Datos:

- **Representan algún aspecto del mundo real** (`minimundo` o `universo de discurso`).
  - **Ejemplo**: Un `taller mecánico`

- **Es una colección coherente de datos con un significado**. Un conjunto aleatorio de datos no se puede considerar una `BD`.
  - **Ejemplo**: gestión de matriculación de una universidad: `alumnos`, `asignaturas`, `tasas`, `convocatorias`, etc...

- **Se diseña, se construye y se llena con datos con un propósito específico, destinado a un grupo de usuarios concreto y con alguna utilidad o finalidad para estos usuarios.**
  - **Ejemplo**: los datos de `temperatura`, `humedad`, `precipitación` de las principales ciudades del mundo no se podrían considerar una `BD`, pero para los `meteorólogos` o `institutos de meteorología` sí que tienen un sentido y propósito específico.

Además de poder almacenar la información de forma estructurada y gestionar mejor nuestro mini-mundo a través de las bases de datos. Estas hoy en día son clave para tomar decisiones estratégicas.

## Principales Características de las Bases de Datos

Las principales características que deben tener las BD son:

### Persistencia:

- Los `datos` deben durar en el tiempo.

- Solo debemos almacenar datos potencialmente relevantes

### Relaciones:

- **`Entidades`**: conjunto de datos respecto a un tema (`cliente`, `producto`, `estudiante`, `asignatura`, `vehículo`, `piezas de un vehículo`, etc...)

- **`Relaciones`**: conexiones que existen entre las entidades (`cliente compra productos`, `el vehículo está formado por piezas`, `una asignatura tiene diferentes estudiantes matriculados`, etc...)

### Compartir:

- **Múltiples usos**: diferentes maneras de entrar, mantener y visualizar los datos (a través de `web`, `móvil`, `programas específicos`, `programas automatizados`, visualizar los datos en `informes`, `gráficas`, etc..)

- **Múltiples usuarios**: interesa que muchas personas puedan utilizar al mismo tiempo la `base de datos`. Tanto para mantenerla, como para visualizar información. (datos bancarios: un `comercial de una oficina` realiza gestiones sobre una cuenta, mientras el `propietario de la cuenta` está extrayendo dinero mediante un `cajero automático`).

## Tipos de Bases de Datos

La generación y mantenimiento de las bases de datos pueden ser **`manuales`** o **`automatizadas`**.

### Bases de Datos Manuales

El `catálogo de tarjetas` que algunas bibliotecas aún utilizan para guardar la información de todos los libros que tienen sería un buen ejemplo de `base de datos manual`.

### Bases de Datos Automatizadas/Computarizadas

Las bases de datos `computarizadas`/`automatizadas` se pueden crear y mantener con un grupo de `programas específicos` para esta tarea o bien mediante un **`Sistema Gestor de Base de Datos (SGBD)`**.

## 1.2. Sistemas Gestores de Base de Datos (SGBD)

### Definición

> **Un `sistema gestor de base de datos` (`SGBD`), en inglés `Database Management System` (`DBMS`) es un `software`(1) que permite gestionar un conjunto de `archivos interrelacionados`(2) permitiendo a los usuarios crear y mantener una `BD` ofreciendo un mínimo de prestaciones(3).**

(1) Puede ser una `aplicación` o unas `librerías`. En caso de ser aplicación será necesario disponer de un `sistema de comunicación de procesos` para poder conectarnos (por ejemplo modelo `cliente-servidor`). Existen diferentes sistemas de comunicación: por `pipes`, por `red`, por `memoria compartida`. En caso de ser librerías será necesario enlazarlas a nuestro programa, ya sea de manera `estática` en tiempo de compilación del programa o bien de manera `dinámica` durante la ejecución del mismo.

(2) Las `aplicaciones` no acceden directamente a los datos, le piden al `SGBD` (sistema gestor de base de datos) las `operaciones` que quieren realizar. Ejemplo de operaciones pueden ser `modificación de datos` o `consulta de datos existentes`. El `SGBD` es quien realiza estas operaciones manteniendo la `integridad de los datos` y aplicando la `seguridad` que esté definida en el sistema.

![Diagrama SGBD](/db01.png)

(3) Para que un `software` pueda considerarse `SGBD` debe ser capaz de facilitar una serie de `operaciones`. Una de las capacidades más importantes que debe tener es la `independencia de los datos` respecto a las aplicaciones (podemos seguir accediendo a los datos a pesar de las utilidades del `SGBD` sin necesidad de otras aplicaciones, podemos cambiar la `estructura de los datos` desde el propio `SGBD`). Otras capacidades serían `controlar el acceso a los datos` y mantener la `seguridad` e `integridad` de los mismos.
