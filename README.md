# MotoPlaza NIC - Motorcycle Dealership Website

A modern, responsive website clone for a motorcycle dealership business in Nicaragua.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Navigation**: Sticky navigation with active link highlighting
- **Motorcycle Inventory**: Filterable motorcycle catalog with detailed cards
- **Services Section**: Showcase of all available services
- **About Section**: Company information and features
- **Testimonials**: Customer reviews and ratings
- **Contact Form**: Integrated contact form with WhatsApp integration
- **Social Media Integration**: Links to social media platforms
- **Scroll Animations**: Smooth scroll effects and element animations
- **WhatsApp Float Button**: Quick access to WhatsApp chat
- **Newsletter Subscription**: Email subscription form in footer

## 📁 Project Structure

```
motoplazanic/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── script.js       # Interactive functionality
├── images/             # Image assets folder
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome 6.4.0**: Icons
- **Google Fonts (Poppins)**: Typography
- **Unsplash**: Placeholder images

## 🎨 Color Scheme

- Primary Color: `#e74c3c` (Red)
- Secondary Color: `#2c3e50` (Dark Blue)
- Accent Color: `#f39c12` (Orange)
- Background Light: `#ecf0f1`
- Text Dark: `#2c3e50`
- Text Light: `#7f8c8d`

## 📱 Sections

1. **Navigation Bar**
   - Logo
   - Menu links (Home, Inventory, Services, About, Contact)
   - Phone button
   - Mobile hamburger menu

2. **Hero Section**
   - Eye-catching headline
   - Call-to-action buttons
   - Statistics display
   - Scroll indicator

3. **Brands Section**
   - Featured motorcycle brands
   - Grid layout with icons

4. **Inventory Section**
   - Filterable motorcycle cards
   - Categories: All, Sport, Cruiser, Touring, Scooter
   - Detailed specifications
   - Price display
   - Contact buttons

5. **Services Section**
   - 6 service cards with icons
   - Buy/Sell, Maintenance, Financing, Warranty, Legal, Delivery

6. **About Section**
   - Company information
   - Feature highlights
   - Image with badge

7. **Testimonials Section**
   - Customer reviews
   - Star ratings
   - Author information

8. **Contact Section**
   - Contact information cards
   - Contact form with WhatsApp integration
   - Location, phone, email, hours

9. **Footer**
   - Company info and logo
   - Quick links
   - Services links
   - Newsletter subscription
   - Social media links
   - Copyright information

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs directly in browser

### Installation

1. Download or clone the project files
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Customization

#### Update Contact Information

Edit the following in `index.html`:
- Phone numbers: Search for `+505 1234-5678`
- Email addresses: Search for `info@motoplazanic.com`
- Location: Update address in contact section
- WhatsApp number: Update in `js/script.js` (line 186 and 267)

#### Update Colors

Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #e74c3c;
    --secondary-color: #2c3e50;
    --accent-color: #f39c12;
    /* ... other colors */
}
```

#### Add Real Images

Replace Unsplash placeholder URLs in `index.html` with your own images:
- Hero background
- Motorcycle images
- About section image

#### Modify Motorcycle Inventory

Edit the motorcycle cards in the inventory section:
- Update titles, prices, specifications
- Change categories (data-category attribute)
- Add or remove cards as needed

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## ⚡ Performance Features

- Lazy loading for images
- Debounced scroll events
- Intersection Observer for animations
- Optimized CSS with minimal reflows
- Efficient JavaScript event handling

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 WhatsApp Integration

The website includes WhatsApp integration for:
- Contact form submissions
- Motorcycle inquiries
- Float button for quick chat

Update the WhatsApp number in `js/script.js`:
```javascript
const whatsappNumber = '50512345678'; // Replace with your number
```

## 🎯 Future Enhancements

Potential features to add:
- Backend integration for form submissions
- Database for motorcycle inventory
- Admin panel for content management
- Multi-language support
- Advanced search and filters
- User accounts and favorites
- Online payment integration
- Live chat support
- Blog section
- Virtual motorcycle tours

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Developer Notes

### Key JavaScript Functions

- `activateNavLink()`: Highlights active navigation link based on scroll position
- `showNotification()`: Displays success/error notifications
- `animateCounter()`: Animates number counters
- `debounce()`: Optimizes scroll event performance

### CSS Architecture

- Mobile-first approach
- BEM-inspired naming convention
- Modular sections
- Reusable utility classes
- CSS Grid and Flexbox for layouts

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. Suggestions and improvements are welcome!

## 📧 Contact

For questions or support, contact:
- Email: info@motoplazanic.com
- Phone: +505 1234-5678
- WhatsApp: +505 1234-5678

---

**Built with ❤️ for MotoPlaza NIC**
