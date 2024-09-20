import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import loaf from "../Assets/loaf.jpg";
import oil from "../Assets/oil.png";
import roll from "../Assets/butter-roll.jpg";
import chicken from "../Assets/chicken.jpg";
import icecream1 from "../Assets/icecream1.jpg";
import energen from "../Assets/energen.jpg";
import chicken2 from "../Assets/chicken2.jpg";
import crispyfry from "../Assets/crispy-fry.jpg";
import "./SliderTwo.css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { MdDoubleArrow } from "react-icons/md";



const SliderTwo = () => {

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={0}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            navigation={true}

            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={loaf} alt="" />
                    <div className='content'>
                        <h1>Right Choice Medium Loaf</h1>
                        <h2>60.00</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={oil} alt="" />
                    <div className='content'>
                        <h1>Baguio Coconut Oil 1/2 Gallon</h1>
                        <h2>257.00</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={roll} alt="" />
                    <div className='content'>
                        <h1>Tinapayan Butter Roll</h1>
                        <h2>55.00</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={chicken} alt="" />
                    <div className='content'>
                        <h1>Purefoods Heat&Eat Chicken Afritada 450G</h1>
                        <h2>275.00</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={icecream1} alt="" />
                    <div className='content'>
                        <h1>Melona Melon Flavored Ice Cream</h1>
                        <h2>45.00</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={crispyfry} alt="" />
                    <div className='content'>
                        <h1>Crispy Fry Seasoned Crumbs</h1>
                        <h2>26.00</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={energen} alt="" />
                    <div className='content'>
                        <h1>Energen Chocolate Mini Bag 40G</h1>
                        <h2>84.00</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={chicken2} alt="" />
                    <div className='content'>
                        <h1>Right Choice Whole Chicken/KG</h1>
                        <h2>181.00</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

         

        </Swiper>
    );
}

export default SliderTwo;