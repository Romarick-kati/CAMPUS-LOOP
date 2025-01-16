import React from 'react';
import '../CSS/AboutUs.css'; // Optional: Import a CSS file for styling

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1>ABOUT US</h1>
            <div className="about-us-grid">
                <div className="about-us-card">
                    <h2>MISSION</h2>
                    <p>
                        Our mission is to provide exceptional service and create unforgettable experiences for our guests. 
                        We are dedicated to ensuring that each visitor feels welcomed and valued, and we strive to surpass 
                        expectations in all aspects of hospitality. By continuously improving our services and facilities, 
                        we aim to make every stay memorable and enjoyable.
                    </p>
                </div>
                <div className="about-us-card">
                    <h2>VISION</h2>
                    <p>
                        We envision a world where every traveler finds a home away from home with us, fostering connections 
                        and memories that last a lifetime. Our goal is to be recognized as a leader in the hospitality 
                        industry, known for our innovative approaches and commitment to sustainability. We believe in creating 
                        a positive impact on the communities we serve while providing a refuge for all who enter our doors.
                    </p>
                </div>
                <div className="about-us-card">
                    <h2>ACHIEVEMENTS</h2>
                    <p>
                        Over the years, we have received numerous awards for excellence in hospitality and service. 
                        From being rated among the top hotels in the region to receiving accolades for our sustainability 
                        initiatives, our commitment to quality and guest satisfaction is evident. We take pride in our 
                        achievements and continually seek new ways to improve and adapt to the ever-changing needs of our guests.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;