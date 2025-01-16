import React from 'react';
import './Hero.css';
import nav from '../Assets/nav.jpg';

const Hero = () => {
    return (
        <header className="section_container header_container">
            <div
                className="header_image_container"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(44,56,85,0.9), rgba(100,125,187,0.1)), url(${nav})`,
                    minHeight: '500px',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '2rem',
                }}
            >
                <div className="header_content">
                    <h1>Enjoy Your Dream Vacation</h1>
                    <p>Book Hotels, Flights and Stay Packages at Lowest Price</p>
                </div>
            </div>
            <div className="booking_container">
                <form>
                    <div className="form_group">
                        <div className="input_group">
                            <input type="text" id="location" required />
                            <label htmlFor="location">Location</label>
                        </div>
                        <p>Where are you going?</p>
                    </div>
                    <div className="form_group">
                        <div className="input_group">
                            <input type="date" id="checkin" required />
                        </div>
                        <p>Check In</p>
                    </div>
                    <div className="form_group">
                        <div className="input_group">
                            <input type="date" id="checkout" required />
                        </div>
                        <p>Check Out</p>
                    </div>
                    <div className="form_group">
                        <div className="input_group">
                            <input type="number" id="guests" min="1" required />
                            <label htmlFor="guests">Guests</label>
                        </div>
                        <p>Add guests</p>
                    </div>
                    <button type="submit" className="btn">→</button>
                </form>
            </div>
        </header>
    );
};

export default Hero;