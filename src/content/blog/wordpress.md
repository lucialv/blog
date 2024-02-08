---
title: "Wordpress Localhost Ubuntu"
description: "Fer un servidor wordpress amb mariadb, apache2 i php a Ubuntu"
cover: "~/assets/ubuntu.webp"
coverAlt: "Wordpress"
pubDate: "2 Feb 2024"
tags:
  - linux
  - wordpress
---

## Instalació de paquets

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

![Apache](/wordpress/2.png)

### MariaDB i PHP

```bash
apt install mariadb-server mariadb-client php phpmyadmin
```

```bash
mysql -u root -p
```

### Crear base de dades i usuari

```bash
create database wordpress charset utf8mb4 collate utf8mb64_unicode_ci;
```

```bash
create user wordpress@localhost identified by 'password';
```

```bash
grant all privileges on wordpress.* to wordpress@localhost;
```

```bash
exit
```

### Verificar que PHP està funcionant

```bash
nano var/www/html/index.php
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

![PHP](/wordpress/3.png)

## Configuració de Wordpress

```bash
nano /etc/apache2/sites-available/wordpress.conf
```

Posem el següent codi:

```bash
<VirtualHost *:80>
    <Directory /var/www/html/wordpress/>
        AllowOverride All
    </Directory>
</VirtualHost>
```

I després sortim amb `Ctrl + O` i `Ctrl + X` per guardar els canvis.

```bash
cd /etc/apache2/sites-available
```

```bash
a2ensite wordpress.conf
```

```bash
a2enmod rewrite
```

```bash
systemctl restart apache2
```

Instal·lem Wordpress amb el següent enllaç:

![Wordpress](https://es.wordpress.org/download/)

I li donem al botó:

![Wordpress](/wordpress/1.png)

Una vegada descarregat el fitxer el descomprimim amb el següent comandament:

```bash
unzip wordpress-6.4.3-es_ES.zip
```

I el copiem a la carpeta de Apache amb el següent comandament:

```bash
cp -a /home/usuario/Downloads/wordpress-6.4.3-es_ES/wordpress/ /var/www/html/wordpress
```

I mirem si funciona amb el següent enllaç:

```bash
localhost/wordpress
```

Si surt la pàgina de Wordpress vol dir que està funcionant.

![Wordpress](/wordpress/4.png)