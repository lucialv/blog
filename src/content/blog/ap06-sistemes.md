---
title: "AP 06 Instal·lació de Windows 10"
description: "Instal·lació de Windows 10 amb VirtualBox"
seriesId: instalacio-sistemes-operatius
orderInSeries: 6
cover: "~/assets/windows10.jpeg"
coverAlt: "Hero Image"
featured: true
pubDate: "9 Octs 2023"
tags:
  - linux
  - windows 10
  - virtualbox
  - deberes
---

## 1 - Instal·lació de l'ISO de Windows 10

Per començar la instal·lació de Windows 10 amb VirtualBox, primer de tot hem de descarregar la ISO. Pots accedir a la pàgina de descàrrega fent clic [aquí](https://portal.azure.com/?Microsoft_Azure_Education_correlationId=52bb5b1e-f02c-491f-9cd6-cb4f0bd74428#view/Microsoft_Azure_Education/EducationMenuBlade/~/software).

![Descàrrega](/AP01-6sistema.png)

Un cop a la pàgina d'instal·lació, fes clic al botó de descàrrega per iniciar la descàrrega de la ISO.

![Descàrrega](/AP02-6sistema.png)

Amb la ISO de Windows 10 ja descarregada, obre VirtualBox i selecciona "Nou" per crear una nova màquina virtual.

![Nova Màquina Virtual](/AP03-3sistema.png)

Selecciona un nom per a la màquina virtual, com ara "Windows 10". Després, selecciona la ISO que has descarregat. Després, fes clic en "Skip Unattended Installation". Fes clic a "Següent".

![Configuració de la Màquina Virtual](/AP03-6sistema.png)

A continuació, hauràs d'assignar RAM i processadors a la màquina virtual. Segons les recomanacions de Windows 10, 4GB de RAM i 2 processadors són suficients, però usaré 8GB de RAM i 4 processadors. Un cop configurat, fes clic a "Següent".

![Assignació de RAM i Processadors](/AP04-6sistema.png)

Ara, se t'indicarà que assignis espai en disc per a la màquina virtual. Windows 10 suggereix uns 50GB aproximadament però posaré 80GB per si de cas. Configura l'espai i fes clic a "Següent".

![Assignació d'Espai en Disc](/AP05-6sistema.png)

Es mostrarà una finestra de confirmació amb la informació de la màquina virtual. Si tot és correcte, fes clic a "Acabar".

![Confirmació](/AP06-6sistema.png)

Ara, la màquina virtual està creada, però encara no està instal·lada. Per iniciar la instal·lació, selecciona la màquina virtual i fes doble clic en ella.

![Inici de la Instal·lació](/AP07-6sistema.png)

Ara ens pregunta l'idioma que volem la instal·lació i l'idioma que serà el sistema operatiu després de la instal·lació, jo ho deixaré en anglès perquè és el meu idioma preferit però tu li pots posar l'idioma que vulguis.

![Inici de la Instal·lació](/AP08-6sistema.png)

Li donem a "Install Now" per iniciar la instal·lació.

![Creació/Modificació de Particions](/AP09-6sistema.png)

Ara ens pregunta si volem introduir una clau de producte, jo no en posaré cap perquè no la tinc però si tu en tens una posa-la.

![Confirmació](/AP10-6sistema.png)

Ara ens pregunta quina versió de Windows 10 volem instal·lar, jo instal·laré la versió "Windows 10 Pro" però tu pots instal·lar la que vulguis.

![Creació de la Partició](/AP11-6sistema.png)

Ara ens pregunta si volem acceptar els termes de llicència, li donem a "Accept".

![Configuració d'Arrencada](/AP12-6sistema.png)

Ara ens pregunta si volem fer una instal·lació personalitzada o una actualització, jo faré una instal·lació personalitzada però tu pots fer la que vulguis.

![Selecció de Partició](/AP13-6sistema.png)

Li donem a "Next" perque només tenim una partició i aixó començarà la instal·lació.

![Sistema de Fitxers](/AP14-6sistema.png)

Esperem que s'acabi la instal·lació, cuan s'acabi es reiniciarà la màquina virtual automaticament.

## 2 - Configuració de Windows 10

![Confirmació](/AP15-6sistema.png)

Ara en pregunta el país o regió, jo posaré "Spain" però tu pots posar el teu.

![Inici de la Instal·lació](/AP16-6sistema.png)

Posem la distribució del teclat, jo posaré "Spanish" però tu pots posar la teva.

![Finalització de la Instal·lació](/AP17-6sistema.png)

Ara en pregunta si volem que sigui una instal·lació per ús personal o per a una empresa, jo posaré "Personal use" però tu pots posar la que vulguis.

![Selecció d'Idioma](/AP18-6sistema.png)

Ara en pregunta si volem connectar una conta de microsoft, jo no en posaré cap però tu pots posar la teva. Li donaré a offline account perquè no vull posar cap conta de microsoft.

![Connexió a WiFi](/AP19-6sistema.png)

Ara pregunta que nom de usuari volem posar, jo posaré el meu nom però tu pots posar el que vulguis.

![Data i Hora](/AP20-6sistema.png)

Ens demana una contrasenya, jo no en posaré cap però tu pots posar la que vulguis.

![Configuració de Privadesa](/AP21-6sistema.png)

A continuació, ens pregunta si volem activar la localització, jo no la activaré però tu pots activar-la si vols.

![Contrasenya](/AP22-6sistema.png)

Ens pregunta si volem activar encontrar el meu dispositiu, jo no ho activaré però tu pots activar-ho si vols.

![Sistema Operatiu Windows 10](/AP23-6sistema.png)

Ara ens pregunta si volem enviar diagnostics a Microsoft, jo li donaré a que si però sol el requerits però tu pots posar el que vulguis.

![Sistema Operatiu Windows 10](/AP24-6sistema.png)

Ara ens pregunta si volem que enviem diagnostics de escritura a Microsoft, jo li donaré a que no però tu pots posar el que vulguis.

![Sistema Operatiu Windows 10](/AP25-6sistema.png)

Pregunta si volem que els anuncis siguin personalitzats, jo li donaré a que no però tu pots posar el que vulguis.

![Sistema Operatiu Windows 10](/AP26-6sistema.png)

Ara ens pregunta si volem que les aplicacions tinguin accés als meus anuncis, jo li donaré a que no però tu pots posar el que vulguis.

![Sistema Operatiu Windows 10](/AP27-6sistema.png)

Pregunta si volem customitzar la experiencia de Windows, jo li donaré a skip però tu pots posar el que vulguis.

![Sistema Operatiu Windows 10](/AP29-6sistema.png)

Ara si volem tenir a cortana activada, jo li donaré a que no però tu pots posar el que vulguis.

![Sistema Operatiu Windows 10](/AP30-6sistema.png)

Comença a instal·lar-se Windows 10, esperem que s'acabi.

![Sistema Operatiu Windows 10](/AP31-6sistema.png)

I ja tenim Windows 10 instal·lat en VirtualBox i llest per utilitzar.

## 3 - Instal·lació del Guest Addition

Per instal·lar el Guest Addition, aneu a "Devices" i feu clic a l'opció "Insert Guest Addition CD Image..."

![Sistema Operatiu Windows 10](/AP32-6sistema.png)

Anem al explorador de fitxers i anem a "This Pc" i anem a "VirtualBox Guest Additions" i executem el programa.

![Sistema Operatiu Windows 10](/AP33-6sistema.png)

Ens sortirà una finestra de confirmació, li donem a "Next".

![Sistema Operatiu Windows 10](/AP34-6sistema.png)

Li donem a "Next" perquè no volem canviar la ubicació.

![Sistema Operatiu Windows 10](/AP35-6sistema.png)

Li donem a "Install" per iniciar la instal·lació.

![Sistema Operatiu Windows 10](/AP36-6sistema.png)

Esperem que s'acabi la instal·lació.

![Sistema Operatiu Windows 10](/AP37-6sistema.png)

Un cop s'acabi la instal·lació, ens sortirà una finestra de confirmació, li donem a "Reboot Now".

![Sistema Operatiu Windows 10](/AP38-6sistema.png)

I ja tindrem Windows 10 instal·lat amb Guest Addition i llest per utilitzar.

![Sistema Operatiu Windows 10](/AP39-6sistema.png)
