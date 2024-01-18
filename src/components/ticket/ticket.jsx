import cl from './ticket.module.scss';
import PropTypes from 'prop-types';

export default function Ticket({
  price,
  carrier,
  segments,
  transfers,
  flightTime,
  flightLength,
}) {
  return (
    <div className={cl.ticket}>
      <div className={cl['ticket__header']}>
        <div className={cl['ticket__price']}>
          {`${new Intl.NumberFormat().format(price)} P`}
        </div>
        <img
          className={cl['ticket__logo']}
          src={`https://pics.avs.io/99/36/${carrier}.png`}
        />
      </div>
      {segments.map(({ date, destination, duration, origin, stops }, id) => {
        return (
          <div key={id} className={cl['ticket__flight']}>
            <div className={cl['ticket__flight-info']}>
              <span>{`${origin} - ${destination}`}</span>
              <time>{flightTime(date, duration)}</time>
            </div>
            <div className={cl['ticket__flight-info']}>
              <span>В пути</span>
              <time>{flightLength(duration)}</time>
            </div>
            <div className={cl['ticket__flight-info']}>
              <span>{transfers(stops)}</span>
              <ul className={cl['ticket__flight-stops']}>
                {stops.map((transfer, id) => (
                  <li key={id}> {transfer}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Ticket.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  segments: PropTypes.array,
  transfers: PropTypes.func,
  flightTime: PropTypes.func,
  flightLength: PropTypes.func,
};
