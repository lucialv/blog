---
title: "AP 05 Instal·lació d'Android"
description: "Instal·lació d'Android amb VirtualBox"
seriesId: instalacio-sistemes-operatius
orderInSeries: 5
cover: "~/assets/android.webp"
coverAlt: "Hero Image"
pubDate: "2 Oct 2023"
tags:
  - linux
  - android
  - virtualbox
  - deberes
---

## 1 - Instal·lació de l'ISO d'Android

Per començar la instal·lació d'Android amb VirtualBox, primer de tot hem de descarregar la ISO des de la pàgina oficial d'Android. Pots accedir a la pàgina de descàrrega fent clic [aquí](https://Androidproject.org/es/workstation/download/).

![Descàrrega](/AP01-5sistema.png)

Un cop a la pàgina d'instal·lació, fes clic al botó de descàrrega per iniciar la descàrrega de la ISO.

![Descàrrega](/AP02-5sistema.png)

Amb la ISO d'Android ja descarregada, obre VirtualBox i selecciona "Nou" per crear una nova màquina virtual.

![Nova Màquina Virtual](/AP03-3sistema.png)

Selecciona un nom per a la màquina virtual, com ara "Android". Després, selecciona la ISO que has descarregat. Assegura't de triar "Ubuntu 64 Bits" com a versió. Després, fes clic a "Següent".

![Configuració de la Màquina Virtual](/AP03-5sistema.png)

A continuació, hauràs d'assignar RAM i processadors a la màquina virtual. Segons les recomanacions d'Android, 4GB de RAM i 2 processadors són suficients. Un cop configurat, fes clic a "Següent".

![Assignació de RAM i Processadors](/AP04-5sistema.png)

Ara, se t'indicarà que assignis espai en disc per a la màquina virtual. Android suggereix uns 10GB aproximadament. Configura l'espai i fes clic a "Següent".

![Assignació d'Espai en Disc](/AP05-5sistema.png)

Es mostrarà una finestra de confirmació amb la informació de la màquina virtual. Si tot és correcte, fes clic a "Acabar".

![Confirmació](/AP06-5sistema.png)

Ara, la màquina virtual està creada, però encara no està instal·lada. Per iniciar la instal·lació, selecciona la màquina virtual i fes doble clic en ella.

![Inici de la Instal·lació](/AP07-5sistema.png)

Selecciona "Installation - Install Android-x86 to hard disk" per començar la instal·lació.

![Inici de la Instal·lació](/AP08-5sistema.png)

A continuació, selecciona "Create/Modify partitions".

![Creació/Modificació de Particions](/AP09-5sistema.png)

Quan se t'hi pregunti si vols continuar, selecciona "No".

![Confirmació](/AP10-5sistema.png)

Has de crear una nova partició. En fer-ho, se t'hi preguntarà si vols que sigui una partició lògica o primària; selecciona "primària". Configura la grandària de la partició en MB i fes clic a "Write". Confirma escrivint "Yes".

![Creació de la Partició](/AP11-5sistema.png)

Selecciona "Bootable" i fes clic a "Write". Confirma escrivint "Yes".

![Configuració d'Arrencada](/AP12-5sistema.png)

A continuació, selecciona la partició que acabes de crear i fes clic a "ok".

![Selecció de Partició](/AP13-5sistema.png)

Tria el sistema de fitxers "ext4" (Linux) i fes clic a "Ok".

![Sistema de Fitxers](/AP14-5sistema.png)

Confirma la selecció escrivint "Yes".

![Confirmació](/AP15-5sistema.png)

Finalment, selecciona "Yes" novament per iniciar la instal·lació.

![Inici de la Instal·lació](/AP16-5sistema.png)

Quan la instal·lació finalitzi, se t'hi preguntarà què vols fer. Selecciona "Run Android-x86" i fes clic a "ok".

![Finalització de la Instal·lació](/AP18-5sistema.png)

Ara se t'hi preguntarà quin idioma prefereixes. Selecciona la teva preferència i fes clic a "començar" per iniciar Android.

![Selecció d'Idioma](/AP19-5sistema.png)

Pots triar si vols connectar a una xarxa WiFi. Si no ho vols fer en aquest moment, simplement fes clic a "saltar".

![Connexió a WiFi](/AP20-5sistema.png)

Verifica la data i l'hora i fes clic a "següent".

![Data i Hora](/AP21-5sistema.png)

Se t'hi demanarà permisos per a la ubicació i l'accés a les teves dades. Configura aquests ajustos segons les teves preferències i fes clic a "acceptar".

![Configuració de Privadesa](/AP22-5sistema.png)

A continuació, se t'hi demanarà crear una contrasenya. Pots establir una contrasenya o deixar-la en blanc. Llavors, fes clic a "ara no" si no vols establir una contrasenya.

![Contrasenya](/AP23-5sistema.png)

Felicitats! El teu sistema operatiu Android està funcionant correctament en VirtualBox. Tingues en compte que no té Guest Additions.

![Sistema Operatiu Android](/AP24-5sistema.png)
