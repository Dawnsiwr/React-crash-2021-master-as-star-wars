import { useState } from 'react'
import Select from 'react-select'
import eyeColors from './EyeColor'
import genders from './Gender'


const AddCharacter = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [mass, setMass] = useState('')
  const [eyeColor, setEyeColor] = useState('')
  const [gender, setGender] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()

    if (!name || !height || !mass ||  !gender) {
      alert('Please add all charcter properties')
      return
    }
    const id = Math.random() * 150000;
    onAdd({ id, name, height, mass, eyeColor, gender })

    setName('')
    setHeight('')
    setMass('')
    setGender('')
    setEyeColor('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name: </label>
        <input  
          type='text'
          placeholder='Add name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Height: </label>
        <input
          type='number'
          placeholder='Add height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className='form-control form-control'>
        <label>Set Mass: </label>
        <input
          type='number'
          placeholder='Set mass'
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
      </div>
      <div >
        <label>Set gender: </label> <br/>
        <Select options={genders}
        placeholder='Set gender'
        name={gender}
        onChange={(e)=>setGender(e.value)}/>
      </div>
      <br/>
      <div >
        <label>Eye color: </label> <br/>
        <Select options={eyeColors}
        placeholder='Set eye color'
        name={eyeColor}
        onChange={(e)=>setEyeColor(e.value)}/>
      </div>
      <input type='submit' value='Save charcter' className='btn btn-block' />
    </form>
  )
}

export default AddCharacter
