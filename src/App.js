import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Clock from "./components/Clock"

function App() {
  const [form, setForm] = useState([])

  const addClock = event => {
    
    event.preventDefault()
    if (event.target.name.value === '' || event.target.zone.value === '') return null
    const add = { 
      id: nanoid(),
      name: event.target.name.value.trim(), 
      zone: event.target.zone.value.trim()
    }
    setForm(prevForm => prevForm.push(add))
    console.log(form)
    // const clocks = form.map(clock => {
    //   <Clock
    //       name={clock.name}
    //       zone={clock.zone}
    //   />
    // })
  }

  return (
    <div className='app'>
      <form className='form' onSubmit={addClock}>
        <label>
          <span>Название</span>
          <input name='name'/>
        </label>
        <label>
          <span>Временная зона</span>
          <input name='zone' type='number'/>
        </label>
        <button type='submit'>Добавить</button>
      </form>
      <Clock />
    </div>
  )
}

export default App;
