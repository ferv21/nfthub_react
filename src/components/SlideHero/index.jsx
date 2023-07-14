import React, { useEffect, useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {NFT1,NFT5,NFT3} from "../../assets/import";
import "./styles.css"
import NftCard from "../NftCard";
import {EffectCoverflow, EffectCards, Autoplay} from "swiper/modules";

const slidesNft = [
    {id:584, image:NFT1, title:"The Cube Thingy"},
    {id:22, image:NFT5, title:"A Door Within A Door"},
    {id:443, image:NFT3, title:"Leveled Tubing Goo"},
    {id:584, image:NFT1, title:"The Cube Thingy"},
    {id:22, image:NFT5, title:"A Door Within A Door"},
    {id:443, image:NFT3, title:"Leveled Tubing Goo"},
]

const SlideHero = () => {

    return (
            <div className="slideNfts">
            <Swiper 
                breakpoints={{
                    1024: {
                        slidesPerView:3,
                    },
                    820: {
                        slidesPerView:2,
                    },
                    576: {
                        slidesPerView:2
                    }
                }}
                pagination={{clickable:true}}
                navigation
                modules={{EffectCoverflow}}
                coverflowEffect={{slideShadows:false}}
                effect="coverflow"
                autoplay={{delay:3000,disableOnInteraction: false}}
            >
                {slidesNft.map((item) => (
                    <SwiperSlide style={{display:"flex", justifyContent:"center"}} 
                    key={item.id}>
                        <NftCard {...item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hero__gradient"/>
            </div>
  
    
    )
}

export default SlideHero;