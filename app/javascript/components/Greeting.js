import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from './redux/greetings/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  let greetingContainer = []
  const greeting = useSelector((state) => state.greetingData.greeting);
  greetingContainer.push(greeting)
  console.log(greetingContainer);
  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (

    <>
      {greetingContainer.map((key) => (
        <div key={key.id} className="container displays">
          <h1>{key.greeting}</h1>
        </div>
      ))}
      </>
  );
};

export default Greeting;