import React from 'react'
import Header from './Components/Header/Header'
import Nabbar from './Components/Nabbar/Nabbar'
import Banner from './Components/Banner/Banner'
import Services from './Components/Services/Services'
import Mservices from './Components/Services/Mservices/Mservices'
import More from './Components/More/More'
import Maps from './Components/Maps/Maps'
import Clients from './Components/Clients/Clients'
import System from './Components/System/System'

const App = () => {
  return (
    <div>
      <Header/>
      <Nabbar/>
      <Banner/>
      <Services/>
      <Mservices/>
      <More/>
      <Maps/>
      <Clients/>
      <System/>
    </div>
  )
}

export default App
