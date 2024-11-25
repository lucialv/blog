---
title: "Apunt Programació de Python i C#"
description: ""
cover: "~/assets/portadapro.webp"
coverAlt: "Apunt Programació"
orderInSeries: 1
pubDate: "25 Nov 2024"
tags:
  - python
  - c#
  - programacio
---

## Introducció a Python

### Què és Python?

Python és un llenguatge de programació interpretat, de tipatge dinàmic i multiplataforma. És un llenguatge de programació molt popular i fàcil d'aprendre.

### Print

Per imprimir text per pantalla, utilitzem la funció `print()`. Per exemple:

```python
print("Hola món!") # Hola món!
```

### Variables

Per declarar una variable, utilitzem el següent format:

```python
nom_variable = valor
```

Per exemple:

```python
nom = "Joan"
edat = 16
```

I les imprimim per pantalla:

```python
print(nom) # Joan
print(edat) # 16
```

### Input

Per demanar a l'usuari que introdueixi un valor, utilitzem la funció `input()`. Per exemple:

```python
nom = input("Introdueix el teu nom: ")
print("Hola, " + nom) # Hola, Joan
```

### Exercici 1

Demanar tres números a l'usuari i mostrar la suma:

```python
primeroNumero = input("Dime el primer número entero: ")
segundoNumero = input("Dime el segundo número entero: ")
tercerNumero = input("Dime un número real: ")

suma = int(primeroNumero) + int(segundoNumero) + float(tercerNumero)

nombre = input("Dime tu nombre: ")

print(f"Hola {nombre}\nLa suma de los tres números es: {suma}")
```

### Math

Per utilitzar funcions matemàtiques, importem el mòdul `math`. Per exemple:

```python
import math
```

Per fer arrels quadrades:

```python
print(math.sqrt(16)) # 4.0
```

Per fer potències:

```python
print(math.pow(2, 3)) # 8.0
```

### Exercici 2

Calcular hipotenusa d'un triangle rectàngle:

```python
import math

cateto1 = 6
cateto2 = 7

hipotenusa = math.sqrt(math.pow(cateto1, 2) + math.pow(cateto2, 2))

print(f"La hipotenusa es: {hipotenusa:.2f}") # La hipotenusa es: 9.22
```

### Condicions

Per utilitzar condicions, utilitzem `if`, `elif` i `else`. Per exemple:

```python
if 5 > 2:
    print("5 és més gran que 2")
elif 5 == 2:
    print("5 és igual a 2")
else:
    print("5 no és més gran que 2")
```

### Exercici 3

Es demana un número i es diu si és positiu, negatiu o 0:

```python
numero = input("Dime un numero: ")

if (numero > 0 ):
    print("El numero es positivo")
elif (numero < 0):
    print("El numero es negativo")
else:
    print("El numero es 0")
```

### Exercici 3.1

Par o senar:

```python
numero = int(input("Dime un numero: "))

if numero % 2 == 0:
    print("Es par")
else:
    print("Es impar")
```

### Exercici 3.2

El número més gran:

```python
numero = int(input("Dime un numero: "))
segundoNumero = int(input("Dime otro numero: "))

if numero < segundoNumero:
    print(f"{segundoNumero} es mayor que {numero}")
elif numero > segundoNumero:
    print(f"{numero} es mayor que {segundoNumero}")
else:
    print(f"{numero} y {segundoNumero} son iguales")
```

### Exercici 3.3

Ara amb tres números:

```python
numero = int(input("Dime un numero: "))
segundoNumero = int(input("Dime otro numero: "))
tercerNumero = int(input("Dime otro numero: "))

if numero > segundoNumero and numero > tercerNumero:
    print(f"{numero} es mayor que {segundoNumero} y {tercerNumero}")
elif segundoNumero > numero and segundoNumero > tercerNumero:
    print(f"{segundoNumero} es mayor que {numero} y {tercerNumero}")
elif tercerNumero > numero and tercerNumero > segundoNumero:
    print(f"{tercerNumero} es mayor que {numero} y {segundoNumero}")
else:
    print(f"{numero}, {segundoNumero} y {tercerNumero} son iguales")
```

### Llistes

Per utilitzar llistes, utilitzem el següent format:

```python
llista = ["manzana", "plátano", "cereza"]
print(llista) # ['manzana', 'plátano', 'cereza']
```

Per accedir a un element de la llista:

```python
print(llista[1]) # plátano
```

Per modificar un element de la llista:

```python
llista[1] = "kiwi"
print(llista) # ['manzana', 'kiwi', 'cereza']
```

