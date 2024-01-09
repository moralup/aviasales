import cl from './show-more.module.scss';
import PropTypes from 'prop-types';
export default function ShowMore({ text }) {
  return <button className={cl['show-more']}>{text}</button>;
}

ShowMore.propTypes = {
  text: PropTypes.string,
};
