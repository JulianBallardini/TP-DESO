# Frontend: Capit@l Humano

Aplicación web del TP de DDS/DESO (gestión de evaluaciones de perfiles),
basada en el frontend de referencia `capital-humano-front` del proyecto TP-Dise-o.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4
- ESLint

## Correr en desarrollo

```sh
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

La app funciona en modo mock (`MockApiClient` en `src/lib/mock`), sin necesidad
de backend. Cuando el backend Spring Boot esté disponible, la URL se configura
con la variable `NEXT_PUBLIC_API_URL` (por defecto `http://localhost:8080/api`).

## Scripts

- `npm run dev`: servidor de desarrollo
- `npm run build`: build de producción
- `npm start`: sirve el build
- `npm run lint`: ESLint

## Estructura

- `src/app`: rutas App Router (home, `preguntas`, `orden-merito`)
- `src/components`: componentes de layout
- `src/lib/api`: contrato del cliente API para el futuro backend
- `src/lib/mock`: implementación mock usada hasta que exista el backend
- `src/types`: tipos de dominio

## Base de datos y backend

Ver [`../database/README.md`](../database/README.md) para levantar PostgreSQL
local con Docker. El backend Spring Boot se implementa en `../Backend`.
