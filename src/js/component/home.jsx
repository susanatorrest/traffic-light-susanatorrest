
import React, { useState } from 'react';
import '../../styles/home.css';

const Home = () => {
  const [color, setColor] = useState('');
  const [purple, setPurple] = useState(false);

  const changeColor = () => {
    switch (color) {
      case 'red':
        setColor('green');
        break;
      case 'yellow':
        setColor('red');
        break;
      case 'green':
        setColor('yellow');
        break;
      default:
        setColor('red');
    }
  };

  const addPurple = () => {
    setPurple(true);
    setColor('purple');
  };

  return (
    <div className="container">
      <div className="stick"></div>
      <div className="traffic-light">
        <div
          className={'circles red' + (color === 'red' ? ' light' : '')}
          onClick={() => {
            setColor('red');
            setPurple(false);
          }}
        ></div>
        <div
          className={'circles yellow' + (color === 'yellow' ? ' light' : '')}
          onClick={() => {
            setColor('yellow');
            setPurple(false);
          }}
        ></div>
        <div
          className={'circles green' + (color === 'green' ? ' light' : '')}
          onClick={() => {
            setColor('green');
            setPurple(false);
          }}
        ></div>
        {purple && (
          <div className={'circles purple' + (color === 'purple' ? ' light' : '')}></div>
        )}
      </div>
      <button onClick={changeColor}>CHANGE COLOR</button>
      <button onClick={addPurple}>ADD PURPLE</button>
    </div>
  );
};

export default Home;