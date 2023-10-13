---
title: "AP 07 Instal·lació de Windows 11"
description: "Instal·lació de Windows 11 amb VirtualBox"
seriesId: instalacio-sistemes-operatius
orderInSeries: 7
cover: "~/assets/windows11.jpg"
coverAlt: "Hero Image"
featured: true
pubDate: "10 Oct 2023"
tags:
  - linux
  - windows 11
  - virtualbox
  - deberes
---

## 1 - Instal·lació de l'ISO de Windows 11

Per començar la instal·lació de Windows 11 amb VirtualBox, primer de tot hem de descarregar la ISO. Pots accedir a la pàgina de descàrrega fent clic [aquí](https://portal.azure.com/?Microsoft_Azure_Education_correlationId=52bb5b1e-f02c-491f-9cd6-cb4f0bd74428#view/Microsoft_Azure_Education/EducationMenuBlade/~/software).

![Descàrrega](/AP01-7sistema.png)

Un cop a la pàgina d'instal·lació, fes clic al botó de descàrrega per iniciar la descàrrega de la ISO.

![Descàrrega](/AP02-7sistema.png)

Amb la ISO de Windows 11 ja descarregada, obre VirtualBox i selecciona "Nou" per crear una nova màquina virtual.

![Nova Màquina Virtual](/AP03-3sistema.png)

Selecciona un nom per a la màquina virtual, com ara "Windows 11". Després, selecciona la ISO que has descarregat. Després, fes clic en "Skip Unattended Installation". Fes clic a "Següent".

![Configuració de la Màquina Virtual](/AP03-7sistema.png)

A continuació, hauràs d'assignar RAM i processadors a la màquina virtual. Segons les recomanacions de Windows 11, 6GB de RAM i 2 processadors són suficients, però usaré 8GB de RAM i 8 processadors. Un cop configurat, fes clic a "Següent".

![Assignació de RAM i Processadors](/AP04-7sistema.png)

Ara, se t'indicarà que assignis espai en disc per a la màquina virtual. Windows 11 suggereix uns 80GB aproximadament però posaré 100GB per si de cas. Configura l'espai i fes clic a "Següent".

![Assignació d'Espai en Disc](/AP05-7sistema.png)

Es mostrarà una finestra de confirmació amb la informació de la màquina virtual. Si tot és correcte, fes clic a "Acabar".

![Confirmació](/AP06-7sistema.png)

Ara, la màquina virtual està creada, però encara no està instal·lada. Per iniciar la instal·lació, selecciona la màquina virtual i fes doble clic en ella.

![Inici de la Instal·lació](/AP07-7sistema.png)

Ara ens pregunta l'idioma que volem la instal·lació i l'idioma que serà el sistema operatiu després de la instal·lació, jo ho deixaré en espanyol perquè és el meu idioma preferit però tu li pots posar l'idioma que vulguis.

![Inici de la Instal·lació](/AP08-7sistema.png)

Li donem a instalar ara per iniciar la instal·lació.

![Creació/Modificació de Particions](/AP09-7sistema.png)

Ara ens pregunta si volem introduir una clau de producte, jo no en posaré cap perquè no la tinc però si tu en tens una posa-la.

![Confirmació](/AP10-7sistema.png)

Ara ens pregunta quina versió de Windows 11 volem instal·lar, jo instal·laré la versió "Windows 11 Pro" però tu pots instal·lar la que vulguis.

![Creació de la Partició](/AP11-7sistema.png)

Ara ens pregunta si volem acceptar els termes de llicència, li donem a següent.

![Configuració d'Arrencada](/AP12-7sistema.png)

Ara ens pregunta si volem fer una instal·lació personalitzada o una actualització, jo faré una instal·lació personalitzada però tu pots fer la que vulguis.

![Selecció de Partició](/AP13-7sistema.png)

Li donem a "Siguiente" perque només tenim una partició i aixó començarà la instal·lació.

![Sistema de Fitxers](/AP14-7sistema.png)

Esperem que s'acabi la instal·lació, cuan s'acabi es reiniciarà la màquina virtual automaticament.

## 2 - Configuració de Windows 11

![Confirmació](/AP15-7sistema.png)

Ara en pregunta el país o regió, jo posaré Espanya però tu pots posar el teu.

![Inici de la Instal·lació](/AP16-7sistema.png)

Posem la distribució del teclat, jo posaré "Español" però tu pots posar la teva.

![Finalització de la Instal·lació](/AP17-7sistema.png)

Ara ens pregunta que nom li volem posar al nostre PC, jo posaré el meu nom però tu pots posar el que vulguis.

![Selecció d'Idioma](/AP18-7sistema.png)

Ara en pregunta si volem que sigui una instal·lació per ús personal o per a una empresa, jo posaré per a una empresa però tu pots posar la que vulguis.

![Connexió a WiFi](/AP19-7sistema.png)

Ara en pregunta si volem connectar una conta de microsoft, li donarem a opcions de inici de sessió i li donarem a unir-se a un domini.

![Data i Hora](/AP20-7sistema.png)

Ara em demana el nom de usuari i la contrasenya, jo posaré el meu nom i la meva contrasenya però tu pots posar el que vulguis.

![Configuració de Privadesa](/AP21-7sistema.png)

A continuació, ens pregunta si volem activar la localització, jo no la activaré però tu pots activar-la si vols.

![Contrasenya](/AP22-7sistema.png)

Ens pregunta si volem activar encontrar el meu dispositiu, jo no ho activaré però tu pots activar-ho si vols.

![Sistema Operatiu Windows 11](/AP23-7sistema.png)

Ara ens pregunta si volem enviar diagnostics a Microsoft, jo li donaré a que si però sol el requerits però tu pots posar el que vulguis.

![Sistema Operatiu Windows 11](/AP24-7sistema.png)

Ara ens pregunta si volem que enviem diagnostics de escritura a Microsoft, jo li donaré a que no però tu pots posar el que vulguis.

![Sistema Operatiu Windows 11](/AP25-7sistema.png)

Pregunta si volem que els anuncis siguin personalitzats, jo li donaré a que no però tu pots posar el que vulguis.

![Sistema Operatiu Windows 11](/AP26-7sistema.png)

Ara ens pregunta si volem que les aplicacions tinguin accés als meus anuncis, jo li donaré a que no però tu pots posar el que vulguis.

![Sistema Operatiu Windows 11](/AP27-7sistema.png)

I ja tenim Windows 11 instal·lat en VirtualBox i llest per utilitzar.

## 3 - Instal·lació del Guest Addition

Per instal·lar el Guest Addition, aneu a "Devices" i feu clic a l'opció "Insert Guest Addition CD Image..."

![Sistema Operatiu Windows 11](/AP28-7sistema.png)

Anem al explorador de fitxers i anem a "Este equipo" i anem a "VirtualBox Guest Additions" i executem el programa.

![Sistema Operatiu Windows 11](/AP29-7sistema.png)

Ens sortirà una finestra de confirmació, li donem a "Next".

![Sistema Operatiu Windows 11](/AP30-7sistema.png)

Li donem a "Next" perquè no volem canviar la ubicació.

![Sistema Operatiu Windows 11](/AP31-7sistema.png)

Li donem a "Install" per iniciar la instal·lació.

![Sistema Operatiu Windows 11](/AP32-7sistema.png)

Esperem que s'acabi la instal·lació.

![Sistema Operatiu Windows 11](/AP33-7sistema.png)

Un cop s'acabi la instal·lació, ens sortirà una finestra de confirmació, li donem a "Reboot Now".

![Sistema Operatiu Windows 11](/AP34-7sistema.png)

I ja tindrem Windows 11 instal·lat amb Guest Addition i llest per utilitzar.

![Sistema Operatiu Windows 11](/AP35-7sistema.png)
