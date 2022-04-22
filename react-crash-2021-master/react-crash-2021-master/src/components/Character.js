import { FaTimes } from 'react-icons/fa'

const Character = ({ character, onDelete, onToggle }) => {
  return (
    <div
      className={`task`}
    >
      <h3>
        {character.name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(character.id)}
        />
      </h3>
      <label>
        <p><b>H: </b> {character.height} | <b>M: </b> {character.mass}</p>
        <p><b>C: </b>{character.eyeColor} | <b>G: </b> {character.gender}</p>
      </label>
    </div>
  )
}

export default Character
