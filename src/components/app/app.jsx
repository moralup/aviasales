import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cl from './app.module.scss';
import TicketList from '../ticket-list';
import Tabs from '../tabs';
import Filter from '../filter';
import logo from '../../images/logo.svg';
import ShowMore from '../show-more/show-more';
import dispatch from '../../store/dispatch';
import { LoaderSnake } from '../loaders';
import { LoaderCircle } from '../loaders';

export default () => {
  const id = useSelector(state => state.tickets.searchId);
  const { addTickets, setSearchId } = dispatch;
  const tickets = useSelector(state => state.tickets.tickets);
  useEffect(() => {
    if (id) addTickets(id);
    else setSearchId();
  }, [id]);

  return (
    <div className={cl.app}>
      <img src={logo} alt="logo" className={cl['app__logo']} />
      <LoaderSnake />
      <article className={cl.article}>
        <Filter />
        <section className={cl.section}>
          <Tabs />
          {tickets.length ? (
            <>
              <TicketList />
              <ShowMore text="показать еще 10 билетов!" />
            </>
          ) : (
            <LoaderCircle />
          )}
        </section>
      </article>
    </div>
  );
};

