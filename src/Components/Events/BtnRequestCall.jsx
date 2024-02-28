import React, { useState } from 'react';
import ClozeBtn from '../../imeges/logo/cloze.svg';
import '../../styles/scss/_header.scss';
import '../../styles/scss/_requestCall.scss';

const BtnRequestCall = ({ children, style}) => {

    const [RequestCallOpen, setRequestCallOpen] = useState(false);
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [ValidInputName, setValidInputName] = useState(true);
    const [ValidInputTel, setValidInputTel] = useState(true);

    const OpenRequestCall = () => {
        setRequestCallOpen(!RequestCallOpen);
        };

    const closeRequestCall = () => {
        setRequestCallOpen(false);
    };

    const NameChange = (event, setName, setValidInputName) => {
        const value = event.target.value;
        if (/^[a-zA-Zа-яА-Я]*$/.test(value) || value === '') {
            setName(value);
            setValidInputName(true);
        } else {
            setValidInputName(false);
        }
    };

    const TelChange = (event, setTel, setValidInputTel) => {
        const value = event.target.value;
        if (/^\d*$/.test(value) || value === '') {
            setTel(value);
            setValidInputTel(true);
        } else {
            setValidInputTel(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!ValidInputName || !ValidInputTel || name === '' || tel === '') {
            alert('Форма має помилки або порожні поля.');
            return;
        }

        setName('');
        setTel('');
        setValidInputName(true);
        setValidInputTel(true);

    }

    return (
        <>
            <button className={ `buttonClasses  ${style}`}  onClick={OpenRequestCall}>{children}</button>
            {RequestCallOpen && (
                <div className="requestcall__block">
                    <img src={ClozeBtn} alt="cloze-btn" onClick={closeRequestCall} className='requestcall__block-cloze'/>
                    <form className='requestcall__form' onSubmit={handleSubmit}>
                        <h2 className="form-title">Оставьте заявку, мы вам перезвоним!</h2>
                        {!ValidInputName && <span className='form-span'>Ім'я повинно містити тільки букви</span>}
                            <input type="text" placeholder="Ім'я" className={`requestcall__form-input ${!ValidInputName ? 'error' : ''}`} value={name} onChange={(e) => NameChange(e, setName, setValidInputName)} />
                        {!ValidInputTel && <span className='form-span'>Телефон повинен містити тільки цифри</span>}
                            <input type="text" inputMode="numeric" placeholder="Телефон" className={`requestcall__form-input ${!ValidInputTel ? 'error' : ''}`} value={tel} onChange={(e) => TelChange(e, setTel, setValidInputTel)} />
                        <button className="form-btn">Замовити дзвінок</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default BtnRequestCall


