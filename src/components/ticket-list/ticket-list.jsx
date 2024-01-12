import Ticket from '../ticket';

export default () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map(ticket => (
        <Ticket key={ticket} />
      ))}
    </ul>
  );
};
