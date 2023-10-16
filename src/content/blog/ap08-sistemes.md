---
title: "AP 08 Instal·lació de Windows 10 i Ubuntu 22 Dual Boot"
description: "AP 08 Instal·lació de Windows 10 i Ubuntu 22 Dual Boot amb VirtualBox"
seriesId: instalacio-sistemes-operatius
orderInSeries: 8
cover: "~/assets/dualboot.webp"
coverAlt: "Hero Image"
featured: true
pubDate: "16 Oct 2023"
tags:
  - linux
  - Windows 10
  - virtualbox
  - deberes
---

## 1 - Instal·lació de l'ISO de Windows 10

Primer instal·larem Windows 10 amb VirtualBox, anem a crear una màquina virtual amb el nom de "Windows 10 + Ubuntu 23", seleccionem l'iso de Windows 10 i li donem a "Següent".

![Descàrrega](/AP01-8sistema.png)

Amb 6Gb de RAM i 2 processadors aniriem bé però jo li posaré 8Gb de RAM i 8 processadors per anar super bé, li donem a "Següent".

![Descàrrega](/AP02-8sistema.png)

De espai posarem 100Gb perquè Windows 10 recomana 50Gb i Ubuntu 23 recomana 30GB que serian 80GB però per si de cas li posarem 100Gb perque més val que sobri que no falti, li donem a "Següent".

![Nova Màquina Virtual](/AP03-8sistema.png)

Ara iniciem la màquina virtual, iniciem l'istal·lació de Windows 10 i un cop arribem a la finestra de particions, li donem a "Personalitzada: Instal·lar només Windows (avanzat)".

![Configuració de la Màquina Virtual](/AP03-7sistema.png)

Ara fem una partició de 60GB per Windows 10 i continuem amb l'instal·lació.

![Assignació de RAM i Processadors](/AP04-8sistema.png)

Un cop acabada l'instalació ja tenim Windows 10, ara instal·larem Ubuntu 23. Li donem a "Devices" i seleccionem l'iso d'Ubuntu 23. Un cop seleccionada reiniciem la màquina virtual.

![Assignació d'Espai en Disc](/AP05-8sistema.png)

Un cop reiniciada la màquina virtual, seleccionem "Instal·lar Ubuntu" i fem l'instal·lació.

![Confirmació](/AP06-8sistema.png)

En un moment de l'instalació ens posarà una opció que s'anomena "Install Ubuntu alongside Windows 10", la seleccionem i continuem amb l'instal·lació.

![Inici de la Instal·lació](/AP07-8sistema.png)

Al donar-li a continuar ens sortirà una finestra que ens diu que es faràn unes particions utilitzan el espai lliure restant del disc dur, li donem a "Continuar".

![Inici de la Instal·lació](/AP08-8sistema.png)

Un cop acabada l'instalació d'Ubuntu 23 ens sortirà una finestra que ens diu que reiniciem la màquina virtual, li donem a "Reiniciar".

![Creació/Modificació de Particions](/AP09-8sistema.png)

I ja tindriem Ubuntu 23 i Windows 10 instal·lats en la màquina virtual i amb la finestra (grub) que en surt sempre al iniciar el PC per seleccionar el sistema operatiu que volem utilitzar.

![Creació/Modificació de Particions](/AP10-8sistema.png)

## Estilar el Grub

Per estilar el grub, primer de tot hem d'obrir una terminal (linux) i escriure la següent comanda:

```bash
sudo nano /etc/default/grub
```

Un cop oberta la comanda, ens sortirà una finestra com aquesta:

![Creació/Modificació de Particions](/AP11-8sistema.png)

Ara, hem de buscar la línia que diu "GRUB_TIMEOUT_STYLE=hidden" i la canviem per "GRUB_TIMEOUT_STYLE=menu" i després li donem a "Ctrl + X" i després a "Y" i després a "Enter".

![Creació/Modificació de Particions](/AP12-8sistema.png)

Un cop fet aixó, hem d'escriure la següent comanda:

```bash
sudo update-grub
```

I ja tindriem el grub estilat.

![Creació/Modificació de Particions](/AP13-8sistema.png)
