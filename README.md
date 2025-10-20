# Task Manager API - Sprint 1

API REST desarrollada en NestJS para gestionar tareas (Tasks) con autenticación JWT, validaciones y persistencia en PostgreSQL.

---

## Objetivo del Sprint

Desarrollar una API REST completa que permita a usuarios autenticados gestionar sus tareas personales mediante operaciones CRUD, con validaciones robustas, documentación Swagger y tests automatizados.

---

## Epic

**Como desarrollador del equipo**, quiero una API REST en NestJS que permita crear, leer, actualizar y eliminar recursos de Tasks (tareas), para poder gestionar tareas básicas de un usuario con autenticación, validación y persistencia en PostgreSQL.

---

## Historias de Usuario

### HU-1 — Listar tareas
**Como** usuario autenticado  
**Quiero** ver la lista de mis tareas paginada  
**Para** revisar lo pendiente

**Endpoint:** `GET /tasks?page=1&limit=10`

---

### HU-2 — Crear tarea
**Como** usuario autenticado  
**Quiero** crear una tarea con título y descripción  
**Para** registrar trabajo a realizar

**Endpoint:** `POST /tasks`

---

### HU-3 — Ver detalle de tarea
**Como** usuario autenticado  
**Quiero** ver los detalles de una tarea por ID  
**Para** consultar información específica

**Endpoint:** `GET /tasks/:id`

---

### HU-4 — Actualizar tarea
**Como** usuario autenticado  
**Quiero** actualizar el estado (pendiente/completada) y/o título/descripción  
**Para** mantener mis tareas actualizadas

**Endpoint:** `PATCH /tasks/:id`

---

### HU-5 — Eliminar tarea
**Como** usuario autenticado  
**Quiero** eliminar tareas que ya no necesito  
**Para** mantener mi lista organizada

**Endpoint:** `DELETE /tasks/:id`

---

### HU-6 — Auth básico (registro + login JWT)
**Como** usuario  
**Quiero** registrarme y loguearme  
**Para** que mis tareas queden asociadas a mi cuenta

**Endpoints:**
- `POST /auth/register`
- `POST /auth/login`

---

### HU-7 — Validación y documentación
**Como** desarrollador  
**Quiero** que las solicitudes se validen con DTOs y que la API esté documentada con Swagger  
**Para** garantizar calidad y facilitar el uso de la API

**Documentación:** Disponible en `/api` o `/docs`

---

## Criterios de Aceptación

- **AC-1:** Endpoints CRUD funcionan y responden JSON correctamente
- **AC-2:** Solo usuarios autenticados pueden crear/editar/eliminar y ver sus propias tareas
- **AC-3:** Validaciones en create y update (título obligatorio, mínimo 3 caracteres)
- **AC-4:** Paginación en listado (page, limit) con valores por defecto (page=1, limit=10)
- **AC-5:** Swagger disponible en `/api` o `/docs`
- **AC-6:** Persistencia en PostgreSQL (o SQLite para dev rápido)
- **AC-7:** Tests básicos implementados:
  - Test unitario para TaskService
  - Test e2e para flujo: auth → create → list

---

## Stack Tecnológico

- **Framework:** NestJS
- **Lenguaje:** TypeScript
- **Base de datos:** PostgreSQL (producción) / SQLite (desarrollo)
- **ORM:** TypeORM o Prisma
- **Autenticación:** JWT (JsonWebToken)
- **Validación:** class-validator, class-transformer
- **Documentación:** Swagger (@nestjs/swagger)
- **Testing:** Jest (unit + e2e)

---

## Estrategia de Branching y Gitflow

### Estructura de Ramas

Este proyecto utiliza **un único repositorio compartido** donde cada miembro del equipo trabaja en su **propia rama personal** para desarrollar el proyecto completo de forma independiente.

#### Ramas Principales

```
main (o master)
└── Código estable y revisado
```

#### Ramas de Desarrollo Individual

Cada miembro del equipo debe crear su propia rama siguiendo la convención:

```
feature/nombre-miembro
```

**Ejemplos:**
- `feature/juan-perez`
- `feature/maria-garcia`
- `feature/carlos-lopez`

---

### Reglas de Gitflow para el Equipo

#### 1. **Creación de Rama Personal**

Al iniciar el proyecto, cada miembro debe:

```bash
# Clonar el repositorio
git clone git@github.com:illuminaki/sprint-1.git
cd sprint-1

# Crear tu rama personal desde main
git checkout -b feature/tu-nombre

# Publicar tu rama en el repositorio remoto
git push -u origin feature/tu-nombre
```

#### 2. **Trabajo Diario**

```bash
# Antes de empezar a trabajar, actualiza tu rama con main
git checkout feature/tu-nombre
git fetch origin
git merge origin/main

# Trabaja normalmente y haz commits frecuentes
git add .
git commit -m "feat: implementar autenticación JWT"
git push origin feature/tu-nombre
```

#### 3. **Convención de Commits**

Utilizar **Conventional Commits** para mantener historial limpio:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `test:` Añadir o modificar tests
- `refactor:` Refactorización de código
- `style:` Cambios de formato (no afectan lógica)
- `chore:` Tareas de mantenimiento

