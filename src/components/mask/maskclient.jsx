import React, { useState } from 'react';

import style from './css/client.module.css';
import Optioninput from '../optionInput';
import { optionmask } from '../data'; 

function maskclient() {
  return (
    <div className={style.container}>
        <div className={style.content}>
          <Optioninput title={optionmask}/>
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

export default maskclient