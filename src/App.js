import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

const App = () => {
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const adviceAPI = await Axios.get('https://api.adviceslip.com/advice')
    const { advice } = adviceAPI.data.slip
    setAdvice(advice)
  }

  return (
    <div className="app">
      <div className='app__card'>
        <h1>{advice}</h1>
        <button className='app__button' onClick={fetchData}>GET ADVICE</button>
      </div>
    </div>
  )
}

export default App