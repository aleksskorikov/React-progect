import React from 'react';
import Tel from '../imeges/logo/tel.svg';
import Adress from '../imeges/logo/address.svg';
import Mail from '../imeges/logo/mail.svg';
import '../styles/scss/contacts/_contacts.scss';
import Form from '../Components/Events/form';


const Navbar = () => {
    return (
        <>
            <div className="conteiner">
                <h2 className="contact-title">Контакты Transformer Table</h2>
                <div className="contact__block-contacts">
                    <div className="section__contacts-tel">
                        <img src={Tel} alt="" className="contacts__tel-img" />
                        <p className="contacts__tel-tel">8 055 555 55 55</p>
                    </div>
                    <div className="section__contacts-adress">
                        <img src={Adress} alt="" className="contacts__adress-img" />
                        <p className="contacts__adress-text">Запорожье, Запорожская область, 69000</p>
                    </div>
                    <div className="section__contacts-mail">
                        <img src={Mail} alt="" className="contacts__mail-img" />
                        <p className="contacts__mail-text">info@tt.ua</p>
                    </div>
                </div>
                <div className="contact__block-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85715.89032097094!2d35.023135892765026!3d47.82755056779072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc60c300a69335%3A0xeaf1364e9214d510!2z0JLQvtC30L3QtdGB0LXQvdC-0LLRgdC60LjQuSDRgNCw0LnQvtC9LCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY5MDAw!5e0!3m2!1sru!2sua!4v1709555238456!5m2!1sru!2sua"  style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact-form">
                    <Form style={'form'}/>
                </div>
                
            </div>
        </>
    );
};

export default Navbar;