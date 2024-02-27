import React from 'react';
import ProductFoto from '../../../imeges/img/product discont.svg';
import '../../../styles/scss/home/_products.scss';
import BtnRequestCall from '../../Events/BtnRequestCall';
import Elips from '../../../imeges/img/Ellipse.svg'

const DiscountedProduct = () => {
    return (
        <>
            <div className="product__block">
                <img src={ProductFoto} alt="" className="block-imgdiscont" />
                <div className="block__discriptin">
                    <p className="block__discription-name">Стіл "Standart"</p>
                    <p className="block__discription-size">1770*900*750 мм</p>
                </div>
                <div className="block__price-discont">
                    <p className="old-price">5555 <span className='price-currency'>грн</span> </p>
                    <p className="new-price">4444 <span className='price-currency'>грн</span> </p>
                </div>
                <div className="block-discaunt">
                    <img src={Elips} alt="" className="discaunt-elips" />
                    <p className="discaunt-sum">30%</p>
                </div>
                <div className="block-btn block__discaunt-btn">
                    <BtnRequestCall children={"Замовити"} primary/>
                </div>
                
            </div>
        </>
    )
}

export default DiscountedProduct