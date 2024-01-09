import cl from './filter.module.scss';
import { useState, useEffect, useRef } from 'react';
export default () => {
  const [isVisible, setIsVisible] = useState(false);
  const openFilter = e => {
    e.stopPropagation();
    if (window.innerWidth > 800) return;
    setIsVisible(true);
  };
  const closeFilter = () => {
    if (window.innerWidth > 800) return;
    setIsVisible(false);
  };
  return (
    <div
      onClick={closeFilter}
      className={`${cl.modal} ${isVisible && cl['modal_active']}`}
    >
      <div
        onClick={openFilter}
        className={`${cl.filter} ${isVisible && cl['filter_active']}`}
      >
        <h3 className={cl.filter__title}>Количество пересадок</h3>
        <ul>
          {[
            'Все',
            'Без пересадок',
            '1 пересадка',
            '2 пересадки',
            '3 пересадки',
          ].map(el => {
            return (
              <li key={el} className={cl.filter__item}>
                <input id={el} type="checkbox" />
                <label htmlFor={el}>{el}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
