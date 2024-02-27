import React, { useEffect, useState } from 'react';

import style from './css/inputslide.module.css';
import Slidebox from './slidebox';
import { sexMenu, eyeMenu, bodyMenu, hairMenu, frecklesfaceMenu, maskMenu, 
        beardMenu, facewrinklesMenu, oldwrinklesMenu, bruisefaceMenu, hairchestMenu, facepaintMenu,
        lipstickMenu, flawfaceMenu, flawbodyMenu, eyebrowMenu, earringMenu, brushMenu
       } from './defaultmenu';

function inputslide({ title, dataUser, dataMax, dataMin }) {
  // console.log(title);
  // console.log(dataUser)
  // console.log(dataMax)
  // console.log(dataMin)
  const [attribute, setAttribute] = useState([]);
  const [currentValue, setCurrentvalue] = useState(0);
  const [maxValue, setMaxvalue] = useState([]);
  const [minValue, setMinvalue] = useState([]);
  const [id, setId] = useState([]);
  const [personData, setPersonData] = useState({
    sex:{ เพศ:0 },
    body:{ หน้าตา:0, สีผิว:0 },
    eye:{ สีตา:0 }
  })

  const findarray = (word, refarray) => {
    let index = -1;
    for (let i = 0; i < refarray.length; i++) {
      if (refarray[i] === word) {
        index = i;
        break;
      }
    }
    return index;
  }

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    switch(title){
      case "เพศ":
        setAttribute(sexMenu);
        break;
      case "รูปร่าง":
        setAttribute(bodyMenu);
        break;
      case "ดวงตา":
        setAttribute(eyeMenu);
        break;
      case "ริ้วรอยความแก่":
        setAttribute(oldwrinklesMenu);
        break;
      case "ตำหนิที่หน้า":
        setAttribute(flawfaceMenu);
        break;
      case "รอยช้ำที่หน้า":
        setAttribute(bruisefaceMenu);
        break;
      case "ขนหน้าอก":
        setAttribute(hairchestMenu);
        break;
      case "ตำหนิร่างกาย":
        setAttribute(flawbodyMenu);
        break;
      case "ริ้วรอยที่หน้า":
        setAttribute(facewrinklesMenu);
        break;
      case "กระที่หน้า":
        setAttribute(frecklesfaceMenu);
        break;
      case "ทรงผม":
        setAttribute(hairMenu);
        break;
      case "คิ้ว":
        setAttribute(eyebrowMenu);
        break;
      case "เพ้นท์หน้า":
        setAttribute(facepaintMenu);
        break;
      case "ลิปสติก":
        setAttribute(lipstickMenu);
        break;
      case "ต่างหู":
        setAttribute(earringMenu);
        break;
      case "บลัช":
        setAttribute(brushMenu);
        break;
      case "หนวด":
        setAttribute(beardMenu);
        break;
      case "หน้ากาก":
        setAttribute(maskMenu);
        break;
    }
    setInitialized(true);
  }, [title]);


  useEffect(() => {
    let currentInd = -1;
    let maxInd = -1;
    let minInd = -1;
    let managedata
    if (initialized && attribute.length > 0) {
      switch(title){
        case "เพศ":
          setId(['sex']);
            for(let i=0; i<id.length; i++){
              if(id[i] === sexMenu[i]){
                currentInd = findarray(id[i], dataUser.title);
                setCurrentvalue(dataUser.value[currentInd]);
                maxInd = findarray(id[i] ,dataMax.title);
                setMaxvalue(dataMax.value[maxInd]);
                minInd = findarray(id[i] ,dataMin.title);
                setMinvalue(dataMin.value[minInd]);
              }
            }
          break;
        case "รูปร่าง":
          setId(['face', 'skin']);
            for(let i=0; i<id.length; i++){
              if(id[i] === bodyMenu[i]){
                currentInd = findarray(id[i], dataUser.title);
                setCurrentvalue(dataUser.value[currentInd]);
                maxInd = findarray(id[i] ,dataMax.title);
                setMaxvalue(dataMax.value[maxInd]);
                minInd = findarray(id[i] ,dataMin.title);
                setMinvalue(dataMin.value[minInd]);
              }
            } 
          break;
        case "ดวงตา":
          setId(['eye_color']);
            for(let i=0; i<id.length; i++){
              if(id[i] === bodyMenu[i]){
                currentInd = findarray(id[i], dataUser.title);
                setCurrentvalue(dataUser.value[currentInd]);
                maxInd = findarray(id[i] ,dataMax.title);
                setMaxvalue(dataMax.value[maxInd]);
                minInd = findarray(id[i] ,dataMin.title);
                setMinvalue(dataMin.value[minInd]);
              }
            } 
          break;
        case "ริ้วรอยความแก่":
          setId(['wrinkles', 'wrinkle_thickness']);
            for(let i=0; i<id.length; i++){
              if(id[i] === bodyMenu[i]){
                currentInd = findarray(id[i], dataUser.title);
                setCurrentvalue(dataUser.value[currentInd]);
                maxInd = findarray(id[i] ,dataMax.title);
                setMaxvalue(dataMax.value[maxInd]);
                minInd = findarray(id[i] ,dataMin.title);
                setMinvalue(dataMin.value[minInd]);
              }
            } 
          break;
        case "ตำหนิที่หน้า":
          setId(['wrinkles', 'wrinkle_thickness']);
            for(let i=0; i<id.length; i++){
              if(id[i] === bodyMenu[i]){
                currentInd = findarray(id[i], dataUser.title);
                setCurrentvalue(dataUser.value[currentInd]);
                maxInd = findarray(id[i] ,dataMax.title);
                setMaxvalue(dataMax.value[maxInd]);
                minInd = findarray(id[i] ,dataMin.title);
                setMinvalue(dataMin.value[minInd]);
              }
            } 
          break;
        case "รอยช้ำที่หน้า":
          setId(['wrinkles', 'wrinkle_thickness']);
            for(let i=0; i<id.length; i++){
              if(id[i] === bodyMenu[i]){
                currentInd = findarray(id[i], dataUser.title);
                setCurrentvalue(dataUser.value[currentInd]);
                maxInd = findarray(id[i] ,dataMax.title);
                setMaxvalue(dataMax.value[maxInd]);
                minInd = findarray(id[i] ,dataMin.title);
                setMinvalue(dataMin.value[minInd]);
              }
            } 
          break;
        case "ขนหน้าอก":
          setId(['chest_hair', 'chest_hair_1', 'chest_color']);
            for(let i=0; i<id.length; i++){
              if(id[i] === bodyMenu[i]){
                currentInd = findarray(id[i], dataUser.title);
                setCurrentvalue(dataUser.value[currentInd]);
                maxInd = findarray(id[i] ,dataMax.title);
                setMaxvalue(dataMax.value[maxInd]);
                minInd = findarray(id[i] ,dataMin.title);
                setMinvalue(dataMin.value[minInd]);
              }
            } 
          break;           
      }
    }
  }, [attribute, initialized])
  // console.log(id)
  // console.log(currentValue)
  // console.log(maxValue)
  // console.log(minValue)

  return (
    attribute.map((item, index) => (
      <Slidebox 
        label={item}
        currentValue={}
      />
    ))
  )
}

export default inputslide