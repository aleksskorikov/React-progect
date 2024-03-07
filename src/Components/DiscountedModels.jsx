import React from 'react';
import DiscountedProduct from './Home main/Products/DiscountedProduct';
import '../styles/scss/home/_PopularModels.scss';

const DiscountedModels = () => {
    return (
        <div className="conteiner">
            <h1 className="title">моделі зі знижкою</h1>
            <div className="products__block">
                <DiscountedProduct />
                <DiscountedProduct />
                <DiscountedProduct />
                <DiscountedProduct />           
            </div>
        </div>
    )
}

export default DiscountedModels;