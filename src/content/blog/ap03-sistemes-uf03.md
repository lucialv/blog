---
title: "AP_03 Creació usuaris Linux"
description: "AP_03 Creació usuaris Linux amb ubuntu
cover: "~/assets/ubuntu.webp"
coverAlt: "Ubuntu"
pubDate: "4 Apr 2024"
tags:
  - linux
  - virtualbox
  - deberes
---

## Paraula de pas

Obrim usuaris i grups

![Foto](/ap03-uf03/1.png)

Li donem a afegir.

![Foto](/ap03-uf03/2.png)

Posem el nom i el nom d'usuari.

![Foto](/ap03-uf03/3.png)

Posem la contrasenya.

![Foto](/ap03-uf03/4.png)

I ja tindries l'usuari creat amb Paraula de pas.

![Foto](/ap03-uf03/5.png)

## Paraula de pas aleatòria

Creem l'usuari

![Foto](/ap03-uf03/6.png)

Posem generar contrasenya aleatòria i li donem a aceptar.

![Foto](/ap03-uf03/7.png)

I ja tindries l'usuari creat amb Paraula de pas aleatòria.

![Foto](/ap03-uf03/8.png)

## Sense Paraula de pas

Creem l'usuari i posem la contrasenya. I posem que no es requereixi contrasenya per iniciar sessió.

![Foto](/ap03-uf03/9.png)

I ja tindries l'usuari creat sense Paraula de pas.

![Foto](/ap03-uf03/10.png)

## Terminal UserAdd

Obrim la terminal i posem el següent comandament. (Això crea un usuari sense contrasenya i sense directori personal)

```bash
sudo useradd nomusuari
```

![Foto](/ap03-uf03/11.png)

## Terminal AddUser

Obrim la terminal i posem el següent comandament. (Això crea un usuari amb contrasenya i directori personal)

```bash
sudo adduser nomusuari
```

![Foto](/ap03-uf03/12.png)