Per afegir un element a la llista:

```python
llista.append("naranja")
print(llista) # ['manzana', 'kiwi', 'cereza', 'naranja']
```

Per eliminar un element de la llista:

```python
llista.remove("plátano")
print(llista) # ['manzana', 'cereza', 'naranja']
```

### Bucle While

Per utilitzar un bucle `while`, utilitzem el següent format:

```python
i = 1
while i < 6:
    print(i)
    i += 1
```

### Exercici 4

Es demana un número i es diu quants cops ha tardat en superar-lo:

```python
numero = int(input("Dime un número: "))

a = 1
b = 2
contador = 0

while True:
    a = a + b
    b += 1
    contador += 1
    if a >= numero:
        break

print(f"El número ha tardado {contador} veces en superar o igualar a {numero}")
```

### Bucle For

Per utilitzar un bucle `for`, utilitzem el següent format:

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x) # apple, banana, cherry
```

### Exercici 5

Contar fins a 100 i mostrar els múltiples de 13:

```python
import time

contador = 0

numero = int(input("Dime hasta que número quieres contar: "))

multiplos = []

for i in range(1, numero + 1):
    print(i)
    if i % 13 == 0:
        print("¡Múltiplo de 13!")
        contador += 1
        multiplos.append(i)
        time.sleep(1)


print(f"Has contado hasta {numero} y has encontrado {contador} múltiplos de 13.\n Los múltiplos son: {multiplos}")
```

### Exercici 5.1

Fes un programa que demani 5 números a l'usuari i els guardi en una llista. Després, mostra'ls per pantalla:

```python
lista = []
for i in range(1, 5):
    elemento = input("Introduce un elemento para la lista: ")
    lista.append(elemento)

print("Los elementos de la lista son: ")
for i in lista:
    print(f"- {i}")
```

### Exercici 5.2

Fes un programa que demani 5 números a l'usuari i els guardi en una llista. Després, moostra els números parells per pantalla:

```python
lista = []
for i in range(1, 6):
    elemento = input("Introduce numeros: ")
    lista.append(elemento)

print("Los números pares de la lista son: ")
for i in lista:
    if int(i) % 2 == 0:
        print(f"- {i}")
```

### Exercici 5.3

Fes un programa que demani 8 números a l'usuari i els guardi en una llista. Després, mostra'ls per pantalla i mostra els números únics:

```python
lista = []
for i in range(1, 9):
    elemento = input("Introduce numeros: ")
    lista.append(elemento)

print("Los números únicos son: ")
for i in lista[:]:
    while lista.count(i) > 1:
        lista.pop(lista.index(i))

for i in lista:
    print(f"- {i}")
```

## Introducció a C#

### Què és C#?

C# és un llenguatge de programació orientat a objectes desenvolupat per Microsoft. És un llenguatge de programació molt popular i fàcil d'aprendre.

### Console.WriteLine

Per imprimir text per pantalla, utilitzem la funció `Console.WriteLine()`. Per exemple:

```csharp
Console.WriteLine("Hola món!");
```

### Variables

Per declarar una variable, utilitzem el següent format:

```csharp
tipus nom_variable = valor;
```

Per exemple:

```csharp
string nom = "Isaac";
int edat = 16;
bool cert = true;
char lletra = 'a';
```

I les imprimim per pantalla:

```csharp
Console.WriteLine(nom); // Isaac
```

### Variables Numèriques Valors en Bytes

Segons la variable numèrica que declarem, tindrà un valor en bytes:

![Taula de variables numèriques](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXbBs7WwKan5eD8HEImRnLotiBiRVkSFZ-zYuJ0NQP2dhfPbVP7smrGx9Xhnp2BVFsJ8TXP7-opV3UbNOI5MQvGIPj9JDgf2bSERVVgTMu6HhQMNYi5PHPWA5UziqczebTBue3Cvt7rzZD/s1600/type+size.PNG)

### Input

Per demanar a l'usuari que introdueixi un valor, utilitzem la funció `Console.ReadLine()`. Per exemple:

```csharp
Console.WriteLine("Introdueix el teu nom: ");
string nom = Console.ReadLine();
Console.WriteLine("Hola, " + nom); // Hola, Lucía
```

### Exercici 1

Fes un programa que demani el nom de l'usuari i mostri el total dels caràcters del nom en valor numèric (ASCII):

```csharp
Console.WriteLine("Dime tu nombre");
string nombre = Console.ReadLine();

int total = 0;

for (int i = 0; i < nombre.Length; i++)
{
    char caracter = nombre[i];
    total += (int)caracter;
}

