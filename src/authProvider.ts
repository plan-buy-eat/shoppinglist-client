
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  FirebaseAuthProvider,
} from 'react-admin-firebase';
import {ReactAdminFirebaseAuthProvider} from "react-admin-firebase/dist/providers/AuthProvider";

console.log(import.meta.env.VITE_FIREBASE_CONFIG)

const config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// const webClientId = import.meta.env.VITE_FIREBASE_AUTH_WEBCLIENTID
// const webClientSecret = import.meta.env.VITE_FIREBASE_AUTH_WEBCLIENTSECRET

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(config);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const options = {};

export const authProvider : ReactAdminFirebaseAuthProvider = FirebaseAuthProvider(config, options);

export default authProvider;