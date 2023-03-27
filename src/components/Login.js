import React,{useState} from 'react'
import {  useNavigate} from "react-router-dom";


const Login = (props) => {
    const host = "http://localhost:5000";
    const [auth, setauth] = useState({email:"",password:""})
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${host}/api/auth/login`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({email:auth.email,password:auth.password}),

        });

        const json = await response.json()
        console.log(json)
        localStorage.setItem('token',json.ClientToken);

        if(json.success){
            //Save auth token & redirect 
            navigate('/');
            props.showAlert("Login Successfully","success")
        }else{
            props.showAlert("Login failed","danger")
        }
    }

    const onChange=(element)=>{
        // note remain but overrite the value with the input value 
        setauth({...auth, [element.target.name]: element.target.value})
      }
    return (
        <div className='container '>
            <div className="mainui top-0 start-50 translate-middle-x">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="login">
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="chk" aria-hidden="true">Log in</label>
                        <input className="input" type="email" id='email' value={auth.email} onChange={onChange} name="email" placeholder="Email"  />
                        <input className="input" type="password" id='password' value={auth.password} onChange={onChange} name="password" placeholder="Password"  />
                        <button type="submit" >Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login