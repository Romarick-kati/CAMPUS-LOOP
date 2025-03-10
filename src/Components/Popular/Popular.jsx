import React, { useState } from 'react';
import './Popular.css';
import tripadvise1 from '../Assets/tripadvise1.jpg';
import majestie from '../Assets/majestie.jpg';
import wdc from '../Assets/wdc.jpg';
import p2 from '../Assets/p2.jpg';
import soe from '../Assets/soe.jpg';
import pos from '../Assets/pos.jpg';
import milla1 from '../Assets/milla1.jpg';
import milla2 from '../Assets/milla2.jpg';
import milla3 from '../Assets/milla3.jpg';
import mount1 from '../Assets/mount1.jpg';
import mount2 from '../Assets/mount2.jpg';
import mount3 from '../Assets/mount3.jpg';
import travis1 from '../Assets/travis1.jpg';
import travis2 from '../Assets/travis2.jpg';
import travis3 from '../Assets/travis3.jpg';
import akd1 from '../Assets/akd1.jpg';
import akd2 from '../Assets/akd2.jpg';
import akd3 from '../Assets/akd3.jpg';

const hotels = [
    {
        name: "Mount Cameroon Hotel",
        img: majestie,
        description: "Experience the beauty of nature with premium services.",
        location: "Buea, Cameroon",
        roomTypes: [
            {
                type: "VIP Suite",
                price: "20000FCFA/night",
                features: ["Mountain view", "Private balcony", "Jacuzzi", "Butler service"],
                images: [milla1, milla2, milla3]
            },
            {
                type: "Executive Room",
                price: "15000FCFA/night",
                features: ["Ocean view", "King size bed", "Complimentary breakfast"],
                images: [mount1, mount2, mount3]
            }
        ]
    },
    {
        name: "Trip Advisor Hotel",
        img: tripadvise1,
        description: "Your trusted source for hotel information.",
        location: "Buea, Cameroon",
        roomTypes: [
            {
                type: "Standard Room",
                price: "15000FCFA/night",
                features: ["Free Wi-Fi", "Air conditioning", "Complimentary breakfast"],
                images: [travis1, travis2, travis3]
            },
            {
                type: "Deluxe Room",
                price: "25000FCFA/night",
                features: ["City view", "Mini bar", "Room service"],
                images: [akd1, akd2, akd3]
            }
        ]
    },
    {
        name: "WDC Hotel",
        img: wdc,
        description: "Luxury and comfort meet at WDC.",
        location: "Buea, Cameroon",
        roomTypes: [
            {
                type: "Presidential Suite",
                price: "120000FCFA/night",
                features: ["Panoramic view", "Private gym", "Personal chef"],
                images: [milla1, milla2, milla3]
            },
            {
                type: "Family Room",
                price: "40000FCFA/night",
                features: ["Two queen beds", "Living area", "Kids' play area"],
                images: [mount1, mount2, mount3]
            }
        ]
    },
    {
        name: "Mountain Hotel",
        img: p2,
        description: "A perfect blend of luxury and affordability.",
        location: "Buea, Cameroon",
        roomTypes: [
            {
                type: "Standard Suite",
                price: "30000FCFA/night",
                features: ["Free breakfast", "Pool access", "24/7 room service"],
                images: [travis1, travis2, travis3]
            },
            {
                type: "Luxury Room",
                price: "50000FCFA/night",
                features: ["Ocean view", "Private terrace", "Spa services"],
                images: [akd1, akd2, akd3]
            }
        ]
    },
    {
        name: "Hall Of Amelia",
        img: soe,
        description: "Combining tradition with modern luxury.",
        location: "Buea, Cameroon",
        roomTypes: [
            {
                type: "Classic Room",
                price: "18000FCFA/night",
                features: ["Garden view", "High-speed internet", "Flat screen TV"],
                images: [milla1, milla2, milla3]
            },
            {
                type: "Superior Room",
                price: "35000FCFA/night",
                features: ["Balcony", "Minibar", "Complimentary drinks"],
                images: [mount1, mount2, mount3]
            }
        ]
    },
    {
        name: "Akhard Hotel",
        img: pos,
        description: "A serene escape with top-notch amenities.",
        location: "Buea, Cameroon",
        roomTypes: [
            {
                type: "Executive Suite",
                price: "70000FCFA/night",
                features: ["Luxury bath", "Private lounge", "Complimentary cocktails"],
                images: [travis1, travis2, travis3]
            },
            {
                type: "Junior Suite",
                price: "40000FCFA/night",
                features: ["Sofa bed", "Coffee maker", "City view"],
                images: [akd1, akd2, akd3]
            }
        ]
    }
];

