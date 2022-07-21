import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationNegative from './json_animation/negative.json';
import animationPositive from './json_animation/positive.json';
import animationPending from './json_animation/pending.json';

const App = () => {

  let activeStatus = animationPending;

  const [status, setStatus] = useState({
    loop: true,
    autoplay: true,
    isStopped: false,
    isPaused: false,
    animationData: activeStatus,
    renderer: 'svg'
  });

  const [header, setHeader] = useState({
    header: 'Отправляем запрос...'
  })

  const positive = () => {
    setStatus({
      ...status,
      loop: false,
      animationData: animationPositive,
    })
    setHeader({
      header: 'О, супер, все успешно прошло!'
    })
  }

  const negative = () => {
    setStatus({
      ...status,
      loop: false,
      animationData: animationNegative,
    })
    setHeader({
      header: 'Упс, вот это косяк!'
    })
  }

  return (
    <div
      style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1>{header.header}</h1>
      <Lottie
        style={{ margin: '50px auto' }}
        options={status}
        height={56}
        width={56}
      />
      <div
        style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{ padding: 10, border: '2px solid green', color: 'black', background: 'transparent', marginRight: 10 }}
          onClick={positive}
        >Pos
        </button>
        <button
          style={{ padding: 10, border: '2px solid red', color: 'black', background: 'transparent' }}
          onClick={negative}
        >Neg</button>

      </div>
    </div>
  )
};

export default App;