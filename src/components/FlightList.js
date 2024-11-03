import React, { useEffect, useState, useCallback } from 'react';
import "./FlightList.css";
import FCard from './FCard';
import FHome from "./FHome";

function FlightList() {
  const [from, setfrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [arrival, setArrival] = useState("");
  const [flights, setFlights] = useState([]);
  const [filteredflights, setFilteredFlights] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
      );
      const data = await response.json();
      setFlights(data);
      setFilteredFlights(data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filterFlights = useCallback(() => {
    let filtered = flights;

    if (from) {
      filtered = filtered.filter(flight => flight.from === from);
    }
    if (to) {
      filtered = filtered.filter(flight => flight.to === to);
    }
    if (depart) {
      filtered = filtered.filter(flight => flight.departure.departureDate === depart);
    }
    // Add any additional filtering for arrival if needed

    setFilteredFlights(filtered);
  }, [flights, from, to, depart]); // Removed arrival from dependencies

  useEffect(() => {
    filterFlights();
  }, [filterFlights]);

  return (
    <>
      <FHome
        from={from}
        setfrom={setfrom}
        to={to}
        setTo={setTo}
        setDepart={setDepart}
        setArrival={setArrival}
        setFilteredFlights={setFilteredFlights}
      />
      <div className='flight__container'>
        <div className='flight'>
          <h3>Available Tickets</h3>
          <div className='flight__cards'>
            <FCard
              from={from}
              to={to}
              depart={depart}
              arrival={arrival}
              flights={flights}
              setFlights={setFlights}
              filteredflights={filteredflights}
              setFilteredFlights={setFilteredFlights}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightList;
