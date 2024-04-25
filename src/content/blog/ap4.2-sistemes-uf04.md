---
title: "AP_4.2 Instal·lació i configuració de Moodle"
description: "AP_4.2 Instal·lació i configuració de Moodle amb Ubuntu"
cover: "~/assets/moodle-logo.png"
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

## Apartat 2: Configuració bàsica

Canviar el idioma per defecte:

![moodle](/moodle/16.png)

Configura la pàgina principal dins de Administració del lloc > Primera plana > Paràmetres de la primera plana. Modifica el nom del site, llarg i curt, i la descripció. Fes que el nom del portal sigui el_teu_nom_inicials i el curt inicials.

![moodle](/moodle/17.png)

Afegeix elements:

![moodle](/moodle/18.png)

Canvia el tema per defecte del site:

![moodle](/moodle/19.png)

Modifica el teu lloc Moodle perquè s’assembli el màxim possible a la configuració de blocs i mòduls que té el Moodle del centre.

![moodle](/moodle/20.png)

## Apartat 3: Usuaris

Crea usuaris i assigna rols

![moodle](/moodle/21.png)

Resultat final amb els tres usuaris creats:

![moodle](/moodle/22.png)

Assigna’ls els rols de gestor, professor i alumne/estudiant.

![moodle](/moodle/23.png)

Pujar una quantitat massiva d'estudiants:

Primer tenim que fer un arxiu .csv amb les dades dels alumnes, per exemple:

![moodle](/moodle/24.png)

Després pujem el arxiu

![moodle](/moodle/25.png)

I com podem veure s'han carregat tots els alumnes.

![moodle](/moodle/26.png)

Li donem a continuar i ja tindriem els alumnes creats.

![moodle](/moodle/27.png)

## Apartat 4: Cursos

Crea un categoria SMX1

![moodle](/moodle/28.png)

Un curs a dins que es digui M8-Aplicacions Web INICIALS.

![moodle](/moodle/29.png)

![moodle](/moodle/30.png)

## Apartat 5: Rol de professor

Asigna el rol de Gestor de cursos al professor_inicials:

![moodle](/moodle/31.png)

Inicia sessió amb el professor_inicials

![moodle](/moodle/32.png)

Modifica el curs Aplicacions Web de tal manera que tingui 5 temes, un per cada UF que té el mòdul.

![moodle](/moodle/33.png)

Posa activitats:

![moodle](/moodle/34.png)

## Apartat 6: Qualificació

Entra amb dues contes de alumes i fes que facin les activitats.

![moodle](/moodle/35.png)

![moodle](/moodle/36.png)

Ara inicia sessió amb el professor_inicials

![moodle](/moodle/37.png)

Mira les trameses

![moodle](/moodle/38.png)

Qualifica les activitats

![moodle](/moodle/39.png)

![moodle](/moodle/40.png)

I aixi ja la qualificació està feta.

![moodle](/moodle/41.png)

Finalment entra a l’apartat Qualificacions > Configuració (categories i elements) i crea la nota mitjana de les pràctiques del curs al total de la categoria

![moodle](/moodle/42.png)

## Apartat 7: Exportar importar cursos

No em deixa però aquí deixo com es fa:

![moodle](/moodle/43.png)