import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { DataAppContext } from './DataApp';

const Login = () => {
    const navigate = useNavigate();
    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;
    const { loginStatus, username } = appState;

    const initialData = {
        username: '',
        password: '',
    };

    const [loginformdata, setFormdata] = useState(initialData);
    const [loginstatus, setStatus] = useState(false);

    const updateData = (e) => {
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...loginformdata,
            ...tempObj
        });
    };

    const loginFn = () => {
        if (!loginformdata.username || !loginformdata.password) {
            alert("Please provide both username and password.");
            return; // Stops the function if either field is empty
        }
    
        let temp = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].username === loginformdata.username) {
                if (temp[i].password === loginformdata.password) {
                    setStatus(true);
                    setAppState({
                        ...appState,
                        loginStatus: true,
                        username: loginformdata.username,
                    });
                    navigate('/');
                }
            }
        }
    
        // Reset form data after submission
        setFormdata(initialData);
    };
    

    useEffect(() => {
        let temp = localStorage.getItem('users');
        console.log(JSON.parse(temp));
    }, [loginstatus, appState]);

    return (
        <div className='login'>
            <div className='login__container'>
                <div className='login__img'>
                    <img src='data:image/png;base64,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' alt='' />
                </div>
                <h3>Login Form</h3>
                <input type="text" id="username" onChange={updateData} value={loginformdata.username} placeholder="Enter UserName" />
                <input type="password" id="password" onChange={updateData} value={loginformdata.password} placeholder="Enter Password" />
                <br />

                <button className='btn' onClick={loginFn}>Login</button>
                <br />
                <Link to="/register">Register</Link>
                {loginStatus && ( // Use loginStatus to conditionally render message
                    <div className="alert alert-success" role="alert">
                        <p>Logged In Successfully as {username}</p>
                    </div>
                )}
                {!loginStatus && loginformdata.username && ( // Optionally show a message when login fails
                    <div className="alert alert-danger" role="alert">
                        <p>Login failed. Please check your username and password.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
