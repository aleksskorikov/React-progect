import React from 'react';
import ProductFoto from '../../../imeges/img/product.svg'
import '../../../styles/scss/home/_products.scss';
import BtnRequestCall from '../../Events/BtnRequestCall';

const Product = () => {
    return (
        <>
            <div className="product__block">
                <img src={ProductFoto} alt="" className="block-img" />
                <div className="block__discriptin">
                    <p className="block__discription-name">Стіл "Standart"</p>
                    <p className="block__discription-size">1770*900*750 мм</p>
                </div>
                <p className="block-price">5555 <span className='price-currency'>грн</span> </p>
                <div className="block-btn">
                    <BtnRequestCall children={"Замовити"} style={'products-btn'}/>
                </div>
                
            </div>
        </>
    )
}

export default Product