import React, { useRef, useState } from 'react';

import style from './css/client.module.css';
import Slideinput from './inputslide';
import Suitinput from './inputsuit';
import { menuItems, menuImgs, viewImgs, suittype } from '../data';

function skinclient() {
  const [mode, setMode] = useState({
    character: true, suit: false
  });
  const [activeInputs, setActiveInputs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const menuRef = useRef(null);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 6); 
    }
    if (currentIndex+9 === 18) {
      setCurrentIndex(currentIndex - 3); 
    }
  };
  const handleRightClick = () => {
    if (currentIndex < menuItems.length - 6) {
      setCurrentIndex(currentIndex + 6);
    }
    if ((menuItems.length-(currentIndex+9)) < 9){
      setCurrentIndex(currentIndex + (menuItems.length-(currentIndex+9)));
    }
  };

  const first9MenuItems = menuItems.slice(currentIndex, currentIndex + 9);  
  const first9MenuImgs = menuImgs.slice(currentIndex, currentIndex + 9);

  const handleMenuitem = (i, title) => {
    const att = []
    switch (title) {
      case "เพศ":
        att.push("เพศ");
        break;
      case "รูปร่าง":
        att.push("หน้าตา");
        att.push("สีผิว");
        break;
      case "ดวงตา":
        att.push("สีตา");
        break;
      case "ริ้วรอยความแก่":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        break;
      case "ตำหนิที่หน้า":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        break;
      case "รอยช้ำที่หน้า":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        break;
      case "ขนหน้าอก":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        att.push("สี");
        break;
      case "ตำหนิร่างกาย":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        att.push("รูปแบบ 2");
        att.push("ความเข้ม");
        break;
      case "ริ้วรอยที่หน้า":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        break;
      case "กระที่หน้า":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        break;
      case "ทรงผม":
        att.push("รูปแบบ");
        att.push("รูปแบบ2");
        att.push("สีหลัก");
        att.push("สีรอง");
        break;
      case "คิ้ว":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        att.push("สีหลัก");
        att.push("สีรอง");
        break;
      case "เพ้นท์หน้า":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        att.push("สีหลัก");
        att.push("สีรอง");
        break;
      case "ลิปสติก":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        att.push("สีหลัก");
        att.push("สีรอง");
        break;
      case "ต่างหู":
        att.push("รูปแบบ");
        att.push("สี");
        break;
      case "บลัช":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        att.push("สี");
        break;
      case "หนวด":
        att.push("รูปแบบ");
        att.push("ความเข้ม");
        att.push("สีหลัก");
        att.push("สีรอง");
        break;
      case "หน้ากาก":
        att.push("รูปแบบ");
        att.push("สี");
        break;
    }
    
    const newInputs = att.map((attribute, index) => (
      <Slideinput
        key={index}
        attribute={attribute}
        maxvalue={10}
        minvalue={-10}
        currentvalue={0}
      />
    ));
    setActiveInputs(newInputs);
    console.log(att);
  };

  const handleMode = (mode) => {
    if(mode===1){
      setMode({
        character:true,
        suit:false
      });
    }
    else{
      setMode({
        character:false,
        suit:true
      })
    }
  }

  return (
    <div className={style.container}>
        <div className={style.content}>
          <div className={style.left}>
            {mode.character && 
              <div className={style.inputcontent}>
                {activeInputs.map((input, index) => (
                  <div className={style.input} key={index}>{input}</div>
                ))}
              </div>
            }
            {mode.suit && 
              <div className={style.suitcontent}>
                <div>
                  {suittype.map((suit, index) => (
                    <Suitinput 
                      title={suit}
                      maxvalue={100}
                      currentvalue={10}
                    />
                  ))}
                </div>
              </div>
            }
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

            <div className={style.modecontent}>
                <div className={style.mode} onClick={() => handleMode(1)}>เลือกลักษณะตัวละคร</div>
                <div className={style.mode} onClick={() => handleMode(2)}>เลือกการแต่งกาย</div>
            </div>

            <div className={style.acceptbtn}>
                <div className={style.btn}>ยืนยันการแต่งตัว</div>
            </div>

          </div>
        </div>

        {mode.character &&
          <div className={style.navbar}>
            <div className={style.arrowleft} onClick={handleLeftClick}>{'<'}</div>
            <div className={style.menulist} ref={menuRef}>
            {first9MenuItems.map((menuItem, index) => (
              <div key={index} className={style.menu} onClick={() => handleMenuitem(index, menuItem)}>
                <img src={`./img/navbar/${first9MenuImgs[index]}`} width='50vh' height='50vh'/>
                {menuItem}
              </div>
            ))}
            </div>
            <div className={style.arrowright} onClick={handleRightClick}>{'>'}</div>
          </div>
        }
    </div>
  )
}

export default skinclient