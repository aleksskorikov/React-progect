import React from 'react';
import '../../styles/scss/home/_MadeFurniture.scss';
import BtnRequestCall from '../Events/BtnRequestCall';
import Foto from '../../imeges/img/shutterstock.svg';

const MadeFurniture = () => {
    return (
        <>
            <div className="section__madefurniture-block">
                <img src={Foto} alt="" className="block__imege-img" />
            <div className="block__text">
                <h2 className="block__text-title">Цікавить виготовлення меблів на замовлення?</h2>
                <p className="block__text-text">Розрахуйте вартість прямо зараз!</p>
                <BtnRequestCall children={"Рассчитать стоимость"} style={'made-btn'}/>
            </div>
            </div>


        </>
    )
}

export default MadeFurniture