# VanLife - React Router 6 Tutorial Project

This project is designed to show the core concepts of React Router 6. It provides a hands-on approach to understanding routing in React applications by building a van rental platform.

## Features

This project covers the following React Router 6 concepts and tools:

1. **Routing Basics**: Learn how to set up and configure routes in a React application.
2. **Navigation**: Implement navigation between different pages using `Link` and `NavLink` components.
3. **Layout and Index Routes**: Understand how to create layouts and define index routes for better user experience.
4. **Nested Routes**: Explore how to nest routes and create a hierarchical structure for your application.
5. **Route Parameters**: Learn how to use dynamic route parameters to display specific data.
6. **Search Parameters**: Work with query strings to filter and sort data.
7. **Protected Routes**: Implement authentication and restrict access to certain routes based on user roles or login status.

## Technologies Used

- React 18.2.0
- React Router DOM 6.4.3
- MirageJS 0.1.46
- React Icons 4.7.1
- Vite (for development and build)

## Learning Objectives

- Understand the basics of React Router 6 and how to implement routing in a React application.
- Learn how to create and use nested routes for better application structure.
- Gain experience with protected routes and authentication in React.
- Work with query parameters to filter and sort data dynamically.

## Project Structure

The project is organized as follows:

```
vanlife/
├── assets/
│   └── images/
├── components/
│   ├── AuthRequired.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── HostLayout.jsx
│   └── Layout.jsx
├── pages/
│   ├── About.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── Host/
│   │   ├── Dashboard.jsx
│   │   ├── HostVanDetail.jsx
│   │   ├── HostVanInfo.jsx
│   │   ├── HostVanPhotos.jsx
│   │   ├── HostVanPricing.jsx
│   │   ├── HostVans.jsx
│   │   ├── Income.jsx
│   │   └── Reviews.jsx
│   └── Vans/
│       ├── VanDetail.jsx
│       └── Vans.jsx
├── api.js
├── index.css
├── index.html
├── index.jsx
├── package.json
├── server.js
└── vite.config.js
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd NAME-OF-THE-FOLDER
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:5173` to view the application.