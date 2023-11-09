---
title: "AP 09 Instal·lació de Debian i Windows 10 Dual Boot"
description: "AP 09 Instal·lació de Debian i Windows 10 Dual Boot amb VirtualBox"
seriesId: instalacio-sistemes-operatius
orderInSeries: 9
cover: "~/assets/windows11.jpg"
coverAlt: "Hero Image"
featured: true
pubDate: "10 Nov 2023"
tags:
  - linux
  - Windows 10
  - virtualbox
  - deberes
---

## 1 - Configuració de la màquina virtual

Primer instal·larem Debian amb VirtualBox, anem a crear una màquina virtual amb el nom de "Debian i Windows 10", seleccionem l'iso de Debian i li donem a "Següent".

![Descàrrega](/AP01-9sistema.png)

Amb 6Gb de RAM i 2 processadors aniriem bé però jo li posaré 8Gb de RAM i 8 processadors per anar super bé, li donem a "Següent".

![Descàrrega](/AP02-9sistema.png)

De espai posarem 100Gb perquè Windows 10 recomana 50Gb i Debian recomana 30GB que serian 80GB però per si de cas li posarem 100Gb perque més val que sobri que no falti, li donem a "Següent".

![Nova Màquina Virtual](/AP03-9sistema.png)

## 2 - Instal·lació de l'ISO de Debian

Ara iniciem la màquina virtual, iniciem l'istal·lació de Debian i un cop arribem a la finestra de particions, li donem a "Manual" i fem les particions tal i como està a la imatge.

![Assignació de RAM i Processadors](/AP04-9sistema.png)

Un cop acabada l'instalació ja tenim Debian, ara instal·larem Windows 10. Li donem a "Devices" i seleccionem l'iso de Windows 10. Un cop seleccionada reiniciem la màquina virtual.

## 3 - Instal·lació de l'ISO de Windows 10

![Assignació d'Espai en Disc](/AP05-9sistema.png)

Un cop reiniciada la màquina virtual, sobrirà l'instalador de Windows 10 i fem l'instal·lació.

![Confirmació](/AP06-9sistema.png)

Al moment de fer les particions ja es possarà sol el nostre disc dur amb l'espai lliure sobrant, li donem a "Next" i continuem amb l'instal·lació.

![Inici de la Instal·lació](/AP07-9sistema.png)

Un cop acabada l'instalació de Windows posarem l'iso de "Boot Repair", li donem a "Reiniciar" Un cop reiniciat seguim el passos que possa el Boot Repair y ens sortirá aquesta finestra que diu els canvís que va a fer en el nostre sistema.

![Creació/Modificació de Particions](/AP08-9sistema.png)

Li donem a ok i després ens demana que reiniciem. Un cop reiniciat ja tindriem Debian i Windows 10 instal·lats en la màquina virtual i amb la finestra (grub) que en surt sempre al iniciar el PC per seleccionar el sistema operatiu que volem utilitzar.

![Creació/Modificació de Particions](/AP09-9sistema.png)

## 4 - Estilar el Grub

Per estilar el grub, primer de tot hem d'obrir una terminal (linux) i escriure la següent comanda:

```bash
sudo nano /etc/default/grub
```

Un cop feta la comanda, ens sortirà una finestra com aquesta:

<!-- ![Creació/Modificació de Particions](/AP10-9sistema.png) -->

Ara, hem de buscar la línia que diu "GRUB_TIMEOUT_STYLE=hidden" i la canviem per "GRUB_TIMEOUT_STYLE=menu" i després li donem a "Ctrl + X" i després a "Y" i després a "Enter".

<!-- ![Creació/Modificació de Particions](/AP11-9sistema.png) -->

Un cop fet aixó, hem d'escriure la següent comanda:

```bash
sudo update-grub
```

I ja tindriem el grub estilat.

<!-- ![Creació/Modificació de Particions](/AP12-9sistema.png) -->
