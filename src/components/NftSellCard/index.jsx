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
                        <div className="card__price">
                            <h4>{title}</h4>
                            <p>{price}</p>
                        </div>
                        <div className="shownow__btn">
                            <Button title="Shop now"/>
                            <a style={{color:"white"}} href="#a">See more</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NftSellCard;