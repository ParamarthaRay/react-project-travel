import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Register.css"
import axios from 'axios';
const Register = () => {

    const initialData = {
        username: '',
        password: '',
    }

    //state object for formdata
    const [formdata, setFormdata] = useState(initialData);
    const [error, setError] = useState('');
    const [ setRegistered] = useState(false);
    //state variable to check form submission status
    const [status, setStatus] = useState(false);

    //method to update each key of state object
    const updateData = (e) => {
        const { id, value } = e.target;
        setFormdata({
            ...formdata,
            [id]: value.trim(),
        });
    };

    const validateForm = () => {
        if (!formdata.username || !formdata.password) {
            setError('Username and password cannot be empty.');
            return false;
        }
        if (formdata.password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return false;
        }
        return true;
    };


    //methods for form submission button
    const registerFn = async() => {
        if (!validateForm()) return;

        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formdata);

            if (response.status === 200) {
                setRegistered(true); // Set the registered state to true
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please chech details and try again.');
        }

        // Check if either username or password is empty
        if (!formdata.username || !formdata.password) {
            alert("Username and password cannot be empty.");
            return; // Exit the function without proceeding
        }
    
        // Proceed with form submission if validation passes
        setStatus(true);
    
        // Retrieve existing users from localStorage or initialize an empty array
        let temp = JSON.parse(localStorage.getItem('users')) || [];
    
        // Add new user data and save it back to localStorage
        localStorage.setItem('users', JSON.stringify([...temp, formdata]));
    
        // Reset form data to initial state
        setFormdata(initialData);
    };
    
    useEffect(() => {
        let temp = localStorage.getItem('users');
        console.log(JSON.parse(temp));
    }, [status]);
    

    return (
        <div className='register'>
        <div className='register__container'>

        
             <div className='register__img'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAABI1BMVEUnO3r///8SEUn/f0/qoi//xhvTWTMAAEvrbkMjOHgRD0j/gU+jVEwABEnfnC8hNncAAEMbI10cM3bZaTD5tx/5+fxUY5VHWI0tQH3T1NXn6fDf4enO0d6pr8eEjrFgbpx7hKgHKHHuuSHblzLEydqepL5AUId0f6c3SYOzuc0AAD4ADUlVVXKnSz4AADqSmrgpKFitrrnXqCHyryj3ciFJRHX/URg+MkMJElVYXoWWmKwvMF13d5JVSHJ/VG2jX2eSTlaBS2PteVOvZWKyTjwnMWprTnB/O0OUWmmXQz23aF7FVzsuG0jZdFbKblogF0mMPj9gL0ZjZIJMOGJCJkpISGtSK0fefWfqkyf/0DqbbznwiymxXDn6Zh/AkTCjdzQxJkXULFLbAAAFnklEQVRoga3aW0PbNhQAYMekyaQ0s+PixPiSxJ1zIV5DU6CDcFuBAeNSCiwbLevY//8Vk504sa0jWQ47Tzw0X06PZEnWiVTIDt20bKfZqje6htFt1FtNx7ZMXeCDUqbsddoNxdU0BSGJBEKKprlKo93xMn0+rtvtrkFciQryDUa3bfN9Hm51Gi4EL77AbXSspXCz2XU58sx3u00zN271NA1l0eEYaFqPlT2M646hicjT0AwHrj2I23WxrBfZ121BXN/IrnU6FHcDSJ7GzVaOiixCa9EDS+Fefymb6H0vC1+XcpckCkVa5+MOyjWSyUDI4eEb7gtsorsbbNxxX0IH4TosfP0lNZnljtZh3JNebBNd8iDc7C89T+Kh9E0a15d7dujQWjqFb/xPNtE30rjNmygoGGnx0XbtJK7XeTvOweHR5a+fDkUHXKnrCdxhFwUpR8crlR9KpdJrQ3DINSeOWwYzKXRwXKmsrAR4qfRJTEeGFcN7nNE8JnSElx7EKqP1FrjJKcpJaEf46W9CuKSZc7zJxNHZ8UocL53XxPBmhFtddsUvKkn8d1kod9S1ZniHPcfRZQq/usZCutuZ4nqDMwduUnjp2hfSlYYe4tyH8zOFY3laGXJaJIdTdup2iLc58zCaLHP83S3BSe6a1Oi123X22UlrB7je5VSFGtAvvkxCdXu2pZtr9qjH2hiVrk5wz2DbEtq+Sczz0l2Aq3vhfmOukRj1GbrhEbzDXWuVswR+Htrv7eClYDQee0T3GJ/UOgVJ55U80C9jj/+VH1S8OiJZ78rqAO+NiT6GJ4TW1iWTNxFD/YKsXOGqWPoSjKas7pPnbnuAsYz94T3Rd8H0lIYpWdkH/IfXN0Hmp3dB3rI8JAvqvhr+KeMByX1chj9nSdxZPg1Uk2//uL6Vp7Y8NAv6cPon+W+Q1Ee3NWhQXVvibBOLqPmqP6NlvENOIUM5wifemjdRIV1zJPaKOEsbKQoyHu7+vCV+8AXqAVmNBhGO34/W1n6uYmCx1JpSi1tzhLYPTxYDekdWFnVSKIzTuIzp3JWWVOftLdr2yU0lvhOdnvtB5jQu07mjutRg48i4OK6kF66rOxinc0cNqc+2o0c/gZdKJzBO632JubIoZzE7jv9FjmeDchQ7zpo9qZaxTFfGYOLKYSVmz/E3j6urX7++/RBGMYhNEsVv15jO3WCVRTk4XlkB8OKrRWwWF/GtTFemzxjQRL1j+JtVBv5jWU7rZEDhqahdJm1RPK6TqQg+RKifsoXx2KiShwh8/NFnEbz4COCL3MnjDy1c83MWD18tbn1/AvC5ThYuaMlFR+nEAbxY3Pr48RHAI50sudBmYVBVofHNEH+C8JlONgtgm0PbaRrAVzl4OKrBNgds0OiAShwoyybBt6Caz3IPNmjgaIEORfBXBIdmS6STdxfoUKRcVKgA8e9snOgeeJxDZ6/peBfG38K4v2cGB1H6hQjVqnCUf/kgige7IeMIXcMyFH4cX9164uDDdfbhv5aNw2tLVPIdnfPaAuYujg/G3BcuSBfGsWzzXxUBHfv/MPDnJK7e6xkvuYDu//v8dh7Fn+bxfJ34t3hgZ76eA6Pql+FI5qHuClwsMGZkVmDVFrkSWUrH6ljsMmcZXd0zBa+hltCH0c1l9gVaXh0H70wpnH31l1NXJyaFcy4tc+m+v2iPCF235tDxYFSAcM5FsbA+n4UUzrniFtWHcVv4cl5Ix8P9AhvntBUE9GRNaJzTEMnU/UHKztPK4etYrY7SVp4mFFdXJ3QHLVf7jKljf7gPdC7zNf4YOlb3HMjJ2bIETxxqdQw3XPM2W6ncsTrYBfuVHJzZJq6ldmL5nkUv0+Be6L463BnzGuhLtOZDnVSjujdZX741P/XpHxXsDIZq7X484nXlxfAC8HOIpmdZIj+H+A+uVrxkYHdyeQAAAABJRU5ErkJggg==' alt=''/>
             </div>

              <h3>Register Form</h3>
              {error && <p className='error'>{error}</p>}
            <input type="text" id="username" onChange={updateData} value={formdata.username} placeholder="Enter UserName"/>

            <input type="password" id="password" onChange={updateData} value={formdata.password} placeholder="Enter Password" /><br></br>

            <button className='register__btn' onClick={registerFn}>Register</button>
            <br></br>

            
            <Link to="/login">Login</Link>
            {status && <div className="alert alert-success" role="alert">
                <p >Registered Successfully</p>
                </div>
            }
            </div>
        </div>
    )
}

export default Register

