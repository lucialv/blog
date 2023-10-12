---
title: "AP 01 Instal·lació de VirtualBox i configuració de VirtualBox"
description: "Instal·lació de VirtualBox i configuració de VirtualBox"
featured: false
seriesId: instalacio-sistemes-operatius
orderInSeries: 1
pubDate: "18 Sep 2023"
tags:
  - linux
  - virtualbox
  - deberes
---

## 1 - Instalació del VirtualBox

Primer hem d'anar a la pàgina de [VirtualBox Downloads](https://www.virtualbox.org/wiki/Downloads) per descarregar l'executable de l'instal·lador.

![VirtualBox Descàrrega](/src/assets/AP01-sistema.png)

Ara que ja estem a la pàgina d'instal·lació, hem d'escollir la nostra instal·lació preferida. Un cop escollida començarà la descàrrega de l'instal·lador executable.

![Escollint la versió](/src/assets/AP02-sistema.png)

Un cop acabat el fitxer estarà a la nostra carpeta de descàrregues. L'executem, ens demanarà permisos d'administrador.

![Executant l'instal·lador](/src/assets/AP03-sistema.png)

Ara li donem a "Next" i seguim les instruccions d'instal·lació.

![Iniciant la instal·lació](/src/assets/AP04-sistema.png)

Ara ens preguntarà quines funcions del programa volem instal·lar, normalment aquí no caldria tocar res. Quan ja hagis acabat de posar-ho al teu gust, dóna-li a “Next”.

![Seleccionant les funcions](/src/assets/AP06-sistema.png)

Ara ens sortirà un advertiment que la nostra connexió a internet s'aturarà un moment perquè s'ha de reiniciar. Li donem que sí i ens sortirà això:

![Advertiment d'aturada de la connexió](/src/assets/AP07-sistema.png)

Donem a "Install" i començarà la instal·lació de VirtualBox.

![Iniciant la instal·lació](/src/assets/AP08-sistema.png)

Un cop acabada la instal·lació, ens sortirà una pantalla dient que ja ha completat la instal·lació. Donem a "Finish" i se'ns obrirà el programa.

![Instal·lació completada](/src/assets/AP09-sistema.png)

---

## 2 - Configuració del VirtualBox

Per obrir el menú de preferències, hem de donar-li a "File > Preferences" o també podem fer `CTRL + G`.

![Menú de preferències](/src/assets/AP10-sistema.png)

Ara que ja tenim obert el menú de preferències podem veure que hi ha els següents apartats:

### 1 - General

A l'apartat general, l'únic que hi ha és l'opció de seleccionar la carpeta on hi ha les teves màquines virtuals. Si la vols canviar, selecciona la nova carpeta i dóna-li a "OK".

![Configuració General](/src/assets/AP11-sistema.png)

### 2 - Input

A l'apartat input podem canviar el que fan les combinacions de segons quines tecles quan estem usant VirtualBox i quan estem en una màquina virtual. Si les vols canviar, només selecciona la funció que vols posar-li una combinació de tecles i per desar-les, dóna-li a "OK".

![Configuració Input](/src/assets/AP12-sistema.png)

### 3 - Update

A l'apartat update podem posar cada quan volem que VirtualBox miri si hi ha una nova versió del programa i si hi ha una nova versió, s'actualitzarà sol. Per activar-lo, selecciona l'opció "Check for updates" i selecciona cada quant vols que miri si hi ha una versió i per últim, també pots seleccionar si vols que sigui una versió estable o que sigui totes les noves versions. Per desar els canvis, dóna-li a "OK".

![Configuració Update](/src/assets/AP13-sistema.png)

### 4 - Language

A l'apartat de language podem seleccionar l'idioma que volem que es mostri el programa. Tan sols selecciona l'idioma que vols que es mostri el programa i dóna-li a "OK" per desar-les.

![Configuració Language](/src/assets/AP14-sistema.png)

### 5 - Display

A l'apartat de display podem canviar la resolució del programa i també la mida de les lletres. Per desar els canvis només doneu a "OK".

![Configuració Display](/src/assets/AP15-sistema.png)

### 6 - Proxy

A l'apartat de proxy podem canviar si volem utilitzar proxy amb ajustaments automàtics, si volem fer servir internet o si volem fer servir un proxy personalitzada. Si vols guardar els canvis, dóna-li a "OK".

![Configuració Proxy](/src/assets/AP16-sistema.png)

### 7 - Interface

I per últim a l'apartat interface podem canviar el tema del programa (Clar, Fosc o segons el nostre sistema). Un cop canviat, dóna-li a "OK" per desar els canvis.

![Configuració Interface](/src/assets/AP17-sistema.png)

### Configuració de l'administrador de medis virtuals

Aquí quan comencem a tenir màquines virtuals, podem administrar els nostres discos virtuals. En aquesta pestanya, podem afegir un disc, crear, eliminar, copiar, moure, alliberar, cercar o veure'n les propietats.

![Configuració de l'administrador de medis virtuals](/src/assets/AP18-sistema.png)

### Configuració de l'administració de la xarxa

Aquí podem administrar les nostres xarxes del host/NAT/cloud, podem afegir, eliminar o mirar les propietats de la xarxa.

![Configuració de l'administració de la xarxa](/src/assets/AP20-sistema.png)

### Procés d'instal·lació de l'Extension Pack

Per instal·lar l'Extension Pack, necessitem anar a la pàgina del principi on ens instal·lem VirtualBox. [Descarregar Extension Pack](https://www.virtualbox.org/wiki/Downloads)

![Descarregar Extension Pack](/src/assets/AP23-sistema.png)

Un cop instal·lat el fitxer, hem d'anar al nostre VirtualBox i donar-li a la icona que posa "Install". Seleccionem l'arxiu que hem descarregat anomenat "Oracle_VM_VirtualBox_Extension_Pack-7.0.10.vbox-extpack" i dóna-li a obrir. Després baixem fins a baix dels termes i condicions i li donem a "I agree". Així, tindríem l'Extension Pack instal·lat al nostre VirtualBox.

![Instal·lació de l'Extension Pack](/src/assets/AP25-sistema.png)

Ara que ja tenim l'extension pack instal·lat, tenim aquestes noves funcions al nostre VirtualBox; suport per a dispositius USB 2.0 i USB 3.0, passat de la càmera web de l'allotjament, protocol d'escriptori remot de VirtualBox (VRDP), xifratge d'imatges de disc amb algorisme AES i ROM d'arrencada Intel PXE.

---

## 3 - Conclusió

Ara ja tindríem el nostre VirtualBox ben configurat i llest per simular màquines virtualment.

![VirtualBox configurat](/src/assets/AP29-sistema.png)
