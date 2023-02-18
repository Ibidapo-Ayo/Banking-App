// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2ST9khuAjeSNgx4MipWb40PZFYZhyUnU",
  authDomain: "banking-app-7d24d.firebaseapp.com",
  projectId: "banking-app-7d24d",
  storageBucket: "banking-app-7d24d.appspot.com",
  messagingSenderId: "467108606225",
  appId: "1:467108606225:web:1f9d21e9bda944a2811cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth(app);

// export const signupUser = (
//   email: string,
//   fname: string,
//   lname: string,
//   password: string,
//   phone: string
// ) => {
//   createUserWithEmailAndPassword(auth, email,
//     password)
//     .then(userCredential => {
//       const user = userCredential.user;
//       console.log(user);
//       if (auth.currentUser) {
//         updateProfile(auth.currentUser, {
//           displayName: fname
//         });
//       }
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     });
// };
