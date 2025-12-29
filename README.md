# Bestin Lalu - Portfolio Website

A modern, responsive portfolio website showcasing personal details, projects, certifications, and hobbies. Built with vanilla HTML, CSS, and JavaScript with a single-page application design.

## Features

✨ **Single Page Application** - All sections displayed on one page with smooth navigation
🎨 **Modern Design** - Clean, professional UI with smooth animations and gradients
📱 **Responsive Design** - Fully responsive layout for mobile, tablet, and desktop devices
⌨️ **Keyboard Navigation** - Use arrow keys to navigate between sections
🖼️ **Image Support** - Add photos and icons throughout your portfolio
🎯 **Multiple Sections**:
  - About (Personal Details) - Default landing section
  - Education - Your academic background with university logos
  - Experience - Professional work history with company logos
  - Projects - Showcase of completed projects with screenshots
  - Certifications - Degrees, certifications, and with badges
  - Awards - Awards and recognitions recieved
  - Hobbies - Favorite movies with posters and music with album covers

## Project Structure

```
bestinlalu.github.io/
├── index.html       # Main HTML file with all sections
├── styles.css       # Styling and animations
├── script.js        # Navigation and interactivity
└── README.md        # This file
```

### Local Setup

#### Option 1: Using Python (Recommended)

**Python 3.x:**
```bash
cd /Users/bestin/Documents/GitHub/Portfolio/bestinlalu.github.io
python -m http.server 8000
```

**Python 2.x:**
```bash
cd /Users/bestin/Documents/GitHub/Portfolio/bestinlalu.github.io
python -m SimpleHTTPServer 8000
```

Then open your browser and visit: `http://localhost:8000`

#### Option 2: Using Node.js (http-server)

```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Navigate to the project directory
cd /Users/bestin/Documents/GitHub/Portfolio/bestinlalu.github.io

# Start the server
http-server -p 8000
```

Then open your browser and visit: `http://localhost:8000`

#### Option 3: Using Ruby

```bash
cd /Users/bestin/Documents/GitHub/Portfolio/bestinlalu.github.io
ruby -run -ehttpd . -p8000
```

Then open your browser and visit: `http://localhost:8000`

#### Option 4: Using PHP

```bash
cd /Users/bestin/Documents/GitHub/Portfolio/bestinlalu.github.io
php -S localhost:8000
```

Then open your browser and visit: `http://localhost:8000`

#### Option 5: Using VS Code Live Server

1. Open the project folder in VS Code
2. Install the "Live Server" extension (by Ritwick Dey)
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. Your browser will automatically open at `http://127.0.0.1:5500`