Console.WriteLine($"El total de tu nombre es {total}");
```

### Exercici 1.1

Fes el mateix programa però ara també possa el nom en majúscules:

```csharp
Console.WriteLine("Dime tu nombre en minusculas");
string nombre = Console.ReadLine();

string nombreMayusculas = "";
int total = 0;

for (int i = 0; i < nombre.Length; i++)
{
    char caracter = nombre[i];

    caracter = (char)(caracter - 32);

    nombreMayusculas += caracter;
    total += (int)nombre[i];
}

Console.WriteLine($"El total de tu nombre es {total} y tu nombre en mayusculas es {nombreMayusculas}");
```

### If

Per utilitzar condicions, utilitzem `if`, `else if` i `else`. Per exemple:

```csharp
if (5 > 2)
{
    Console.WriteLine("5 és més gran que 2");
}
else if (5 == 2)
{
    Console.WriteLine("5 és igual a 2");
}
else
{
    Console.WriteLine("5 no és més gran que 2");
}
```

### Exercici 2

Fes un programa que demani 2 números a l'usuari i mostri la seva divisió:

```csharp
Console.WriteLine("Dime el primer número ");
int num1 = int.Parse(Console.ReadLine());
Console.WriteLine("Dime el segundo número ");
int num2 = int.Parse(Console.ReadLine());

if (num2 == 0)
{
    Console.WriteLine("No se puede dividir por 0");
}
else
{
    Console.WriteLine("La división es: " + ((float)(num1) / (float)(num2)));
}
```

### Exercici 2.1

Multiples de 2 y 3:

```csharp
Console.WriteLine("Dime un número ");
int num = int.Parse(Console.ReadLine());

if (num % 2 == 0 && num % 3 == 0)
{
    Console.WriteLine("El número es múltiple de 2 y de 3");
}
else if (num % 2 == 0)
{
    Console.WriteLine("El número es múltiple de 2");
}
else if(num % 3 == 0)
{
    Console.WriteLine("El número es múltiple de 3");
}
else
{
    Console.WriteLine("El número no es múltiple de 2 ni de 3");
}
```

### Char

Per utilitzar caràcters, utilitzem el tipus de dades `char`. Per exemple:

```csharp
char lletra = 'a';
```

Per obtenir el valor numèric (ASCII) d'un caràcter:

```csharp
Console.WriteLine((int)lletra);
```

### Switch Case

Per utilitzar un `switch case`, utilitzem el següent format:

```csharp
int dia = 4;
switch (dia)
{
    case 1:
        Console.WriteLine("Dilluns");
        break;
    case 2:
        Console.WriteLine("Dimarts");
        break;
    case 3:
        Console.WriteLine("Dimecres");
        break;
    case 4:
        Console.WriteLine("Dijous");
        break;
    case 5:
        Console.WriteLine("Divendres");
        break;
    case 6:
        Console.WriteLine("Dissabte");
        break;
    case 7:
        Console.WriteLine("Diumenge");
        break;
    default:
        Console.WriteLine("No és un dia de la setmana");
        break;
}
```

Pots posar condicions en el `switch case` amb el `when`:

```csharp
int numero = 5;
switch (numero)
{
    case 1 when numero > 0:
        Console.WriteLine("El número es 1");
        break;
    case 2 when numero > 0:
        Console.WriteLine("El número es 2");
        break;
    case 3 when numero > 0:
        Console.WriteLine("El número es 3");
        break;
    default:
        Console.WriteLine("El número no es 1, 2 o 3");
        break;
}
```

### Exercici 3

Fes un programa que al possar un caracter, et digui si es un caracter de control, imprimible o especial:

```csharp
Console.WriteLine("Inserta un caracter");
char caracter = char.Parse(Console.ReadLine());

int caso;

if ((int)caracter >= 0 && (int)caracter <= 31 || (int)caracter == 127)
{
    caso = 1;
}
else if ((int)caracter >= 32 && (int)caracter <= 126)
{
    caso = 2;
}
else
{
    caso = 3;
}

switch (caso)
{
    case 1:
        Console.WriteLine("El caracter es un caracter de control");
        break;
    case 2:
        Console.WriteLine("El caracter es un caracter imprimible");
        break;
    case 3:
        Console.WriteLine("El caracter es un caracter especial");
        break;
}
```

### While

Per utilitzar un bucle `while`, utilitzem el següent format:

```csharp
int i = 1;
while (i < 6)
{
    Console.WriteLine(i);
    i++;
}
```

### Exercici 4

Fes un programa que mentres la contrasenya sigui diferent de 12345, demani la contrasenya:

```csharp
int password = 0;

