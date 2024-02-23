import React, { useState } from 'react';

import style from './css/inputsuit.module.css';

function inputsuit({ title, maxvalue, currentvalue }) {
  const [suittype, setSuittype] = useState(currentvalue);
  const [color, setColor] = useState(0);
  const [togglesuit, setTogglesuit] = useState(false);
  const [togglecolor, setTogglecolor] = useState(false);

  const handlesuitinput = () => {
    if( togglesuit === false ){
      setTogglesuit(!togglesuit);
    }
    else{
      setTogglesuit(false);
    }
  }
  const handlecolorinput = () => {
    if( togglecolor === false ){
      setTogglecolor(!togglecolor);
    }
    else{
      setTogglecolor(false);
    }
  }
  
  return (
    <div className={style.container}>
      <div className={style.suitcontent}>
        <label>{title}</label>
        <div className={style.type}>
          <div className={style.suittitle}>
            {suittype} 
            <div className={style.inputbtn} onClick={handlesuitinput}>
              <div>v</div>
              {togglesuit && 
                <input
                  type='range'
                  min={0}
                  max={maxvalue}
                  value={suittype}
                  onInput={(e) => setSuittype(e.target.value)}
                />
              }
            </div>
          </div>
        </div>
      </div>

      <div className={style.colorcontent}>
        <label>สี/ลาย</label>
        <div className={style.type}>
          <div className={style.colortitle}>
            {color} 
            <div className={style.inputbtn} onClick={handlecolorinput}>
              <div>v</div>
              {togglecolor && 
                <input
                  type='range'
                  value={color}
                  onInput={(e) => setColor(e.target.value)}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default inputsuit