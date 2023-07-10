import React from "react";
import {BsInstagram,BsFacebook,BsTwitter} from "react-icons/bs"
import "./styles.css";

const Footer = () => {
    return (
        <>
            <div className="section__padding footer">
                <div className="container footer__container">
                <div className="footer__social-media">
                    <span className="color__gradient footer__logo">NFT-HUT</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae soluta temporibus similique
                    </p>
                    <div className="social__links">
                        <div className="social__icon btn__gradient">
                            <BsInstagram size={20}/>
                        </div>
                        <div className="social__icon btn__gradient">
                            <BsFacebook size={20}/>
                        </div>
                        <div className="social__icon btn__gradient">
                            <BsTwitter size={20}/>
                        </div>
                    </div>
                </div>
                <div className="footer__links">
                    <div>
                        <h4>Primary Links</h4>
                        <ul>
                            <li>
                                <a href="#a">Home</a>
                            </li>
                            <li>
                                <a href="#a">About Us</a>
                            </li>
                            <li>
                                <a href="#a">NFT Marketplace</a>
                            </li>
                            <li>
                                <a href="#a">Artists</a>
                            </li>
                            <li>
                                <a href="#a">Collections</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Informational Links</h4>
                        <ul>
                            <li>
                                <a href="#a">FAQ</a>
                            </li>
                            <li>
                                <a href="#a">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#a">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#a">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Additional Links</h4>
                        <ul>
                            <li>
                                <a href="#a">Contact Us</a>
                            </li>
                            <li>
                                <a href="#a">Explore</a>
                            </li>
                            <li>
                                <a href="#a">Join the Community</a>
                            </li>
                            <li>
                                <a href="#a">Submit Your Artwork</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>   
            </div>
        </>
    )
}

export default Footer;