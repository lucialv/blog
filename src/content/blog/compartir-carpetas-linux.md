---
title: "Compartir carpetes a Linux"
description: "Com compartir carpetes a Linux"
cover: "~/assets/ubuntu.webp"
coverAlt: "Puntlinux"
pubDate: "2 May 2024"
tags:
  - linux
---

## Compartir carpetes a Linux

Primer tenim que anar a la configuració de la maquina virtual i activar la xarxa en mode Adapador pont. I amb el promiscuous mode en Allow All.

![linux](/compartir-carpetas/1l.png)

Creem una carpeta a l'escriptori.

![linux](/compartir-carpetas/2l.png)

Obrim una terminal i executem les següents comandes:

```bash
apt install aptitude
```

```bash
aptitude install samba
```

```bash
nano /etc/samba/smb.conf
```

A on possa `workgroup = WORKGROUP` possem el nom del nostre grup de treball.

![linux](/compartir-carpetas/3l.png)

Ara guardem el fitxer i li donem permissos al samba per poder compartir sense error:

```bash
chmod 777 /var/lib/samba/usershares/
```

Ara anem a la carpeta que volem compartir i li donem click dret a les seves propietats i entrem a la pestanya de compartir. Important donar-li "permitir altres crear i eliminar arxius en aquesta carpeta".

![linux](/compartir-carpetas/4l.png)

I ja tingues la carpeta compartida.

![linux](/compartir-carpetas/5l.png)
