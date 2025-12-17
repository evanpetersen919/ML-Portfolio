# ML Engineer Portfolio

A modern, responsive portfolio website for Machine Learning Engineers and Software Developers built with React, Tailwind CSS, and Framer Motion.

## Features

✨ **Modern Design**
- Dark mode with gradient backgrounds
- Smooth animations with Framer Motion
- Card-based layout with hover effects
- Fully responsive (mobile to desktop)

🎨 **Sections**
- **Hero**: Eye-catching introduction with CTAs
- **Certifications**: Interactive badge display with verification links
- **Skills**: Expandable/collapsible skill categories
- **Projects**: Filterable project showcase with tech stacks and metrics
- **About**: Professional background and focus areas
- **Blog**: Technical writing placeholder
- **Contact**: Interactive contact form
- **Footer**: Quick links and copyright

🛠️ **Tech Stack**
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## Customization

### Personal Information
Update the following in the components:
- `Hero.jsx`: Your name and tagline
- `Certifications.jsx`: Your certifications
- `Skills.jsx`: Your technical skills
- `Projects.jsx`: Your project details
- `About.jsx`: Your background
- Contact links throughout

### Styling
- Color scheme: Edit `tailwind.config.js`
- Global styles: Edit `src/index.css`
- Component styles: Tailwind classes in each component

### Content
Replace placeholder links:
- GitHub profile links
- LinkedIn profile links
- Email addresses
- Project demo/repo links
- Certification verification links

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Landing section
│   ├── Certifications.jsx # Cert badges
│   ├── Skills.jsx         # Tech skills
│   ├── Projects.jsx       # Project showcase
│   ├── About.jsx          # About section
│   ├── Blog.jsx           # Articles
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer
├── App.jsx               # Main component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Features to Add

- [ ] Connect contact form to email service (EmailJS, Formspree, etc.)
- [ ] Add actual blog posts/articles
- [ ] Integrate analytics (Google Analytics, Plausible, etc.)
- [ ] Add project images/screenshots
- [ ] Implement actual certification verification
- [ ] Add resume download link
- [ ] SEO optimization with React Helmet

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using React and modern web technologies.
