import { useEffect, useRef, useState } from 'react';

export const CountRendersWithRef = () => {
  const [age, setAge] = useState(20);
  const numberOfRenders = useRef(0);
  let numerico = 0;

  useEffect(() => {
    console.log('component rendered');

    // esto no provoca que el componente se rerenderice
    numberOfRenders.current = numberOfRenders.current + 1;
    numerico = numerico + 1;
  });

  const updateAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h4>CountRendersWithRef</h4>
      <p>age: {age} years old</p>
      <button onClick={updateAge}>add year</button>
      <p>componente rendered {numberOfRenders.current} times</p>
      <p>
        numerico = {numerico} esto SIEMPRE ES 0 PORQUE numerico ni es state ni es un ref y siempre
        se remodifica con su valor inicial de 0
      </p>
    </div>
  );
};
