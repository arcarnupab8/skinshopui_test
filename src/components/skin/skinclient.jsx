import React, { useRef, useState } from 'react';

import style from './css/client.module.css';
import Slideinput from './inputslide';
import Suitinput from './inputsuit';
import { menuItems, menuImgs, viewImgs, suittype } from '../data';

function skinclient({ user, max, min, skin}) {
  const [mode, setMode] = useState({
    character: true, suit: false
  });
  const [activeSuitsinput, setActiveSuitinput] = useState([]);
  const [menuSelected, setMenuSelected] = useState('เพศ');

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


  const handleSuititem = (title) => {
    const newInputs = title.map((suit, index) => (
      <Suitinput
        key={index}
        dataTitle={suit}
        dataUser={user}
        dataMax={max}
        dataMin={min}
      />
    ));
    setActiveSuitinput(newInputs);
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
      handleSuititem(suittype)
    }
  }

  return (
    <div className={style.container}>
        <div className={style.content}>
          <div className={style.left}>
            {mode.character && 
              <div className={style.inputcontent}>
                <Slideinput 
                  title={menuSelected}
                  dataUser={user}
                  dataMax={max}
                  dataMin={min}
                /> 
                {/* แต่ง Skin */}
              </div>
            }
            {mode.suit && 
              <div className={style.suitcontent}>
                <div>
                  {/* {activeSuitsinput.map((input, index) => (
                    <React.Fragment key={index}>
                      {input}
                    </React.Fragment>
                  ))} */}

                  {
                    skin.data.map((data) => {
                      let textureFound = skin.texture[data.name]
                      if(textureFound !== null && textureFound !== undefined){
                        textureFound = skin.data[textureFound];
                      }
                      <Suitinput
                      key={index}
                      dataMax={data.max}
                      dataMin={data.min}
                      dataUser={data.current}
                      dataTitle={data.label}
                      dataName={data.name}
                      dataTexture={textureFound}
                    />
                    })
                    
                  }

                  {/* แต่ง เสื้อผ้า */}
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
              <div key={index} className={style.menu} onClick={() => setMenuSelected(menuItem)}>
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