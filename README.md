# MotoPlaza NIC - Sitio web para concesionario de motocicletas

Un clon de sitio web moderno y responsivo para un concesionario de motocicletas en Nicaragua.

## 🚀 Características

- **Diseño Responsive**: Diseño totalmente responsivo compatible con todos los dispositivos (computadora, tableta, móvil)
- **IU/UX Moderna**: Diseño limpio y profesional con animaciones fluidas
- **Navegación Interactiva**: Navegación fija con enlaces destacados
- **Inventario de Motos**: Catálogo de motos filtrable con fichas detalladas
- **Sección de Servicios**: Presentación de todos los servicios disponibles
- **Sección Acerca de**: Información y características de la empresa
- **Testimonios**: Opiniones y valoraciones de clientes
- **Formulario de Contacto**: Formulario de contacto integrado con WhatsApp
- **Integración con Redes Sociales**: Enlaces a redes sociales
- **Animaciones de Desplazamiento**: Efectos de desplazamiento fluidos y animaciones de elementos
- **Botón Flotante de WhatsApp**: Acceso rápido al chat de WhatsApp
- **Suscripción al Newsletter**: Formulario de suscripción por correo electrónico en el pie de página

## 📁 Estructura del Proyecto

```
motoplazanic/
├── index.html # Archivo HTML principal
├── css/
│ └── styles.css # Todos los estilos y diseño adaptable
├── js/
│ └── script.js # Funcionalidad interactiva
├── images/ # Carpeta de recursos de imagen
└── README.md # Documentación del proyecto
```

## 🛠️ Tecnologías utilizadas

- **HTML5**: Marcado semántico
- **CSS3**: Estilo moderno con Flexbox y cuadrícula
- **JavaScript (ES6+)**: Funcionalidad interactiva
- **Font Awesome 6.4.0**: Iconos
- **Google Fonts (Poppins)**: Tipografía
- **Unsplash**: Imágenes de marcador de posición

## 🎨 Esquema de colores

- Color primario: `#e74c3c` (Rojo)
- Color secundario: `#2c3e50` (Azul oscuro)
- Color de acento: `#f39c12` (Naranja)
- Fondo claro: `#ecf0f1`
- Texto oscuro: `#2c3e50`
- Texto claro: `#7f8c8d`

## 📱 Secciones

1. **Barra de navegación**
- Logotipo
- Enlaces de menú (Inicio, Inventario, Servicios, Acerca de, Contacto)
- Botón de teléfono
- Menú hamburguesa móvil

2. **Sección principal**
- Título llamativo
- Botones de llamada a la acción
- Visualización de estadísticas
- Indicador de desplazamiento

3. **Sección de marcas**
- Marcas de motocicletas destacadas
- Diseño de cuadrícula con iconos

4. **Sección de inventario**
- Tarjetas de motocicletas filtrables
- Categorías: Todas, Deportivas, Cruiser, Touring, Scooter
- Especificaciones detalladas
- Visualización de precios
- Botones de contacto

5. **Sección de Servicios**
- 6 tarjetas de servicio con iconos
- Compra/Venta, Mantenimiento, Financiación, Garantía, Legal, Entrega

6. **Sección Acerca de**
- Información de la empresa
- Características destacadas
- Imagen con insignia

7. **Sección de Testimonios**
- Opiniones de clientes
- Calificaciones con estrellas
- Información del autor

8. **Sección de Contacto**
- Tarjetas de información de contacto
- Formulario de contacto con integración de WhatsApp
- Ubicación, teléfono, correo electrónico, horario

9. **Pie de página**
- Información y logotipo de la empresa
- Enlaces rápidos
- Enlaces de servicios
- Suscripción al boletín informativo
- Enlaces a redes sociales
- Información de derechos de autor

## 🚀 Primeros pasos

### Requisitos previos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor; se ejecuta directamente en el navegador

### Instalación

1. Descarga o clona los archivos del proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo! El sitio web está listo para usar.

### Personalización

#### Actualizar información de contacto

Editar lo siguiente en `index.html`:
- Números de teléfono: Buscar `+505 1234-5678`
- Correos electrónicos: Buscar `info@motoplazanic.com`
- Ubicación: Actualizar la dirección en la sección de contacto.
- Número de WhatsApp: Actualizar en `js/script.js` (líneas 186 y 267).

#### Actualizar colores

Editar las variables CSS en `css/styles.css`:
```css
:root {
--primary-color: #e74c3c;
--secondary-color: #2c3e50;
--accent-color: #f39c12;
/* ... otros colores */
}
```

#### Añadir imágenes reales

Reemplaza las URL de marcador de posición de Unsplash en `index.html` con tus propias imágenes:
- Fondo del héroe
- Imágenes de motocicletas
- Imagen de la sección "Acerca de"

#### Modificar el inventario de motocicletas

Edita las tarjetas de motocicletas en la sección de inventario:
- Actualizar títulos, precios y especificaciones
- Cambiar categorías (atributo data-category)
- Añadir o eliminar tarjetas según sea necesario

## 📱 Puntos de interrupción adaptables

- Escritorio: 1200 px y superior
- Tableta: 768 px - 1199 px
- Móvil: Menos de 768 px

## ⚡ Características de rendimiento

- Carga diferida de imágenes
- Eventos de desplazamiento con rebote
- Observador de intersecciones para animaciones
- CSS optimizado con reflujos mínimos
- Gestión eficiente de eventos de JavaScript

## 🔧 Compatibilidad con navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- Navegadores móviles (iOS Safari, Chrome Mobile)

## 📞 Integración con WhatsApp

El sitio web incluye integración con WhatsApp para:
- Envío de formularios de contacto
- Consultas sobre motocicletas
- Botón flotante para chat rápido

Actualiza el número de WhatsApp en `js/script.js`:
```javascript
const whatsappNumber = '50512345678'; // Reemplaza con tu número
```

## 🎯 Mejoras futuras

Posibles funciones:
- Integración con el backend para el envío de formularios
- Base de datos para el inventario de motocicletas
- Panel de administración para la gestión de contenido
- Soporte multilingüe
- Búsqueda y filtros avanzados
- Nosotros
