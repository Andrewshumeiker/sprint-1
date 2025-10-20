# Guía de Contribución - Sprint 1

Esta guía establece las reglas y mejores prácticas para contribuir al proyecto Task Manager API.

---

## Tabla de Contenidos

1. [Antes de Empezar](#antes-de-empezar)
2. [Configuración Inicial](#configuración-inicial)
3. [Workflow de Desarrollo](#workflow-de-desarrollo)
4. [Estándares de Código](#estándares-de-código)
5. [Pull Requests](#pull-requests)
6. [Comandos Útiles](#comandos-útiles)

---

## Antes de Empezar

### Requisitos

- ✅ Tener acceso al repositorio
- ✅ Node.js >= 18 instalado
- ✅ PostgreSQL instalado o Docker
- ✅ Git configurado con SSH o HTTPS

### Regla Principal

> **Cada miembro desarrolla el proyecto COMPLETO en su propia rama.**  
> No se divide el trabajo por funcionalidades. Todos implementan todas las historias de usuario.

---

## Configuración Inicial

### 1. Clonar el Repositorio

```bash
git clone git@github.com:illuminaki/sprint-1.git
cd sprint-1
```

### 2. Configurar Git

```bash
# Configurar tu nombre y email si no lo has hecho
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@example.com"
```

### 3. Crear Tu Rama Personal

**Convención de nombres:** `feature/tu-nombre-completo`

```bash
# Crear y cambiar a tu rama
git checkout -b feature/juan-perez

# Publicar tu rama en el remoto
git push -u origin feature/juan-perez
```

### 4. Instalar Dependencias

```bash
npm install
```

### 5. Configurar Variables de Entorno

```bash
cp .env.example .env
# Editar .env con tus credenciales
```

---

## Workflow de Desarrollo

### Ciclo Diario de Trabajo

#### Paso 1: Actualizar tu rama con main

```bash
# Asegúrate de estar en tu rama
git checkout feature/tu-nombre

# Traer cambios del remoto
git fetch origin

# Fusionar cambios de main a tu rama
git merge origin/main
```

#### Paso 2: Desarrollar y Hacer Commits

```bash
# Ver estado de archivos modificados
git status

# Añadir archivos al staging
git add .
# o añadir archivos específicos
git add src/tasks/tasks.controller.ts

# Hacer commit siguiendo convención
git commit -m "feat: implementar endpoint GET /tasks"

# Subir cambios a tu rama remota
git push origin feature/tu-nombre
```

#### Paso 3: Commits Frecuentes

**❌ MAL:**
```bash
git commit -m "trabajo del día"
```

**✅ BIEN:**
```bash
git commit -m "feat: crear entidad Task con TypeORM"
git commit -m "feat: implementar TaskService con CRUD básico"
git commit -m "feat: añadir validaciones en CreateTaskDto"
git commit -m "test: agregar tests unitarios para TaskService"
```

---

## Estándares de Código

### Convención de Commits (Conventional Commits)

Formato: `<tipo>: <descripción>`

#### Tipos de Commits:

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad | `feat: añadir autenticación JWT` |
| `fix` | Corrección de bug | `fix: corregir validación de email` |
| `docs` | Cambios en documentación | `docs: actualizar README con setup` |
| `test` | Añadir o modificar tests | `test: añadir tests e2e para auth` |
| `refactor` | Refactorización | `refactor: extraer lógica de validación` |
| `style` | Formato, espacios, etc. | `style: formatear código con prettier` |
| `chore` | Tareas de mantenimiento | `chore: actualizar dependencias` |
| `perf` | Mejoras de rendimiento | `perf: optimizar query de listado` |

### Mensajes de Commit

**✅ Buenos mensajes:**
```bash
feat: implementar paginación en GET /tasks
fix: corregir bug en actualización de estado de tarea
test: añadir test para verificar JWT inválido
docs: documentar endpoints en Swagger
refactor: separar lógica de negocio en services
```

**❌ Malos mensajes:**
```bash
update
fix bug
changes
wip
asdfasdf
```

### Estándares de Código TypeScript

- ✅ Usar TypeScript estricto
- ✅ Nombrar clases en PascalCase: `TaskService`, `CreateTaskDto`
- ✅ Nombrar variables y funciones en camelCase: `findAllTasks`, `userId`
- ✅ Usar interfaces para contratos: `ITaskRepository`
- ✅ Documentar funciones complejas con JSDoc
- ✅ Evitar `any`, usar tipos explícitos
- ✅ Mantener funciones pequeñas y con responsabilidad única

---

## Pull Requests

### Cuándo Crear un Pull Request

- ✅ Has completado todas las historias de usuario
- ✅ Todos los tests pasan
- ✅ El código está limpio y documentado
- ✅ Swagger está funcionando
- ✅ Has probado todos los endpoints

### Cómo Crear un Pull Request

#### 1. Asegúrate que tu rama esté actualizada

```bash
git checkout feature/tu-nombre
git fetch origin
git merge origin/main
git push origin feature/tu-nombre
```

#### 2. Ir a GitHub

- Navega a: https://github.com/illuminaki/sprint-1
- Click en "Pull requests" → "New pull request"
- Base: `main` ← Compare: `feature/tu-nombre`

#### 3. Completar Template del PR

```markdown
## 📋 Descripción

Implementación completa de Task Manager API con todas las historias de usuario.

## ✅ Historias de Usuario Completadas

- [x] HU-1: Listar tareas con paginación
- [x] HU-2: Crear tarea
- [x] HU-3: Ver detalle de tarea
- [x] HU-4: Actualizar tarea
- [x] HU-5: Eliminar tarea
- [x] HU-6: Auth básico (registro + login JWT)
- [x] HU-7: Validación y documentación Swagger

## ✅ Criterios de Aceptación

- [x] AC-1: Endpoints CRUD funcionan
- [x] AC-2: Autenticación implementada
- [x] AC-3: Validaciones en DTOs
- [x] AC-4: Paginación implementada
- [x] AC-5: Swagger disponible en /api
- [x] AC-6: Persistencia en PostgreSQL
- [x] AC-7: Tests unitarios y e2e pasando

## 🧪 Tests

- Tests unitarios: ✅ Passing
- Tests e2e: ✅ Passing
- Coverage: XX%

## 📸 Screenshots

[Opcional: capturas de Swagger, Postman, etc.]

## 🔍 Checklist Final

- [ ] El código compila sin errores
- [ ] Los tests pasan (`npm run test` y `npm run test:e2e`)
- [ ] Swagger funciona en `/api`
- [ ] No hay console.logs innecesarios
- [ ] Variables sensibles están en .env
- [ ] README actualizado si hice cambios relevantes
```

#### 4. Solicitar Revisión

- Asignar a al menos 1 compañero para review
- Etiquetar con labels apropiados

---

## Code Review

### Como Revisor

Al revisar el PR de un compañero, verifica:

- ✅ Todas las HU están implementadas
- ✅ El código sigue las convenciones
- ✅ Los tests pasan
- ✅ No hay código duplicado
- ✅ Las validaciones funcionan correctamente
- ✅ Swagger está completo
- ✅ No hay credenciales hardcodeadas

### Comentarios Constructivos

**✅ Buenos comentarios:**
```
"Considera extraer esta lógica a un método separado para mejor legibilidad"
"Falta validación para el caso cuando el task no pertenece al usuario"
"Excelente uso de decoradores personalizados"
```

**❌ Malos comentarios:**
```
"Esto está mal"
"No me gusta"
```

---

## Resolución de Conflictos

### Si hay conflictos al hacer merge de main

```bash
# 1. Actualizar tu rama con main
git checkout feature/tu-nombre
git fetch origin
git merge origin/main

# 2. Git te indicará qué archivos tienen conflictos
# 3. Abrir archivos con conflictos y buscar:
<<<<<<< HEAD
tu código
=======
código de main
>>>>>>> origin/main

# 4. Editar manualmente y quedarte con el código correcto
# 5. Guardar cambios

# 6. Marcar como resuelto
git add archivo-conflictivo.ts

# 7. Completar el merge
git commit -m "merge: resolver conflictos con main"

# 8. Subir cambios
git push origin feature/tu-nombre
```

---

## Comandos Útiles

### Git

```bash
# Ver historial de commits
git log --oneline

# Ver diferencias antes de commit
git diff

# Ver ramas locales
git branch

# Ver ramas remotas
git branch -r

# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Descartar cambios en archivo
git checkout -- archivo.ts

# Ver estado actual
git status
```

### NPM

```bash
# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run start:dev

# Ejecutar tests
npm run test

# Tests e2e
npm run test:e2e

# Ver coverage
npm run test:cov

# Lint
npm run lint

# Format código
npm run format
```

---

## Reglas Importantes

### ❌ PROHIBIDO

1. **NO hacer push directo a `main`**
2. **NO borrar ramas de otros compañeros**
3. **NO hacer force push a ramas compartidas:** `git push --force`
4. **NO commitear archivos .env** (usar .env.example)
5. **NO commitear node_modules**
6. **NO hacer commits sin mensaje descriptivo**
7. **NO modificar el historial de commits de otros**

### ✅ OBLIGATORIO

1. **Mantener tu rama actualizada con main**
2. **Hacer commits atómicos y frecuentes**
3. **Seguir la convención de commits**
4. **Ejecutar tests antes de crear PR**
5. **Documentar código complejo**
6. **Respetar el código de otros**
7. **Comunicarse con el equipo**

---

## Ayuda

### Problemas Comunes

#### "No tengo permisos para push"
```bash
# Verificar configuración de remoto
git remote -v

# Si es HTTPS y prefieres SSH
git remote set-url origin git@github.com:illuminaki/sprint-1.git
```

#### "Mi rama está desactualizada"
```bash
git fetch origin
git merge origin/main
```

#### "Cometí un error en el último commit"
```bash
# Cambiar mensaje del último commit
git commit --amend -m "nuevo mensaje"

# Añadir cambios olvidados al último commit
git add archivo-olvidado.ts
git commit --amend --no-edit
```

#### "Quiero descartar todos mis cambios locales"
```bash
# ⚠️ CUIDADO: Esto borra cambios no commiteados
git reset --hard HEAD
git clean -fd
```

---

## Recursos Útiles

- [Documentación NestJS](https://docs.nestjs.com)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

---

## Preguntas Frecuentes

**P: ¿Puedo trabajar en más de una rama?**  
R: No es recomendable. Mantén una sola rama personal para este sprint.

**P: ¿Qué hago si otro compañero ya hizo merge a main?**  
R: Actualiza tu rama con `git merge origin/main` y continúa tu desarrollo.

**P: ¿Puedo copiar código de otro compañero?**  
R: No. Cada uno debe desarrollar su propia solución para el aprendizaje.

**P: ¿Cuántos commits debo hacer?**  
R: Los necesarios. Idealmente 1 commit por cada funcionalidad pequeña completada.

**P: ¿Debo hacer merge de otras ramas de compañeros?**  
R: No. Solo fusiona cambios de `main` a tu rama personal.

---

**¡Feliz coding!**