**Ejemplos:**
```bash
git commit -m "feat: añadir endpoint POST /tasks"
git commit -m "fix: corregir validación de título en CreateTaskDto"
git commit -m "test: añadir tests e2e para auth flow"
git commit -m "docs: actualizar README con instrucciones de setup"
```

#### 4. **Pull Requests**

Cuando completes una funcionalidad significativa o el proyecto completo:

1. **Push tu rama:**
   ```bash
   git push origin feature/tu-nombre
   ```

2. **Crear Pull Request en GitHub:**
   - Título descriptivo: `[Tu Nombre] - Implementación completa Task Manager API`
   - Descripción detallada de lo implementado
   - Marcar qué historias de usuario se completaron

3. **Code Review:**
   - Solicitar revisión de al menos 1 compañero
   - Resolver comentarios y hacer ajustes si es necesario

4. **Merge a Main:**
   - Solo después de aprobación
   - Usar "Squash and merge" para mantener historial limpio

#### 5. **Resolución de Conflictos**

Si hay conflictos al hacer merge de `main` a tu rama:

```bash
git checkout feature/tu-nombre
git fetch origin
git merge origin/main

# Resolver conflictos manualmente en tu editor
# Después:
git add .
git commit -m "merge: resolver conflictos con main"
git push origin feature/tu-nombre
```

---

### Reglas Importantes

1. **NUNCA hacer push directo a `main`** - Siempre usar Pull Requests
2. **Mantener tu rama actualizada** con `main` regularmente
3. **Commits atómicos** - Un commit = Una funcionalidad/fix completo
4. **No borrar ramas de otros compañeros**
5. **Comunicar en el equipo** antes de hacer cambios en archivos compartidos (README, .env.example, etc.)
6. **Completar TODO el proyecto** en tu rama - No dividir funcionalidades entre miembros
7. **Tests pasando** antes de crear Pull Request

---

## Setup del Proyecto

### Requisitos Previos

- Node.js >= 18
- PostgreSQL >= 14 (o Docker)
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de PostgreSQL

# Ejecutar migraciones
npm run migration:run

# Iniciar en modo desarrollo
npm run start:dev
```

### Variables de Entorno

Crear archivo `.env` en la raíz:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_password
DB_DATABASE=task_manager

# JWT
JWT_SECRET=tu_secret_super_seguro
JWT_EXPIRATION=1d

# App
PORT=3000
NODE_ENV=development
```

---

## Estructura Sugerida del Proyecto

```
src/
├── auth/
│   ├── dto/
│   │   ├── register.dto.ts
│   │   └── login.dto.ts
│   ├── guards/
│   │   └── jwt-auth.guard.ts
│   ├── strategies/
│   │   └── jwt.strategy.ts
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
├── tasks/
│   ├── dto/
│   │   ├── create-task.dto.ts
│   │   ├── update-task.dto.ts
│   │   └── pagination.dto.ts
│   ├── entities/
│   │   └── task.entity.ts
│   ├── tasks.controller.ts
│   ├── tasks.service.ts
│   └── tasks.module.ts
├── users/
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.service.ts
│   └── users.module.ts
├── common/
│   ├── decorators/
│   │   └── get-user.decorator.ts
│   └── filters/
│       └── http-exception.filter.ts
├── config/
│   └── database.config.ts
├── app.module.ts
└── main.ts
```

---

## Testing

### Ejecutar Tests

```bash
# Tests unitarios
npm run test

# Tests e2e
npm run test:e2e

# Coverage
npm run test:cov
```

### Tests Requeridos (AC-7)

1. **Unit Tests - TaskService:**
   - `should create a task`
   - `should list tasks with pagination`
   - `should update a task`
   - `should delete a task`
   - `should throw error when task not found`

2. **E2E Tests - Auth + Tasks Flow:**
   - `POST /auth/register → 201`
   - `POST /auth/login → 200 + JWT token`
   - `POST /tasks (authenticated) → 201`
   - `GET /tasks (authenticated) → 200 + paginated list`
   - `GET /tasks (unauthenticated) → 401`

---

## Documentación API (Swagger)

Una vez iniciado el servidor, acceder a:

```
http://localhost:3000/api
```

La documentación debe incluir:
- Todos los endpoints
- Schemas de DTOs
- Ejemplos de request/response
- Indicación de endpoints que requieren autenticación

---

## Entregables

Al finalizar el sprint, cada miembro debe tener en su rama:

- ✅ Código fuente completo y funcional
- ✅ Todas las HU implementadas
- ✅ Tests unitarios y e2e pasando
- ✅ Swagger documentado
- ✅ Archivo `.env.example` con variables necesarias
- ✅ Commits con convención establecida
- ✅ Pull Request creado hacia `main`

---

## Soporte

Para dudas o problemas:
- Revisar documentación de [NestJS](https://docs.nestjs.com)
- Consultar con el equipo en el canal de Slack/Discord
- Crear un issue en el repositorio

---

## Equipo

- **Repositorio:** [github.com/illuminaki/sprint-1](https://github.com/illuminaki/sprint-1)
- **Sprint Duration:** [Definir duración]
- **Scrum Master:** [Definir]

---

## Licencia

Este proyecto es parte de un ejercicio educativo.

---

**¡Éxito en el desarrollo!**
