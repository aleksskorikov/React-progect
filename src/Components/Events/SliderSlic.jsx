import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FotoOlga from '../../imeges/img/slider/foto1.svg';
import FotoMixa from '../../imeges/img/slider/foto2.svg';
import FotoElmira from '../../imeges/img/slider/foto3.svg';
import '../../styles/scss/_sliderSlic.scss';

const SliderSlic = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />, 
        nextArrow: <NextArrow />,
            responsive: [
        {
            breakpoint: 1024, 
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            },
            },
            {
            breakpoint: 821, 
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            },
            },
            {
            breakpoint: 541, 
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
            },
        ],
    };
    return (
        <div className="conteiner">

        
        <Slider {...settings} className='slider'>
            <div className='slider__slide'>
                <div className='slide__block-foto'>
                    <div>
                    <img src={FotoOlga} alt="" className='block__foto-img'/>
                    </div>
                    <p className='block__foto-name'>Олга</p>
                </div>
                <p className='block__foto-text'>Отличный стол. Приобрели пару дней назад. Довольны. Стол сделан аккуратно, достаточно легко и быстро получилось увеличить размер стола. Буду советовать друзьям. </p>
            </div>
                
            <div className='slider__slide'>
                <div className='slide__block-foto'>
                    <div>
                    <img src={FotoMixa} alt="" className='block__foto-img'/>
                    </div>
                    <p className='block__foto-name'>Міхаіл</p>
                </div>
                <p className='block__foto-text'>Отличный стол. Приобрели пару дней назад. Довольны. Стол сделан аккуратно, достаточно легко и быстро получилось увеличить размер стола. Буду советовать друзьям. </p>
            </div>
                
            <div className='slider__slide'>
                <div className='slide__block-foto'>
                    <div >
                        <img src={FotoMixa}  alt="" />
                    </div>
                    <p className='block__foto-name'>Олександр</p>
                </div>
                <p className='block__foto-text'>Отличный стол. Приобрели пару дней назад. Довольны. Стол сделан аккуратно, достаточно легко и быстро получилось увеличить размер стола. Буду советовать друзьям. </p>    
            </div>
                
            <div className='slider__slide'>
                <div className='slide__block-foto'>
                    <div >
                        <img src={FotoElmira} alt="" className='block__foto-img'/>
                    </div>
                    <p className='block__foto-name'>Эльміра</p>
                </div>
                <p className='block__foto-text'>Отличный стол. Приобрели пару дней назад. Довольны. Стол сделан аккуратно, достаточно легко и быстро получилось увеличить размер стола. Буду советовать друзьям. </p>
            </div>
            
            <div className='slider__slide'>
                <div className='slide__block-foto'>
                    <div >
                        <img src={FotoMixa}  alt="" className='block__foto-img'/>
                    </div>
                    <p className='block__foto-name'>Міхаіл</p>
                </div>
                <p className='block__foto-text'>Отличный стол. Приобрели пару дней назад. Довольны. Стол сделан аккуратно, достаточно легко и быстро получилось увеличить размер стола. Буду советовать друзьям. </p>
            </div>
        </Slider>
        </div>
    )
}
    const PrevArrow = (props) => (
    <div className="slick-arrow slick-prev" {...props}>
        
    </div>
    );

    const NextArrow = (props) => (
    <div className="slick-arrow slick-next" {...props}>
        
    </div>
    );

export default SliderSlic;