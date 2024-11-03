// Book.js
import "./Book.css";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "./DataApp";

function Book({ onBuyClick }) {
  const navigate = useNavigate();
  const localContext = useContext(DataAppContext);
  const { appState } = localContext;
  const { loginStatus } = appState;

  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [ccv, setCcv] = useState("");
  const [paymentType, setPaymentType] = useState("card");
  const [saveCardInfo, setSaveCardInfo] = useState(false);

  useEffect(() => {
    if (!loginStatus) {
      console.log("Not logged in, redirecting to login");
      navigate("/login");
    } else {
      console.log("Logged in");
    }
  }, [loginStatus, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmBooking = window.confirm("Are you sure you want to place the order?");
    if (confirmBooking) {
      alert("Order Placed");
      navigate("/"); // Redirect to the home page
    }
  };

  // Trigger the onBuyClick function passed from the App component
  useEffect(() => {
    if (onBuyClick) {
      onBuyClick();
    }
  }, [onBuyClick]);

  return (
    <div className="payment-container">
      <div className="main">
        <div className="right-payment-info">
          <div className="payment-method">
            <h2>Payment Method</h2>
            <div className="radio-container">
              <input
                id="card"
                name="payment-type"
                type="radio"
                value="card"
                checked={paymentType === "card"}
                onChange={() => setPaymentType("card")}
                required
              />
              <label htmlFor="card">Card</label>
              <input
                id="paypal"
                name="payment-type"
                type="radio"
                value="paypal"
                checked={paymentType === "paypal"}
                onChange={() => setPaymentType("paypal")}
                required
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <form id="payment-form" onSubmit={handleSubmit}>
            <div className="card-info-container">
              <div className="card-info">
                <label>
                  Card Number
                  <input
                    className="full-width"
                    id="card-num"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </label>
                <label>
                  Name on Card
                  <input
                    className="full-width"
                    id="name"
                    type="text"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    placeholder="Steve Rogers"
                    required
                  />
                </label>
                <div className="expire-ccv">
                  <label>
                    Expires
                    <span className="expire-date">
                      <input
                        id="month"
                        type="text"
                        size={2}
                        maxLength={2}
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                        placeholder="MM"
                        required
                      />
                      <span>/</span>
                      <input
                        id="year"
                        type="text"
                        size={2}
                        maxLength={2}
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value)}
                        placeholder="YY"
                        required
                      />
                    </span>
                  </label>
                  <label>
                    CCV
                    <input
                      id="ccv"
                      type="text"
                      size={3}
                      maxLength={3}
                      value={ccv}
                      onChange={(e) => setCcv(e.target.value)}
                      placeholder="123"
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
            <label className="save-card-info">
              <input
                type="checkbox"
                checked={saveCardInfo}
                onChange={(e) => setSaveCardInfo(e.target.checked)}
              />
              Save card for faster checkout
            </label>
            <button type="submit" className="btn">
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Book;
