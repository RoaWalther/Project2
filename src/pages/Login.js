import React, { useRef } from "react";
import '../styles/login.css';
import Img from '../assets/icons/Img';

function Login(){
    const form = useRef(null);

    const handleSubmit=(event)=>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password'),
        }
        console.log(data)
    }
   
    return(
        <div className="login">
            <div className="form-container">
                <img className="//" src={Img.logo} alt="logo"  />
                <form className="form" ref={form}>
                <label className="label">Email</label>
                <input type="text" name="email" placeholder="Email" className="input input-password" />
                <label className="label">Password</label>
                <input type="password" name="password" placeholder="*********" 
                className="input input-password" />
                <button type="submit" className="primary-button login-button" onClick={handleSubmit} >
                Log in</button>
                <a href= "/"> Forgot my password</a>
                </form>
            </div>
        </div>
    );
}

export {Login};