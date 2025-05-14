// Importation des fonctions Firebase nécessaires
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrs4aeuOWulemf7OQratZ4AvtsaI5BgWQ",
  authDomain: "hackathon-2fe99.firebaseapp.com",
  projectId: "hackathon-2fe99",
  storageBucket: "hackathon-2fe99.firebasestorage.app",
  messagingSenderId: "446548111407",
  appId: "1:446548111407:web:b78ad968d323fa32eed6da"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Export de l'objet auth pour l'utiliser dans Signup/Login
export const auth = getAuth(app);
