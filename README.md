# 📦 Sistema de Inventarios

Aplicación web para la gestión de productos en un sistema de inventario. Desarrollada con Angular (frontend en **TypeScript**) y Spring Boot (backend), utilizando MySQL como base de datos.

## 🔧 Tecnologías Utilizadas

### Frontend
- **Angular** (vX)
- **TypeScript**
- Componentes, Servicios, Ruteo
- HTML5 + CSS3 + Bootstrap
- Comunicación HTTP vía `HttpClient`

### Backend
- **Spring Boot 3 / Spring Framework 6**
- Controladores REST
- Servicios e Interfaces
- Repositorios JPA
- Base de datos: **MySQL**

---

## 🧩 Estructura del Proyecto

### Frontend (Angular)
- `agregar-producto.component.ts/html`: Componente para agregar nuevos productos al inventario.
- `producto.service.ts`: Servicio para interactuar con la API REST.
- `app.routes.ts`: Ruteo de vistas entre componentes.

### Backend (Spring Boot)
- `ProductoControlador.java`: Define los endpoints REST para operaciones CRUD.
- `ProductoServicio.java` / `IProductoServicio.java`: Lógica de negocio.
- `ProductoRepositorio.java`: Acceso a base de datos con JPA.
- `application.properties`: Configuración del proyecto y conexión con MySQL.

---

## 📋 Funcionalidades

- 📥 Agregar producto con descripción, precio y existencia.
- 📋 Listar productos existentes.
- ✏️ Editar productos.
- ❌ Eliminar productos.

---

## ⚙️ Configuración

### Requisitos
- Node.js y Angular CLI
- JDK 17+
- MySQL Server

### Base de Datos

Asegúrate de tener MySQL en funcionamiento. La configuración por defecto es:
spring.datasource.url=jdbc:mysql://localhost:3306/inventario_db?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=


⚠️ **Modifica `application.properties` según tus credenciales.**

### Backend

```bash
# Ejecutar el backend (Spring Boot)
./mvnw spring-boot:run

🚀 Ejemplo de uso
Formulario para agregar producto:
<label for="descripcion" class="form-label">Descripcion del Producto</label>
<input type="text" id="descripcion" [(ngModel)]="producto.descripcion" />

Controlador REST:
@GetMapping("/productos")
public List<Producto> listarProductos() {
    return productoServicio.listarTodosLosProductos();
}



# Instalar dependencias y ejecutar Angular
npm install

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

🗂️ Repositorio
Estructura modular separada en frontend/ y backend/.

Se recomienda usar Postman o Swagger para probar la API.

📌 Notas
Proyecto con fines educativos.

Puedes expandir la lógica con autenticación, roles, reportes o gráficos.

📄 Licencia
Este proyecto está bajo la licencia MIT.

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
