# RestaurantChooser App

**RestaurantChooser** is a mobile application developed using React Native , designed to assist groups in selecting a restaurant by considering individual preferences and enabling vetoes during the voting process.

## [APK File](https://expo.dev/artifacts/eas/mfRosBdCDriBUyvH4wdwwt.apk)
---

## Features

Restaurant Management : Add, edit, and view detailed information about restaurants.
Participant Management : Easily add and manage participants in the decision-making process.
Personalized Filters : Set preferences for price range, cuisine type, ratings, and delivery options.
Sequential Voting : Participants vote in sequence, ensuring fairness.
Veto Power : Allow participants to veto proposed restaurants if they don’t meet their preferences.
Smart Selection : Automatically selects a final restaurant that satisfies all conditions and preferences.
Form Validation : Comprehensive validation ensures a smooth user experience.
Data Persistence : Utilizes AsyncStorage to save data locally.

## Form Validation

The app implements robust form validation to enhance user experience:

Field-Specific Validation : Each input field has tailored validation rules (e.g., name, phone, website).
Validation Criteria : Checks for required fields, correct formats, and minimum length requirements.
Error Feedback : Displays clear, specific error messages below each invalid field.
Visual Cues : Invalid fields are highlighted with a red border for quick identification.
Toast Notifications : Provides feedback on submission errors via toast messages.
Auto-Focus : Automatically focuses on the first invalid field upon submission attempts.
Submission Control : Prevents form submission until all fields are valid.
Optimized Keyboard Types : Uses appropriate keyboard types (phone-pad, url, etc.) for better usability.

## 📦 Tech Stack

- `React Native`  
- `Expo`  
- `@react-navigation/native`  
- `@react-navigation/material-top-tabs`  
- `@react-navigation/stack`  
- `@react-native-async-storage/async-storage`  
- `@react-native-picker/picker`

---

## Prerequisites

- Node.js v18+  
- npm (v9+) or yarn (v1.22+)  
- Expo CLI (globally installed)  
- Android Studio / Xcode (for emulators) or Expo Go app (for physical devices)

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/MonkeysTower/RestaurantChooser
cd RestaurantChooser
npm install
```

## Running the App (Development Mode)

Start the development server:

```bash
npx expo start
```

You’ll see a QR code in your terminal. Choose one of these options:

Physical Device
Install Expo Go on your phone

Scan the QR code using your camera or Expo Go app

Emulator
Press i for iOS simulator

Press a for Android emulator

