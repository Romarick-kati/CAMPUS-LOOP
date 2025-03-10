import React from 'react';
import '../CSS/Reservation.css'; // Optional: Create a CSS file for styling

const Reservation = ({ formData, closeReservation }) => {
    return (
        <div className="reservation-details">
            <h2>Reservation Confirmation</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Check-in Date: {formData.checkIn}</p>
            <p>Check-out Date: {formData.checkOut}</p>
            <p>Number of Guests: {formData.guests}</p>
            <button className="close-button" onClick={closeReservation}>Close</button>
        </div>
    );
};

export default Reservation;