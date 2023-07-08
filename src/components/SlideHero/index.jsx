import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {NFT1,NFT2,NFT3} from "../../assets/import";
import "./styles.css"
import NftCard from "../NftCard";
import {EffectCoverflow, EffectCards, Autoplay} from "swiper/modules";

const slidesNft = [
    {id:584, image:NFT1, title:"The Cube Thingy"},
    {id:22, image:NFT2, title:"A Door Within A Door"},
    {id:443, image:NFT3, title:"Leveled Tubing Goo"},
    {id:584, image:NFT1, title:"The Cube Thingy"},
    {id:22, image:NFT2, title:"A Door Within A Door"},
    {id:443, image:NFT3, title:"Leveled Tubing Goo"},
]

const SlideHero = () => {
    return (
            <div className="slideNfts">
            <Swiper 
                slidesPerView={3}
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