import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { profile1, profile2, profile3, profile4, profile5, profile6, profile7, profile8, profile9, profile10, profile11, profile12 } from "../../assets/import";
import {Button,CollectorsCard} from "../import"
import "./styles.css";
import { useMediaQuery } from "react-responsive";


const collectorsImg = [
    {id:1, img:profile1},
    {id:2, img:profile2},
    {id:3, img:profile3},
    {id:4, img:profile4},
    {id:5, img:profile5},
    {id:6, img:profile6},
];

const profiles = [
    {id:1, profile:profile7, name:"ArtSpectra", tag:"VibrantVisions"},
    {id:2, profile:profile8, name:"CryptoCanvas", tag:"DigitalDreamscape"},
    {id:3, profile:profile9, name:"PixelVerse", tag:"TechTriumph"},
    {id:4, profile:profile10, name:"EtherVisions", tag:"AbstractRealms"},
]



const Collectors = () => {

    const isMobile = useMediaQuery({maxWidth: 540});

    return (
        <>
            <div className="container">
                <h3 className="topcollections__title">
                    Our Beloved Collectors
                </h3>
            <div className="collectors">
                <div className="card__collector__slide">
                    <div className="card__collector__profile">
                        <img src={profile1} alt="" />
                        <h4>Ferv21</h4>
                    </div>
                    <div className="card__collector__button">
                        <div className="card__collector__infos">
                            <div>
                                <p>Abstract</p>
                                <span>DigitalArt</span>
                            </div>
                            <div>
                                <p>Crypto</p>
                                <span>TechArt</span>
                            </div>
                        </div>
                        <Button title="See more"/>
                    </div>
                    <div className="card__collections">
                       
                        <div className="card__collections__images">
                            <Swiper 
                                breakpoints={{
                                    1024: {
                                        slidesPerView:3,
                                    },
                                    820: {
                                        slidesPerView:3,
                                    },
                                    576: {
                                        slidesPerView:2
                                    }
                                }}
                                navigation
                                
                            >
                                {collectorsImg.map((item)=> (
                                    <SwiperSlide style={{display:"flex", justifyContent:"center"}} key={item.id}>
                                        <img src={item.img} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="collectors__cards">
                    {profiles.map((profile) => (
                        <CollectorsCard key={profile.id}{...profile}/>
                    ))}
                </div>
                {isMobile ? null : (
                    <>
                        <div className="collectors__gradient__position pink__gradient"/>
                    </>
                )}
            </div>
            </div>
        </>
    )
}

export default Collectors;
