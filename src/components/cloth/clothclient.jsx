import React, { useState } from 'react';

import style from './css/client.module.css';
import Suitinput from '../skin/inputsuit';
import { viewImgs, suittype } from '../data'; 

function clothclient() {
  const [newsuit, setNewsuit] = useState([]);
  const [inputsuitName, setInputSuitName] = useState('');

  console.log(newsuit);
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.title}>ร้านเปลี่ยนชุด</div>
        <div className={style.content}>
          {suittype.map((suit, index) => (
            <Suitinput 
              title={suit}
              maxvalue={100}
              currentvalue={10}
            />
          ))}
        </div>
      </div>

      <div className={style.right}>
        <div className={style.title}>มุมมองตัวละคร</div>
          <div className={style.viewcontent}>
            {viewImgs.map((viewImg, index) => (
              <div key={index} className={style.viewmode}>
                <img src={`./img/view/${viewImg}`} width='50vh' height='50vh'/>
              </div>
            ))}
          </div>
            
          <div className={style.reccomend}>
            <div className={style.label}>
              <img src='./img/view/mouse.png' width='30vh' height='30vh'/>
              <div className={style.text}>สามารถใช้ลูกกลิ้งเมาส์เพื่อหมุนมุมมองของตัวละครได้</div>
            </div>
            <div className={style.label}>
              <img src='./img/view/letter-x.png' width='30vh' height='30vh'/>
              <div className={style.text}>สามารถ "กด X" เพื่อยกแขนของตัวละครได้</div>
            </div>
          </div>

          <div className={style.confirmbtn}>
              <div className={style.button}>
                ยืนยันการแต่งกาย 500
              </div>
          </div>      
      </div>
    </div>
  )
}

export default clothclient