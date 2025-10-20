## Descripción

<!-- Breve descripción de lo implementado en este PR -->

Implementación completa de Task Manager API - Sprint 1

---

## Desarrollador

**Nombre:** [Tu nombre completo]  
**Rama:** `feature/[tu-nombre]`

---

## Historias de Usuario Completadas

Marca con `[x]` las historias completadas:

- [ ] **HU-1:** Listar tareas con paginación
- [ ] **HU-2:** Crear tarea
- [ ] **HU-3:** Ver detalle de tarea
- [ ] **HU-4:** Actualizar tarea
- [ ] **HU-5:** Eliminar tarea
- [ ] **HU-6:** Auth básico (registro + login JWT)
- [ ] **HU-7:** Validación y documentación Swagger

---

## Criterios de Aceptación

Marca con `[x]` los criterios cumplidos:

- [ ] **AC-1:** Endpoints CRUD funcionan y responden JSON
- [ ] **AC-2:** Solo usuarios autenticados pueden crear/editar/eliminar sus tareas
- [ ] **AC-3:** Validaciones en create y update (título obligatorio, mínimo 3 caracteres)
- [ ] **AC-4:** Paginación en listado (page, limit) con valores por defecto
- [ ] **AC-5:** Swagger disponible en `/api` o `/docs`
- [ ] **AC-6:** Persistencia en PostgreSQL
- [ ] **AC-7:** Tests básicos (unitario para service y e2e para flujo auth + create + list)

---

## Tests

- **Tests unitarios:** ✅ / ❌ (Passing / Failing)
- **Tests e2e:** ✅ / ❌ (Passing / Failing)
- **Coverage:** XX%

```bash
# Comando ejecutado para verificar tests
npm run test
npm run test:e2e
```

---

## Endpoints Implementados

### Auth
- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Login y obtención de JWT

### Tasks
- `GET /tasks` - Listar tareas (paginado)
- `GET /tasks/:id` - Ver detalle de tarea
- `POST /tasks` - Crear tarea
- `PATCH /tasks/:id` - Actualizar tarea
- `DELETE /tasks/:id` - Eliminar tarea

---

## Swagger

- [ ] Swagger está disponible y funcional en `/api`
- [ ] Todos los endpoints están documentados
- [ ] Los schemas de DTOs están completos
- [ ] Se indica qué endpoints requieren autenticación

---

## Base de Datos

**ORM utilizado:** [ ] TypeORM / [ ] Prisma

**Entidades creadas:**
- [ ] User
- [ ] Task

**Migraciones:** [ ] Sí / [ ] No

---

## Seguridad

- [ ] JWT implementado correctamente
- [ ] Passwords hasheados con bcrypt
- [ ] Variables sensibles en `.env`
- [ ] No hay credenciales hardcodeadas
- [ ] Validación de ownership (usuario solo ve sus tareas)

---

## Validaciones Implementadas

- [ ] Título obligatorio (min 3 caracteres)
- [ ] Email válido en registro
- [ ] Password con requisitos mínimos
- [ ] DTOs con class-validator
- [ ] Manejo de errores apropiado

---

## Checklist Final

- [ ] El código compila sin errores (`npm run build`)
- [ ] Los tests pasan (`npm run test`)
- [ ] Los tests e2e pasan (`npm run test:e2e`)
- [ ] Swagger funciona correctamente
- [ ] No hay `console.log` innecesarios
- [ ] Código formateado (`npm run format`)
- [ ] Lint pasa sin errores (`npm run lint`)
- [ ] Variables sensibles están en `.env`
- [ ] Archivo `.env.example` está actualizado
- [ ] README actualizado si fue necesario

---

## Screenshots (Opcional)

<!-- Añade capturas de pantalla de:
- Swagger UI
- Postman/Insomnia con requests
- Tests pasando
-->

---

## Decisiones Técnicas

<!-- Explica decisiones importantes que tomaste:
- ¿Por qué elegiste TypeORM vs Prisma?
- ¿Cómo estructuraste los módulos?
- ¿Qué estrategia usaste para tests?
-->

---

## Problemas Conocidos

<!-- Si hay bugs conocidos o funcionalidades pendientes, listarlos aquí -->

Ninguno / [Describir problemas si los hay]

---

## Recursos Consultados

<!-- Links o recursos que te ayudaron -->

- Documentación oficial de NestJS
- [Otros recursos...]

---

## Solicito Revisión de:

@[usuario-compañero1]
@[usuario-compañero2]

---

## Tiempo Estimado de Desarrollo

**Total:** X horas

---

## Notas Adicionales

<!-- Cualquier información adicional relevante para los revisores -->
