import React from 'react';
import '../../styles/scss/home/_advantages.scss';

const Advantages = () => {
    return (
        <div className='section-advantages'>
            <div className="advantages__data">
                <h2 className="advantages__data-title">Переваги столів від Transformer Table</h2>
                <ul className="advantages__data-lists">
                    <li className="advantages__data-list">
                        <h3 className="data__list-title">Місткість</h3>
                        <p className="data__list-text">У розгорнутому вигляді ви можете помістити за столом компанію до 15 осіб.</p>
                    </li>
                    <li className="advantages__data-list">
                        <h3 className="data__list-title">Вигода</h3>
                        <p className="data__list-text">Працюємо без посередників, тому готові запропонувати столи без націнок.</p>
                    </li>
                    <li className="advantages__data-list">
                        <h3 className="data__list-title">Надійність</h3>
                        <p className="data__list-text">Столи спроектовані з урахуванням навантаження до 80 кг.</p>
                    </li>
                    <li className="advantages__data-list">
                        <h3 className="data__list-title">Універсальність</h3>
                        <p className="data__list-text">Столи нашого виробництва можна використовувати як обідні та робочі. Трансформація столу займає лише 1 хвилину.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Advantages