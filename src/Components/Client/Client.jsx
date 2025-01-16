import React from 'react'
import './Client.css'
import c3 from '../Assets/c3.jpg'
import c1 from '../Assets/c1.jpg'
import c2 from '../Assets/c2.jpg'

const Newsletter = () => {
    return (
        <div>
           <section class="client">
         <div class="section_container client_container">
         <h2 class="section_header">What Client Say</h2>
         <div class="client_grid">
            <div class="client_card">
                <img src={c3} alt="" />
                <p>
                    The booking proces was seamless,and the confirmations was instant.
                    I helply recommend Elite hotel for hassle.free hotel booking
                </p>
            </div>

            <div class="client_card">
                <img src={c1} alt="" />
                <p>
                    The booking proces was seamless,and the confirmations was instant.
                    I helply recommend Elite hotel for hassle.free hotel booking
                </p>
            </div>

            <div class="client_card">
                <img src={c2} alt="" />
                <p>
                    The booking proces was seamless,and the confirmations was instant.
                    I helply recommend Elite hotel for hassle.free hotel booking
                </p>
            </div>
        </div>
    </div>
      </section>
        </div>
    )
}
export default Newsletter