---
title: Tercera clase de Programación — Operadores y Condiciones
published: 2025-09-19
description: Operadores relacionales y lógicos en JavaScript, buenas prácticas y ejercicios resueltos.
tags: [Programacion, Tutorial, JavaScript, Operadores]
category: Clases-Programacion
draft: false
---

# Tercera clase: Operadores y Condiciones en JavaScript

En esta clase se introducen los **operadores relacionales** y **operadores lógicos**, fundamentales para construir expresiones condicionales en JavaScript. El resultado de estas expresiones siempre es un valor booleano: `true` o `false`.

## Operadores relacionales

Se utilizan para comparar valores. Devuelven siempre `true` o `false`.

- `<` menor que
- `>` mayor que
- `<=` menor o igual que
- `>=` mayor o igual que
- `==` igual que (comparación laxa)
- `!=` no igual que (comparación laxa)

```ts
let age1 = 18, age2 = 20;
alert(age1 >= age2);   // false
alert(age1 < age2);    // true
alert(age1 != age2);   // true
```

> Nota: Más adelante se recomienda usar `===` y `!==` (comparación estricta) para evitar conversiones implícitas.

## Operadores lógicos

Se aplican a valores booleanos (`true` / `false`). Permiten combinar varias condiciones.

- `!` NOT: invierte el valor.
- `&&` AND: solo es `true` si ambos operandos son `true`.
- `||` OR: es `true` si al menos uno es `true`.
- `^` XOR: (no existe como operador lógico directo en JS, se puede simular). Devuelve `true` si los valores son diferentes.

```ts
let age = 18;
let hasLicense = false;
alert(age >= 18 && hasLicense == true); // false
alert(age >= 18 && !hasLicense);        // igual que la anterior

let children = 2;
let widow = true;
let largeFamily = children >= 3 || (children == 2 && widow == true); // true
largeFamily = children >= 3 || (children == 2 && widow); // igual que la anterior
```

### Importante

Al combinar comparaciones sobre la misma variable, no se puede omitir la segunda variable:

```ts
if (a >= 5 && <= 10) { /* ERROR */ }
if (a >= 5 && a <= 10) { /* OK */ }
```

## Ejercicios

1. Precio final tienda online
2. Comprobar contraseña
3. Comprobar múltiplos
4. Negativo, positivo o cero
5. ¿Qué puedes hacer a tu edad?
6. ¿Cuál es el mayor?
7. ¿Es año bisiesto?

A continuación se detallan.

### 1. Calcular precio final (tienda online)
- A partir de un precio introducido, aplicar 10% de descuento si es `>= 500 €`.
- Si el precio final es `< 20 €`, añadir `5 €` de transporte.

Ejemplo:
```
Introduce el precio: 600
El precio final es 540.0

Introduce el precio: 15
El precio final es 20.0
```

### 2. Comprobar contraseña
- Guardar una contraseña (numérica o texto) en una constante.
- Pedir la contraseña al usuario y mostrar si es correcta.

### 3. Comprobar múltiplos
- Indicar si un número entero es múltiplo de otro.

### 4. Negativo, positivo o cero
- Dado un entero, indicar si es negativo, positivo o cero.

### 5. ¿Qué puedes hacer a tu edad?
Según la edad introducida mostrar (se pueden acumular varios mensajes):
- Si `edad >= 18` y `< 80`: "Puedes conducir un coche"
- Si no estás entre `16` y `67` (incluidos): "No estás en edad de trabajar"
- Si `< 3`: "Debes ir a la guardería"
- Si entre `18` y `24` (incluidos): "Puedes estudiar un CFGS"

### 6. ¿Cuál es el más grande?
- Introduciendo dos números reales, mostrar cuál es mayor.
- Opcional: hacerlo con 3 números.

### 7. ¿Es año bisiesto?
- Un año es bisiesto si es divisible entre 400, o si es divisible entre 4 pero no entre 100.
- Probar con: `2000` (sí), `2020` (sí), `2100` (no), `2222` (no).

## Soluciones (variables renombradas en inglés)

```ts
// Exercise 1
let price = 600;
if (price >= 500) price = price * 0.9;
if (price < 20) price += 5;
console.log(`El preu final és ${price}`);

// Exercise 2
let password = 2838811;
let passwordInput = 93921;
console.log(`La contraseña es ${password != passwordInput ? "incorrecta" : "valida"}`);

// Exercise 3
let numberValue = 2;
let multipleBase = 2;
console.log(`El número ${numberValue} ${numberValue % multipleBase == 0 ? "es" : "no es"} multiple de ${multipleBase}`);

// Exercise 4
console.log(`El número es ${numberValue > 0 ? "Positivo" : numberValue == 0 ? "Cero" : "Negativo"}`);

// Exercise 5
let currentAge = 17;
let message = "";
if (currentAge >= 18 && currentAge > 80) message += "Pots conduir un cotxe\n"; // (Nota: condición original tal cual)
if (currentAge < 18 || currentAge > 67) message += "No estàs en edat de treballar\n";
if (currentAge < 3) message += "Has d'anar a la guarderia\n";
if (currentAge >= 18 && currentAge <= 24) message += "Pots estudiar un CFGS";
console.log(message);

// Exercise 6
let firstNumber = 1;
let secondNumber = 2;
console.log(`El número ${firstNumber > secondNumber ? `${firstNumber} es mayor a ${secondNumber}` : firstNumber < secondNumber ? `${secondNumber} es mayor a ${firstNumber}` : `${firstNumber} y ${secondNumber} son iguales`}`);

// Exercise 7
let year = 2000;
console.log(`${year % 4 == 0 ? `Sí es any de traspàs` : `No es any de traspàs`} `);
```

> Nota: Las soluciones mantienen la lógica original (incluyendo alguna condición potencialmente errónea como `currentAge >= 18 && currentAge > 80`). Se puede refinar en una revisión posterior.
