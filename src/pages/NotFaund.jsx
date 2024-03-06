import React from 'react';
import '../styles/scss/_notFaund.scss';
import BgLeft from '../imeges/img/bg-left.svg';
import BgRite from '../imeges/img/bg-rite.svg';
import Table from '../imeges/img/slider/notfaund table.svg';
import { NavLink } from 'react-router-dom';

const NotFaund = () => {
  return (
    <div className="conteiner">
      <div className="notfaund__block">
        <div className="notfaund__images-bg">
          <div className="notfaund__images-left">
              <img src={BgLeft} alt="" className="notfaund__imagesbg-left" />
          </div>
          <div className="notfaund__images-rite">
              <img src={BgRite} alt="" className="notfaund__imagesbg-rite" />     
          </div>
          <div className="notfaund__imagesbg-tables">
              <img src={Table} alt="" className="notfaund__imagesbg-table"/>
          </div>
        </div>
        <div className="notfaund__data">
          <h1 className="notfaund__data-title">Упс, сторінку не знайдено</h1>
          <p className="notfaund__data-404">404</p>
          <p className="notfaund__data-text">Запрошувану сторінку не знайдено. Можливо, вона була видалена або в запиті вказана неправильна адреса сторінки.</p>
          <NavLink to="/"  className='notfaund__data-btn'>На головну</NavLink>
        </div>        
      </div>
    </div>
  )
}

export default NotFaund