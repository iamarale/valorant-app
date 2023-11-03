# Valorant Web App Readme
# React + Vite

## Description
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This Valorant Web App is designed to provide users with valuable information about the game Valorant, including details about agents, all in-game kits (weapons and shields), and available bundles. The application utilizes the Valorant API from [https://valorant-api.com](https://valorant-api.com) to fetch real-time data and present it in an organized and user-friendly manner.
Currently, two official plugins are available:

## Features

### Agents

- **Agent List:** Browse through a comprehensive list of Valorant agents.
- **Agent Details:** View detailed information about each agent, including their abilities and backstory.
- **Search Functionality:** Easily find agents by name or role using the search feature.

### Kits

- **Weapons:** Explore all the weapons available in Valorant, including their stats, cost, and in-game details.
- **Shields:** Access information about shields, including armor and abilities, that can be used in the game.
- **Sorting Options:** Sort weapons and shields by categories such as type, cost, and more.

### Bundles

- **Bundle Catalog:** Browse through the available in-game bundles.
- **Bundle Contents:** View the items included in each bundle, including skins, sprays, and more.
- **Bundle Pricing:** See the pricing of each bundle and available discounts.

## Technologies Used

- **React:** The frontend of the application is built using the React JavaScript library.
- **TailwindCSS:** Mainly used tailwind for styling to style components and dynamically set styles.
- **React Router:** Used for handling routing within the application.

## API Usage

This application relies on the Valorant API from [https://valorant-api.com](https://valorant-api.com) to retrieve up-to-date information about Valorant agents, kits, and bundles

## TODO List

1. [x] **Responsive design:** Ensure the application is fully responsive for various devices and screen sizes
2. [ ] **Dark mode:** Adds a toggle button to header to switch between light/dark modes
2. [ ] **Filtering anges:** Add filtering options to the agents such as by role, name etc. 
2. [ ] **Amount to spend:** For kits, allow user to put in a certain of coins and see how many kits/weapons you can buy.
3. [ ] **Favorites:** Allow users to mark agents, weapons, or bundles as favorites for quick access
4. [ ] **Performance optimization:** Optimize API requests and application performance
5. [ ] **useReducer hook:** Replace useState with useReducer hook to make it easier to understand codebase