import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Login = () => {
    const handleSubmit =async (e) => {
        e.preventDefault();
        const url = `${host}/api/notes/fetchallnotes`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzU4Y2U5M2RkZWU2ODVmNTYwM2Q1In0sImlhdCI6MTY3Nzk0MTA1NX0.DV3pEymerIBmuBge28SayESQLcILuT-shgpv6xxnYDo"
            },

        });
        const json1 = await response.json()
        // console.log(json1)
    }
    return (
        <div className='container '>
            <div className="mainui top-0 start-50 translate-middle-x">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="login">
                    <form className="form">
                        <label htmlFor="chk" aria-hidden="true">Log in</label>
                        <input className="input" type="email" id='email' name="email" placeholder="Email" required="" />
                        <input className="input" type="password" id='password' name="pssword" placeholder="Password" required="" />
                        <button onSubmit={handleSubmit}>Log in</button>
                    </form>
                </div>

                <div className="register">
                    <form className="form">
                        <label htmlFor="chk" aria-hidden="true">Register</label>
                        <input className="input" type="email" name="email" id='email' placeholder="Email" required="" />
                        <input className="input" type="password" id='password' name="pswd" placeholder="Password" required="" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login