// 倒计时

import React, { useState, useEffect, useRef } from 'react';

// function useCountDown(n) {
//   const [count, setCount] = useState(n);
//   const timerRef = useRef();
//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setCount((count) => Math.max(0, count - 1))
//     }, 1000);

//     // 组件卸载前
//     return () => {
//       clearInterval(timerRef.current);
//     }
//   });
//   return count;

// }
function useCountDown(n) {
  const [count, setCount] = useState(n);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setCount((count) => Math.max(0, count - 1))
    }, 1000);

    // 组件卸载前
    return () => {
      clearInterval(timer);
    }
  },[]);


  // const timerRef = useRef();
  // console.log('timerRef', timerRef)
  // useEffect(() => {
  //   timerRef.current = setInterval(() => {
  //     setCount((count) => Math.max(0, count - 1))
  //   }, 1000);

  //   // 组件卸载前
  //   return () => {
  //     clearInterval(timerRef.current);
  //   }
  // });
  return count;

}

const Timer = () => {
  const time = useCountDown(10);

  return <span>{time === 0 ? '活动开始' : `剩余${time}秒`}</span>
}

export default Timer;

// ReactDom.render(<Timer n={10} />, document.querySelector('#app'))