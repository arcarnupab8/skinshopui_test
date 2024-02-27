import React, { useState } from 'react';

import style from './css/client.module.css';
import Optioninput from '../optionInput';
import { menubarber, menubarberimgs, optionHairANDEyebrow, optionbrush, optionPaintANDLibstickANDBread, optioneyering } from '../data'; 

function barberclient() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState([0, 0, 0, 0]);

  // console.log(title)
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
            {title === 'ทรงผม' && 
              <Optioninput title={optionHairANDEyebrow}/>
            }
            {title === 'คิ้ว' && 
              <Optioninput title={optionHairANDEyebrow}/>
            }
            {title === 'เพ้นท์หน้า' && 
              <Optioninput title={optionPaintANDLibstickANDBread}/>
            }
            {title === 'ลิปสติก' && 
              <Optioninput title={optionPaintANDLibstickANDBread}/>
            }
            {title === 'ต่างหู' && 
              <Optioninput title={optioneyering}/>
            }
            {title === 'บลัช' && 
              <Optioninput title={optionbrush}/>
            }
            {title === 'หนวด' && 
              <Optioninput title={optionPaintANDLibstickANDBread}/>
            }
        </div>
        <div className={style.navbar}>
          {menubarber.map((item, index) => (
            <div key={index} onClick={(e) => setTitle(item)}>
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