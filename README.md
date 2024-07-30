
# SISTEMA DE CAMELIDOS SUDAMERICANOS EN LA UNIVERSIDAD NACIONAL JORGE BASADRE GROHMANN

## Descripción
El proyecto conste de la creacion de un Sistema web para el registro de camelidos sudamericanos en la UNJBG, donde participamos 2 estudiantes de la "Escuela Profesional de Ingeniera en Infoormatica y Sistemas" , mas un alumno de la "Escuela Profesional de Veterinaria y Zootecnia", se aplico una interaccion constante para el desarrollo similar a la metologia agil, dicho sistema usa React + Vite para el Fronted, node + express para el backend y como gestor de base de datos se uso PostgreSQL.

## Requerimientos principales
  - Uso de una base de datos.
  - Exportacion de Sabanas de los registros , tanto generales,animales machos y hembras.
  - Login.
  - Implementacion de los formularios para Anadir animal,Biometria,Clasificaicon de Fibra,Muestras de semen, capacidad Reproductiva y Salud.
  - Verificacion de que los datos esten completos en los formularios.
  - Tabla principal con datos generales(Cod Arete,sexo,especie,raza,sexo,...).
  - Diseño Responsive

## Login

<p align="center">
  <a href="https://github.com/AtunN25/veterinaria">
    <img src="./assets/login.png" alt="Veterinaria" width="300"/>
  </a>
</p>


## Dashboard




# React + TypeScript + Vite + Express + PostreSQL

Compañero Jimmy Flores de Escuela de Veterinaria y Zootecnia realizando la elicitaicon de requisitos

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
