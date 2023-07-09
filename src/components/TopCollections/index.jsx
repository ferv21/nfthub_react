import React from "react";
import {    profile1,profile2,profile3,profile4,
            profile5,profile6,profile7,profile8,
            profile9,profile10,profile11,profile12           
} from "../../assets/import";
import "./styles.css";
import CollectionCard from "../CollectionCard";


const profiles = [
    {id:1, profileImg:profile1, profileName:"PixelCollector"},
    {id:2, profileImg:profile2, profileName:"CryptoArtEnthusiast"},
    {id:3, profileImg:profile3, profileName:"NFTMastermind"},
    {id:4, profileImg:profile4, profileName:"DigitalDabbler"},
    {id:5, profileImg:profile5, profileName:"TokenTrove"},
    {id:6, profileImg:profile6, profileName:"ArtisticAuctioneer"},
    {id:7, profileImg:profile7, profileName:"CryptoCanvas"},
    {id:8, profileImg:profile8, profileName:"RareGemHunter"},
    {id:9, profileImg:profile9, profileName:"VirtualVanguard"},
    {id:10, profileImg:profile10, profileName:"BlockchainBrush"},
    {id:11, profileImg:profile11, profileName:"PixelPioneer"},
    {id:12, profileImg:profile12, profileName:"DigitalDreamweaver"},
]

const TopCollections = () => {
    return (
        <>
            <div className="container">
                <h3 className="topcollections__title">
                    Top collections over  <br />
                    last week
                </h3>
                <div className="profile__list">
                    {profiles.map((item) => (
                        <CollectionCard key={item.id}{...item}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopCollections;