import React from "react";
import "./styles.css"

const CollectorsCard = ({profile, name, tag}) => {
    return (
        <>
            <div className="collector__card">
                <div className="collector__card__profile">
                    <img src={profile} alt="" />
                    <h5>{name}</h5>
                </div>
                <div className="collector__card__infos">
                        <p>{tag}</p>
                        <a href="#a">See more</a>
                </div>
            </div>
        </>
    )
}

export default CollectorsCard;