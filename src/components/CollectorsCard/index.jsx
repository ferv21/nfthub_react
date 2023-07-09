import React from "react";
import {profile1} from "../../assets/import";
import "./styles.css"

const CollectorsCard = () => {
    return (
        <>
            <div className="collector__card">
                <div className="collector__card__profile">
                    <img src={profile1} alt="" />
                    <h5>#Ferv21</h5>
                </div>
                <div className="collector__card__infos">
                        <p>ArtisticAuctioneer</p>
                        <a href="#a">See more</a>
                </div>
            </div>
        </>
    )
}

export default CollectorsCard;