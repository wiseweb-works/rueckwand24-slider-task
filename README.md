<h1 align="center">Rueckwand24 Slider Task</h1>

<div align="center">

[Live Demo](https://rueckwand24-slider-task.vercel.app/)

A modern **Next.js 15** project focused on building a performant and accessible slider UI. This project leverages Turbopack for blazing fast development and includes comprehensive linting, formatting, and accessibility tooling.

</div>

---

## 🚀 Features

- Built with **Next.js 15.3.5** and **React 19**
- Fast refresh and bundling via **Turbopack**
- Accessibility support via `@axe-core/react`
- Code quality tools: ESLint, Prettier, and TypeScript
- Styled with Tailwind CSS 4 and PostCSS

---

## 🧱 Tech Stack

| Layer         | Tools & Libraries       |
| ------------- | ----------------------- |
| Framework     | Next.js 15, React 19    |
| Styling       | Tailwind CSS 4, PostCSS |
| Lint & Format | ESLint, Prettier        |
| Accessibility | @axe-core/react         |
| Language      | TypeScript              |

---

## 📸 Screenshots / Demo

|              Homepage               |              Image Preview              |
| :---------------------------------: | :-------------------------------------: |
| ![](./images/homepage.png?raw=true) | ![](./images/preview_page.png?raw=true) |

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/wiseweb-works/rueckwand24-slider-task.git
cd rueckwand24-slider-task
npm install
```

---

## 🧪 Development

You can run the project locally in two ways, in both cases don't forget to edit the `.env.example` file as `.env.local`:

### 1. Using npm (with Turbopack):

```bash
npm run dev
```

This runs the Next.js development server with Turbopack for fast bundling and hot reload.

### 2. Using Docker (recommended for consistent environment):

Pull and run the Docker image:

```bash
docker pull ghcr.io/wiseweb-works/rueckwand24-slider-task/rueckwand24slider:latest
docker run -p 3000:3000 ghcr.io/wiseweb-works/rueckwand24-slider-task/rueckwand24slider:latest
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔨 Build for Production

Build and start the app locally:

```bash
npm run build
npm start
```

Or build and run a Docker container (assuming you have the Dockerfile):

```bash
docker build -t rueckwand24slider .
docker run -p 3000:3000 rueckwand24slider
```

---

## 🛠 Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Run development server with Turbopack |
| `npm run build` | Build production bundle               |
| `npm run start` | Start production server               |
| `npm run lint`  | Run ESLint checks                     |
| `npm run check` | Run Prettier check                    |
| `npm run write` | Format code with Prettier             |

---

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Axe Core Accessibility](https://github.com/dequelabs/axe-core-npm)

---

## 📄 License

MIT © [Abdullah Koyuncu](https://github.com/wiseweb-works)

---
