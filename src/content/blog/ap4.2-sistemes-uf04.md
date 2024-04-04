---
title: "AP_4.2 Instal·lació i configuració de Moodle"
description: "AP_4.2 Instal·lació i configuració de Moodle amb Ubuntu"
cover: "~/assets/fedora.webp"
coverAlt: "Moodle"
pubDate: "4 Apr 2024"
tags:
  - linux
  - virtualbox
  - deberes
---

## Instalació de moodle

```bash
sudo su
```

```bash
apt update && apt upgrade
```

### Apache2

```bash
apt install apache2
```

Comprovem que Apache està funcionant amb el següent enllaç:

```bash
localhost
```

Si surt "it works" vol dir que està funcionant.

![Apache](/moodle/1.png)

### MariaDB i PHP

```bash
apt install mariadb-server mariadb-client php phpmyadmin
```

```bash
mysql -u root -p
```

### Crear base de dades i usuari

```bash
create database moodle charset utf8mb4 collate utf8mb4_unicode_ci;
```

```bash
create user moodle@localhost identified by 'password';
```

```bash
grant all privileges on moodle.* to moodle@localhost;
```

```bash
exit
```

### Verificar que PHP està funcionant

```bash
nano /var/www/html/index.php
```

Posem el següent codi:

```php
<?php phpinfo(); ?>
```

I després sortim amb `Ctrl + O` i `Ctrl + X` per guardar els canvis.

I finalment comprovem que PHP està funcionant amb el següent enllaç:

```bash
localhost/index.php
```

Si surt la informació de PHP vol dir que està funcionant.

![PHP](/moodle/2.png)


```bash
nano /etc/apache2/sites-available/moodle.conf
```

Posem el següent codi:

```bash
<VirtualHost *:80>
    <Directory /var/www/html/moodle/>
        AllowOverride All
    </Directory>
</VirtualHost>
```

I després sortim amb `Ctrl + O` i `Ctrl + X` per guardar els canvis.

```bash
cd /etc/apache2/sites-available
```

```bash
a2ensite moodle.conf
```

```bash
a2dissite 000-default.conf
```

```bash
a2enmod rewrite
```

```bash
systemctl restart apache2
```

Instal·lem moodle amb el següent enllaç:

![moodle](https://download.moodle.org/)

I li donem al botó:

![moodle](/moodle/4.png)

Una vegada descarregat el fitxer el descomprimim amb el següent comandament:

```bash
unzip moodle-latest-403.zip
```

I el copiem a la carpeta de Apache amb el següent comandament:

```bash
cp -a /home/usuario/Downloads/moodle/ /var/www/html/moodle
```

```bash
cd /etc/apache2/sites-available
```

```bash
chown -R www-data:www-data /var/www/html/moodle
```

I mirem si funciona amb el següent enllaç:

```bash
localhost/moodle
```

Si surt la pàgina de moodle vol dir que està funcionant.

## Configuració de moodle

![moodle](/moodle/3.png)

Un cop aquí li donem a seguent.

![moodle](/moodle/5.png)

Ara necessitem donar-li permisos perque si no tindrem un error.

```bash
cd /etc/apache2/sites-available
```

```bash
sudo chown -R www-data:www-data /var/www/
```

Ara li donem a seguent.

![moodle](/moodle/6.png)

Aqui posem MariaDB i li donem a seguent.

![moodle](/moodle/7.png)

Ara posem el nom de la base de dades, l'usuari i la contrasenya que hem creat abans i li donem a seguent.

![moodle](/moodle/8.png)

Aceptem.

![moodle](/moodle/9.png)

I ara tenim que solucionar uns errors, per fer això anem a la terminal i posem el següent comandament:

```bash
sudo apt install php-intl
```

```bash
sudo apt install php-soap
```

Ara editem el fitxer de configuració de PHP amb el següent comandament:

```bash
nano /etc/php/8.1/apache2/php.ini
```

I modifiquem la linea 426 perque quedi així:

```bash
max_input_vars = 5000
```

Ara fem `Ctrl + O` i `Ctrl + X` per guardar els canvis.

I per ultim reiniciem el servidor amb el següent comandament:

```bash
systemctl restart apache2
```

I ja podem continuar amb la configuració.

![moodle](/moodle/10.png)

Ens tindrà que sortir igual que a la imatge. Li donem a continua.

![moodle](/moodle/11.png)

Esperem a que s'instal·li.

![moodle](/moodle/12.png)

Un cop acabat li donem a continua.

![moodle](/moodle/13.png)

Omplim les dades i li donem a actualitzar.

![moodle](/moodle/14.png)

Omplim les dades i li donem a desa els canvis.

![moodle](/moodle/15.png)

I ja tenim moodle instal·lat i configurat.

## Configuració bàsica

