// ===================================
// Navigation Functionality
// ===================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const newsletter = document.getElementById('newsletter').checked;

    // Validate form
    if (!name || !email || !phone || !interest || !message) {
        showNotification('Por favor completa todos los campos obligatorios', 'error');
        return;
    }

    // Create WhatsApp message
    const whatsappMessage = `
*Nuevo Contacto desde MotoPlaza NIC*

*Nombre:* ${name}
*Email:* ${email}
*Teléfono:* ${phone}
*Interesado en:* ${interest}
${subject ? `*Asunto:* ${subject}` : ''}
*Mensaje:* ${message}
${newsletter ? '\n✅ Desea recibir newsletter' : ''}
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number
    const whatsappNumber = '50512345678';
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Show success message
    showNotification('¡Mensaje enviado! Te contactaremos pronto.', 'success');

    // Reset form
    contactForm.reset();
});

// ===================================
// FAQ Accordion
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// ===================================
// Newsletter Form Handling
// ===================================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            showNotification('¡Gracias por suscribirte! Recibirás nuestras ofertas especiales.', 'success');
            newsletterForm.reset();
        }
    });
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Form Validation
// ===================================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value) {
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#ecf0f1';
        }
    });

    input.addEventListener('input', () => {
        if (input.style.borderColor === 'rgb(231, 76, 60)') {
            input.style.borderColor = '#ecf0f1';
        }
    });
});

// Email validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value && !emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = '#e74c3c';
            showNotification('Por favor ingresa un email válido', 'error');
        }
    });
}

// Phone validation
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        // Allow only numbers, spaces, +, -, and ()
        e.target.value = e.target.value.replace(/[^0-9+\-() ]/g, '');
    });
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.info-card, .info-box, .faq-item'
);

animateElements.forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ===================================
// Dynamic Year in Footer
// ===================================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = `© ${currentYear} MotoPlaza NIC. Todos los derechos reservados.`;
}

// ===================================
// Performance Optimization
// ===================================
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// Page Load Animations
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página Contacto - MotoPlaza NIC cargada exitosamente! 🚀');
    
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Animate page header elements
    const headerElements = document.querySelectorAll('.page-title, .page-subtitle, .breadcrumb');
    headerElements.forEach((element, index) => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.animation = 'fadeInUp 0.8s ease forwards';
        }, index * 200);
    });

    // Auto-focus first input
    const firstInput = document.getElementById('name');
    if (firstInput) {
        setTimeout(() => {
            firstInput.focus();
        }, 500);
    }
});

// ===================================
// Map Interaction
// ===================================
const mapContainer = document.querySelector('.map-container iframe');
if (mapContainer) {
    // Prevent scroll zoom on map
    mapContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
    });
}

// ===================================
// Contact Method Tracking
// ===================================
const contactMethods = document.querySelectorAll('.method-btn, .social-btn');
contactMethods.forEach(method => {
    method.addEventListener('click', () => {
        const methodName = method.querySelector('span')?.textContent || 'Unknown';
        console.log(`Contact method clicked: ${methodName}`);
    });
});

// ===================================
// Error Handling
// ===================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ===================================
// Console Welcome Message
// ===================================
console.log('%c¡Bienvenido a MotoPlaza NIC - Contacto! 🏍️', 'color: #e74c3c; font-size: 20px; font-weight: bold;');
console.log('%cEstamos aquí para ayudarte', 'color: #2c3e50; font-size: 14px;');

// ===================================
// Prevent Multiple Form Submissions
// ===================================
let isSubmitting = false;

contactForm.addEventListener('submit', (e) => {
    if (isSubmitting) {
        e.preventDefault();
        return;
    }
    isSubmitting = true;
    
    setTimeout(() => {
        isSubmitting = false;
    }, 3000);
});
