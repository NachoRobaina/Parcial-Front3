import { useState } from 'react'

const Form = (props) => {
  const [nombre, setNombre] = useState('')
  const [animal, setAnimal] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (nombre.length < 3) {
    setMensajeError('El Nombre debe tener al menos 3 caracteres');
    } else if (nombre.startsWith(' ')) {
    setMensajeError('El Nombre no debe comenzar con un espacio en blanco');
    } else if (6 && animal.length < 6) {
    setMensajeError(`El Animal debe tener al menos 6 caracteres.`);
    } else {
      props.onSubmit( nombre, animal )
      setNombre('')
      setAnimal('')
      setMensajeError('')
    }
  }

  return (
    <div>
      <h2>Elige tu Animal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type='text'
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        <br />
        <label>
          Animal:
          <input
            type='text'
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Enviar</button>
      </form>
      {mensajeError && <p>{mensajeError}</p>}
    </div>
  )
}

export default Form