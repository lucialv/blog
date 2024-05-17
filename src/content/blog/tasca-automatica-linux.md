---
title: "Tasca automatica de Linux"
description: "Com fer una tasca automatica a Linux"
cover: "~/assets/ubuntu.webp"
coverAlt: "Tasca auto linux"
pubDate: "16 May 2024"
tags:
  - linux
---

## Tasca automatica de Linux

Per fer una tasca automatica a Linux, primer hem de crear un script amb la tasca que volem que es faci. Per exemple, jo vull que cada dia a les 12:00 s'executi un script que em faci una copia de seguretat de la carpeta `Documents`.

Per fer-ho, primer creem un script amb el nom `backup.sh` i li posem el següent contingut:

```bash
#!/bin/bash

cp -r /home/usuario/Documentos /home/usuario/backup
```

![linux](/tasca-auto-linux/1.png)

Ara li donem permisos d'execució amb la següent comanda:

```bash
chmod +x backup.sh
```

![linux](/tasca-auto-linux/2.png)

Ara creem una tasca programada amb `cron`. Per fer-ho, obrim una terminal i executem la següent comanda:

```bash
crontab -e
```

Ara afegim la següent linia al final del fitxer:

```bash
0 12 * * * /home/usuario/backup.sh
```

![linux](/tasca-auto-linux/3.png)

Ara guardem i sortim del fitxer. I ja tindrem la tasca programada. A les 12:00 cada dia es farà una copia de seguretat de la carpeta `Documents` a la carpeta `backup`.

![linux](/tasca-auto-linux/4.png)

(Coprobació de la tasca programada amb `cron`)

![linux](/tasca-auto-linux/5.png)

Per veure el historial de tasques programades, executem la següent comanda:

```bash
grep CRON /var/log/syslog
```

![linux](/tasca-auto-linux/6.png)
