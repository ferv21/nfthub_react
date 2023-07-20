import React from "react";
import {SlideHero} from "../import";
import { BsPlayCircle } from "react-icons/bs";
import { Button } from "../import";
import "./styles.css";

const Hero = () => {
    return (
        <>
            <section className="container hero section__padding">
                <div className="hero__content">
                <h1>
                    Discover Collect and Sell <br />
                    Extraordinary NFT's!
                </h1>
                <p>OpenSea is the world's firts and largest NFT marketplace</p>
                <div className="buttons"> 
                    <Button title="Let's Explore"/>
                    <div className="play-icon">
                        <BsPlayCircle size={28} color="purple" cursor="pointer"/>
                        <a href="#a">How it works?</a>
                    </div>
                </div>
                </div>
                <div className="section__padding">
                    <SlideHero />
                </div>
                <div className="hero__left__position purple__gradient"/>  
                <div className="hero__right__position purple__gradient"/>    
                <div className="hero__center__position blue__gradient"/>        
            </section>
        </>
    )
}

export default Hero;