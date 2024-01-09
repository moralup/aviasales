import cl from './app.module.scss';
import TicketList from '../ticket-list';
import Tabs from '../tabs';
import Filter from '../filter';
import logo from '../../images/logo.svg';
import ShowMore from '../show-more/show-more';
import { useState } from 'react';
export default () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={cl.app}>
      <img src={logo} alt="logo" className={cl['app__logo']} />
      <article className={cl.article}>
        <Filter />
        <section className={cl.section}>
          <Tabs />
          <TicketList />
          <ShowMore text="показать еще 5 билетов!" />
        </section>
      </article>
    </div>
  );
};

