import React, { useEffect, useState } from "react";
import {peoples} from "../../assets/import";
import "./styles.css"
import {Button} from "../import"



const NftCard = ({id,image,ends,title}) => {

    const [hours, setHours] = useState(12);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() =>{
            if(hours === 0 && min === 0 && sec === 0){
                clearInterval(intervalId);
            }else{
                if(min === 0 && sec === 0) {
                    setHours((prevHrs) => prevHrs - 1);
                    setMin(59);
                    setSec(59);
                }else if(sec === 0){
                    setMin((prevMin) => prevMin - 1);
                    setSec(59);
                } else {
                    setSec((prevSec) => prevSec - 1);
                }
            }
        },1000);
        return ()=>{
            clearInterval(intervalId);
        }
    },[hours,min,sec]);

    return (
        <>
        <div className="card">
            <div className="card__img">
                <img src={image} alt="nft" />
            </div>
            <div className="card__ends">
                <p className="end">Ends In</p>
                <p style={{fontWeight:"bold"}}>{hours.toString().padStart(2, "0")}h {min.toString().padStart(2, "0")}m{" "}{sec.toString().padStart(2, "0")}s</p>
            </div>
            <div className="card__content">
                <div className="card__title">
                    <h3>{title}</h3>
                    <span>#{id}</span>
                </div>
                <div className="card__infos">
                    <div className="waiting__list">
                        <span>Waiting List</span>
                        <img src={peoples} alt="waiting list" />
                    </div>
                    <div style={{marginTop:"16px"}}>
                        <Button title="Start Bid"/>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default NftCard;