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

## Building and Publishing

### Install on a Mobile Device

1. Install Expo Go on your mobile device (available on [Google Play](https://play.google.com/) and [App Store](https://www.apple.com/app-store/))
2. Start the Expo development server:
   ```sh
   npm start
   ```
3. Scan the QR code using Expo Go to run the app on your device

### Build and Publish to App Store

1. Install Expo CLI if not already installed:
   ```sh
   npm install -g expo-cli
   ```
2. Build the app for iOS or Android:
   ```sh
   eas build --platform ios
   eas build --platform android
   ```
3. Follow the instructions to upload the build to the respective app store

For detailed instructions, refer to the Expo documentation.

