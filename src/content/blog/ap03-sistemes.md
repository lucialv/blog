---
title: "AP 03 Instal·lació d'Ubuntu"
description: "Instal·lació d'Ubuntu amb VirtualBox"
seriesId: instalacio-sistemes-operatius
orderInSeries: 3
pubDate: "Sep 26 2023"
cover: "~/assets/placeholder-hero.png"
coverAlt: "Hero Image"
tags:
  - linux
  - ubuntu
  - virtualbox
  - deberes
---

## 1 - Instalació de la ISO de Ubuntu

Primer hem d'anar a la pàgina de Ubuntu per descarregar l'ISO, per això donar-li aquest botó per anar directament a la pàgina web de la descàrrega.

[Descarregar Ubuntu](https://ubuntu.com/download/desktop)

![Foto](/AP01-3sistema.png)

Ara que ja estem a la pàgina d'instal·lació donar-li a descarregar la versió Ubuntu 22.04.3 LTS, això començarà la descarrega del ISO.

![Foto](/AP02-3sistema.png)

Ara que ja tenim la ISO instal·lada, ens dirigim al VirtualBox i donem a "New".

![Foto](/AP03-3sistema.png)

Se'ns obrirà aquesta pestanya:

![Foto](/AP04-2sistema.png)

Posem de nom a la màquina "Ubuntu", seleccionem l'ISO que acabem de descarregar i finalment marquem l'opció de "Skip Unattended Installation" per fer una bona instal·lació. I donem a "Next".

![Foto](/AP05-3sistema.png)

Ara ens preguntarà quanta RAM i quants processadors li posarem a aquesta màquina, segons diu la pàgina de Ubuntu, amb 4GB de RAM i 2 processador ja vas bé. Una vegada acabat de possar tot el que volem li donem a "Next".

![Foto](/AP06-3sistema.png)

Ara ens pregunta quant d'espai donarem a la màquina, a Ubuntu amb 25GB està bé però posarem 30GB per si de cas. Un cop posats li donem a "Next".

![Foto](/AP07-3sistema.png)

Ara ens surt una pestanya de confirmació on surt com es crearà la màquina virtual, si estem d'acord donem a "Finish".

![Foto](/AP08-3sistema.png)

I ja tindriem la nostra màquina virtual afegida al VirtualBox, però falta instal·lar-la, per això encendrem la màquina donant-li dos clics.

![Foto](/AP09-3sistema.png)

Ara ens pregunta quin idioma volem per a la instal·lació i també serà l'idioma de l'OS, seleccionem el que més ens agradi, en el meu cas posaré espanyol i li donem a Instalar Ubuntu.

![Foto](/AP10-3sistema.png)

Ens pregunta quina distribució del teclat volem, donem a la que ens vagi millor i donem a Continuar.

![Foto](/AP11-3sistema.png)

Ara ens pregunta quin tipus d'instal·lació volem a una instal·lació normal i deixem les altres opcions com vulguem, un cop acabat li donem a continuar.

![Foto](/AP12-3sistema.png)

Ara ens diu que si volem esborrar el nostre disc i instal·lar Ubuntu, li donem a Instal·lar ara.

![Foto](/AP13-3sistema.png)

Confirmem.

![Foto](/AP14-3sistema.png)

I li posem on vivim.

![Foto](/AP15-3sistema.png)

I ara ens pregunta el nostre nom, el nom que posarem a l'equip, el nom d'usuari i la contrasenya. Un cop emplenat li donem a continuar.

![Foto](/AP17-3sistema.png)

I es començara a instal·lar.

![Foto](/AP18-3sistema.png)

Quan s'acabi la descàrrega ens posarà que s'ha instal·lat i que cal reiniciar, així que us donem a reiniciar ara.

![Foto](/AP19-3sistema.png)

I en obrir-vos seleccionem el nostre nom d'usuari, poso la contrasenya i se'ns obrirà l'escriptori.

![Foto](/AP20-3sistema.png)

Ara ens demana que connectem un compte si vols, jo li donaré ometre.

![Foto](/AP21-3sistema.png)

Ara ens pregunta si volem tenir Ubuntu Pro, li donem a ometre i continuar.

![Foto](/AP22-3sistema.png)

Ara ens pregunta si volem enviar estadistiques als desenvolupadors per millorar Ubuntu, cal pensar que és codi obert i darrere d'això només hi ha desenvolupadors independents, li donem que sí si vols col·laborar i si no doncs dónes que no.

![Foto](/AP23-3sistema.png)

Ens demana si volem activar la ubicacio, seleccionem el que volem i li donem a següent.

![Foto](/AP25-3sistema.png)

I per últim ens diu si volem instal·lar alguna aplicació, li donem a fet i ja tindríem Ubuntu per utilitzar lliurement.

## Instalació del Guest Addition

Per instal·lar el Guest Addition hauríem d'anar a "Devices" i donar-li a l'opció de "Insert Guest Addition CD Image..."

![Foto](/AP26-3sistema.png)

Li donem al disc que ha aparegut a l'esquerra.

![Foto](/AP27-3sistema.png)

Li donem a "VBox_GAs(la teva versió)" i ens sortirà una pestanya que ens diu que si volem executar el programari per instal·lar el Guest Addition, li donem a executar.

![Foto](/AP28-3sistema.png)

Un cop acabada la descàrrega ja tindríem el nostre Ubuntu instal·lat amb Guest Addition i llest per fer el que vulguem amb ell.

![Foto](/AP29-3sistema.png)
