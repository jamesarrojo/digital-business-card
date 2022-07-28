import React from "react";
import twitterLogo from "../assets/twitter.svg"
import facebookLogo from "../assets/facebook.svg"
import instagramLogo from "../assets/instagram.svg"
import githubLogo from "../assets/github.svg"

export default function Footer() {
    return (
        <section className="footer">
            <a href="#"><img src={twitterLogo} alt="twitter icon" /></a>
            <a href="#"><img src={facebookLogo} alt="facebook icon" /></a>
            <a href="#"><img src={instagramLogo} alt="instagram icon" /></a>
            <a href="#"><img src={githubLogo} alt="github icon" /></a>
            
        </section>
    )
}