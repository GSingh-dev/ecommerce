import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/signUpForm.component";

function SignIn() {
    useEffect(() =>{
        const mainFunction = async () =>{
            const response = await getRedirectResult(auth)
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user)        
            }
        }
        mainFunction()
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }


    return (
        <div>
            <SignUpForm/>
            <h1>This is Sign Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>
            

        </div>
    )
}


export default SignIn;