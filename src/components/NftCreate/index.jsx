import React from "react";
import {BsRocketTakeoff} from "react-icons/bs";
import {FaGripfire} from "react-icons/fa";
import {GiBorderedShield} from "react-icons/gi";
import {NftInfoCard} from "../../components/import";
import "./styles.css"


const nftsCards = [
    {
        img:<BsRocketTakeoff size={60}/>,title:"Teste Card",description:"lorem ipsum etc fets aisjd iasdolg auwd a awdj8cja ajj8djw"
    },
    {
        img:<FaGripfire size={60}/>,title:"Teste Card",description:"lorem ipsum etc fets aisjd iasdolg auwd a awdj8cja ajj8djw"
    },
    {
        img:<GiBorderedShield size={60}/>,title:"Teste Card",description:"lorem ipsum etc fets aisjd iasdolg auwd a awdj8cja ajj8djw"
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