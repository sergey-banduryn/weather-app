# Weather App

A modern, responsive, and feature-rich weather forecasting application built with **React**, **TypeScript**, and **Vite**. The application leverages the OpenWeatherMap API to provide real-time weather information, 5-day forecasts, geolocation-based weather retrieval, and local persistence for search history and favorite cities.

---

## 🚀 Features

- **Real-Time Weather Data**: Instantly fetch current weather conditions (temperature, humidity, wind speed and direction).
- **5-Day Weather Forecast**: Grouped daily forecast details to help users plan ahead.
- **Auto-Geolocation**: Automatically detects the user's location (if permission is granted) using reverse geocoding to fetch local weather.
- **Interactive Search**: Search for weather by city name with error handling for non-existent locations.
- **Favorites Management**: Save favorite cities to display their weather. State is persisted locally.
- **Search History**: Access recently searched cities with a single click.
- **Theme Selection**: Toggle between **Light Mode** and **Dark Mode** seamlessly, powered by MUI's color schemes engine.
- **Dynamic Backgrounds**: Responsive UI styling and background graphics that adapt dynamically depending on the current weather condition.
- **Toast Notifications**: Smooth, non-blocking toast notifications for system events and error messages.

---

## 🛠️ Tech Stack

This project is built using a modern frontend ecosystem:

- **[TypeScript](https://www.typescriptlang.org/)**: Static typing for robust code quality, autocomplete, and self-documenting code.
- **[MUI (Material UI v6)](https://mui.com/)**: A premium component library utilized for styling, responsive grid layouts, and advanced theming support (utilizing MUI CSS variables).
- **[TanStack React Query (v5)](https://tanstack.com/query/latest)**: Advanced data fetching, synchronization, state tracking, automatic caching, and retry logic for API interactions.
- **[React Router (v7)](https://reactrouter.com/)**: Enables clean client-side routing and structure.
- **[Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)**: A lightweight, fast, and scalable state management library, integrated with persistence middleware to store favorite cities and search history.
- **[React Toastify](https://github.com/fkhadra/react-toastify)**: User-friendly notification alerts for api errors, geo-lookup feedback, and other actions.
- **[Vite](https://vite.dev/)**: Next-generation frontend tooling for fast development HMR and optimized production builds.
