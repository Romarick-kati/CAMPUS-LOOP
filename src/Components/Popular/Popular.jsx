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

// Continue with your component code...
const hotels = [
    {
        name: "Majestie Hotel",
        img: majestie,
        price: "15000FCFA",
        location: "Razel Street, Buea",
        roomTypes: [
            {
                type: "Standard Room",
                price: "10000FCFA",
                features: ["City view", "Double bed", "Free WiFi"],
                images: [milla1, milla2, milla3]
            }
        ]
    },
    {
        name: "Tripadvise",
        img: tripadvise1,
        price: "20000FCFA",
        location: "Mount Cameroon, Buea",
        roomTypes: [
            {
                type: "Deluxe Room",
                price: "15000FCFA",
                features: ["Mountain view", "King size bed"],
                images: ["path/to/mount1.jpg", "path/to/mount2.jpg", "path/to/mount3.jpg"]
            }
        ]
    },
    {
        name: "WDC Aparamount",
        img: wdc,
        price: "15000FCFA",
        location: "Mile 16, Buea",
        roomTypes: [
            {
                type: "Business Room",
                price: "12000FCFA",
                features: ["Work desk", "High-speed Internet"],
                images: ["path/to/travis1.jpg", "path/to/travis2.jpg", "path/to/travis3.jpg"]
            }
        ]
    },
    {
        name: "Mountain Hotel",
        img: p2,
        price: "20000FCFA",
        location: "Mountain, Buea",
        roomTypes: [
            {
                type: "Deluxe Room",
                price: "18000FCFA",
                features: ["Nature view", "Free WiFi"],
                images: ["path/to/mount1.jpg", "path/to/mount2.jpg", "path/to/mount3.jpg"]
            }
        ]
    },
    {
        name: "Hall of Amelia",
        img: soe,
        price: "15000FCFA",
        location: "Crystal Junction, Buea",
        roomTypes: [
            {
                type: "Standard Room",
                price: "10000FCFA",
                features: ["City view", "Double bed"],
                images: ["path/to/milla1.jpg", "path/to/milla2.jpg", "path/to/milla3.jpg"]
            }
        ]
    },
    {
        name: "Arkahd Hauz",
        img: pos,
        price: "15000FCFA",
        location: "UB Junction, Buea",
        roomTypes: [
            {
                type: "Budget Room",
                price: "8000FCFA",
                features: ["Basic amenities", "Twin beds"],
                images: ["path/to/akd1.jpg", "path/to/akd2.jpg", "path/to/akd3.jpg"]
            }
        ]
    }
];

const Popular = () => {
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (hotelIndex) => {
        setSelectedHotel(hotels[hotelIndex]);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedHotel(null);
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
                                <h4>{hotel.price}</h4>
                            </div>
                            <p>{hotel.location}</p>
                        </div>
                    </div>
                ))}
            </div>

            {modalVisible && (
                <div className="hotelModal" id="hotelModal">
                    <div className="modal-header">
                        <h2>{selectedHotel.name}</h2>
                        <button onClick={closeModal}>Close</button>
                    </div>
                    <div className="hotel-description">
                        <p>{selectedHotel.roomTypes[0].features.join(', ')}</p>
                    </div>
                    <div className="room-types">
                        {selectedHotel.roomTypes.map((room, idx) => (
                            <div className="room-card" key={idx}>
                                <h4>{room.type}</h4>
                                <div className="room-price">{room.price}</div>
                                <ul className="room-features">
                                    {room.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="room-gallery">
                                    {room.images.map((image, imgIdx) => (
                                        <img src={image} alt={room.type} key={imgIdx} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Popular;