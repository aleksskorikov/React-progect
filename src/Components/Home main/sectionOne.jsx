import React from 'react';
import BgLeft from '../../imeges/img/bg-left.svg';
import BgRite from '../../imeges/img/bg-rite.svg';
import Table from '../../imeges/img/table.svg';
import Group from '../../imeges/img/Group 23.svg';
import Tupperware from '../../imeges/img/tupperware.svg';
import Ananas from '../../imeges/img/ananas.svg';
import Note from '../../imeges/img/nout.svg';
import Line1 from '../../imeges/img/line1.svg';
import Line2 from '../../imeges/img/line2.png';
import Line3 from '../../imeges/img/line3.svg';
import Block1 from '../../imeges/img/block1.svg';
import Block2 from '../../imeges/img/block2.svg';
import Block3 from '../../imeges/img/block3.svg';
import Block4 from '../../imeges/img/block4.svg';
import '../../styles/scss/home/_sectionOne.scss';
import BtnRequestCall from '../Events/BtnRequestCall'



const sectionOne = () => {
    return (
        <>
        <div className="conteiner">
            <div className="section__block">
                <div className="section__images">
                    <div className="section__images-bg">
                        <div className="section__images-left">
                            <img src={BgLeft} alt="" className="section__imagesbg-left" />
                        </div>
                        <div className="section__images-rite">
                            <img src={BgRite} alt="" className="section__imagesbg-rite" />     
                        </div>
                        <div className="section__imagesbg-tables">
                            <img src={Group} alt="" className="section__imagesbg-group"/>
                            <img src={Table} alt="" className="section__imagesbg-table" />
                            <img src={Tupperware} alt="" className="section__imagesbg-tupperware"/> 
                            <img src={Ananas} alt="" className="section__imagesbg-ananas"/>  
                            <img src={Note} alt="" className="section__imagesbg-note"/>  
                            <img src={Line1} alt="" className="section__imagesbg-line1"/>  
                            <img src={Line2} alt="" className="section__imagesbg-line2"/>  
                            <img src={Line3} alt="" className="section__imagesbg-line3" />  
                            <p className="section__imagesbg-text1">для кухні</p>
                            <p className="section__imagesbg-text2">для застолья</p>
                            <p className="section__imagesbg-text3">для роботи</p>   
                        </div>
                    </div>
                </div>
                <div className="section__data">
                    <h1 className="section__data-title">Столы-трансформеры 3 в 1</h1>
                    <p className="section__data-text">Відмінне рішення для маленьких квартир та людей, які цінують функціональність!</p>
                    <div className="section__data-blocks">
                        <div className="section__data-block">
                            <img src={Block1} alt=""  className="data__block-img"/>
                            <p className="data__block-text">Безкоштовна доставка</p>
                        </div>
                        <div className="section__data-block">
                            <img src={Block2} alt=""  className="data__block-img"/>
                            <p className="data__block-text">Гарантия 1 рік</p>
                        </div>
                        <div className="section__data-block">
                            <img src={Block3} alt=""  className="data__block-img table"/>
                            <p className="data__block-text">В наявності та на замовлення</p>
                        </div>
                        <div className="section__data-block">
                            <img src={Block4} alt=""  className="data__block-img"/>
                            <p className="data__block-text">Безкоштовний виїзд майстра на виміри</p>
                        </div>
                    </div>
                    <BtnRequestCall children={"Залишити заявку"} style={'header-btn'}/>
                </div>        
            </div>
        </div>
        </>
    )
}

export default sectionOne