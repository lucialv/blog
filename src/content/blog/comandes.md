---
title: "Comandes Sistemes Linux"
description: "Comandes sistemas Linux"
cover: "~/assets/ubuntu.webp"
coverAlt: "Comandosss"
pubDate: "2 Feb 2024"
tags:
  - linux
  - comandes
---

## Cosas Básicas

### Moverse en carpetas

```bash
cd /carpeta
```

### Crear carpetas

```bash
mkdir /carpeta
```

### Crear archivos

```bash
touch archivo.txt
```

### Listar carpetas/archivos

```bash 
ls o ls /carpeta
```

### Eliminar carpetas/archivos

```bash
rm -r /carpeta
```

```bash
rm -r archivo.txt
```

### Copiar archivos

```bash
cp archivo.txt /carpeta
```

### Mover archivos

```bash
mv archivo.txt /carpeta
```

### Ver el contenido de un archivo

```bash
cat archivo.txt
```

### Ver historial de comandos

```bash
history
```

### Ver un arbol de carpetas

Si lo ejecutas sin argumentos te muestra el arbol de carpetas de la carpeta actual donde estás situado.

```bash
tree /carpeta
```

## Comprimir archivos / Descomprimir

### Archivos .tar

Descomprimir/Instalar

```bash
tar -xvf archivo.tar /carpeta
```

Empaquetar

```bash
tar -cvf archivo.tar /carpeta
```

### Archivos .tar.gz

Descomprimir/Instalar

```bash
tar -xvzf archivo.tar.gz /carpeta
```

Empaquetar

```bash
tar -cvzf archivo.tar.gz /carpeta
```

### Archivos .tar.bz2

Descomprimir/Instalar

```bash
tar -xvjf archivo.tar.bz2 /carpeta
```

Empaquetar

```bash
tar -cvjf archivo.tar.bz2 /carpeta
```

### Archivos .zip

Descomprimir/Instalar

```bash
unzip archivo.zip -d /carpeta
```

Empaquetar

```bash
zip -r archivo.zip /carpeta
```

### Archivos .tar.izma o .tlz

Importante tener xz-utils instalado

```bash
apt install xz-utils
```

Instalar

```bash
unIzma "Nom del paquet.Izma"
```

```bash
Izma -d "Nom del paquet.Izma"
```

```bash
tar --Izma -xvf "Nom del paquet.Izma"
```

### Archivos .gz, .gzip o bzip2

Descomprimir/Instalar

```bash
gunzip -c archivo.gz
```

```bash
bunzip2 archivo.bz2
```

Empaquetar

```bash
zip -r archivo.zip /carpeta
```

### Archivos .rar

Instalar

```bash
apt install unrar
```

Descomprimir/Instalar

```bash
unrar x archivo.rar
```

Empaquetar

```bash
rar a archivo.rar /carpeta
```
