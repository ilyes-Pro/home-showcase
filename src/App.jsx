import { useState } from 'react'
import CatemPorfider from './Component/context/nav-barContext'

import Website from './Component/Website'



import './App.css'


function App() {



  return (

    <div
      className=' h-screen'

    >
      <CatemPorfider>
        <Website />

      </CatemPorfider>
    </div>

  )
}

export default App
