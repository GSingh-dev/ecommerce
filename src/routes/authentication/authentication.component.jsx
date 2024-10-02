import SignUpForm from "../../components/sign-up-form/signUpForm.component";
import SignInForm from "../../components/sign-in-form/signinForm.component";
import "./authentication.styles.scss"
function Authentication() {
    return (
        <div className="authentication-container">            
            
            <SignInForm/>
            <SignUpForm/>

        </div>
    )
}


export default Authentication;