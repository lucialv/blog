---
title: "Recuperar informació Linux"
description: "Com recuperar informació de Linux"
cover: "~/assets/ubuntu.webp"
coverAlt: "Recuperar info Linux"
pubDate: "16 May 2024"
tags:
  - linux
---

## Recuperar informació Linux

Primer iniciem la màquina que volem recuperar la informació.

![Linux](/recuperar-info-l/1.png)

Com podem veure no tenim la contrasenya per poder accedir a la màquina.

![Linux](/recuperar-info-l/2.png)

Li possem una iso de cualquevol Linux live, en aquest cas jo he triat debian live.

![Linux](/recuperar-info-l/3.png)

Iniciem la màquina amb la iso.

![Linux](/recuperar-info-l/4.png)

Ens fem administradors.

![Linux](/recuperar-info-l/5.png)

I ara mirem les particions que tenim.

![Linux](/recuperar-info-l/6.png)

Com podem veure la partició que ens interesa serà la `sda1` i `sda4`, la `sd3` es de Windows perquè utilitza el sistema de fitxers `ntfs`. Ara crearem unes tres carpetes, una per cada partició.

![Linux](/recuperar-info-l/7.png)

Ara les muntarem.

![Linux](/recuperar-info-l/8.png)

I com podem veure podem accedir a les dades.

![Linux](/recuperar-info-l/9.png)

Primer de tot, possarem un USB per passar les dades.

![Linux](/recuperar-info-l/10.png)

Una vegada possat buscarem els arxius que ens a demanat el client amb la comanda `find`.

```bash
find . -name "arxiu"
```

![Linux](/recuperar-info-l/11.png)

En aquest cas el client ens a demanat un arxiu que nomes sabem que comença per "Christ\_" així que buscarem amb la comanda `find`.

```bash
find . -name "Christ_*"
```

Ara el copiarem al USB.

![Linux](/recuperar-info-l/12.png)

I ja tindrem un arxiu recuperat, com podem veure es guarda al USB.

![Linux](/recuperar-info-l/13.png)

Ara tindrem que fer el mateix amb la resta d'arxius que ens a demanat el client.

![Linux](/recuperar-info-l/15.png)

![Linux](/recuperar-info-l/16.png)

![Linux](/recuperar-info-l/17.png)

![Linux](/recuperar-info-l/18.png)

![Linux](/recuperar-info-l/19.png)

![Linux](/recuperar-info-l/20.png)

![Linux](/recuperar-info-l/22.png)

Vale ara tenim un cas diferent perquè n'hi ha arxius que estàn ocults, per això farem servir -type f amb un punt al principi del fitxer.

```bash
find . -type f -name ".*"
```

![Linux](/recuperar-info-l/21.png)

![Linux](/recuperar-info-l/23.png)

I ja tindrem tots els arxius recuperats. Treiem el USB.

![Linux](/recuperar-info-l/24.png)

Ja tenim totes les dades recuperades.

![Linux](/recuperar-info-l/25.png)
