# QuickGPT Clone

## Project Overview

This project is a ChatGPT Clone built using **React** and **Tailwind CSS**. It provides a clean chat interface with support for light and dark themes. Currently, the project uses dummy data for users and chats, and the backend integration will be added later.

## Features Completed

DAY : 1

* Created the project using React.
* Installed and configured Tailwind CSS.
* Added React Router for page navigation.
* Created a responsive sidebar.
* Added a company logo.
* Added a **New Chat** button.
* Implemented a search bar to search conversations.
* Displayed recent chat history using dummy chat data.
* Displayed the last updated time using Moment.js.
* Added navigation to:

  * Community Images page
  * Credits page
* Displayed the user's available credits.
* Implemented Dark Mode and Light Mode using React Context API and localStorage.
* Saved the selected theme so it remains after refreshing the page.
* Created a global App Context to manage:

  * User information
  * Chat list
  * Selected chat
  * Theme
  * Navigation
* Created placeholder components:

  * Chatbox
  * Message
* Created placeholder pages:

  * Community
  * Credits
  * Login
  * Loading

## Technologies Used

* React
* React Router DOM
* Tailwind CSS
* Context API
* Moment.js
* JavaScript (ES6)

## Project Structure

```
src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Chatbox.jsx
│   └── Message.jsx
│
├── context/
│   └── AppContext.jsx
│
├── pages/
│   ├── Community.jsx
│   ├── Credits.jsx
│   ├── Login.jsx
│   └── Loading.jsx
│
├── App.jsx
├── index.js
└── index.css
```

## Current Status

The frontend layout is completed with dummy data. The next step is to connect the application to a backend and AI API for real-time chat functionality.

## Future Improvements

* User authentication
* Backend integration
* MongoDB database connection
* Real AI chat responses
* Create and delete chats
* Store chat history
* Upload and generate images
* Credit purchase integration
* Responsive mobile design improvements
