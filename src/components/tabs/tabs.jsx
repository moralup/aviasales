import cl from './tabs.module.scss';

export default () => {
  return (
    <ul className={cl.tabs}>
      {['самый дешевый', 'самый быстрый', 'оптимальный'].map(el => {
        return (
          <li key={el} className={cl.tabs__tab}>
            {el}
          </li>
        );
      })}
    </ul>
  );
};
