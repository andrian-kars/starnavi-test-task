import axios from 'axios';
import { useState, useEffect, memo } from 'react';
import './App.css'
import { Content } from './Components/Content';

// Geting Data
const fetchModesData = () => {
  return axios.get('http://demo1030918.mockable.io/').then(res => res.data)
}

const App = memo(() => {
  // Setting Data
  const [modes, setModes] = useState(null)

  useEffect(() => {
    fetchModesData().then(modes => {
      setModes(modes)
    })
  }, [])

  // Wating till it comes
  if (modes === null) {
    return <p>Loading...</p>
  }

  return <div className="app">
    <Content modes={modes} />
  </div>
})

export default App