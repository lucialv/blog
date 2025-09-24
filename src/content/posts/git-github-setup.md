---
title: Setup de Git y GitHub — Configuración completa
published: 2025-09-24
description: Guía paso a paso para instalar y configurar Git CLI y GitHub CLI, autenticación SSH y comandos básicos.
tags: [Git, GitHub, CLI, Setup, SSH]
category: Git
draft: false
---

# Setup de Git y GitHub

Esta guía está pensada para ayudarte a configurar Git y GitHub desde cero, de manera que puedas trabajar cómodamente con repositorios. Es el setup básico que necesitas antes de empezar cualquier proyecto.

## 1. Instalar Git CLI

### Windows
Ve a [git-scm.com](https://git-scm.com/download/win) y descarga el instalador. Durante la instalación:
- Deja las opciones por defecto
- Asegúrate de marcar "Git Bash Here" para tener terminal integrada

### macOS
Tienes varias opciones:

**Con Homebrew (recomendado):**
```bash
brew install git
```

**Descarga directa:** [git-scm.com/download/mac](https://git-scm.com/download/mac)

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install git
```

### Verificar instalación
```bash
git --version
```

## 2. Instalar GitHub CLI (gh)

### Windows
**Con winget:**
```bash
winget install --id GitHub.cli
```

**O descarga desde:** [cli.github.com](https://cli.github.com/)

### macOS
**Con Homebrew:**
```bash
brew install gh
```

### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install gh

# O con snap
sudo snap install gh
```

### Verificar instalación
```bash
gh --version
```

## 3. Autenticación con GitHub

### Paso 1: Login con GitHub CLI
```bash
gh auth login
```

Te preguntará:
1. **¿Qué cuenta?** → `GitHub.com`
2. **¿Protocolo preferido?** → `SSH` (recomendado)
3. **¿Generar clave SSH?** → `Yes` (si no tienes una)
4. **¿Título para la clave?** → Deja el por defecto o pon algo como "Mi PC"
5. **¿Cómo autenticarte?** → `Login with a web browser`

### Paso 2: Verificar autenticación
```bash
gh auth status
```

Deberías ver algo como:
```
✓ Logged in to github.com as tu-usuario (keyring)
✓ Git operations for github.com configured to use ssh protocol.
```

### Paso 3: Verificar clave SSH
```bash
ssh -T git@github.com
```

Si funciona verás:
```
Hi tu-usuario! You've successfully authenticated, but GitHub does not provide shell access.
```

## 4. Configurar Git (usuario y email)

Configura tu identidad para los commits:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

:::important
Usa el mismo email y username que tienes en GitHub.
:::

### Verificar configuración
```bash
git config --global --list
```

## 5. Comandos básicos para trabajar

Ya tienes todo listo. Los comandos que más usarás:

### Clonar un repositorio
```bash
git clone git@github.com:usuario/repositorio.git
cd repositorio
```

### Inicializar un proyecto nuevo
```bash
# Crear carpeta y entrar
mkdir mi-proyecto
cd mi-proyecto

# Inicializar Git
git init
```

### Workflow básico de trabajo
```bash
# 1. Ver estado de archivos
git status

# 2. Añadir archivos al staging
git add archivo.txt        # Un archivo específico
git add .                  # Todos los archivos modificados

# 3. Hacer commit
git commit -m "Mensaje descriptivo del cambio"

# 4. Subir cambios
git push
```

### Comandos adicionales útiles
```bash
# Ver historial de commits
git log --oneline

# Ver diferencias
git diff

# Crear rama nueva
git checkout -b nueva-rama

# Cambiar de rama
git checkout main

# Ver ramas
git branch

# Descargar cambios del repositorio remoto
git pull

# Deshacer cambios (git reset y git restore)
git reset archivo.txt           # Quitar archivo del staging
git reset --soft HEAD~1         # Deshacer último commit (mantiene cambios)
git reset --hard HEAD~1         # Deshacer último commit (BORRA cambios)
git reset --hard origin/main    # Resetear a la versión remota

# Restaurar archivos (git restore - más moderno)
git restore archivo.txt         # Descartar cambios no guardados
git restore --staged archivo.txt # Quitar archivo del staging
git restore --source=HEAD~1 archivo.txt # Restaurar desde commit anterior
```

Y ya ta ^^