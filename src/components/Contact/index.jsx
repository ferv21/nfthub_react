import React from "react";
import { useMediaQuery } from "react-responsive";
import "./styles.css";

const Contact = () => {

    const isMobile = useMediaQuery({maxWidth: 540})

    return (
        <>
            <div className="container contact">
                <h3>Never Miss a drop!</h3> 
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ad voluptas nam reprehenderit id! At aliquam sed rerum 
                </p>
                <form className="form">
                    <input type="email"/>
                    <button className="btn-form btn__gradient">Send me</button>
                </form>
                {isMobile ? null : (
                    <>
                        <div className="contact__gradient__position__left lightblue__gradient"/>
                        <div className="contact__gradient__position__right purple__gradient"/>
                    </>
                )}
            </div>
        </>
    )
}

export default Contact;