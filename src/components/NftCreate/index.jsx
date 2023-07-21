import React from "react";
import {BsRocketTakeoff} from "react-icons/bs";
import {FaGripfire} from "react-icons/fa";
import {GiBorderedShield} from "react-icons/gi";
import {NftInfoCard} from "../../components/import";
import "./styles.css"


const nftsCards = [
    {
        img:<BsRocketTakeoff size={60}/>,title:"Revolutionary NFTs!",description:"Discover unique art, music, and entertainment NFTs on the blockchain."
    },
    {
        img:<FaGripfire size={60}/>,title:"Exclusive NFTs",description:"Own one-of-a-kind digital masterpieces with blockchain authentication."
    },
    {
        img:<GiBorderedShield size={60}/>,title:"Expanding NFT Market",description:"Join the growing NFT market for unique digital ownership opportunities."
    }
]

const NftCreates = () => {
    return (
        <>
            <div className="container">
                <h2 className="nft__create_title">Create and sell your NFTs</h2>
                <div className="nftcreates">
                    {nftsCards.map((item) => (
                        <NftInfoCard key={item.title} {...item}/> 
                    ))}
                </div>
            </div>
        </>
    )
}

export default NftCreates;