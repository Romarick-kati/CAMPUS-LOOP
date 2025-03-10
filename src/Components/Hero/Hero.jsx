import React from 'react';
import Slider from 'react-slick';
import './Hero.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import nav from '../Assets/nav.jpg'; // Verify this path
import soe from '../Assets/soe.jpg'; // Verify this path
import pos from '../Assets/pos.jpg'; // Verify this path

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000, // Set to 2 seconds
    };

    return (
        <header className="section_container header_container">
            <Slider {...settings}>
                <div className="header_image_container" style={{ minHeight: '500px' }}>
                    <div
                        className="header_image"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(44,56,85,0.9), rgba(100,125,187,0.1)), url(${nav})`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="header_content">
                            <h1>Enjoy Your Dream Vacation</h1>
                            <p>Book Hotels, Flights and Stay Packages at Lowest Price</p>
                        </div>
                    </div>
                </div>
                <div className="header_image_container" style={{ minHeight: '500px' }}>
                    <div
                        className="header_image"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(44,56,85,0.9), rgba(100,125,187,0.1)), url(${soe})`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="header_content">
                            <h1>Explore New Destinations</h1>
                            <p>Find the perfect place to relax and enjoy</p>
                        </div>
                    </div>
                </div>
                <div className="header_image_container" style={{ minHeight: '500px' }}>
                    <div
                        className="header_image"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(44,56,85,0.9), rgba(100,125,187,0.1)), url(${pos})`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="header_content">
                            <h1>Adventure Awaits</h1>
                            <p>Book your next adventure now!</p>
                        </div>
                    </div>
                </div>
            </Slider>
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