const Popular = () => {
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [reservationVisible, setReservationVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', checkIn: '', checkOut: '', guests: 1 });

    const openModal = (hotelIndex) => {
        setSelectedHotel(hotels[hotelIndex]);
        setModalVisible(true);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedHotel(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedHotel) {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % selectedHotel.roomTypes[0].images.length
            );
        }
    };

    const prevImage = () => {
        if (selectedHotel) {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex - 1 + selectedHotel.roomTypes[0].images.length) % selectedHotel.roomTypes[0].images.length
            );
        }
    };

    const openReservation = () => {
        setReservationVisible(true);
    };

    const closeReservation = () => {
        setReservationVisible(false);
        setFormData({ name: '', email: '', checkIn: '', checkOut: '', guests: 1 });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData); // Debugging log
        openReservation(); // Open reservation view 
    };

    return (
        <section className="section_container popular_container">
            <h2 className="section_header">POPULAR HOTELS</h2>
            <div className="popular_grid">
                {hotels.map((hotel, index) => (
                    <div className="popular_card" key={index} onClick={() => openModal(index)}>
                        <img src={hotel.img} alt={hotel.name} />
                        <div className="popular_content">
                            <div className="popular_card_header">
                                <h4>{hotel.name}</h4>
                            </div>
                            <p>{hotel.location}</p>
                        </div>
                    </div>
                ))}
            </div>

            {modalVisible && selectedHotel && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="hotelModal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{selectedHotel.name}</h2>
                            <button className="close-button" onClick={closeModal}>✖</button>
                        </div>
                        <p className="modal-description">{selectedHotel.description}</p>
                        <p>Location: {selectedHotel.location}</p>
                        <div className="room-types">
                            {selectedHotel.roomTypes.map((room, idx) => (
                                <div className="room-card" key={idx}>
                                    <h4>{room.type}</h4>
                                    <div className="room-price">{room.price}</div>
                                    <ul className="room-features">
                                        {room.features.map((feature, fIdx) => (
                                            <li key={fIdx}>✔ {feature}</li>
                                        ))}
                                    </ul>
                                    <div className="image-container">
                                        <button className="arrow" onClick={prevImage}>❮</button>
                                        <img
                                            className="large-image"
                                            src={room.images[currentImageIndex]}
                                            alt={`Room view ${currentImageIndex + 1}`}
                                        />
                                        <button className="arrow" onClick={nextImage}>❯</button>
                                    </div>
                                    <button className="reserve-button" onClick={openReservation}>Reserve Now</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {reservationVisible && (
                <div className="modal-overlay" onClick={closeReservation}>
                    <div className="reservationModal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeReservation}>✖</button>
                        <h2>Reservation Form</h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="date" 
                                name="checkIn" 
                                value={formData.checkIn} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="date" 
                                name="checkOut" 
                                value={formData.checkOut} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="number" 
                                name="guests" 
                                placeholder="Number of Guests" 
                                value={formData.guests} 
                                onChange={handleChange} 
                                min="1" 
                                required 
                            />
                            <button type="submit" className="confirm-button">Confirm Reservation</button>
                        </form>
                        {formData.name && (
                            <div className="reservation-details">
                                <h2>Reservation Confirmation</h2>
                                <p>Name: {formData.name}</p>
                                <p>Email: {formData.email}</p>
                                <p>Check-in Date: {formData.checkIn}</p>
                                <p>Check-out Date: {formData.checkOut}</p>
                                <p>Number of Guests: {formData.guests}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Popular;