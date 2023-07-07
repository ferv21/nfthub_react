import React from "react";
import {Button} from "../import"

const NftCard = ({image,ends,title,waiting}) => {
    return (
        <div>
            <img src={image} alt="nft" />
            <div>
                <span>Ends In</span>
                <span>{ends}</span>
            </div>
            <h3>{title}</h3>
            <div>
                <div>
                    <span>Waiting List</span>
                    <img src={waiting} alt="waiting list" />
                </div>
                <Button title="Start Bid"/>
            </div>

        </div>
    )
}

export default NftCard;