import { useState } from 'react'

import './App.css'

import { data } from './data/data'

import ImcCalc from './components/imc-calc/ImcCalc'
import ImcTable from './components/imc-table/ImcTable'

function App() {

  const calcImc = (e, height, weight) => {

    e.preventDefault()
   
    if(!height || !weight) return

    const heightFloat = +height.replace(',', '.')
    const weightFloat = +weight.replace(',', '.')

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult)

  }

  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable />}
    </div>
  )

}

export default App
