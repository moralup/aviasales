import cl from './filter.module.scss';

export default () => {
  return (
    <div className={cl.filter}>
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
  );
};
