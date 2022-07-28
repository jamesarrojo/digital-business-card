import React from "react"
import myPicture from "../assets/2x2.png"

export default function Info() {
    return (
        <section className="info">
            <img src={myPicture} />
            <h1>Isemman James Arrojo</h1>
            <h3>Frontend Developer</h3>
            <span>jamesarrojo.com</span>
            <section className="buttons">
                <a href="#"><i class="fa-solid fa-envelope"></i> Email</a>
                <a href="#"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
            </section>
            
        </section>
    )
}