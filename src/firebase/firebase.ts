// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBVxEftRRxjpbHSfSOUJ6pxIRWNFrDkUEc",
	authDomain: "tauri-player.firebaseapp.com",
	projectId: "tauri-player",
	storageBucket: "tauri-player.appspot.com",
	messagingSenderId: "853673949754",
	appId: "1:853673949754:web:f72b5ccf18feafdaa4d303",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
