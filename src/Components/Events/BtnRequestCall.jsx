import React, { useState } from 'react';
import ClozeBtn from '../../imeges/logo/cloze.svg';
import '../../styles/scss/_header.scss';
import '../../styles/scss/_requestCall.scss';
import Form from './form';

const BtnRequestCall = ({ children, style}) => {

    const [RequestCallOpen, setRequestCallOpen] = useState(false);

    const OpenRequestCall = () => {
        setRequestCallOpen(!RequestCallOpen);
        };

    const closeRequestCall = () => {
        setRequestCallOpen(false);
    };

    return (
        <>
            <button className={ `buttonClasses  ${style}`}  onClick={OpenRequestCall}>{children}</button>
            {RequestCallOpen && (
                <div className="requestcall__block">
                    <img src={ClozeBtn} alt="cloze-btn" onClick={closeRequestCall} className='requestcall__block-cloze'/>
                    <Form  style={'popup'}/>
                </div>
            )}
        </>
    )
}

export default BtnRequestCall


