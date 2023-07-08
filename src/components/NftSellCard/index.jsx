import React from "react";
import {Button} from "../../components/import"
import "./styles.css";
import { peoples } from "../../assets/import";



const NftSellCard = ({img,title,price}) => {
    return (
        <>
            <div>
                <div className="cardimg">
                    <img src={img} alt="" />
                    <div className="cardimg__content">
                        <img src={peoples} alt="people rating"/>
                        <div>
                            <h4>{title}</h4>
                            <p>{price}</p>
                        </div>
                        <div>
                            <Button title="Shop now"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NftSellCard;