---
title: "AP 04 Instal·lació de Fedora"
description: "Instal·lació de Fedora amb VirtualBox"
seriesId: instalacio-sistemes-operatius
orderInSeries: 4
cover: "~/assets/fedora.webp"
coverAlt: "Hero Image"
pubDate: "2 Oct 2023"
tags:
  - linux
  - fedora
  - virtualbox
  - deberes
---

## AP_04_Instal·lació de Fedora

### 1 - Instal·lació de la ISO de Fedora

Primer, hem d'anar a la pàgina de Fedora per descarregar la ISO. Per fer-ho, feu clic en el següent botó per anar directament a la pàgina de descàrrega.

[Descarregar Fedora](https://fedoraproject.org/es/workstation/download/)

![Foto](/AP01-4sistema.png)

Un cop esteu a la pàgina d'instal·lació, feu clic al botó de descàrrega (veure imatge anterior). Això iniciarà la descàrrega de la ISO.

![Foto](/AP02-4sistema.png)

Ara que ja tenim la ISO descarregada, dirigim-nos al VirtualBox i feu clic a "New".

![Foto](/AP04-2sistema.png)

Es mostrarà la següent finestra:

![Foto](/AP05-2sistema.png)

Doneu un nom a la màquina, per exemple, "Fedora", seleccioneu la ISO que heu descarregat i, finalment, marqueu l'opció "Skip Unattended Installation" per fer una instal·lació normal. Després, feu clic a "Next".

![Foto](/AP03-4sistema.png)

Ara se us demanarà especificar quanta RAM i quants processadors assignareu a la màquina virtual. Segons la pàgina de Fedora, amb 4 GB de RAM i 2 processadors estarà bé. Un cop configurat, feu clic a "Next".

![Foto](/AP04-4sistema.png)

Ara se us preguntarà quanta espai assignareu a la màquina. La pàgina de Fedora recomana uns 40 GB. Un cop configurat, feu clic a "Next".

![Foto](/AP05-4sistema.png)

Llavors, apareixerà una finestra de confirmació que mostra com es crearà la màquina virtual. Si hi esteu d'acord, feu clic a "Finish".

![Foto](/AP06-4sistema.png)

I ara tindreu la vostra màquina virtual afegida al VirtualBox, però encara necessiteu instal·lar-la. Per fer-ho, inicieu la màquina fent doble clic en ella.

![Foto](/AP07-4sistema.png)

Apareixerà una finestra per seleccionar l'idioma de la instal·lació i l'idioma del sistema operatiu. Seleccioneu el que preferiu, per exemple, espanyol, i feu clic a "Iniciar Fedora-Workstation-Live 38".

![Foto](/AP08-4sistema.png)

A continuació, feu clic a "Install Fedora" per iniciar la instal·lació de Fedora.

![Foto](/AP09-4sistema.png)

Se us demanarà seleccionar l'idioma de la instal·lació i la distribució del teclat. Seleccioneu les opcions que vulgueu i feu clic a "Continuar".

![Foto](/AP10-4sistema.png)

Llavors, se us demanarà seleccionar la zona horària i el disc on instal·lareu Fedora. Feu clic al disc desitjat i, un cop seleccionat, feu clic a "Fet". Després, feu clic a "Començar la instal·lació".

![Foto](/AP12-4sistema.png)

Espereu que s'acabi la instal·lació.

![Foto](/AP13-4sistema.png)

Un cop finalitzada la instal·lació, feu clic a "Finalitzar la instal·lació" i la màquina es reiniciarà.

![Foto](/AP14-4sistema.png)

I així tindreu Fedora instal·lat i llest per utilitzar.

![Foto](/AP15-4sistema.png)

### Instal·lació del Guest Addition

Per instal·lar el Guest Addition, aneu a "Devices" i feu clic a l'opció "Insert Guest Addition CD Image..."

![Foto](/AP18-4sistema.png)

Llavors, feu clic a "VBox_GAs(tu versió)" i apareixerà una finestra que us preguntarà si voleu executar el programari per instal·lar el Guest Addition. Feu clic a "Executar".

![Foto](/AP17-4sistema.png)

Un cop acabada la descàrrega, tindreu Fedora instal·lat amb Guest Addition i llest per fer el que vulgueu amb ell.

![Foto](/AP19-4sistema.png)
