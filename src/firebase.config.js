import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAq2UbEqCivOdpL7arOwBePis_BLdoGLEY",
  authDomain: "maltimart-c17db.firebaseapp.com",
  projectId: "maltimart-c17db",
  storageBucket: "maltimart-c17db.appspot.com",
  messagingSenderId: "164432700277",
  appId: "1:164432700277:web:45e48c2861d5bc4f49a93c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
