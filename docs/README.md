# Documentación del Proyecto

Este proyecto incluye dos páginas HTML: **About Us** (Acerca de nosotros) y **Contact Us** (Contáctanos). Ambas páginas están diseñadas para proporcionar información sobre la empresa y permitir a los usuarios ponerse en contacto con ella.

## Estructura del Proyecto

El proyecto utiliza el sistema de plantillas de **EJS** (Embedded JavaScript) para incluir secciones comunes en las páginas. Esto ayuda a mantener el código DRY (Don't Repeat Yourself).

### Páginas

1. **Acerca de Nosotros (About Us)**
   - **Ruta**: `about.html`
   - **Descripción**: Esta página proporciona una visión general de la empresa, destacando su compromiso con la calidad y la innovación.
   - **Contenido**:
     - Título de la sección
     - Breve descripción de la empresa.

   ```html
   <!DOCTYPE html>
   <html lang="es">
     <head>
       <!-- <%- include('../includes/head') %> -->
     </head>
     <body>
       <!-- <%- include('../includes/header') %> -->

       <div class="container" style="margin-top: 80px !important">
         <div class="row justify-content-md-center mb-5">
           <div class="col-md-12 mt-5">
             <h2 class="text-center title">
               About Us
               <hr />
             </h2>
           </div>
         </div>

         <div class="row justify-content-md-center mb-5">
           <div class="col-md-8 py-3 custom_table">
             <h3 class="text-center">
               About Our Company
               <hr />
             </h3>
             <p>
               Welcome to our company! We are passionate about delivering quality services and products that exceed your expectations. Our team is dedicated to creating innovative solutions tailored to your needs.
             </p>
           </div>
         </div>
       </div>

       <!-- <%- include('../includes/scripts') %> -->
     </body>
   </html>
   
   ```
## Contáctanos (Contact Us)

- Ruta: contact.html
- Descripción: Esta página incluye un formulario para que los usuarios se pongan en contacto con la empresa, así como detalles de contacto.
- Contenido:
1. Título de la sección
2. Formulario para enviar un mensaje (nombre, email, mensaje).
3. Detalles de contacto.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <%- include('../includes/head') %>
  </head>
  <body>
    <%- include('../includes/header') %>

    <div class="container" style="margin-top: 80px !important">
      <div class="row justify-content-md-center mb-5">
        <div class="col-md-12 mt-5">
          <h2 class="text-center title">
            Contact Us
            <hr />
          </h2>
        </div>
      </div>

      <div class="row justify-content-md-center mb-5">
        <div class="col-md-4 mb-5">
          <h3 class="text-center">
            Get in Touch
            <hr />
          </h3>
          <form action="/contact" method="POST">
            <div class="mb-3">
              <label for="nombre" class="form-label"> Name </label>
              <input type="text" name="nombre" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label"> Email </label>
              <input type="email" name="email" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="mensaje" class="form-label"> Message </label>
              <textarea name="mensaje" class="form-control" rows="4"></textarea>
            </div>

            <div class="d-grid gap-2 col-12 mx-auto mt-4 mb-4">
              <button class="btn btn-primary" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div class="col-md-8 py-3 custom_table">
          <h3 class="text-center">
            Our Contact Details
            <hr />
          </h3>
          <p>
            Feel free to reach out to us using the form, or contact us at:
            <br />
            Email: contact@company.com
            <br />
            Phone: +57 319 405 0XXX
          </p>
        </div>
      </div>
    </div>

    <%- include('../includes/scripts') %>
  </body>
</html>
```
# Cómo funciona "Contact Us"

## ¡Nos Encantaría Escuchar de Ti!

Esta página está diseñada para permitirle al usuario ponerse en contacto con nosotros de manera fácil y directa. Utilizando el formulario a continuación para enviarnos las consultas, comentarios o cualquier mensaje que desee compartir.

### Ejemplo "Formulario de Contacto"

Completa los campos requeridos en el formulario a continuación para enviarnos un mensaje:

- **Nombre**: Introduce tu nombre.
- **Email**: Proporciona una dirección de correo electrónico válida para que podamos responderte.
- **Mensaje**: Escribe tu mensaje o consulta en el espacio proporcionado.

### Proceso del Formulario

Cuando envíes el formulario:

- El contenido se enviará a nuestro servidor utilizando el método POST.
- Asegúrate de que la información que proporcionas sea correcta, ya que utilizaremos tu dirección de correo electrónico para responder.

### Detalles de Contacto

Si prefieres no usar el formulario, también puedes ponerte en contacto con nosotros a través de los siguientes métodos:

- **Email**: [contact@company.com](mailto:contact@company.com)
- **Teléfono**: +57 319 405 0XXX

### Ubicación

Puedes encontrarnos en:

- **Dirección**: Calle Ejemplo 123, Ciudad, País

### Horario de Atención

Estamos disponibles para atenderte en los siguientes horarios:

- Lunes a Viernes: 9:00 AM - 5:00 PM
- Sábados: 10:00 AM - 2:00 PM

¡Esperamos tu mensaje!

---



