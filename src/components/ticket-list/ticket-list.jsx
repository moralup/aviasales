import Ticket from '../ticket';
import { useSelector } from 'react-redux';
import { add, format } from 'date-fns';
import dispatch from '../../store/dispatch';
import cl from './tickets-list.module.scss';

export default function TicketList() {
  //! <FunctionForTicket>
  const flightLength = duration => {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    const mm = minutes ? `${minutes}м` : '';
    const hh = hours ? `${hours}ч` : '';
    return `${hh} ${mm}`;
  };

  const flightTime = (date, minutes) => {
    const result = add(new Date(date), { minutes });
    const t1 = format(date, 'HH:mm');
    const t2 = format(result, 'HH:mm');
    return `${t1} - ${t2}`;
  };

  const transfers = transfer => {
    switch (true) {
      case !transfer.length:
        return 'БЕЗ ПЕРЕСАДОК';
      case transfer.length === 1:
        return '1 ПЕРЕСАДКА';
      case transfer.length >= 2 && transfer.length <= 4:
        return `${transfer.length} ПЕРЕСАДКИ`;
      default:
        return `${transfer.length} ПЕРЕСАДОК`;
    }
  };
  //! </FunctionForTicket>

  const allTickets = [...useSelector(state => state.tickets.tickets)];
  const tab = useSelector(state => state.tab.tab);
  const filters = useSelector(state => state.filters.filters);
  const ticketsLength = useSelector(state => state.ticketsLength.ticketsLength);
  const { showMoreTickets } = dispatch;

  const getTickets = (tkts, flrs, tab, length) => {
    const tickets = [];
    const transferFiltersByLength = {
      0: 'noTransfers',
      1: 'oneTransfer',
      2: 'twoTransfers',
      3: 'threeTransfers',
    };

    const isRender = (j, i) => {
      return flrs.includes(
        transferFiltersByLength[tkts[i].segments[j].stops.length],
      );
    };
    for (let i = 0; i < tkts.length; i++) {
      if (tickets.length === length) {
        switch (tab) {
          case 'cheapest':
            tickets.sort((one, two) => one.price - two.price);
            break;
          case 'fastest':
            tickets.sort((one, two) => {
              const allDurationOne =
                one.segments[0].duration + one.segments[1].duration;
              const allDurationTwo =
                two.segments[0].duration + two.segments[1].duration;
              return allDurationOne - allDurationTwo;
            });
            break;
        }
        return tickets;
      }
      if ((isRender(0, i) && isRender(1, i)) || !filters.length) {
        tickets.push(tkts[i]);
      }
    }
    return tickets;
  };
  const tickets = getTickets(allTickets, filters, tab, ticketsLength);
  return tickets.length ? (
    <>
      <ul>
        {tickets.map((ticket, id) => {
          const { price, carrier, segments } = ticket;
          return (
            <Ticket
              key={id}
              price={price}
              carrier={carrier}
              segments={segments}
              transfers={transfers}
              flightTime={flightTime}
              flightLength={flightLength}
            />
          );
        })}
      </ul>
      <button onClick={showMoreTickets} className={cl['show-more']}>
        показать еще 10 билетов
      </button>
    </>
  ) : (
    <div className={cl['not-found']}>
      Рейсов, подходящих под заданные фильтры, не найдено
    </div>
  );
}
