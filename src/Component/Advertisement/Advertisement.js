import React from 'react';
import "./Advertisement.css";
import img1 from "../Assets/ad1.png";
import img2 from "../Assets/ad2.png";
import img3 from "../Assets/ad3.png";
import img4 from "../Assets/ad4.png";
import img5 from "../Assets/ad5.png";
import { MdDoubleArrow } from 'react-icons/md';

const Advertisement = () => {
    return (
        <div className='advertisement-container'>

            <div className='advertisement-sub-container'>

                <div className='cont-img'>
                    <div className='hoverImg'>

                        <img src={img1} alt="" />
                    </div>
                </div>

                <div>
                    <div className='relative'>
                        <div className='center-img-centent'>
                            <h1>Barato ang pangita?</h1>
                            <p>Kari na diri sa Iloilo Supermart!</p>
                           
                        </div>

                        <div class="hover02 column-top">
                            <div>
                                <div className='center-top-img'>
                                    <img src={img2} className="" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='flex gap-[28px] mt-[20px]'>

                        <div className='relative'>
                            <div className='bottom-img1-content'>
                                <h1>Drinks?</h1>
                                <p>May ari di.</p>

                                <div className='bg-black h-[1px]  w-[40%]' />
                            </div>

                            <div class="hover03 column">
                                <div>
                                    <div className='bottomTwoImg'>
                                        <img src={img3} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='absolute z-10 left-[10px] top-[10px]'>
                                <h1 className='text-[35px] font-[900] text-[#881F16] leading-[40px]'>Bag-o nga recipe?</h1>
                                <p className='text-[15px] text-[#882016a6] '>Ari di ang ingredients.</p>
                                <div className='bg-black h-[1px]  w-[40%]' />
                            </div>
                            <div class="hover03 column border">
                                <div>
                                    <div className='bottomTwoImg'>
                                        <img src={img4} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='cont-img'>
                    <div className='hoverImg relative'>
                        <div className='right-img-content'>
                        </div>
                        <img src={img5} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Advertisement;