import React, { useState } from 'react';

import style from './optionInput.module.css';

function optionInput({ title/*, user, max, min*/ }) {
    const [value, setValue] = useState([0, 0]);

    const handlearrowLeft = (i) =>{
        if(value[i] > 0){
          setValue((prevState) => {
            const newValue = [...prevState];
            newValue[i] = Number(newValue[i]) - 1;
            return newValue;
          });
        }
      };
      const handlearrowRight = (i) =>{
        if(value[i] < 100){
          setValue((prevState) => {
            const newValue = [...prevState]; 
            newValue[i] = Number(newValue[i]) + 1; 
            return newValue;
          });
        }
      }
  return (
    <div className={style.container}>
      {title.map((item, index) => (
        <div className={style.optioninput} key={index}>
          <div className={style.title}>
            <div>{item}</div>
            <div>{value[index]}</div>
          </div>
                    
          <div className={style.input}>
            <div className={style.arrow} onClick={() => handlearrowLeft(index)}>{'<'}</div>
              <input
                type='range'
                value={value[index]}
                onInput={(e) => {
                          const newValue = [...value];
                          newValue[index] = e.target.value;
                          setValue(newValue);
                        }}
                />
            <div className={style.arrow} onClick={() => handlearrowRight(index)}>{'>'}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default optionInput