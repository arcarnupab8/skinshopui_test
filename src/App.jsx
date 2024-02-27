import { useEffect, useState } from 'react';

import './App.css';
import Skinshop from './components/skin/skinclient';
import Clothshop from './components/cloth/clothclient';
import Barbershop from './components/barber/barberclient';
import Maskshop from './components/mask/maskclient';
import { optionmask } from './components/data'; 

function App() {
  const [displayshow, setDisplayshow] = useState({
    skin: false, cloth: false, barber: false, mask:false
  });
  // const [dataUser, setDataUser] = useState({ title:[], value:[] });
  // const [dataMax, setDataMax] = useState({ title:[], value:[] });
  // const [dataMin, setDataMin] = useState({ title:[], value:[] });

  const [skinData, setSkinData] = useState({ data: [], texture: {} });

  const onMessage = (e) => {
    
    // setDataUser({ title: e.data.userTitle, value: e.data.userValues });
    // setDataMax({ title: e.data.maxTitle, value: e.data.maxValues });
    // setDataMin({ title: e.data.minTitle, value: e.data.minValues });


    setSkinData(e.data.skinData);
    switch(e.data.action){
      case "SkinShop": 
        setDisplayshow({ skin: true, cloth: false, barber: false, mask:false });
        break;
      case "ClothShop": 
        setDisplayshow({ skin: false, cloth: true, barber: false, mask:false });
        break;
      case "BarberShop": 
        setDisplayshow({ skin: false, cloth: false, barber: true, mask:false });
        break;
      case "MaskShop": 
        setDisplayshow({ skin: false, cloth: false, barber: false, mask:true });
        break;
      case "close":
        setDisplayshow({ skin: false, cloth: false, barber: false, mask:false });
        break;
    };

  }

  useEffect(() => {
    window.addEventListener("message", onMessage);
    () => window.removeEventListener("message", onMessage);
  }, [])

  return (
    <>
      <div className='container'>
        {displayshow.skin && <Skinshop /*user={dataUser} max={dataMax} min={dataMin} */ skin={skinData} />}
        {displayshow.cloth && <Clothshop /*user={dataUser} max={dataMax} min={dataMin} */ skin={skinData} />}
        {displayshow.barber && <Barbershop /*user={dataUser} max={dataMax} min={dataMin} */ skin={skinData} />}
        {displayshow.mask && <Maskshop title={optionmask} /*user={dataUser} max={dataMax} min={dataMin}*/ />}
      </div>
    </>
  )
}

export default App
