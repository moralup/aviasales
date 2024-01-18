import cl from './filter.module.scss';
import { useState } from 'react';
import dispatch from '../../store/dispatch';
import { useSelector } from 'react-redux';

export default function Filter() {
  const [isVisible, setIsVisible] = useState(false);
  const { addFilter, removeFilter, addAllFilter, removeAllFilter } = dispatch;
  const filters = useSelector(state => state.filters.filters);

  const openFilter = () => {
    if (window.innerWidth > 800 || isVisible) return;
    setIsVisible(true);
  };

  const closeFilter = () => {
    if (window.innerWidth > 800 || !isVisible) return;
    setIsVisible(false);
  };

  const filterSelection = e => {
    const filter = e.target.id;
    const checked = e.target.checked;

    switch (true) {
      case !filter:
        break;
      case checked && (filter === 'all' || filters.length === 3):
        addAllFilter();
        break;
      case !checked && filter === 'all':
        removeAllFilter();
        break;
      case checked:
        addFilter(filter);
        break;
      case !checked:
        removeFilter(filters.length === 5 ? [filter, 'all'] : [filter]);
        break;
    }
  };

  return (
    <>
      <div
        onMouseDown={closeFilter}
        onTouchStart={closeFilter}
        className={`${cl.modal} ${isVisible ? cl['modal_active'] : ''}`}
      />
      <div
        onClick={openFilter}
        className={`${cl.filter} ${isVisible ? cl['filter_active'] : ''}`}
      >
        <h3 className={cl.filter__title}>Количество пересадок</h3>
        <ul onChange={filterSelection}>
          {[
            { name: 'Все', id: 'all' },
            { name: 'Без пересадок', id: 'noTransfers' },
            { name: '1 пересадка', id: 'oneTransfer' },
            { name: '2 пересадки', id: 'twoTransfers' },
            { name: '3 пересадки', id: 'threeTransfers' },
          ].map(filter => {
            return (
              <li key={filter.id} className={cl.filter__item}>
                <input
                  id={filter.id}
                  type="checkbox"
                  checked={filters.includes(filter.id)}
                  readOnly
                />
                <label htmlFor={filter.id}>{filter.name}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
