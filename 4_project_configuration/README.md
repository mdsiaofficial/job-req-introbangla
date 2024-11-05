# Project Configuration

### Project Configuration Overview

In web development, organizing a project can greatly improve its maintainability, scalability, and collaboration. Below is a guide to help you set up a typical JavaScript-based project (like React or Vue) with good practices:

1. **File Structure**: Organizing files into folders (like components, pages, services, assets).
2. **Environment Variables**: Using `.env` files for managing environment-specific variables (e.g., API keys).
3. **Code Quality**: Adding tools like ESLint, Prettier, and Husky to ensure consistent code and automate tasks.
4. **Build Tools**: Using Webpack or Vite to bundle and optimize your project.

Let's walk through each of these steps with examples.

---

### 1. File Structure Organization

A well-structured file system helps in organizing your code. Here's a typical structure for a modern JavaScript project (e.g., React or Vue):

```
/my-app
├── /src
│   ├── /components      # Reusable UI components
│   ├── /pages           # Main pages (e.g., Home, About, etc.)
│   ├── /services        # API calls, external services or utilities
│   ├── /assets          # Static images, fonts, etc.
│   ├── /styles          # Global styles (CSS or SCSS)
│   └── App.js           # Main app component
├── .env                 # Environment variables (API keys, etc.)
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── package.json         # Dependencies and metadata
└── webpack.config.js    # Webpack (or Vite) configuration
```

#### Example File Structure Breakdown:
- **`/src/components/`**: Reusable components like buttons, headers, etc.
- **`/src/pages/`**: Main application pages (e.g., `Home.js`, `About.js`).
- **`/src/services/`**: API service files that handle external requests (e.g., `apiService.js`).
- **`/src/assets/`**: Static files like images, fonts, logos, etc.
- **`/src/styles/`**: Global stylesheets (CSS or SCSS files).

---

### 2. Environment Variables with `.env`

Environment variables are typically stored in `.env` files and can be different based on your environment (development, production, etc.).

#### Example `.env` file:

```
# .env (for development)
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_API_KEY=your-development-api-key
```

```javascript
// src/services/apiService.js
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchData = async () => {
  const response = await fetch(`${apiUrl}/data`);
  const data = await response.json();
  return data;
};
```

In this example:
- **`.env`** files store sensitive data like API URLs and keys.
- **`process.env.REACT_APP_API_URL`** allows you to access environment variables in the code.

**Important:** Never commit `.env` files to version control. Add it to `.gitignore`.

---

### 3. Code Quality with ESLint, Prettier, and Husky

#### **ESLint** (for linting):
ESLint helps you catch JavaScript errors and enforce consistent coding styles.

1. Install ESLint:
   ```bash
   npm install eslint --save-dev
   ```

2. Initialize ESLint:
   ```bash
   npx eslint --init
   ```

3. Example **`.eslintrc.js`** file:
   ```javascript
   module.exports = {
     env: {
       browser: true,
       es2021: true,
     },
     extends: ['eslint:recommended', 'plugin:react/recommended'],
     parserOptions: {
       ecmaFeatures: {
         jsx: true,
       },
       ecmaVersion: 12,
       sourceType: 'module',
     },
     plugins: ['react'],
     rules: {
       'react/react-in-jsx-scope': 'off',
       'no-unused-vars': 'warn',
     },
   };
   ```

#### **Prettier** (for code formatting):
Prettier maintains uniform code formatting across your project.

1. Install Prettier:
   ```bash
   npm install prettier --save-dev
   ```

2. Create a **`.prettierrc`** file:
   ```json
   {
     "singleQuote": true,
     "semi": false
   }
   ```

3. Add Prettier to ESLint by installing `eslint-config-prettier`:
   ```bash
   npm install eslint-config-prettier --save-dev
   ```

   Add `"prettier"` to your `.eslintrc.js`:
   ```javascript
   extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
   ```

#### **Husky** (for pre-commit hooks):
Husky helps to run scripts (like linting) before committing code.

1. Install Husky:
   ```bash
   npm install husky --save-dev
   ```

2. Initialize Husky:
   ```bash
   npx husky install
   ```

3. Add a pre-commit hook to run ESLint:
   ```bash
   npx husky add .husky/pre-commit "npm run lint"
   ```

4. **package.json** script:
   ```json
   {
     "scripts": {
       "lint": "eslint src/**/*.{js,jsx}"
     }
   }
   ```

Now, every time you commit, ESLint will automatically run and prevent bad code from being committed.

---

### 4. Build Tools (using Webpack or Vite)

#### **Webpack**:
Webpack bundles your JavaScript, CSS, and other assets for optimized delivery.

1. Install Webpack:
   ```bash
   npm install webpack webpack-cli --save-dev
   ```

2. Create a **`webpack.config.js`** file:

   ```javascript
   const path = require('path');

   module.exports = {
     entry: './src/index.js',
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist'),
     },
     module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
           },
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
       ],
     },
     devServer: {
       contentBase: './dist',
     },
   };
   ```

3. Add scripts to **`package.json`**:
   ```json
   {
     "scripts": {
       "start": "webpack serve --mode development",
       "build": "webpack --mode production"
     }
   }
   ```

4. Now you can use:
   ```bash
   npm run start   # For development
   npm run build   # For production build
   ```

#### **Vite** (simpler alternative to Webpack):
Vite is a faster alternative to Webpack, especially for modern frameworks like React or Vue.

1. Install Vite:
   ```bash
   npm create vite@latest my-app --template react
   ```

2. Example **`vite.config.js`**:
   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     server: {
       open: true,
     },
   });
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

### Summary

- **File Structure**: Organize files into folders like `components`, `pages`, `services`, etc.
- **Environment Variables**: Use `.env` files to store environment-specific variables like API keys.
- **Code Quality**: Use ESLint for linting, Prettier for formatting, and Husky for running pre-commit hooks.
- **Build Tools**: Use Webpack or Vite to bundle and optimize your project.

With these steps, your project will be organized, maintainable, and ready for production!