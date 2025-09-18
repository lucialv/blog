---
title: Primera clase de Sistemas
published: 2025-09-12
description: Material para la primera clase de Sistemas, cubriendo conceptos básicos y conocimientos fundamentales.
tags: [Sistemas, Tutorial, Hardware, Software, Informática]
category: Clases-Sistemas
draft: false
---

# Primera clase de Sistemas

## Conceptos básicos

`Información`: Cualquier *dato* que interviene o da soporte a decisiones.

`Informática`: **INFOR**mación **MÁTI**ca (tratamiento automático y racional de la información mediante ordenadores).

Ejemplos de tratamiento de información:
- Buscar datos
- Clasificar datos
- Contabilizar datos
- Generar gráficas
- Realizar estadísticas

`Instrucción`: Operación elemental. Suele consistir en la manipulación de datos para obtener resultados.

`Programa`: Conjunto de instrucciones en un orden determinado para una finalidad determinada.

`Ordenador`: Máquina capaz de procesar un programa.

`Hardware` (soporte físico): Parte material del ordenador (gráfica, placa base, memoria, etc.).

`Software` (soporte lógico): Conjunto de programas que utiliza el hardware para un propósito específico (sistema operativo, aplicaciones, etc.).

`Sistema informático`: Conjunto de hardware, software y datos para tratar la información.

`Firmware`: Software que controla directamente los circuitos electrónicos del hardware (`BIOS`, `UEFI`). Está guardado en memorias no volátiles (`ROM`, `EEPROM`, `Flash`). Dependendiendo de estos tipos de memoria, el firmware puede ser actualizable o no.

## El bit

`BIT (BInary digiT)`: Unidad mínima de información en un sistema digital. Puede tener dos valores: `0` o `1`, `OFF` o `ON`, `High` o `Low`, `yes` o `no`, `true` o `false`.

`BYTE`: Conjunto de bits. En general se acepta que un byte son `8` bits. Permite representar `256` valores diferentes (`2^8 = 256`).

`OCTETO`: Conjunto de `8` bits.

| Bits     | Valor mínimo     | Valor máximo       | Total de valores |
|----------|------------------|--------------------|------------------|
| `1 bit`    | `0`                | `1`                  | `2 (2¹)`           |
| `2 bits`   | `00 = 0`           | `11 = 3`             | `4 (2²)`           |
| `3 bits`   | `000 = 0`          | `111 = 7`            | `8 (2³)`           |
| `4 bits`   | `0000 = 0`         | `1111 = 15`          | `16 (2⁴)`          |
| `5 bits`   | `00000 = 0`        | `11111 = 31`         | `32 (2⁵)`          |
| `6 bits`   | `000000 = 0`       | `111111 = 63`        | `64 (2⁶)`          |
| `7 bits`   | `0000000 = 0`      | `1111111 = 127`      | `128 (2⁷)`         |
| `8 bits`   | `00000000 = 0`     | `11111111 = 255`     | `256 (2⁸)`         |
| `9 bits`   | `000000000 = 0`    | `111111111 = 511`    | `512 (2⁹)`         |
| `10 bits`  | `0000000000 = 0`   | `1111111111 = 1023`  | `1024 (2¹⁰)`       |

## Números del 1 al 10 en binario

| Decimal | Binario |
|---------|---------|
| `1`     | `0001`  |
| `2`     | `0010`  |
| `3`     | `0011`  |
| `4`     | `0100`  |
| `5`     | `0101`  |
| `6`     | `0110`  |
| `7`     | `0111`  |
| `8`     | `1000`  |
| `9`     | `1001`  |
| `10`    | `1010`  |

## Unidades de capacidad

Rápidamente también aparecio la necesidad de agrupar los bytes y se crearon múltiples del byte:

| Unidad   | Abreviatura | Bytes                             |
|----------|-------------|-----------------------------------|
| Byte     | `B`           | `1` Byte                            |
| Kilobyte | `KB`          | `1.024` Bytes                       |
| Megabyte | `MB`          | `1.024` KB = `1.048.576` Bytes        |
| Gigabyte | `GB`          | `1.024` MB = `1.073.741.824` Bytes    |
| Terabyte | `TB`          | `1.024` GB = `1.099.511.627.776` Bytes |
| Petabyte | `PB`          | `1.024` TB = `1.125.899.906.842.624` Bytes |