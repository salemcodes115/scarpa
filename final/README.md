# TaskFlow - Todo App

A beautiful, modern task management app to help you stay organized and productive.

## 🎯 Features

✨ **Clean & Intuitive UI** — Minimalist design with gradient background  
✅ **Add & Manage Tasks** — Create, complete, and delete tasks easily  
🎯 **Filter Tasks** — View All, Active, or Completed tasks  
📊 **Live Statistics** — Track total, completed, and remaining tasks  
💾 **Persistent Storage** — Your tasks are saved in localStorage  
📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile  
♿ **Accessible** — ARIA labels and keyboard navigation support  
⚡ **Fast & Lightweight** — No external dependencies, pure vanilla JavaScript  

## 🚀 Quick Start

### Local Development
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start adding tasks!

```bash
# If using a local server (optional)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📋 How to Use

1. **Add a Task** — Type in the input field and click "Add Task" or press Enter
2. **Complete a Task** — Click the checkbox to mark it as complete
3. **Delete a Task** — Click the delete button to remove it
4. **Filter Tasks** — Use the filter buttons to view All, Active, or Completed tasks
5. **Clear Completed** — Remove all completed tasks at once

## 🛠️ Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Gradient design, flexbox, grid, animations
- **Vanilla JavaScript** — No frameworks or dependencies
- **LocalStorage API** — Client-side data persistence

## 📁 File Structure

```
final/
├── index.html          # Application markup
├── style.css           # Responsive styling
├── script.js           # Interactive features
├── README.md           # This file
└── SPEC.md            # Project specification
```

## 🎨 Design Highlights

- **Color Scheme** — Gradient purple background with clean white card
- **Animations** — Smooth transitions and slide-in effects for tasks
- **Typography** — Modern system fonts for clarity
- **Spacing** — Generous padding and margins for comfort
- **Mobile-First** — Optimized for all screen sizes

## 💾 Data Storage

Tasks are automatically saved to your browser's localStorage. Your data persists even after closing the browser—no account required!

## 🔒 Security

- HTML entities are escaped to prevent XSS attacks
- No external API calls or third-party scripts
- All processing happens locally in your browser

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast colors for readability
- Focus indicators for better UX

## 🚢 Deployment

### GitHub Pages (Free & Easy)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/taskflow.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Branch `main`, folder `/root`
   - Your app is live at: `https://YOUR-USERNAME.github.io/taskflow`

### Alternative Platforms

**Netlify** — Sign up with GitHub, connect your repo, auto-deploys on push  
**Vercel** — Similar to Netlify, optimized for web apps  
**Render** — Free static site hosting with GitHub integration  

## 📊 Project Statistics

- **Code Size** — ~6KB (minified)
- **Load Time** — < 1 second
- **Browser Support** — All modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Friendly** — Fully responsive

## 🐛 Troubleshooting

**Tasks not saving?**  
→ Check if localStorage is enabled in your browser settings

**Styles not loading?**  
→ Ensure `style.css` is in the same folder as `index.html`

**JavaScript not working?**  
→ Open browser console (F12) and check for errors

## 📝 Future Enhancements

- Dark mode toggle
- Due dates and priority levels
- Task categories/tags
- Cloud sync with backend
- Share tasks with others
- Recurring tasks
- Voice input for tasks

## 👨‍💻 Built With

Created with HTML, CSS, and JavaScript to demonstrate modern web development practices and clean code principles.

## 📄 License

Open source. Feel free to use, modify, and deploy for personal or commercial projects.

## 🙏 Support

Found a bug or have a feature request? Open an issue on GitHub!

---

**Ready to get organized?** Start using TaskFlow now! 🎉
