import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyB0VIEKAoTXUJKTrmZ0bkZsmy4OxOwMO8o",
    authDomain: "saml-integration-2ef60.firebaseapp.com",
    projectId: "saml-integration-2ef60",
    storageBucket: "saml-integration-2ef60.appspot.com",
    messagingSenderId: "186600729486",
    appId: "1:186600729486:web:137b35684deb851f6092df",
    measurementId: "G-7CGVX7F53Q"
};

export const app = initializeApp(firebaseConfig);

export const initFirebaseApp = () => {
    return app;
};