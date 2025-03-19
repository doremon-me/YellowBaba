# YellowBaba - Professional Web Development Insights & Tutorials

Welcome to **YellowBaba**, a modern web development blog built with [Astro](https://astro.build), [TailwindCSS](https://tailwindcss.com), and other cutting-edge technologies. This project provides professional tutorials and insights to elevate your development skills.

## 🚀 Project Structure

The project is organized as follows:

```text
front-end/
├── .astro/               # Astro-generated files
├── .vscode/              # VS Code settings
├── public/               # Static assets (e.g., favicon)
├── src/                  # Source code
│   ├── common/           # Shared components and constants
│   │   ├── const/        # Constants like RootLayout and SeoHeader
│   │   └── shared/       # Shared components like Navbar
│   ├── lib/              # Utility functions
│   ├── pages/            # Astro pages
│   └── styles/           # Global styles
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🧞 Commands

Run the following commands from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts the development server at `localhost:4321` |
| `npm run build`           | Builds the production site to `./dist/`          |
| `npm run preview`         | Previews the production build locally            |

## 🌟 Features

- **Astro Framework**: Fast and modern static site generation.
- **TailwindCSS**: Fully customizable utility-first CSS framework.
- **Dark Mode Support**: Toggle between light and dark themes.
- **SEO Optimized**: Includes meta tags and structured data for better search engine visibility.
- **Responsive Design**: Fully responsive layout for all devices.

## 📂 Key Components

- **RootLayout**: The main layout component ([`RootLayout.astro`](src/common/const/RootLayout.astro)).
- **SeoHeader**: Handles SEO meta tags ([`SeoHeader.astro`](src/common/const/SeoHeader.astro)).
- **Navbar**: Navigation bar with theme toggle ([`Navbar.astro`](src/common/shared/Navbar.astro)).
- **Global Styles**: TailwindCSS-based styles ([`global.css`](src/styles/global.css)).

## 🛠️ Technologies Used

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [clsx](https://github.com/lukeed/clsx)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 📖 How to Use

1. Clone the repository:
   ```sh
   git clone https://github.com/doremon-me/YellowBaba.git
   cd front-end
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👋 Connect with Us

Follow **YellowBaba** for the latest tutorials and insights:

- [Twitter](#)
- [GitHub](#)