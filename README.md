# 🚀 Proyecto Sprint 1 — API REST con NestJS + PostgreSQL + Docker

> Backend desarrollado con **NestJS**, **TypeScript**, **PostgreSQL** y **Docker**, siguiendo arquitectura modular, autenticación JWT y buenas prácticas de CI/CD.

---

##  Descripción general

Este proyecto es una **API REST** para la gestión de tareas (To-Do App), desarrollada como parte del **Sprint 1**.  
Permite a los usuarios:

- Registrarse e iniciar sesión (JWT Authentication).
- Crear, listar, actualizar y eliminar tareas propias.
- Paginar, filtrar y proteger los recursos.
- Integrarse fácilmente con frontends modernos o herramientas como Postman / Swagger.

---

##  Tecnologías principales

| Componente | Tecnología | Descripción |
|-------------|-------------|-------------|
| **Backend** | [NestJS](https://nestjs.com/) | Framework Node.js modular basado en TypeScript. |
| **Base de datos** | [PostgreSQL 16](https://www.postgresql.org/) | Motor relacional para persistencia de datos. |
| **ORM** | [TypeORM](https://typeorm.io/) | Mapeo objeto-relacional. |
| **Autenticación** | [JWT](https://jwt.io/) + [PassportJS](https://www.passportjs.org/) | Control de sesiones y seguridad. |
| **Contenedores** | [Docker](https://www.docker.com/) + Docker Compose | Despliegue reproducible de toda la infraestructura. |
| **Validación** | `class-validator` y `class-transformer` | Validación de DTOs. |
| **Documentación** | [Swagger](https://swagger.io/) | Explorador de endpoints `/api`. |

---

##  Arquitectura del proyecto

```bash
src/
 ├── auth/                # Módulo de autenticación (JWT)
 │   ├── dto/
 │   ├── guards/
 │   ├── strategies/
 │   ├── auth.controller.ts
 │   ├── auth.service.ts
 │   └── auth.module.ts
 │
 ├── users/               # Módulo de usuarios
 │   ├── entities/
 │   ├── users.controller.ts
 │   ├── users.service.ts
 │   └── users.module.ts
 │
 ├── tasks/               # Módulo de tareas CRUD
 │   ├── dto/
 │   ├── entities/
 │   ├── tasks.controller.ts
 │   ├── tasks.service.ts
 │   └── tasks.module.ts
 │
 ├── common/              # Decoradores y utilidades comunes
 ├── config/              # Configuración de entorno / DB
 ├── app.module.ts
 └── main.ts
```
## Requisitos previos

Asegúrate de tener instalados:

Docker y Docker Compose

Node.js v20+ (para desarrollo local)

npm v9+ o yarn

Git
Levantar entorno con Docker
1 Variables de entorno

Crea el archivo docker/.env (usado por Docker Compose):

APP_NAME=taskmanager
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=task_manager
JWT_SECRET=supersecret123
JWT_EXPIRATION=1d

2 Levantar servicios

Ejecuta desde la carpeta raíz del proyecto:

docker compose -f docker/docker-compose.yml up --build -d


Esto crea tres contenedores:

taskmanager_postgres → Base de datos PostgreSQL

taskmanager_nestjs → API NestJS

(opcional) taskmanager_nginx → Proxy Nginx si se configuró

3 Comprobar estado
docker compose ps
docker compose logs -f nestjs

4 Acceso a la API

Abre en el navegador:

http://localhost:5000/api


(Si Swagger está habilitado, verás toda la documentación).

⚙️ Variables de entorno para NestJS (config/env/.env)
PORT=3000
DB_HOST=database
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=task_manager
JWT_SECRET=supersecret123
JWT_EXPIRATION=1d
NODE_ENV=development

 Endpoints principales
 Autenticación
Método	Endpoint	Descripción
POST	/auth/register	Registra un nuevo usuario
POST	/auth/login	Inicia sesión y devuelve JWT
🧾 Tareas (protegido con JWT)
Método	Endpoint	Descripción
POST	/tasks	Crea una nueva tarea
GET	/tasks	Lista tareas del usuario (paginadas)
GET	/tasks/:id	Obtiene una tarea por ID
PATCH	/tasks/:id	Actualiza una tarea existente
DELETE	/tasks/:id	Elimina una tarea
 Ejemplo de flujo de uso
# Registro de usuario
POST /auth/register
{
  "email": "user@example.com",
  "password": "123456"
}

# Login
POST /auth/login
{
  "email": "user@example.com",
  "password": "123456"
}
# => devuelve token JWT

# Crear tarea
POST /tasks
Authorization: Bearer <token>
{
  "title": "Primera tarea",
  "description": "Descripción opcional"
}

# Listar tareas
GET /tasks?limit=5&page=1
Authorization: Bearer <token>

 GitFlow utilizado
Rama	Propósito
main	Producción
develop	Integración de funcionalidades
feature/*	Implementación por HU o tarea
release/*	Versión candidata
hotfix/*	Corrección urgente en producción

Ejemplo:

git checkout -b feature/auth-jwt
git add .
git commit -m "feat(auth): implementar registro y login con JWT"
git push origin feature/auth-jwt
 Scripts disponibles
Comando	Descripción
npm run start	Inicia la aplicación compilada
npm run start:dev	Inicia modo desarrollo (watch)
npm run build	Compila el proyecto TypeScript
npm run lint	Corre linter de código
npm run test	Ejecuta pruebas unitarias
npm run test:e2e	Ejecuta pruebas end-to-end
docker compose up --build	Levanta la infraestructura completa
 Estructura Docker
Servicio	Imagen	Puerto	Descripción
nestjs	node:20-alpine	5000 → 3000	API NestJS
database	postgres:16-alpine	5433 → 5432	Base de datos PostgreSQL
nginx (opcional)	nginx:1.25-alpine	80/443	Proxy inverso para producción
 Troubleshooting
Error	Causa	Solución
failed to bind host port 5432	Puerto ocupado	Cambiar a 5433:5432 en docker-compose.yml
secretOrKey: undefined	Falta JWT_SECRET	Añadir JWT_SECRET en .env
Nest can't resolve dependencies	Orden incorrecto de módulos	Revisa importaciones en app.module.ts
Cannot connect to Docker daemon	Docker no iniciado	sudo systemctl start docker
 Próximas mejoras

Middleware para logging y métricas.

CI/CD con GitHub Actions.

Pruebas e2e automatizadas.

Swagger con ejemplos dinámicos.

Seeders para data inicial.

 Equipo
Andres covaleda
Mentor / Revisión	(pendiente)
 Licencia

Este proyecto es de uso académico y libre bajo licencia MIT.
