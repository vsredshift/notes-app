# Notes App

Notes App is a simple note-taking application built with React Native using Expo. Users can log in, create notes, edit, and delete them. The backend is powered by Appwrite Cloud, which manages user authentication, database, and collection rules.

## Features

- User authentication
- Create, edit, and delete notes
- Secure backend with Appwrite

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/vsredshift/notes-app.git
   cd notes-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Appwrite Setup

1. Create an account on [Appwrite](https://appwrite.io/)
2. Create a new project and note down the project ID
3. Set up authentication and database collections for storing notes
4. Configure user permissions and rules as needed
5. Add the required Appwrite credentials as environment variables in a `.env` file:
   ```sh
   EXPO_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint,
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your-project-id,
   EXPO_PUBLIC_APPWRITE_DB_ID=your-database-id,
   EXPO_PUBLIC_APPWRITE_COL_NOTES_ID=your-notes-collection-id,
   EXPO_PUBLIC_APPWRITE_PACKAGE_NAME=your-package-name-for-android,
   EXPO_PUBLIC_APPWRITE_BUNDLE_ID=your-bundle-id-for-iOS
   ```
# Notes App

Notes App is a simple note-taking application built with React Native using Expo. Users can log in, create notes, edit, and delete them. The backend is powered by Appwrite Cloud, which manages user authentication, database, and collection rules.

## Features

- User authentication
- Create, edit, and delete notes
- Secure backend with Appwrite

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Appwrite Setup

1. Create an account on [Appwrite](https://appwrite.io/)
2. Create a new project and note down the project ID
3. Set up authentication and database collections for storing notes
4. Configure user permissions and rules as needed
5. Add the required Appwrite credentials as environment variables in a `.env` file:
   ```sh
   APPWRITE_ENDPOINT=your-appwrite-endpoint
   APPWRITE_PROJECT_ID=your-project-id
   APPWRITE_API_KEY=your-api-key
   ```

## Development Options

You can develop and test the app using different environments:

### Web
1. Start the Expo development server:
   ```sh
   npm start
   ```
2. Press `w` in the terminal to open the app in a web browser.

### Android Emulator / iOS Simulator
1. Install Android Studio (for Android development) or Xcode (for iOS development).
2. Start the Expo development server:
   ```sh
   npm start
   ```
3. Press `a` for Android emulator or `i` for iOS simulator.

### Mobile Device (Expo Go)
1. Install Expo Go on your mobile device (available on [Google Play](https://play.google.com/) and [App Store](https://www.apple.com/app-store/)).
2. Start the Expo development server:
   ```sh
   npm start
   ```
3. Scan the QR code using Expo Go to run the app on your device.

## Building and Publishing

### Building the App
1. Install `eas-cli` if not already installed:
   ```sh
   npm install -g eas-cli
   ```
2. Log in to your Expo account:
   ```sh
   eas login
   ```
3. Configure your project for EAS builds:
   ```sh
   eas build:configure
   ```
4. Build the app for iOS or Android:
   ```sh
   eas build --platform ios
   eas build --platform android
   ```

### Publishing the App
1. Submit the build to the respective app store:
   ```sh
   eas submit --platform ios
   eas submit --platform android
   ```
2. Follow the instructions from the Apple App Store and Google Play Console to complete the submission process.

For detailed instructions, refer to the [Expo documentation](https://docs.expo.dev/).

