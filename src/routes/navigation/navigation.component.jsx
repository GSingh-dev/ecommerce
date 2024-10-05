import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss"
import { userContext } from "../../contexts/user.context";
function Navigation() {
    const {currentUser} = useContext(userContext);
    return (

        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={"/"}>
                    <Logo className="logo" />
                </Link>


                <div className="nav-links-container">
                    <Link className="nav-link" to={"/shop"} >
                        SHOP
                    </Link>
                    <Link className="nav-link" to={"/auth"} >
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />

        </Fragment>
    )
}

export default Navigation;