// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const envV = import.meta.env;

console.log("key", import.meta.env.FB_API_KEY);

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: envV.VITE_FB_API_KEY,
	authDomain: envV.VITE_FB_AUTH_DOMAIN,
	projectId: envV.VITE_FB_PROJECT_ID,
	storageBucket: envV.VITE_FB_STORAGE_BUCKET,
	messagingSenderId: envV.VITE_FB_MESSAGING_SENDER_ID,
	appId: envV.VITE_FB_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
