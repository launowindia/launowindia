# Launow Mobile App

Launow is an on-demand clothing care platform. This React Native app (Expo, TypeScript) supports Client, Delivery Partner, Service Partner, and Admin roles.

## Tech Stack
- React Native (Expo, TypeScript)
- React Native Paper (Material Design)
- Appwrite (Auth, backend)
- Redux Toolkit + Redux Persist
- Axios (API)
- Role-based navigation

## Folder Structure
```
app/
  assets/
  components/
  constants/
  contexts/
  navigation/
  screens/
    Client/
    Delivery/
    Partner/
    Admin/
  services/
  store/
  utils/
  hooks/
  App.tsx
```

## Setup
1. Copy `.env.example` to `.env` and fill in your API/Appwrite keys.
2. Run `npm install`
3. Run `npx expo start`

## Features
- Role-based navigation
- Material Design UI
- Appwrite integration
- Offline support (Redux Persist)
- Common components: Loader, Header, Modal, Button, Toast

## Testing
- Unit: Jest
- E2E: Detox/Playwright (setup in progress) 