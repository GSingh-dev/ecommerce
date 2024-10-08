import { useState, useContext } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import { userContext } from "../../contexts/user.context";
import Button from "../button/button.component";

const defaultFormFields = {
    email: "",
    password: "",

}
function SignInForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    // console.log(formFields);
    const {setCurrentUser} = useContext(userContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        console.log("handleSubmit");
        event.preventDefault();

        try {
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log(response);
            resetFormFields();
        } catch (error) {
            console.log(error.code);

            switch (error.code) {
                case "auth/invalid-credential":
                    alert("Password is Incorrect")
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email")
                    break;

                default:
                    break;
            }
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (

        <div className="sign-in-container">
            <h2>Already have an Account? </h2>
            <span>Sign In with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                    <Button type="submit" buttonType="inverted" >SIGN IN</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle} >GOOGLE SIGN IN</Button>
                </div>


            </form>
        </div>
    )
}

export default SignInForm;