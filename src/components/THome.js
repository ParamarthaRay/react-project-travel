import React, { useState, useEffect } from "react";
import "../Home1.css";

function THome({
    from,
    setfrom,
    to,
    setTo,
    depart,
    setDepart,
    TrainProps,
    setFilteredTrains,
}) {
    const [trains, setTrains] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`);
            const data = await response.json();
            console.log("Fetched Data:", data); // Check what the data looks like
            if (Array.isArray(data)) {
                setTrains(data); // Set the trains state directly
            } else {
                console.error("Expected data to be an array", data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = [...TrainProps];
        let result = data.filter((train) => train.from === from && train.to === to);
        setFilteredTrains(result);
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
                <p>Book International and Domestic Cruises</p>

                <form onSubmit={handleSubmit}>
                    <div className='inputs'>
                        <div className='from home__input'>
                            <p>FROM</p>
                            <select onChange={handleFromChange} defaultValue=''>
                                <option value=''>Select City</option>
                                {Array.isArray(trains) && trains.map((train, index) => (
                                    <option key={index} value={train.from}>
                                        {train.from}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='to home__input'>
                            <p>TO</p>
                            <select onChange={handleToChange} defaultValue=''>
                                <option value=''>Select City</option>
                                {Array.isArray(trains) && trains.map((train, index) => (
                                    <option key={index} value={train.to}>
                                        {train.to}
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
                        <button className='home__search' type="submit">SEARCH</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default THome;
