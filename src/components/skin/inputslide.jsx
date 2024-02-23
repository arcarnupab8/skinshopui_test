import React, { useState } from 'react';
import style from './css/inputslide.module.css';

function inputslide({ attribute, maxvalue, minvalue, currentvalue }) {
  // console.log(num+' '+attribute);

  const [inputvalue, setInputvalue] = useState(currentvalue);

  const handleLeftarrow = () => {
    if(inputvalue>minvalue){
      setInputvalue(Number(inputvalue)-1);
    }
  }
  const handleRightarrow = () => {
    if(inputvalue<maxvalue){
      setInputvalue(Number(inputvalue)+1);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.title}> 
        <div className={style.head}>{attribute}</div>
        <div className={style.value}>{inputvalue}</div>
      </div>
      <div className={style.input}>
        <div className={style.arrow} onClick={handleLeftarrow}>{'<'}</div>
        <input
          type='range'
          min={minvalue}
          max={maxvalue}
          value={inputvalue}
          onInput={(e) => setInputvalue(e.target.value)}
        />
        <div className={style.arrow} onClick={handleRightarrow}>{'>'}</div>
      </div>
    </div>
  )
}

export default inputslide