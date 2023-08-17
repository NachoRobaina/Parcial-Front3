import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'


const App = () => {

  const [persona, setPersona] = useState("")

  const handleSubmit = (nombre, animal) => {
    setPersona({nombre: nombre, animal: animal})
  }
  

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      { persona ? <Card nombre={persona.nombre} animal={persona.animal} /> : undefined}
    </div>
  )
}

export default App

