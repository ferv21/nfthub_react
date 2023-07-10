import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import * as img from "../../assets/import"
import "./styles.css"

const artists = [
    {id:1,artist:img.people1, name:"Benjamin Johnson"},
    {id:2,artist:img.people2, name:"Ethan Smith"},
    {id:3,artist:img.people3, name:"Emma Smith"},
    {id:4,artist:img.people4, name:"William Davis"},
    {id:5,artist:img.people5, name:"James Anderson"},
    {id:6,artist:img.people6, name:"Alexander Thompson"},
    {id:7,artist:img.people7, name:"Daniel Wilson"},
    {id:8,artist:img.people8, name:"Matthew Brown"},
    {id:9,artist:img.people9, name:"Ava Davis"},
    {id:10,artist:img.people10, name:"Olivia Johnson"},
    {id:11,artist:img.people11, name:"Michael Roberts"},
    {id:12,artist:img.people12, name:"Sophia Anderson"},
]

const Artists = () => {
    return (
        <>
            <div className="artists container">
                <h3>Our Top Artists</h3>
                <Swiper
                
                navigation
                slidesPerView={3}
                >
                {artists.map((item) => (
                    <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                        <div className="artist__card">
                            <img src={item.artist} alt="" />
                            <div>
                                <p>{item.name}</p>
                                <a href="#a">See more</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                 </Swiper>
            </div>
        </>
    )
}

export default Artists;
