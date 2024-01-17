import cl from './show-more.module.scss';
import PropTypes from 'prop-types';
import dispatch from '../../store/dispatch';

export default function ShowMore({ text }) {
  const { showMoreTickets } = dispatch;

  return (
    <button onClick={showMoreTickets} className={cl['show-more']}>
      {text}
    </button>
  );
}

ShowMore.propTypes = {
  text: PropTypes.string,
};
