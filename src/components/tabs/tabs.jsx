import { useSelector } from 'react-redux';
import cl from './tabs.module.scss';
import dispatch from '../../store/dispatch';

export default function Tabs() {
  const mainTab = useSelector(state => state.tab.tab);
  const { toggleTab } = dispatch;

  const tabSelection = e => {
    const tab = e.target.id;
    if (!tab || tab === mainTab) return;
    toggleTab(tab);
  };

  return (
    <>
      <ul onClick={tabSelection} className={cl.tabs}>
        {[
          { name: 'самый дешевый', id: 'cheapest' },
          { name: 'самый быстрый', id: 'fastest' },
          { name: 'оптимальный', id: 'optimal' },
        ].map(tab => {
          return (
            <li
              id={tab.id}
              key={tab.id}
              className={`${cl.tabs__tab} 
              ${mainTab === tab.id ? cl.tabs__tab_active : ''}`}
            >
              {tab.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
