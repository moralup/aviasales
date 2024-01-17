import { useSelector } from 'react-redux';
import cl from './loader-snake.module.scss';
import { useEffect } from 'react';
import { useRef } from 'react';
// import { useSelector } from 'react-redux';
export default () => {
  const loaderLength = useRef(0);
  const loader = useRef();
  const tickets = useSelector(state => state.tickets.tickets);
  const isEnd = useSelector(state => state.tickets.endOfLoading);

  useEffect(() => {
    loader.current.style.width = `${loaderLength.current}%`;
    if (loaderLength.current < 90) loaderLength.current += 10;

    if (isEnd) loader.current.style.display = 'none';
  }, [tickets, isEnd]);
  return <span ref={loader} className={cl.loader} />;
};
