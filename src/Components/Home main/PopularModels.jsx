import React from 'react';
import Product from './Products/Product';
import DiscountedProduct from './Products/DiscountedProduct';
import '../../styles/scss/home/_PopularModels.scss';
import { NavLink } from 'react-router-dom';


const PopularModels = () => {
    return (
        <>
            <div className="conteiner">
                <h1 className="title">Популярні моделі</h1>
                <div className="products__block">
                    <Product />
                    <DiscountedProduct />
                    <Product />
                    <DiscountedProduct />
                    <Product />
                    <DiscountedProduct />
                    <DiscountedProduct />
                    <Product />
                    
                </div>
                <NavLink to="/catalog" activeClassName="active " className='products__block-btn'>Каталог</NavLink>
            </div>

        </>
    )
}

export default PopularModels