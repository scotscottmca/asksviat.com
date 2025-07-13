# Ask Sviat

A modern, technology-styled website built with Jekyll and deployed via GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, technology-inspired design with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode Support**: Automatic dark mode detection based on user preferences
- **Performance Optimized**: Lightweight, fast-loading website
- **SEO Ready**: Optimized for search engines with proper meta tags
- **GitHub Pages Ready**: Configured for easy deployment on GitHub Pages

## 🛠️ Tech Stack

- **Jekyll**: Static site generator
- **GitHub Pages**: Hosting and deployment
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive elements and animations
- **GitHub Actions**: Automated deployment workflow

## 🏃‍♂️ Quick Start

### Local Development

1. **Install dependencies**:
   ```bash
   bundle install
   ```

2. **Run the development server**:
   ```bash
   bundle exec jekyll serve
   ```

3. **Open your browser** and visit `http://localhost:4000`

### Deployment

The site is automatically deployed to GitHub Pages when you push to the `main` branch. The deployment workflow is configured in `.github/workflows/pages.yml`.

## 📁 Project Structure

```
asksviat.com/
├── _layouts/           # HTML layouts
│   └── default.html
├── assets/
│   ├── css/           # Stylesheets
│   │   └── style.css
│   └── js/            # JavaScript files
│       └── main.js
├── .github/
│   └── workflows/     # GitHub Actions
│       └── pages.yml
├── _config.yml        # Jekyll configuration
├── Gemfile           # Ruby dependencies
├── index.md          # Homepage content
└── README.md         # This file
```

## 🎨 Customization

### Colors
The color scheme is defined in CSS custom properties in `assets/css/style.css`. You can easily customize the colors by modifying the `:root` variables.

### Content
Edit `index.md` to change the main content of the homepage.

### Layout
Modify `_layouts/default.html` to change the overall page structure.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!