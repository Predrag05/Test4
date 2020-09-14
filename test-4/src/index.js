import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {setAllCountries} from './services'

import Zemlje from './components/Zemlje';
import Select from './components/Select';





const App = () => {

  const [countries,setCountries] = useState([])

  // const [regioni,setRegioni] = useState('')

  useEffect(() => {
    setAllCountries().then(res => {
      console.log(res.data)
      setCountries(res.data)
    })
  },[])


  

  return (
    <>

    <Select />
    <Zemlje countries={countries}/>
    
  <p>asdas</p>

    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
