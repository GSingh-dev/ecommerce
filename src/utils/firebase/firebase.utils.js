import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2BCluW4c1Gz0Img3Z1_1aHXI4NrCj9rk",
  authDomain: "ecommerce-db-5651e.firebaseapp.com",
  projectId: "ecommerce-db-5651e",
  storageBucket: "ecommerce-db-5651e.appspot.com",
  messagingSenderId: "202862778729",
  appId: "1:202862778729:web:c535595ff3c1df756c45f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth,provider);



export const db = getFirestore();


export const createUserDocumentFromAuth = async(userAuth)=>{
    const userDocRef = doc(db,"users",userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error creating the user',error.message);   
        }

    }
    return userDocRef;
}

