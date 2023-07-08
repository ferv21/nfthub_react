import React from "react";
import "./styles.css";

const NftInfoCard = ({img, title, description}) => {
    return (
    
            <div className="nftsellcard">
                {img}
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
    )
}

export default NftInfoCard;