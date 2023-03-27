import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Signup(props) {
    const host = "http://localhost:5000";
    const [auth, setauth] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
            const url = `${host}/api/auth/createuser`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({ name: auth.name, email: auth.email, password: auth.password }),

            });
            const json = await response.json()
            console.log(json)
            if (json.success) {
                // redirect 
                localStorage.setItem('token', json.authtoken);
                navigate('/login');
                props.showAlert("SignUp: Account Created Successfully","success")
            } else {
                props.showAlert("signUp Failled","danger")
            }


    }

    const onChange = (element) => {
        // auth remain but overrite the value with the input value 
        setauth({ ...auth, [element.target.name]: element.target.value })
    }
    return (
        <div className='container '>
            <div className="mainui top-0 start-50 translate-middle-x">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="SignUp">
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="chk" aria-hidden="true">Register</label>
                        <input className="input" type="name" name="name" id='name' value={auth.name} onChange={onChange} placeholder="Name" required="" />
                        <input className="input" type="email" name="email" id='email' value={auth.email} onChange={onChange} placeholder="Email" required="" />
                        <input className="input" type="password" id='password' name="password" value={auth.password} onChange={onChange} placeholder="Password" minLength={5} required/>
                        <input className="input" type="password" id='cpassword' name="cpassword" value={auth.cpassword} onChange={onChange} placeholder="Confirm Password" minLength={5} required />
                        <button type="submit" disabled={auth.cpassword!==auth.password || auth.password.length===0} className="btn btn-success">SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup