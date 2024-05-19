---
title: "Recuperar informació Windows"
description: "Com recuperar informació de Windows"
cover: "~/assets/windows11.jpg"
coverAlt: "Recuperar info windows"
pubDate: "16 May 2024"
tags:
  - windows
---

## Recuperar informació Windows

Primer iniciem la màquina que volem recuperar la informació.

![windows-11](/recuperar-info/1.png)

Com podem veure no tenim la contrasenya per poder accedir a la màquina.

![windows-11](/recuperar-info/2.png)

Li possem una iso de cualquevol Linux live, en aquest cas jo he triat debian live.

![windows-11](/recuperar-info/3.png)

Iniciem la màquina amb la iso.

![windows-11](/recuperar-info/4.png)

Ens fem administradors.

![windows-11](/recuperar-info/5.png)

I ara mirem les particions que tenim.

![windows-11](/recuperar-info/6.png)

Com podem veure només ens interessa les particións `sda3`, `sda5`, `sda6`, `sda7`, `sda8`, `sda9` i `sda10`, ens anem a `/mnt` i creem una carpeta per muntar cada partició.

![windows-11](/recuperar-info/7.png)

Ara connectem un USB per poder passar les dades.

![windows-11](/recuperar-info/8.png)

Ara amb la comanda `find` buscarem els arxius que ens a demanat el client i les copiarem al USB.

```bash
find . -name "arxiu"
```

![windows-11](/recuperar-info/9.png)

I ja tenim les dades al USB, ara recuperem la informació que ens a demanat el client.

![windows-11](/recuperar-info/10.png)

![windows-11](/recuperar-info/11.png)

![windows-11](/recuperar-info/12.png)

![windows-11](/recuperar-info/13.png)

![windows-11](/recuperar-info/14.png)

![windows-11](/recuperar-info/15.png)

![windows-11](/recuperar-info/16.png)

![windows-11](/recuperar-info/17.png)

I ja tenim la informació recuperada, ara podem quitar el USB de la màquina.

![windows-11](/recuperar-info/18.png)

I com podem veure ja tenim la informació recuperada en el USB llesta per entregar al client.

![windows-11](/recuperar-info/19.png)
