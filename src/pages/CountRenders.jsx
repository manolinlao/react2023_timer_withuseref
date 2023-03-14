import { useEffect, useState } from 'react';

// este código provoca un bucle de console.logs sin parar!!!
// porque useEffect se ejecuta cada vez que se renderiza el componente
// y a su vez este cabron modifica el state que hace que se re renderice el componente

export const CountRenders = () => {
  const [numberOfRenders, setNumberOfRenders] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    setNumberOfRenders(numberOfRenders + 1);
  });

  console.log(numberOfRenders);

  return <div>this component has been rendered {numberOfRenders} times</div>;
};
