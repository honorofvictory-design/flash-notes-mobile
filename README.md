# ⚡ Flash Notes - Mobile App

A beautiful, fast notes app for iOS and Android built with React Native and Expo.

## Features

✨ **Core Features:**
- ✍️ Create notes with title and content
- 📝 View all notes in a list
- ✏️ Edit existing notes
- 🗑️ Delete notes
- 💾 Notes persist on your device
- ⚡ Fast and smooth performance
- 🎨 Beautiful UI with smooth animations

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development and deployment platform
- **React Navigation** - Navigation between screens
- **AsyncStorage** - Local storage for notes
- **Works on:** iOS and Android

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Expo CLI installed (`npm install -g expo-cli`)
- iPhone or Android device, or emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/honorofvictory-design/flash-notes-mobile.git
   cd flash-notes-mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   This will open the Expo CLI in your terminal.

4. **Run on your device or emulator**
   - **iOS**: Press `i` in the terminal (requires Mac)
   - **Android**: Press `a` in the terminal (requires Android emulator)
   - **Web**: Press `w` in the terminal

   Or scan the QR code with your phone using:
   - iPhone: Camera app
   - Android: Expo Go app (download from Play Store)

## How to Use

### Creating a Note
1. Tap the **+** button at the bottom right
2. Enter a title (optional) and your note content
3. Tap "Add Note" to save

### Viewing a Note
1. Tap any note card in the list
2. View the full note details

### Editing a Note
1. Open a note
2. Tap the "Edit" button
3. Modify the title or content
4. Tap "Save" to update

### Deleting a Note
- From the list: Tap the "Delete" button on a note card
- From note detail: Tap the "Delete" button and confirm

## Project Structure

```
flash-notes-mobile/
├── App.js                 # Main app component
├── screens/
│   ├── HomeScreen.js      # List of notes
│   └── NoteDetailScreen.js # Note detail and edit
├── package.json           # Dependencies
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration
└── README.md            # This file
```

## How It Works

1. **AsyncStorage** - Notes are saved to your device storage
2. **React Navigation** - Smooth navigation between screens
3. **React Hooks** - State management with useState and useEffect
4. **Expo** - Easy deployment to both iOS and Android

## Future Features

- 🔍 Search notes
- 🏷️ Add tags and categories
- 🎨 Choose color themes
- 📤 Export notes
- 🔒 Biometric lock
- ☁️ Cloud sync
- 📱 Share notes

## Building for Production

### For iOS (Mac only)
```bash
expo build:ios
```

### For Android
```bash
expo build:android
```

## Troubleshooting

**Issue**: "npm: command not found"
- Solution: Install Node.js from https://nodejs.org

**Issue**: Expo CLI not working
- Solution: Run `npm install -g expo-cli`

**Issue**: App crashes on startup
- Solution: Delete node_modules and run `npm install` again

## License

Free to use and modify!

---

**Happy note-taking!** 📝✨
