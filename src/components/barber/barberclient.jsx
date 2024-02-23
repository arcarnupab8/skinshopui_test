import React, { useState } from 'react';

import style from './css/client.module.css';
import { menubarber, menubarberimgs, optionbarber } from '../data'; 

function barberclient() {
  const [value, setValue] = useState([0, 0, 0, 0]);

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
      <div className={style.content}>
        <div className={style.option}>
            {optionbarber.map((item, index) => (
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
        <div className={style.navbar}>
          {menubarber.map((item, index) => (
            <div key={index}>
              <img src={`./img/navbar/${menubarberimgs[index]}`} width='50vh' height='50vh'/>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={style.reccomend}>
        <img src='./img/view/mouse.png' width='30vh' height='30vh'/>
        <div className={style.text}>สามารถใช้ลูกกลิ้งเมาส์เพื่อหมุนมุมมองของตัวละครได้</div>
      </div>
      <div className={style.confirm}>
          <div className={style.button}>ยืนยันการแต่งกาย 500</div>
      </div>
    </div>
  )
}

export default barberclient