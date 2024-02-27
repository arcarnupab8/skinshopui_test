import React, { useState } from 'react';

import style from './css/inputsuit.module.css';

function inputsuit({ dataTitle, dataUser, dataMax, dataMin , dataName, dataTexture }) {
  // console.log(dataUser);
  // console.log(dataMax);
  // console.log(dataMin);

  const [currentTexture, setCurrentTexture] = useState(dataTexture ? dataTexture.current : 0);
  const [currentModel, setCurrentModel] = useState(dataUser);
  
  // const [User, setUser] = useState({
  //   current:0, max:0, min:0
  // });
  // const [Color, setColor] = useState({
  //   current:0, max:0, min:0
  // })
  // const [togglesuit, setTogglesuit] = useState(false);
  // const [togglecolor, setTogglecolor] = useState(false);
  // const [CurrentSuit, setCurrentSuit] = useState(User.current);
  // const [CurrentColor, setCurrentColor] = useState(Color.current);
  // const [idSuit, setIdSuit] = useState('');
  // const [idColor, setIdColor] = useState('');

  // const findarray = (word, refarray) => {
  //   let index = -1;
  //   for (let i = 0; i < refarray.length; i++) {
  //     if (refarray[i] === word) {
  //       index = i;
  //       break;
  //     }
  //   }
  //   return index;
  // }

  // const managedata = (word, current, max, min, setcurrrent, setmax, setmin) => {
  //   setIdSuit(word);
  //   let currentindex = findarray(word, current);
  //   let maxindex = findarray(word, max);
  //   let minindex = findarray(word, min);
  //   setUser({ current:setcurrrent[currentindex], max:setmax[maxindex], min:setmin[minindex] });
  // }
  // const managecolor = (word, current, max, min, setcurrrent, setmax, setmin) => {
  //   setIdColor(word);
  //   let currentindex = findarray(word, current);
  //   let maxindex = findarray(word, max);
  //   let minindex = findarray(word, min);
  //   setColor({ current:setcurrrent[currentindex], max:setmax[maxindex], min:setmin[minindex] });
  // }

  // const handleInputValue = (title) => {
  //   // console.log(dataUser);
  //   // console.log(dataMax);
  //   // console.log(dataMin);
  //   switch(title){
  //     case "เสื้อด้านนอก":
  //       managedata('torso_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "เสื้อด้านใน":
  //       managedata('tshirt_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "สติกเกอร์":
  //       managedata('decals_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "แขนและถุงมือ":
  //       managedata('arms', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "กางเกง":
  //       managedata('pants_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "รองเท้า":
  //       managedata('shoes_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "เสื้อเกราะ":
  //       managedata('bproof_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "สร้อย":
  //       managedata('chain_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "หมวก":
  //       managedata('helmet_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "แว่นตา":
  //       managedata('glasses_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "นาฬิกา":
  //       managedata('watches_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "กำไลข้อมือ":
  //       managedata('bracelets_1', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "กระเป๋า":
  //       managedata('bag', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //   }
  // };
  // const handleColorValue = (title) => {
  //   // console.log(dataUser);
  //   // console.log(dataMax);
  //   // console.log(dataMin);
  //   switch(title){
  //     case "เสื้อด้านนอก":
  //       managecolor('torso_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "เสื้อด้านใน":
  //       managecolor('tshirt_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "สติกเกอร์":
  //       managecolor('decals_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "แขนและถุงมือ":
  //       managecolor('arms_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "กางเกง":
  //       managecolor('pants_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "รองเท้า":
  //       managecolor('shoes_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "เสื้อเกราะ":
  //       managecolor('bproof_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "สร้อย":
  //       managecolor('chain_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "หมวก":
  //       managecolor('helmet_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "แว่นตา":
  //       managecolor('glasses_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "นาฬิกา":
  //       managecolor('watches_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "กำไลข้อมือ":
  //       managecolor('bracelets_2', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //     case "กระเป๋า":
  //       managecolor('bag_color', dataUser.title, dataMax.title, dataMin.title, dataUser.value, dataMax.value, dataMin.value);
  //       break;
  //   }
  // };
  
  // const handlesuitinput = () => {
  //   if( togglesuit === false ){
  //     setTogglesuit(!togglesuit);
  //     handleInputValue(dataTitle);
  //   }
  //   else{
  //     setTogglesuit(false);
  //   }
  //   console.log(idSuit)
  // }
  // const handlecolorinput = () => {
  //   if( togglecolor === false ){
  //     setTogglecolor(!togglecolor);
  //     handleColorValue(dataTitle);
  //   }
  //   else{
  //     setTogglecolor(false);
  //   }
  //   console.log(idColor)
  // }

  // const post = async function (_,b) {
  //   try {
  //     return fetch('https://whale-skin/'+_, {
  //       method: 'POST',
  //       body: JSON.stringify(null != b ? b : {}),
  //       mode: 'no-cors'
  //     });
  //   }catch(e){
  //     return e;
  //   }
  // }

  // const postmethod = (e, name) =>{
  //   post('change', { current: e.target.value, name: name })
  // }
  
  return (
    <div className={style.container}>
      <div className={style.suitcontent}>
        <label>{dataTitle}</label>
        <div className={style.type}>
          <div className={style.suittitle}>
            {currentModel}
            <div className={style.inputbtn} onClick={handlesuitinput}>
              <div>v</div>
              {togglesuit && 
                <input
                  type='range'
                  max={dataMax}
                  min={dataMin}
                  value={dataUser}
                  onInput={(e) => {
                            setCurrentModel(e.target.value)
                            post('change', { name: dataName, current: e.target.value })
                          }}
                />
              }
            </div>
          </div>
        </div>
      </div>

      {dataTexture && <div className={style.colorcontent} >
        <label>สี/ลาย</label>
        <div className={style.type}>
          <div className={style.colortitle}>
            {currentTexture}
            <div className={style.inputbtn} onClick={handlecolorinput}>
              <div>v</div>
              {togglecolor && 
                <input
                  type='range'
                  max={dataTexture.max}
                  min={dataTexture.min}
                  value={dataTexture.current}
                  onInput={(e) => {
                            setCurrentTexture(e.target.value)
                            post('change', { name: dataTexture.name, current: e.target.value })
                          }}
                />
              }
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default inputsuit