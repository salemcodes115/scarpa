# Todo App — Mini Project

A small, framework-free Todo app built with HTML, CSS, and JavaScript.

Features
- Add, edit, delete tasks
- Mark tasks completed
- Filter (All / Active / Completed)
- Persistent storage via `localStorage`
- Responsive and accessible UI

Run locally
1. Open `index.html` in your browser (or use Live Server in VS Code).

Git & Deploy (example commands)
```bash
# initialize repo
git init
git add .
git commit -m "Add todo app"
# create GitHub repo manually, then set origin:
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main

# Enable GitHub Pages: in repo settings, set source to `main` branch / `root` folder.
# Or push to a `gh-pages` branch and enable pages from that branch.
```

Optional improvements
- Add drag/drop reorder
- Sync tasks to a backend
- Add categories or due dates
