// 1) Na med Import
import  LOGO_URL  from "../utils/constants";
import { useState } from "react";

const Header = () => {
    let btnName = "Login";
    const [btnNameState, setBtnNameState] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {(btnNameState === "Login") ? setBtnNameState("Logout") : setBtnNameState("Login")}}>{btnNameState}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;