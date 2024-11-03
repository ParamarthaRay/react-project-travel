import React, { useState, useEffect } from "react";
import "../Home1.css";

function FHome({ 
    from, 
    setfrom, 
    to, 
    setTo, 
    setFilteredFlights 
}) {
    const [flights, setFlights] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
            );
            const data = await response.json();
            setFlights(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const filtered = flights.filter(
            (flight) => flight.from === from && flight.to === to
        );
        setFilteredFlights(filtered);
    };

    const handleFromChange = (event) => {
        setfrom(event.target.value);
    };

    const handleToChange = (event) => {
        setTo(event.target.value);
    };

    return (
        <div className='home__container'>
            <div className='home'>
                <p>Book International and Domestic Flights</p>
                <form onSubmit={handleSubmit}>
                    <div className='inputs'>
                        <div className='from home__input'>
                            <p>FROM</p>
                            <select onChange={handleFromChange} defaultValue="">
                                <option value="" disabled>
                                    Select City
                                </option>
                                {flights.map((flight, index) => (
                                    <option key={index} value={flight.from}>
                                        {flight.from}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='to home__input'>
                            <p>TO</p>
                            <select onChange={handleToChange} defaultValue="">
                                <option value="" disabled>
                                    Select City
                                </option>
                                {flights.map((flight, index) => (
                                    <option key={index} value={flight.to}>
                                        {flight.to}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='departure home__input'>
                            <p>DEPARTURE DATE</p>
                            <input type="date" />
                        </div>
                    </div>
                    <div>
                        <button className='home__search' type="submit">
                            SEARCH
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FHome;
