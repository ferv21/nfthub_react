import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "./styles.css"
import { NFT1,NFT2,NFT3,NFT4,NFT5,NFT6,NFT7,NFT8,NFT9,NFT10 } from "../../assets/import";
import NftSellCard from "../NftSellCard";


const sellNfts = [
    {id:1, img:NFT7,title:"Testando NFT", price:"$250,00"},
    {id:2, img:NFT8,title:"Testando NFT", price:"$250,00"},
    {id:3, img:NFT9,title:"Testando NFT", price:"$250,00"},
    {id:4, img:NFT4,title:"Testando NFT", price:"$250,00"},
    {id:5, img:NFT5,title:"Testando NFT", price:"$250,00"},
    {id:6, img:NFT6,title:"Testando NFT", price:"$250,00"},
]

const sellNfts2 = [
    {id:4, img:NFT4,title:"Testando NFT", price:"$250,00"},
    {id:5, img:NFT5,title:"Testando NFT", price:"$250,00"},
    {id:6, img:NFT6,title:"Testando NFT", price:"$250,00"},
    {id:1, img:NFT7,title:"Testando NFT", price:"$250,00"},
    {id:2, img:NFT8,title:"Testando NFT", price:"$250,00"},
    {id:3, img:NFT9,title:"Testando NFT", price:"$250,00"},
]

const NftExplore = () => {

    const isMobile =useMediaQuery({maxWidth: 414})

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
                        spaceBetween={10}
                    >
                        {sellNfts.map((item) => (
                            <>
                                <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                    <NftSellCard key={item.id} {...item}/>
                                </SwiperSlide>    
                            </>
                            
                        ))}
                    </Swiper>
                    {isMobile ? null : (
                        <>
                            <Swiper 
                                style={{marginTop:"60px"}}
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
                                spaceBetween={10}

                            >
                                {sellNfts2.map((item) => (
                                    <>
                                        <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                            <NftSellCard key={item.id} {...item}/>
                                        </SwiperSlide>    
                                    </>
                                    
                                ))}
                    </Swiper>
                        </>
                    )}
                    
                </div>
            </div>
        </>
    )
}

export default NftExplore;