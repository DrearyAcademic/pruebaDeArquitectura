# pruebaDeArquitectura

Este es un proyecto con una arquitectura de **frontend** (Vite, React, TypeScript, Tailwind) y **backend** (Node.js, Express).

## Instalación

### 1. Frontend

1.  Crea el proyecto con Vite .
    ```sh
    cd frontend
    npm create vite@latest .
    ```
2.  Instala las dependencias y configura Tailwind CSS.
    ```sh
    npm install
    npm install -D tailwindcss@^3 postcss autoprefixer
    npx tailwindcss init -p
    ```
3.  Renombra el archivo de configuración de PostCSS para corregir el error de `module is not defined`.
    ```sh
    mv postcss.config.js postcss.config.cjs
    ```
4.  Configura el archivo `tailwind.config.cjs`:
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    };
    ```
5.  Añade las directivas de Tailwind en `src/index.css`:
    ```css
    /* src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
6.  **Iniciar**: `npm run dev`

### 2. Backend

1.  Crea la carpeta `backend` e inicializa un proyecto Node.js.
    ```sh
    mkdir backend
    cd backend
    npm init -y
    ```
2.  Instala las dependencias de Express y CORS.
    ```sh
    npm install express cors
    ```
