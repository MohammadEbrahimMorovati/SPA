

---

````markdown
# 🧩 Single Page Application (SPA)

A lightweight and modular Single Page Application built with **Vanilla JavaScript**. This project demonstrates client-side routing, dynamic view rendering, and a collapsible sidebar – all without any frameworks.
---

## 🚀 Features

- Simple client-side routing using the History API
- Fully functional sidebar with toggle (mini/full view)
- Multiple independent views: Dashboard, Posts, Products, NotFound
- No page reloads on navigation
- Clean, scalable file structure

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Git

---

## 🔧 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/MohammadEbrahimMorovati/SPA.git
cd SPA
````

### 2. Run the project

Since the app uses the History API, it must be served through a local server:

#### Option A: Using Live Server (VSCode extension)

* Right-click `index.html` and select **"Open with Live Server"**

#### Option B: Using Node.js `serve`

```bash
npx serve .
```

---

## 📁 Project Structure

```
SPA/
├── index.html
├── spa.css
├── main.js
└── pages/
    ├── Dashboard.js
    ├── Posts.js
    ├── Products.js
    └── NotFound.js
```

---

## 📌 Future Improvements

* Lazy loading of views
* Dark mode support
* Dynamic route handling (e.g. `/posts/:id`)
* LocalStorage integration for persistent UI settings

---

## 📄 License

MIT License © Mohammad Ebrahim Morovati

```
