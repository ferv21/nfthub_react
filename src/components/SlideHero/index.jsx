import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {NFT1,NFT2,NFT3} from "../../assets/import";

const slidesNft = [
    {id:1, img:NFT1},{id:2, img:NFT2},{id:3, img:NFT3}
]

const SlideHero = () => {
    return (
        
            <div className="slideNfts">
            <Swiper 
                slidesPerView={1}
                pagination={{clickable:true}}
                navigation
            >
                {slidesNft.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img className="nftImg" src={item.img} alt="nfts" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hero__gradient"/>
            </div>
  
    
    )
}

export default SlideHero;