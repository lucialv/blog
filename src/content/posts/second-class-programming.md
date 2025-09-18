---
title: Segunda clase de Programación — Strings en JavaScript
published: 2025-09-18
description: Apuntes de la segunda clase sobre la clase String en JavaScript conceptos clave, métodos principales, ejemplos y ejercicios.
tags: [Programacion, Tutorial, JavaScript, Strings]
category: Clases-Programacion
draft: false
---

# Segunda clase: Strings en JavaScript

Los `strings` (cadenas de texto) en JavaScript son valores inmutables: una vez creado un `string`, su contenido no puede modificarse directamente. Cada método que parece "modificar" un texto en realidad devuelve un nuevo `string`.

A lo largo de esta clase veremos sus propiedades y métodos más usados, ejemplos prácticos, y una colección de ejercicios al final.

## Conceptos clave

- `String` es el tipo para representar texto en JavaScript.
- Los `strings` son inmutables: los métodos retornan nuevos valores.
- Los índices empiezan en `0` y el último índice es `length - 1`.
- Muchos métodos aceptan parámetros opcionales como `pos` (posición inicial) para buscar o recortar.

## Propiedades y métodos principales

- `length`: número de caracteres del texto.
- `charAt(n)`: devuelve el carácter en la posición `n`.
- `toLowerCase()` / `toUpperCase()`: devuelve el texto en minúsculas o mayúsculas.
- `trim()` / `trimStart()` / `trimEnd()`: elimina espacios al inicio/fin.
- `includes(text[, pos])`: comprueba si contiene `text` desde `pos`.
- `indexOf(text[, pos])`: primera posición de `text` o `-1` si no aparece.
- `lastIndexOf(text[, pos])`: última posición de `text`.
- `substring(inicio[, fin])`: subcadena entre `inicio` (incluido) y `fin` (excluido).
- `replace(t1, t2)` / `replaceAll(t1, t2)`: sustituye `t1` por `t2` (primera o todas).
- `repeat(n)`: repite el texto `n` veces.
- `padStart(n, text)` / `padEnd(n, text)`: rellena hasta longitud `n` con `text`.
- `startsWith(text)` / `endsWith(text)`: comprueba comienzo/fin.
- `split(text)`: separa el texto en un array usando `text` como separador.

## Ejemplos en catalán

```ts
// Els textos (cadenes de caràcters o strings) són immutables.
let nom = "Peter";
let nomMajuscules = nom.toUpperCase();        // nomMajuscules = "PETER"
let nomMinuscules = "Mary".toLowerCase();    // nomMinuscules = "mary"

// Alguns mètodes importants
let l = "Hello World".length;             // l = 11
let c = "Hello World".charAt(6);          // c = 'W'
let repetit = "Hola".repeat(3);           // repetit = "HolaHolaHola"
let ambZeros = "123".padStart(5, '0');    // ambZeros = "00123"

let hola = "Hello World";
let inclou = hola.includes("World");                // inclou = true
let ndx = hola.indexOf(" ");                        // ndx = 5
let s1 = hola.substring(0, ndx).toUpperCase();      // s1 = "HELLO"
let s2 = hola.substring(ndx + 1).toLowerCase();     // s2 = "world"

// ATENCIÓ: la primera lletra és la 0, l'última és length - 1
let s = "Hola";
let mida = s.length;      // mida = 4
let c0 = s.charAt(0);     // c0 = 'H'
let cF = s.charAt(mida - 1); // cF = 'a'
let cOut = s.charAt(mida);   // cOut = '' (fora de rang)

// Caràcters especials (codis d'escapament)
let missatge = "Primera línia";
missatge += "\nSegona línia"; // \n = salt de línia
alert(missatge);
```

## Detalles importantes

- Acceder con un índice fuera de rango devuelve `""` (cadena vacía).
- Métodos como `replace` no alteran el original: hay que reasignar.

```ts
let hola2 = "HOLA";
hola2.replace('A', 'I');          // NO canvia la variable hola2
hola2 = hola2.replace('A', 'I');  // Ara sí: hola2 = "HOLI"
```

## Ejercicios (enunciados en español)

1) ¿Cuántas letras?
- Guarda en una variable el número de letras que hay en la constante `LLETRES` y muéstralo con `alert()`.

2) Letra enésima
- Muestra la letra que hay en la posición `10` solo con un `alert()` (sin variables intermedias).

3) Recortar texto
- Guarda en una variable las letras entre la posición `10` (incluida) y la `20` (excluida).
- Guarda en otra variable las letras desde la posición `10` hasta el final.
- Muestra ambas.

4) Nombre propio
- Inicializa una variable con tu nombre todo en minúsculas y otra con tu primer apellido todo en mayúsculas.
- Transforma y muestra nombre y apellido en la forma correcta (Primera mayúscula, resto minúsculas).

5) Encuentra la palabra
- Indica si una palabra está dentro de una frase (`true`/`false`).
- Opcional: haz que no importe el uso de mayúsculas/minúsculas.

6) Primera palabra
- Indica si una frase empieza con una palabra determinada (`true`/`false`).
- Opcional: case-insensitive.

7) Posición de la palabra
- En una frase con una palabra repetida, indica la primera y la última posición.
- Opcional: case-insensitive.

8) Recorta palabras repetidas
- Recorta todo el texto entre la primera y la última aparición de la palabra repetida (ambas incluidas).
- Ejemplo: de "Quan plou, plou tant que sembla que plourà tot el dia" → "plou, plou tant que sembla que plou".
- Opcional: recorta excluyendo la primera y la última.

## Soluciones (código en catalán)

```ts
// Exercici 1
const LLETRES = "TRWAGMYFPDXBNJZSQVHLCKE";
console.log(LLETRES.length)

// Exercici 2
console.log(LLETRES.charAt(10))

// Exercici 3
console.log(LLETRES.substring(10,20))
console.log(LLETRES.substring(10,))

// Exercici 4
let nom = "lucia"
let apellido = "ALVAREZ"
console.log(`Nom complet: ${nom.charAt(0).toUpperCase() + nom.slice(1)} ${apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase()}`)

// Exercici 5
let frase = "Quan plou, plou tant que sembla que plourà tot el dia"
let word = "plou"
function wordInSentence(sentence : string, word: string) {
  return sentence.toLowerCase().includes(word.toLowerCase());
}
wordInSentence(frase, word)

// Exercici 6
let primeraParaula = "qUan"
let fraseLow = frase.toLowerCase()
console.log(fraseLow.startsWith(primeraParaula.toLowerCase()))

// Exercici 7
let firstIndex = fraseLow.indexOf(word)
let lastIndex = fraseLow.lastIndexOf(word) + word.length
console.log(`Primer index ${firstIndex}, Último index: ${lastIndex}`)

// Exercici 8 
console.log(`${frase.substring(firstIndex, lastIndex)}`)
console.log(`${frase.substring(firstIndex, fraseLow.lastIndexOf(word))}`)
```
