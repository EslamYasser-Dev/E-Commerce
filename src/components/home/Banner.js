import React, { useState } from 'react';
import Slider from "react-slick";
import {
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,
} from "../../assets/index"


const Banner = () => {

    const [dotActive, setDotActive] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange:(prev,next) =>{
            setDotActive(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                   position:"absolute",
                   top:"70%",
                   left:"45%",
                   transform:"translate(-50%, -50%)",
                   width:"210px",
                }}
            >
                <ul style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between" }}> {dots} </ul>
            </div>
        ),
        customPaging:(i) => (
            <div
                style={
                    
                    (i === dotActive) ?
                    {
                    width: "30px",
                    height:"30px",
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    color:"white",
                    background:"#131921",
                    padding:"8px 0",
                    cursor:"pointer",
                    border: "1px solid #f3a847"
                }:{
                    width:"30px",
                    height:"30px",
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    background:"#232f3f",
                    color:"white",
                    padding:"8px 0",
                    cursor:"pointer",
                    border:"1px solid white"
                }
            }
            >
                {i + 1}
            </div>
        )
    };

    return (
        <div className='w-full'>
            <div className='w-full h-full relative'>
                 <Slider {...settings}> {/*kan mommken map bs ana 3ayz keda */}
                    <div>
                        <img src={bannerImgOne} alt="Banner Img One" />
                    </div>
                    <div>
                        <img src={bannerImgTwo} alt="Banner Img 2" />
                    </div>
                    <div>
                        <img src={bannerImgThree} alt="Banner Img 3" />
                    </div>
                    <div>
                        <img src={bannerImgFour} alt="Banner Img 4" />
                    </div>
                    <div>
                        <img src={bannerImgFive} alt="Banner Img 5" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Banner;