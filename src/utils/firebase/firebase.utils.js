import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
<<<<<<< HEAD
    apiKey: "AIzaSyA2BCluW4c1Gz0Img3Z1_1aHXI4NrCj9rk",
    authDomain: "ecommerce-db-5651e.firebaseapp.com",
    projectId: "ecommerce-db-5651e",
    storageBucket: "ecommerce-db-5651e.appspot.com",
    messagingSenderId: "202862778729",
    appId: "1:202862778729:web:c535595ff3c1df756c45f8"
=======
  apiKey: "xxxx",
  authDomain: "ecommerce-db.firebaseapp.com",
  projectId: "ecommerce-db-",
  storageBucket: "ecommerce-db-5651e.appspot.com",
  messagingSenderId: "202862778729",
  appId: "1:202862778729:web:"
>>>>>>> abaeca28a51d302f617488a983e81ea19da46d7b
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);



export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log('Error creating the user', error.message);
        }

    }
    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);

}

