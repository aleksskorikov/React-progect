import React, { useState } from 'react';

const form = ({style}) => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [ValidInputName, setValidInputName] = useState(true);
    const [ValidInputTel, setValidInputTel] = useState(true);

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
        <form className={`requestcall__form-${style}`} onSubmit={handleSubmit}>
            <h2 className={`form__title-${style}`}>Оставьте заявку, мы вам перезвоним!</h2>
            <div className={`input__block-${style}`}>
                <div className={`input-${style}`}>
                    {!ValidInputName && <span className='form-span'>Ім'я повинно містити тільки букви</span>}
                    <input type="text" placeholder="Ім'я" className={`form__input-${style} ${!ValidInputName ? 'error' : ''}`} value={name} onChange={(e) => NameChange(e, setName, setValidInputName)} />
                </div>
                <div className={`input-${style}`}>
                    {!ValidInputTel && <span className='form-span'>Телефон повинен містити тільки цифри</span>}
                    <input type="text" inputMode="numeric" placeholder="Телефон" className={`form__input-${style} ${!ValidInputTel ? 'error' : ''}`} value={tel} onChange={(e) => TelChange(e, setTel, setValidInputTel)} />
                </div>
                <button className={`form__btn-${style}`} >Замовити дзвінок</button>
            </div>

        </form>
    )
}

export default form