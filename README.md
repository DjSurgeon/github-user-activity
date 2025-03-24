# GitHub User Activity CLI

Una aplicación de línea de comandos (CLI) para obtener y mostrar la actividad reciente de un usuario de GitHub.

## Características

- Obtiene la actividad reciente de cualquier usuario de GitHub.
- Muestra eventos como `PushEvent`, `CreateEvent`, `WatchEvent`, `ForkEvent`, entre otros.
- Formato de salida legible con colores para mejor visualización
- Manejo de errores para casos de usuario no encontrado y límites de la API

---

## 📂 Estructura del proyecto

```bash
📂 github-user-activity/ 
│── 📄 index.js # Archivo principal que ejecuta la aplicación 
│── 📄 fetch.js # Módulo para hacer la petición a la API de GitHub 
│── 📄 format.js # Módulo para formatear la salida en la terminal 
│── 📄 README.md # Documentación del proyecto 
│── 📄 package.json # Dependencias y metadatos del proyecto
```

---

## 🛠️ Instalación

```sh
git clone https://github.com/tu-usuario/github-user-activity.git

cd github-user-activity

```

## 🚀 Uso

Ejecutar la aplicación con el nombre de usuario de GitHub

```sh
node index.js <nombre-de-usuario>

# Ejemplo:

node index.js octocat

```

## 📝 Notas

La API de GitHub limita las peticiones sin autenticación. Si ves errores de rate limit, puedes autenticarte usando un token de acceso personal.

Si el usuario no existe o no tiene actividad reciente, recibirás un mensaje adecuado.

## 🌍 Sobre este proyecto

Este proyecto forma parte de los desafíos propuestos en roadmap.sh, una plataforma que ayuda a desarrolladores a mejorar sus habilidades a través de proyectos prácticos.

Si te ha gustado este proyecto, puedes votarlo y apoyarlo

[🔗 Project Page](https://roadmap.sh/projects/github-user-activity)

[🗳️ Vota aqui](https://roadmap.sh/projects/github-user-activity/solutions?u=67c7868b580201fc77576cbe)

## 🚀 Lo que he aprendido con este proyecto

Al desarrollar esta CLI, he practicado y mejorado mis habilidades en varias áreas clave del desarrollo backend y CLI con Node.js:

✔️ Manejo de APIs: Hacer peticiones HTTP a la API de GitHub usando https y manejar respuestas.

✔️ Manejo de errores: Implementar validaciones y gestión de errores para mejorar la estabilidad del programa.

✔️ Manejo de argumentos en la CLI: Leer y procesar argumentos pasados al ejecutar el script.

✔️ Modularización del código: Dividir la lógica en diferentes archivos (index.js, fetch.js, format.js) para mejorar la organización y reutilización del código.

✔️ Formateo y colores en la terminal: Mejorar la experiencia de usuario con colores y estilos en la salida de la CLI.
