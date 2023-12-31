---
title: "AP 02 Instal·lació de Debian"
description: "Instal·lació de Debian amb VirtualBox"
seriesId: instalacio-sistemes-operatius
orderInSeries: 2
pubDate: "Sep 25 2023"
cover: "~/assets/debian-logo.webp"
coverAlt: "Hero Image"
updatedDate: "Sep 27 2023"
tags:
  - linux
  - debian
  - virtualbox
  - deberes
---

## 1 - Instalació de la ISO de Debian

Primer hem d'anar a la pàgina de Debian per descarregar l'ISO. Podeu anar directament a la pàgina web de la descàrrega fent clic al link de sota.

[Descarregar Debian](https://www.debian.org/CD/http-ftp/)

![Debian ISO](/AP01-2sistema.png)

Ara que ja estem a la pàgina d'instal·lació, hem d'escollir la nostra instal·lació preferida. La més comuna és la amd64. Ens enviarà a una altra pàgina, baixem fins a baix de la pàgina i seleccionem el fitxer .iso per començar la descàrrega.

![Select ISO](/AP03-2sistema.png)

Ara que ja tenim la ISO instal·lada, ens dirigim al VirtualBox i donem a "New".

![VirtualBox New](/AP04-2sistema.png)

Se'ns obrirà aquesta pestanya:

![VirtualBox Wizard](/AP05-2sistema.png)

Posem de nom a la màquina "Debian", seleccionem l'ISO que acabem de descarregar i finalment marquem l'opció de "Skip Unattended Installation" per fer una bona instal·lació. I donem a "Next".

![VirtualBox Wizard](/AP06-2sistema.png)

Ara ens preguntarà quanta RAM i quants processadors li posarem a aquesta màquina. Segons diu la pàgina de Debian, amb 1GB de RAM i 1 processador ja vas bé, però posaré 4GB de RAM i 2 processadors perquè vagi tot millor. Una vegada acabat de possar tot el que volem, li donem a "Next".

![VirtualBox Wizard](/AP07-2sistema.png)

Ara ens pregunta quant d'espai donarem a la màquina. A Debian, amb 25GB està bé, però posarem 30GB per si de cas. Un cop posats, li donem a "Next".

![VirtualBox Wizard](/AP08-2sistema.png)

Ara ens surt una pestanya de confirmació on surt com es crearà la màquina virtual. Si estem d'acord, donem a "Finish".

![VirtualBox Wizard](/AP09-2sistema.png)

I ja tindríem la nostra màquina virtual afegida al VirtualBox, però falta instal·lar-la. Per això encendrem la màquina donant-li dos clics.

![VirtualBox Wizard](/AP10-2sistema.png)

Ara que se'ns ha obert la màquina, el primer és que ens surt és que hem d'instal·lar Debian. Per això li donarem a Install (Usant les fletxes per moure's i Enter per acceptar).

![Debian Installation](/AP12-2sistema.png)

Ara ens pregunta quin idioma volem per a la instal·lació i també serà l'idioma de l'OS. Seleccionem el que més ens agradi, en el meu cas posaré espanyol i li donem a Enter.

![Select Language](/AP13-2sistema.png)

Ens pregunta quina ubicació és la nostra per posar l'hora del sistema i coses diverses. Seleccionem d'on som i donem a Enter.

![Select Location](/AP14-2sistema.png)

Ens pregunta quina distribució del teclat volem. Donem a la que ens vagi millor i donem a Enter.

![Select Keyboard Layout](/AP15-2sistema.png)

Ara comença a instal·lar-se Debian.

![Debian Installation](/AP16-2sistema.png)

Un cop acabada la instal·lació, ens pregunta quin nom volem posar a la Màquina. En el meu cas li posaré el meu nom, però podeu posar el que vulgueu. Un cop posat, li donem a "Continuar".

![Set Machine Name](/AP17-2sistema.png)

Ara ens preguntarà un nom de domini. Si en tenim, posem un. En el meu cas el deixaré en blanc i el donaré a continuar.

![Set Domain Name](/AP18-2sistema.png)

Ara ens pregunta quina contrasenya li posem per a l'usuari administrador (root). Posem una contrasenya si volem o si no ho deixem en blanc i donem a "Continuar".

![Set Root Password](/AP19-2sistema.png)

En el cas que hàgim posat contrasenya, ens la demanarà posar-la una altra vegada. La posem i li donem a "Continuar".

![Confirm Root Password](/AP20-2sistema.png)

Ara ens demana que introduïm el nom d'usuari per a l'usuari que no té permisos d'administrador. Un cop posat, donem a "Continuar".

![Set User Name](/AP21-2sistema.png)

Ara ens demana la contrasenya de l'usuari. Posem la que vulguem i donem a "Continuar".

![Set User Password](/AP22-2sistema.png)

La introduïm una altre vegada.

![Confirm User Password](/AP23-2sistema.png)

Posem la nostra zona horària i li donem a Enter.

![Set Timezone](/AP24-2sistema.png)

Ara ens pregunta com volem fer les particions. Com no sabem, li donem a la primera opció (Si saps pots fer-les manualment).

![Partitioning](/AP25-2sistema.png)

Seleccionem el nostre disc dur i li donem a Enter.

![Select Disk](/AP26-2sistema.png)

Li donem a "Continue".

![Continue](/AP27-2sistema.png)

Ara seleccionem "Yes" per confirmar que volem esborrar tot el que hi ha al disc.

![Confirm](/AP28-2sistema.png)

I li donem a Enter.

![Confirm](/AP29-2sistema.png)

Un cop formati, li donem a "Yes" i enter.

![Confirm](/AP30-2sistema.png)

Seleccionem la opció de "All files in one partition (recommended for new users)".

![Select Partitioning Scheme](/AP31-2sistema.png)

I seleccionem "Finish partitioning and write changes to disk".

![Finish Partitioning](/AP32-2sistema.png)

Ara se'ns confirmarà com es crearan les particions.

![Confirm Partitioning](/AP33-2sistema.png)

Li donem a Enter.

![Confirm Partitioning](/AP34-2sistema.png)

I la confirmem posant "Yes".

![Confirm](/AP35-2sistema.png)

La instal·lació està feta.

![Installation Complete](/AP36-2sistema.png)

Li donem a "Continue".

![Installation Complete](/AP37-2sistema.png)

I ara li direm si volem instal·lar el GNU Grub, que és l'arrancador que li posarem a la màquina. Li donem a "Yes".

![Install GRUB](/AP38-2sistema.png)

Ens preguntarà on posar-lo, li direm que a la partició principial (/dev/sda).

![Select GRUB Installation Target](/AP39-2sistema.png)

I ja tenim Debian instal·lat.

![Installation Complete](/AP40-2sistema.png)

Ara es reiniciarà.

![Reboot](/AP41-2sistema.png)

Li traiem l'ISO d'instal·lació.

![Eject ISO](/AP42-2sistema.png)

Li donem a Enter.

![Debian First Boot](/AP43-2sistema.png)

Ens mostrarà la pantalla de login.

![Login](/AP44-2sistema.png)

Entrem les nostres dades de login i password.

![Login Credentials](/AP45-2sistema.png)

I ens mostrarà el desktop.

![Debian Desktop](/AP46-2sistema.png)

I ja tindríem Debian instal·lat a VirtualBox!

---

## 2 - Updates i installació de les Guest Additions

Per instal·lar el Guest Addition haurem d'anar a "Dispositius" i seleccionar l'opció "Inserir la imatge del CD Guest Addition..."

![Imatge 1](/AP47-2sistema.png)

Després, obrim l'explorador d'arxius.

![Imatge 2](/AP48-2sistema.png)

Seleccionem "VBox_GAs (la teva versió)" i apareixerà una finestra que ens pregunta si volem executar el programari per instal·lar el Guest Addition. Fem clic a "Executar".

![Imatge 3](/AP49-2sistema.png)
![Imatge 4](/AP50-2sistema.png)

Se'ns demanarà la contrasenya de l'administrador; la introduïm i fem clic a "Autenticar".

![Imatge 5](/AP51-2sistema.png)

Esperem a que s'acabi la instal·lació.

![Imatge 6](/AP52-2sistema.png)

Un cop acabada la descàrrega, tindríem el nostre Debian instal·lat amb el Guest Addition i llest per utilitzar.

![Imatge 7](/AP53-2sistema.png)
