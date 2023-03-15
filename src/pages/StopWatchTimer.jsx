import { useRef, useState } from 'react';

export const StopWatchTimer = () => {
  const [insert, setInsert] = useState('');
  const [secs, setSecs] = useState(0);
  const numberOfRenders = useRef(0);
  const time = useRef(null);
  console.log('RENDER');

  const handleOnchange = (e) => {
    setInsert(e.target.value);
    numberOfRenders.current++;
  };

  const startTime = () => {
    if (time.current === null) {
      time.current = setInterval(() => {
        numberOfRenders.current++;
        setSecs((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTime = () => {
    clearInterval(time.current);
    time.current = null;
  };

  const resetTime = () => {
    stopTime();
    if (secs) {
      numberOfRenders.current++;
      setSecs(0);
    }
  };
  return (
    <div className='App'>
      <input
        type='text'
        placeholder='use reference'
        value={insert}
        onChange={handleOnchange}
        className='input'
      />
      <br />
      <br />
      <div className='text'>
        {' '}
        <p className='text'>Please input your name: {insert}</p>
      </div>
      <div></div>
      <input type='button' value='start time' onClick={startTime} />
      <input type='button' value='stop time' onClick={stopTime} />
      <input type='button' value='reset time' onClick={resetTime} />
      <p>Timer{secs}</p>
      <div>
        <p>Render:[{numberOfRenders.current}]</p>
      </div>
    </div>
  );
};
