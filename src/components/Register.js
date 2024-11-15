import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Register.css";
import axios from 'axios';

const Register = () => {
    const initialData = {
        username: '',
        password: '',
    };

    // State for form data and submission status
    const [formdata, setFormdata] = useState(initialData);
    const [status, setStatus] = useState(false);
    const [error, setError] = useState('');

    // Update form data
    const updateData = (e) => {
        const { id, value } = e.target;
        setFormdata({
            ...formdata,
            [id]: value.trim()
        });
    };

    // Form submission
    const registerFn = async () => {
        if (!formdata.username || !formdata.password) {
            alert("Username and password cannot be empty.");
            return;
        }

        console.log(formdata);

        try {
            // Send POST request to backend
            const response = await axios.post('http://localhost:5000/api/auth/register', formdata);

            console.log("the response received is -> ",response);
            if (response.status === 200) {
                setStatus(true);  // Update the status to show success message
                setFormdata(initialData);  // Clear the form
                setError('');  // Clear any previous errors
            }
        } catch (err) {
            // Error handling
            console.log("the error while registering is -> ",err);
            setError(err.response ? err.response.data.message : 'Registration failed. Please try again.');
        }
    };

    useEffect(() => {
        if (status) {
            console.log('User registered successfully.');
        }
    }, [status]);

    return (
        <div className='register'>
            <div className='register__container'>
                <div className='register__img'>
                    <img src='data:image/png;base64,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' alt='Registration Image' />
                </div>
                <h2 className='register__header'>Sign Up</h2>
                {status && <div className='success-message'>Registration Successful!</div>}
                {error && <div className='error-message'>{error}</div>}
                <form className='register__form' onSubmit={(e) => e.preventDefault()}>
                    <input type='text' id='username' placeholder='Enter Username' value={formdata.username} onChange={updateData} />
                    <input type='password' id='password' placeholder='Enter Password' value={formdata.password} onChange={updateData} />
                    <button type='submit' className='register__btn' onClick={registerFn}>Register</button>
                </form>
                <p>
                    Already have an account? <Link to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
