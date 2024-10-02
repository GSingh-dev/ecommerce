import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

import Button from "../button/button.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
function SignUpForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    // console.log(formFields);

    const handleSubmit = async (event) => {
        // console.log("handleSubmit");
        event.preventDefault();
        if (password !== confirmPassword) {
            // console.log("password !== confirmPassword");
            alert("ReEnter Password");
            return;
        }

        try {
            console.log("try block start");
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // console.log(user);

            await createUserDocumentFromAuth(user, { displayName });
            

        } catch (error) {

            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                console.log("User Creation Error : " + error);
            }

        }

    }


    function handleChange(event) {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (

        <div className="sign-up-container">
            <h2>Don't have an Account? </h2>
            <span>Sign up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
               
                <Button buttonType="inverted" type="submit">Sign Up</Button>
             
            </form>
        </div>
    )
}

export default SignUpForm;