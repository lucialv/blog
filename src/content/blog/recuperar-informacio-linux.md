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