while (password != 12345)
{
    Console.WriteLine("Introduce la contraseña");
    password = int.Parse(Console.ReadLine());
}
```

### Exercici 4.1

Ara amb 5 intents:

```csharp
int password = 0;
int oportunidades = 0  ;

while (password != 12345  && oportunidades < 5)
{
    Console.WriteLine("Introduce la contraseña");
    password = int.Parse(Console.ReadLine());
    oportunidades++;
}
```

### Exercici 5

Fes un for dins d'un for per fer una estructura amb \*:

```csharp
for(int x = 0; x <3; x++)
{
    for(int y = 0; y < 4; y++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
```

### Arrays

Per utilitzar arrays, utilitzem el següent format:

```csharp
int[] numeros = {5};
```

Per accedir a un element de l'array:

```csharp
Console.WriteLine(numeros[1]);
```

Per modificar un element de l'array:

```csharp
numeros[1] = 6;
Console.WriteLine(numeros[1]); // 6
```

### ArrayList

Per utilitzar ArrayList, primer hem d'importar la llibreria:

```csharp
using System.Collections;
```

Després, utilitzem el següent format:

```csharp
ArrayList lista = new ArrayList();
lista.Add(5);
lista.Add("Hola");
```

Per accedir a un element de l'ArrayList:

```csharp
Console.WriteLine(lista[0]); // 5
Console.WriteLine(lista[1]); // Hola
```

Per modificar un element de l'ArrayList:

```csharp
lista[0] = 6;
Console.WriteLine(lista[0]); // 6
```

### Exercici 6

Fes un programa que demani 5 números a l'usuari i els guardi en un ArrayList. Després, mostra per pantalla els números parells, tot això amb 3 bucles `for`:

```csharp
Console.WriteLine("Dime cuantos numeros quieres introducir");
int cantidadNumeros2 = Convert.ToInt32(Console.ReadLine());
ArrayList numeros2 = new ArrayList();
for (int i = 0; i < cantidadNumeros2; i++)
{
    Console.WriteLine("Introduce el número");
    int numero = Convert.ToInt32(Console.ReadLine());
    numeros2.Add(numero);
}
ArrayList numerosPares2 = new ArrayList();
for (int i = 0; i < numeros2.Count; i++)
{
    if ((int)numeros2[i] % 2 == 0)
    {
        numerosPares2.Add(numeros2[i]);
    }
}
Console.WriteLine();
Console.WriteLine("Los números pares son:");
for (int i = 0; i < numerosPares2.Count; i++)
{
    Console.WriteLine(numerosPares2[i]);
}
```

### Split

Per separar una cadena de text en un array, utilitzem el següent format:

```csharp
string text = "Hola, com estàs?";
string[] paraules = text.Split(' ');
```

### Exercici 7

Fes un programa que amb la string "1 2 3", sumi els números:

```csharp
string numeritos = "1 2 3";
string[] numeros = numeritos.Split(" ");
int suma = 0;
foreach (string num in numeros)
{
    suma += Convert.ToInt32(num);
}
Console.WriteLine($"La suma de los números es {suma}");
```

### Exercici 7.1

Fes un programa que separi les paraules de una frase:

```csharp
Console.WriteLine("Dime una frase");
string frasecita = Console.ReadLine();
Console.WriteLine("Dime cuantas palabras quieres ver?");
int cuantasPalabras = Convert.ToInt32(Console.ReadLine());
frasecita = frasecita.Trim();
string[] palabras = frasecita.Split(' ');
int contadorDePalabras = 0;
for(int i = 0; i < palabras.Length; i++)
{
    if (contadorDePalabras < cuantasPalabras)
    {
        Console.Write($"{palabras[i]} ");
        contadorDePalabras++;
    }
    else
    {
    break;
    }
}
```

### Funciones

Per utilitzar funcions, utilitzem el següent format:

```csharp
int Suma(int num1, int num2)
{
    return num1 + num2;
}
```

Per cridar la funció:

```csharp
int resultat = Suma(5, 3);
Console.WriteLine(resultat); // 8
```

### Exercici 8

Fes un programa que amb una funció, que digui el número més gran:

```csharp
public static int NumeroMasGrande(int num1, int num2)
{
    if (num1 > num2)
    {
        return num1;
    }
    else
    {
        return num2;
    }
}
static void Main(string[] args)
{
    Console.WriteLine(NumeroMasGrande(5, 7)); // 7
}
```
