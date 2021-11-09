import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const greeting = useSelector((state)=> state.greeting)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [])
  return (
    <p>{greeting.message || ''}</p>
  );
};

export default Greeting;
