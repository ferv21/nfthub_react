import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "./styles.css"
import { NFT10 } from "../../assets/import";
import NftSellCard from "../NftSellCard";


const sellNfts = [
    {id:1, img:NFT10,title:"Testando NFT", price:"$250"},
    {id:2, img:NFT10,title:"Testando NFT", price:"$250"},
    {id:3, img:NFT10,title:"Testando NFT", price:"$250"},
    {id:4, img:NFT10,title:"Testando NFT", price:"$250"},
    {id:5, img:NFT10,title:"Testando NFT", price:"$250"},
    {id:6, img:NFT10,title:"Testando NFT", price:"$250"},
]

const NftExplore = () => {
    return (
        <>
            <div className="nft__explore container section__padding">
                <h2>Explore our NFTs collection</h2>
                <div className="select__options">
                    <select name="language" id="" placeholder="" className="select">
                        <option value="Language">Language</option>
                        <option value="">English</option>
                        <option value="">Portuguese</option>
                    </select>
                    <select name="language" id="" placeholder="" className="select">
                        <option value="Language">Value</option>
                        <option value="">English</option>
                        <option value="">Portuguese</option>
                    </select>
                    <select name="language" id="" placeholder="" className="select">
                        <option value="Language">Most Popular</option>
                        <option value="">English</option>
                        <option value="">Portuguese</option>
                    </select>
                    <select name="language" id="" placeholder="" className="select">
                        <option value="Language">Sort by</option>
                        <option value="">English</option>
                        <option value="">Portuguese</option>
                    </select>
                </div>
                <div className="nft__cards__sell">
                    <Swiper 
                        slidesPerView={3}
                        pagination={{clickable:true}}
                        navigation
                        
                    >
                        {sellNfts.map((item) => (
                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <NftSellCard key={item.id} {...item}/>
                            </SwiperSlide>      
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default NftExplore;