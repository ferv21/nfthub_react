import React from "react";
import "./styles.css"

const CollectionCard = ({profileName, profileImg}) => {
    return (
        <>
            <div className="list__item">      
                <img src={profileImg} alt="" />
                <div>
                    <h4>{profileName}</h4>
                    <a href="#a">See more</a>
                </div>
            </div>
        </>
    )
}

export default CollectionCard;