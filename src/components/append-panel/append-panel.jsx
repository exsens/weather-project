import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { loadCityByName } from '../../features/cities/cities-slice';

const AppendPanel = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    const cityName = e.target.append.value.trim();
    dispatch(loadCityByName(cityName))
    setInput('');
  }

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        <input
          value={input}
          onInput={e => setInput(e.target.value)}
          type="text"
          name="append"
          placeholder="Город"
          required />
      </label>
      <button type="submit">Добавить</button>
    </form>
  )
}

export default AppendPanel