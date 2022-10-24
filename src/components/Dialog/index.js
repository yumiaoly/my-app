import React, { useRef, useEffect } from 'react';
import './index.scss';
import { Icon } from '@alifd/next';

const Dialog = (props) => {
  const { children, visible, onClose, mask = true } = props;
  const wrapperRef = useRef(null);

  const handleClose = () => {
    onClose && onClose();
  }

  const handleWrapperClose = (e) => {
    console.log(wrapperRef, e.nativeEvent.target);
    // console.log(wrapperRef?.current === e.nativeEvent.target)
    // console.log(e.nativeEvent.target.classList[0] ==='wrapper')
    if ((wrapperRef?.current === e.nativeEvent.target) && mask) {
      handleClose();
    }
  }

  // useEffect(()=>{
  //   wrapperRef.current.addEventListener('click',(e)=>{
  //     console.log('原生的event:', e, { target: e.target, currentTarget: e.currentTarget });
  //   })
  // },[])

  return (
    visible && (
      <div className="dialog">
        {mask && <div className='mask'></div>}
        <div className='wrapper' ref={wrapperRef} onClick={handleWrapperClose}>
          <div className='content'>
            <div className="close" onClick={handleClose}><Icon type="error" /></div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  )
}

export default Dialog;