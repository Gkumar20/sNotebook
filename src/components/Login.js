import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { host } from '../helper'


const Login = (props) => {
    const [loading, setLoading] = useState(false);
    // const host = "http://localhost:5000";
    const [auth, setauth] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${host}/api/auth/login`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: auth.email, password: auth.password }),
        });

        const json = await response.json()
        console.log(json)
        localStorage.setItem('token', json.ClientToken);
        setLoading(true)

        if (json.success) {
            //Save auth token & redirect 
            navigate('/');
            props.showAlert("Login Successfully", "success")
        } else {
            props.showAlert("Login failed", "danger")
        }
    }

    const onChange = (element) => {
        // note remain but overrite the value with the input value 
        setauth({ ...auth, [element.target.name]: element.target.value })
    }

    if (loading) {
        return <p>Loading...</p>; // Display a loading state while the data is being fetched
    }
    return (
        <div className='container '>
            <h2 className='text-center'>Login to continue user sNotebook</h2>
            <div className="mainui top-0 start-50 translate-middle-x">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="login">
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="chk" aria-hidden="true">Log in</label>
                        <input className="input" type="email" autoComplete="username" id='email' value={auth.email} onChange={onChange} name="email" placeholder="Email" minLength={5} required />
                        <input className="input" type="password" autoComplete="current-password" id='password' value={auth.password} onChange={onChange} name="password" placeholder="Password" minLength={5} required />
                        <button type="submit" >Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login



const [loading, setLoading] = useState(true);


useEffect(() => {
    const fetchData = async () => {
        try {
            await getAllUser();
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, [getAllUser]);

if (loading) {
    return <p>Loading...</p>; // Display a loading state while the data is being fetched
}

return (
  // Rest of your component code
);
}