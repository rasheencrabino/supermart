import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cheetos2 from "../Assets/cheetos2.jpg";
import butter from "../Assets/butter.jpg";
import butter2 from "../Assets/butter2.jpg";
import doritos from "../Assets/doritos.jpg";
import tuna1 from "../Assets/tuna1.jpg";
import tuna2 from "../Assets/tuna2.jpg";
import tuna3 from "../Assets/tuna3.jpg";
import shampoo from "../Assets/shampoo.jpg";
import "./Slider.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { MdDoubleArrow } from "react-icons/md";



const Slider = () => {
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
                    <img src={cheetos2} alt="" />
                    <div className='content'>
                        <h1>Cheetos Crunchy 215gBuy 2 Save P40.00</h1>
                        <h2>P272.00</h2>
                        <div className='price-underline'></div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={doritos} alt="" />
                    <div className='content'>
                        <h1>Doritos Nacho Cheese Flavor 190g Buy 2 Save P40.00</h1>
                        <h2>P269.00</h2>
                        <div className='price-underline'></div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={shampoo} alt="" />
                    <div className='content'>
                        <h1>Head & Shoulder Cool Menthol 170ml Buy 1, Get 2nd at 50% Off</h1>
                        <h2>P265.00</h2>
                        <div className='price-underline'></div>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={butter2} alt="" />
                    <div className='content'>
                        <h1>Magnolia Gold Unsalted 225g Buy 2 Save P50.00</h1>
                        <h2>P239.00</h2>
                        <div className='price-underline'></div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={butter} alt="" />
                    <div className='content'>
                        <h1>Anchor Salted 200g Buy 2 Save P20.00</h1>
                        <h2>P278.00</h2>
                        <div className='price-underline'></div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={tuna1} alt="" />
                    <div className='content'>
                        <h1>555 Tuna Sizzling Sisig 155g Less 2%</h1>
                        <h2>P32.00</h2>
                        <div className='price-underline'></div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={tuna2} alt="" />
                    <div className='content'>
                        <h1>555 Tuna Spicy Caldereta 155g Less 1%</h1>
                        <h2>P29.00</h2>
                        <div className='price-underline'></div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={tuna3} alt="" />
                    <div className='content'>
                        <h1>555 Tuna Spicy Paksiw 155g Less 1%</h1>
                        <h2>P29.00</h2>
                        <div className='price-underline'></div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
}

export default Slider;