import React from 'react';
import "./Blog.css";
import blog1 from "../Assets/supermart-blog1.jpg";
import customers from "../Assets/supermart-customers.jpg";
import icon1 from "../Assets/milk.png";
import icon2 from "../Assets/mutton.png";
import icon3 from "../Assets/carrot.png";
import icon4 from "../Assets/shalgom.png";
import icon5 from "../Assets/greenflower.png";
import icon6 from "../Assets/mushro.png";
import icon7 from "../Assets/fish.png";
import { Fade } from 'react-reveal';

const Blog = () => {

    return (
        <div className='mx-[320px] mt-[80px] relative'>

            <img src={icon1} className="absolute left-[47%] top-[-70px]" alt="" />
            <img src={icon2} className="absolute left-[88%]" alt="" />
            <img src={icon3} className="absolute left-[-10px] top-[42%]" alt="" />
            <img src={icon4} className="absolute left-[46%] top-[41%]" alt="" />
            <img src={icon5} className="absolute left-[94%] top-[34%]" alt="" />
            <img src={icon6} className="absolute left-[-20px] bottom-[20px]" alt="" />
            <img src={icon7} className="absolute left-[47%] bottom-[40px]" alt="" />

            <div className='flex'>

                <Fade left delay={100} >
                    <div className='w-1/2 '>
                        <div className='blog-cont-img w-5/6'>
                            <div className='blogImg'>
                                <img src={blog1} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade left delay={1500}>
                <div className='w-1/2  '>
                    <h1 className='text-[35px] font-[700]'>Ano pa nahulat mo?</h1>
                    <p className='text-[15px]  text-[#7E7C7C] mt-[20px]'>
                    Sa amon nga pinalangga nga mga suki, ginapanghagad namon kamo nga magdayon-dayon bisita sa amon supermart diri sa Iloilo! Ari kami para magserbisyo sa inyo sang maayo nga mga produkto, halin sa preskong mga pagkaon tubtob sa kinahanglanon ninyo kada adlaw. Ginasigurado namon nga abot-kaya ang amon mga presyo kag nagatanyag sang mga espesyal nga promo para makasave kamo! Magbisita na subong kag eksperyensyahon ang hapos nga pagpalanggas sang inyo pamilya pinaagi sa mga de-kalidad nga produkto nga amon ginahambal. Salamat gid sa inyo padayon nga pagsalig!
                    </p>
                </div>
                </Fade>
            </div>


            <div className='flex mt-[40px]'>
                <Fade right delay={2500}>
                <div className='w-1/2 p-[30px]'>
                    <h1 className='text-[35px] font-[700]'>Why Customers Love Us</h1>
                    <p className='text-[15px]  text-[#7E7C7C] mt-[16px]'>
                    Ginaseguro namon nga ang amon mga baligya – halin sa mga pagkaon, gamit sa balay, kag iba pa – mataas ang kalidad kag abot-kaya ang presyo. May ara kami adlaw-adlaw nga mga promo kag diskwento para mas makasave kamo sa inyo pinalangga nga mga produkto! Dali na kag magpalit diri sa amon, kay diri sa amon supermart, kamo ang amon prioridad. Salamat gid sa inyong suporta, kag padayon nga pag-alalay!
                    </p>
                    <div className='mt-[18px]'>
                        <div className='flex gap-[18px] mt-[8px]'>
                            <div className='w-[6px] h-[6px] rounded-full bg-[#D9D9D9]'></div>
                            <div className='w-[6px] h-[6px] rounded-full bg-[#D9D9D9]'></div>
                            <div className='w-[18px] h-[6px] rounded-full bg-[#F43030]'></div>
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade top delay={2000}>
                <div className='ml-[60px] blog-cont-img w-[572px] h-[354px]'>
                    <div className='blogImg'>
                        <img src={customers} className="" alt="" />
                    </div>
                </div>
                </Fade>
            </div>

            <hr className='mt-[70px]' />
        </div>
    );
};

export default Blog;  