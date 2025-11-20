Guia para Clonar un Repositorio en Visual Studio Code:

Este documento describe paso a paso cómo clonar un repositorio de GitHub utilizando Git y Visual Studio Code (VS Code).
---------------------------------------------------------------------------------------------
Requisitos previos:
Antes de comenzar, asegurate de tener instalado:

Git → https://git-scm.com/downloads

Visual Studio Code → https://code.visualstudio.com/
---------------------------------------------------------------------------------------------
Paso 1: Obtener la URL del repositorio

Ve al repositorio en GitHub → https://github.com/SoundEmpire25/Ecommerce

Haz clic en el boton verde que dice (<> Code).

Copia la URL HTTPS → https://github.com/SoundEmpire25/Ecommerce.git 
---------------------------------------------------------------------------------------------
Paso 2: Abrir Visual Studio Code

Abre VS Code.

Abre una carpeta nueva donde quieras clonar tu repositorio.

Para esto puede abrir una nueva ventana (File → New Window )

Dentro de esta nueva ventana, abrir y crear una carpeta (File → Open Folder)
---------------------------------------------------------------------------------------------
Paso 3: Abrir la terminal integrada

En VS Code presiona:

Terminal → New Terminal 

o tambien View → terminal 
---------------------------------------------------------------------------------------------
Paso 4: Clonar el repositorio

En la terminal:

Abrir Git Bash y en la terminal escribir:

git clone (copiar el enlace de GitHub)

ejemplo: git clone https://github.com/SoundEmpire25/Ecommerce.git

Esto descargará el repositorio en la carpeta que se creo anteriormente.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
Guía para Crear y Trabajar con una Nueva Rama en Git

Este documento explica cómo crear una nueva rama, cambiarte a ella y subir cambios al repositorio remoto utilizando Git.
---------------------------------------------------------------------------------------------
Requisitos previos

Asegúrate de tener instalado:

Git

Una carpeta local con un repositorio clonado previamente
---------------------------------------------------------------------------------------------
Paso 1: Crear una nueva rama

Para crear una nueva rama con tu nombre de usuario:

Dentro de la terminal → GitBash: escribir lo siguiente 

git branch Rol/nombre

Reemplaza Rol, por el rol asignado y Remplaza nombre, por el nombre de usuario de GitHub

Ejemplo: 

git branch founder/Blandskron
---------------------------------------------------------------------------------------------
Paso 2: Cambiarte a la nueva rama

Una vez creada, cambia a la nueva rama:

git checkout Rol/Nombre
---------------------------------------------------------------------------------------------
Paso 3: Realizar cambios en tu proyecto

Edita o agrega los archivos que necesites dentro del proyecto.
---------------------------------------------------------------------------------------------
Paso 4: Preparar y confirmar los cambios

Agregar todos los cambios al area de preparacion.
En la terminal Gitbash escribir:

git add .

Crear un commit con un mensaje descriptivo:

git commit -m "agregar comentario"

El comentario puede ser lo ultimos cambios realizados dentro del archivo, debe ir entre comillas dobles ""
---------------------------------------------------------------------------------------------
Paso 5: Subir la rama y tus cambios a GitHub 

En la terminal Gitbash escribir:

git push origin Rol/Nombre
---------------------------------------------------------------------------------------------
Nota importante:

Navegar entre carpetas: Si te encuentras fuera de la carpeta principal del proyecto, navega hacia ella usando el comando:

cd nombre-de-la-carpeta

