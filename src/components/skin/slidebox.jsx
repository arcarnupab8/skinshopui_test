import React, { useEffect, useState } from 'react';
import style from './css/inputslide.module.css';
import { post } from '../post';

function slidebox({ label, name, currentValue, Max, Min }) {
    const [current, setCurrent] = useState(currentValue);

    const handleLeftarrow = () => {
        if(current-1>Min){
          setCurrent(current-1);
        }
      }
      const handleRightarrow = () => {
        if(current+1<Max){
          setCurrent(current+1);
        }
      }

    const handleInput = (e) =>{
        setCurrent(e.target.value)
    }
    useEffect(() => {
        post('change', {current, name})
    }, 
    [current])
  return (
    <div className={style.container}>
        <div className={style.title}> 
          <div className={style.head}>{label}</div>
          <div className={style.value}>{currentValue}</div>
        </div>
        <div className={style.input}>
          <div className={style.arrow} onClick={handleLeftarrow}>{'<'}</div>
          <input
            type='range'
            min={Min}
            max={Max}
            value={currentValue}
            onInput={(e) => {
                    }}
          />
          <div className={style.arrow} onClick={handleRightarrow}>{'>'}</div>
        </div>
      </div>
  )
}

export default slidebox