import { useState } from 'react';

import './App.css';
import Skinshop from './components/skin/skinclient';
import Clothshop from './components/cloth/clothclient';
import Barbershop from './components/barber/barberclient';
import Maskshop from './components/mask/maskclient';

function App() {
  const [displayshow, setDisplayshow] = useState({
    skin: true, cloth: false, barber: false, mask:false
  })

  return (
    <>
      <div className='container'>
        {displayshow.skin && <Skinshop />}
        {displayshow.cloth && <Clothshop />}
        {displayshow.barber && <Barbershop />}
        {displayshow.mask && <Maskshop/>}
      </div>
    </>
  )
}

export default App
