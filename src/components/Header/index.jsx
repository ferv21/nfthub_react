import React from "react";
import { FiUpload } from "react-icons/fi"
import { CgMenuGridO } from "react-icons/cg"
 

import "./styles.css";

const Header = () => {
    return (
        <>
            <header className="header container">
                <div className="logo">
                    <h1>NFT<span className="color__gradient">-FV</span></h1>
                    <div className="logo-menu">
                        <button className="menu">
                         <CgMenuGridO size={20} />
                        </button>
                    </div>
                </div>
                <div>
                    <ul className="navbar">
                        <li>
                            <a href="#Discover">Discover</a>
                        </li>
                        <li>
                            <a href="#Market">Marketplace</a>
                        </li>
                        <li>
                            <a href="#Artist">Artist</a>
                        </li>
                        <li>
                            <a href="#Community">Community</a>
                        </li>
                    </ul>
                </div>
                <div className="buttons">
                    <button type="button" className="btn-wallet">Connect Wallet</button>
                    <div className="btn-upload">
                        <button type="button">
                        <FiUpload color="white" size={18}/>
                        </button>
                    </div>
                    <div className="btn-menu">
                        <button className="menu">
                            <CgMenuGridO  size={20}/>
                        </button>
                    </div>
                </div>
            </header>
            <div className="header__gradient"/>
            <div className="header__blue_gradient"/>
        </>
    )
}

export default Header;