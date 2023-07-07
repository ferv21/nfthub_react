import React from "react";
import "./styles.css";

const Button = ({title}) => {
    return (
        <button className="btn btn__gradient">{title}</button>
    )
}

export default Button;