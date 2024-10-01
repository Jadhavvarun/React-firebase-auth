# 🔐 React Firebase Auth

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A sleek and secure React application leveraging Firebase for robust user authentication. Seamlessly sign up, sign in, and manage user sessions with both email/password and Google authentication options.

## ✨ Features

- 📧 User signup with email and password
- 🔑 User login with email and password
- 🌐 Google sign-in integration
- 🔄 Password reset functionality
- 📱 Responsive UI powered by Tailwind CSS
- 👤 Efficient user session management

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Firebase project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-firebase-auth.git
   cd react-firebase-auth
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or select an existing one.
   - Add a web app to your project and copy the Firebase config.
   - Enable Email/Password and Google authentication in the Firebase console:
     - Navigate to Authentication > Sign-in method
     - Enable the desired providers

4. Configure Firebase:
   Create a `.env` file in the root of your project and add your Firebase configuration:
   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. Start the application:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📘 Usage

- Navigate to `/signup` to create a new account.
- Visit `/signin` to log in to your account.
- Use the Google button for quick Google sign-in.
- After logging in, you'll be redirected to the home page featuring a welcome message and logout option.

## 📁 Folder Structure

```
/src
|-- /components          # Reusable components
|   |-- Home.jsx
|   |-- Signin.jsx
|   |-- Signup.jsx
|-- /firebase            # Firebase configuration
|   |-- firebase.js
|-- App.js               # Main application component
|-- index.js             # Entry point of the application
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
