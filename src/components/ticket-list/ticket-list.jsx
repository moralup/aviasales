import Ticket from '../ticket';
import cl from './ticket-list.module.scss';

export default () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map(ticket => (
        <Ticket key={ticket} />
      ))}
    </ul>
  );
};
