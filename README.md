# Personal Website - Akash Ghose

A modern, responsive portfolio website built with Vue 3, showcasing professional experience, projects, and interactive demos.

## Overview

This personal website started as a static HTML/CSS/JS page to showcase my professional profile for potential employers, but has evolved into a full-featured Vue 3 single-page application (SPA). The site features a responsive design that works seamlessly across desktop, tablet, and mobile devices.

## Features

### 🎯 Core Pages
- **Home Page**: Introduction with about section, education, personal life, and project showcase
- **Resume**: Professional resume with work experience, education, skills, and technologies (mobile-responsive)
- **Particles Demo**: Interactive particle animation with mouse interaction
- **Tic-Tac-Toe**: Classic game implementation
- **Archived Projects**: Dynamic pages for showcasing archived projects with GitHub links

### ✨ Technical Highlights
- **Vue 3**: Modern reactive framework with Composition API support
- **Vue Router**: Client-side routing with HTML5 History mode
- **Responsive Design**: Mobile-first approach with breakpoints for tablets (768px), mobile (600px), and small mobile (400px)
- **Smooth Scrolling**: Custom smooth scroll implementation for enhanced UX
- **Bootstrap Integration**: Responsive grid system and components
- **Dynamic Script Loading**: Runtime loading of external scripts when needed

## Project Structure

```
personal_website/
├── public/               # Static assets
│   ├── index.html       # Main HTML template
│   └── favicon.ico      # Site icon
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Reusable Vue components
│   │   └── Project.vue  # Project card component with alternating layouts
│   ├── css/             # Stylesheets
│   │   ├── home-styles.css          # Home page styles
│   │   ├── resume-styles.css        # Resume page styles (with responsive breakpoints)
│   │   ├── screen.css               # Screen-specific styles
│   │   ├── print.css                # Print-optimized styles for resume
│   │   ├── paper.css                # Paper layout for resume
│   │   ├── typography.css           # Font and typography definitions
│   │   ├── tic-tac-toe.css         # Tic-tac-toe game styles
│   │   └── archived-project-styles.css  # Archived project page styles
│   ├── router/
│   │   └── index.js     # Vue Router configuration
│   ├── services/
│   │   └── particles.js # Particle animation logic
│   ├── utils/
│   │   └── smoothScroll.js  # Smooth scrolling utility
│   ├── views/           # Page components
│   │   ├── Home.vue           # Landing page
│   │   ├── Resume.vue         # Professional resume
│   │   ├── Particles.vue      # Particle animation demo
│   │   ├── TicTacToe.vue      # Tic-tac-toe game
│   │   └── ArchivedProject.vue # Archived project pages
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## Technologies Used

### Frontend Framework
- **Vue 3**: Progressive JavaScript framework
- **Vue Router 4**: Official router for Vue.js

### Styling & UI
- **Bootstrap 4**: Responsive CSS framework
- **Custom CSS**: Tailored styles for unique components
- **Font Awesome 5**: Icon library
- **Google Fonts**: Varela Round, Nunito

### Development Tools
- **Vue CLI**: Standard tooling for Vue.js development
- **ESLint**: Code linting and formatting
- **Webpack**: Module bundler (via Vue CLI)

### Additional Libraries
- **jQuery**: DOM manipulation (used for Bootstrap and Tic-Tac-Toe)
- **vue-plugin-load-script**: Dynamic external script loading

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Install Dependencies
```bash
npm install
```

## Development

### Run Development Server
Start the development server with hot-reload:
```bash
npm run serve
```
The application will be available at `http://localhost:8080`

### Lint and Fix Files
```bash
npm run lint
```

## Production Build

### Build for Production
Compile and minify for production:
```bash
npm run build
```
The optimized files will be in the `dist/` directory.

### Deploy
After building, the `dist/` folder can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Firebase Hosting

## Key Features Explained

### Responsive Resume
The resume page adapts to different screen sizes:
- **Desktop (>768px)**: Two-column layout with sidebar
- **Tablet (≤768px)**: Stacked layout, main content first
- **Mobile (≤600px)**: Optimized spacing and typography
- **Small Mobile (≤400px)**: Further optimized for small screens

### Smooth Scrolling
Custom smooth scroll implementation (`utils/smoothScroll.js`) provides:
- Easing function for natural animation
- Configurable duration and offset
- Navbar collapse on mobile after navigation
- Vue directive support

### Particles Animation
Interactive canvas-based animation (`services/particles.js`) featuring:
- Randomized particle generation
- Mouse interaction (particles avoid cursor)
- Connection lines between nearby particles
- Responsive to window resize
- Performance-optimized with `requestAnimationFrame`

### Router Configuration
Client-side routing with clean URLs:
- `/` - Home page
- `/resume` - Professional resume
- `/particles` - Particle animation demo
- `/tictactoe` - Tic-tac-toe game
- `/archived/:id` - Dynamic archived project pages

## Code Comments

The codebase includes comprehensive comments explaining:
- Component purposes and props
- Function parameters and return values
- Complex logic and algorithms
- CSS breakpoints and responsive behavior
- Vue lifecycle hooks usage

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Code splitting via Vue Router lazy loading (commented example in router)
- Optimized images in assets
- Minified production build
- CSS scoped to components
- Efficient canvas rendering for particles

## Future Enhancements

Potential improvements and features:
- [ ] Add dark mode toggle
- [ ] Implement lazy loading for images
- [ ] Add blog section
- [ ] Integrate analytics
- [ ] Add contact form with backend
- [ ] Implement PWA features
- [ ] Add unit tests

## License

This project is open source and available for personal and educational use.

## Contact

**Akash Ghose**
- Email: akash.ghose30@gmail.com
- LinkedIn: [linkedin.com/in/akash-ghose-b08998211/](https://www.linkedin.com/in/akash-ghose-b08998211/)
- GitHub: [github.com/aghose](https://github.com/aghose)
- Website: [akash-ghose.com](https://www.akash-ghose.com)

---

**Note**: This website serves as both a portfolio and a demonstration of modern web development skills using Vue.js and responsive design principles.
