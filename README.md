CinePik

CinePik is a real-time movie suggestion app that helps users explore and discover movies effortlessly. The app fetches movie data from The Movie Database (TMDb) API, allowing users to browse through trending movies, mark favorites, and get detailed movie information.

Features

Movie Listings: Fetches trending and popular movies from TMDb API.

Search Functionality: Users can search for movies by title.

Favorites: Allows users to mark and manage favorite movies.

Detailed Movie Info: Displays comprehensive details such as synopsis, rating, release date, and more.

User Authentication: Enables user login and signup.

Tech Stack

Frontend: React Native

Backend: TMDb API

State Management: Context API / Redux (if applicable)

Navigation: React Navigation

Storage: AsyncStorage for saving user preferences

Installation

Prerequisites

Node.js & npm/yarn

React Native environment setup (Expo CLI or React Native CLI)

Steps

Clone the repository:

git clone https://github.com/yourusername/CinePik.git

Navigate to the project folder:

cd CinePik

Install dependencies:

npm install

or

yarn install

Obtain an API key from TMDb and add it to your environment variables.

Run the app:

For Expo:

expo start

For React Native CLI:

npx react-native run-android

or

npx react-native run-ios

Folder Structure

CinePik/
│-- api/              # API management
│-- assets/           # Images and icons
│-- components/       # Reusable components
│-- screens/          # App screens (Home, Login, Signup, Movie Details)
│-- navigation/       # React Navigation setup
│-- App.js            # Main entry file
│-- package.json      # Project metadata

Contributing

Fork the repository.

Create a feature branch:

git checkout -b feature-branch

Commit changes:

git commit -m "Add new feature"

Push to the branch:

git push origin feature-branch

Create a Pull Request.

