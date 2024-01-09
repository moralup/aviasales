import cl from './ticket.module.scss';
import logoCompany from '../../images/logo-company.png';

export default () => {
  return (
    <div className={cl.ticket}>
      <div className={cl['ticket__header']}>
        <div className={cl['ticket__price']}>13 400 Р</div>
        <img className={cl['ticket__logo']} src={logoCompany} />
      </div>
      <div className={cl['ticket__flight']}>
        <div className={cl['ticket__flight-info']}>
          <span>MOW – HKT</span>
          <time>10:45 – 08:00</time>
        </div>
        <div className={cl['ticket__flight-info']}>
          <span>В пути</span>
          <time>21ч 15м</time>
        </div>
        <div className={cl['ticket__flight-info']}>
          <span>2 пересадки</span>
          <span>HKG, JNB</span>
        </div>
      </div>
      <div className={cl['ticket__flight']}>
        <div className={cl['ticket__flight-info']}>
          <span>MOW – HKT </span>
          <time>11:20 – 00:50</time>
        </div>
        <div className={cl['ticket__flight-info']}>
          <span>В пути</span>
          <time>13ч 30м</time>
        </div>
        <div className={cl['ticket__flight-info']}>
          <span>1 пересадка</span>
          <span> HKG</span>
        </div>
      </div>
    </div>
  );
};
