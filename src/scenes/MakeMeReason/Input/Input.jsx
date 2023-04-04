import React from 'react'
import s from './Input.module.scss'
import { AppContext } from '../../../constants/AppContext'
import { useContext } from 'react'

const Input = () => {
  const { inputValue, updateInputValue } = useContext(AppContext);

  const handleInputChange = (event) => {
    updateInputValue(event.target.value);
  };

  return (
    <div>
    <label for="input">Что-то по тексту</label>
    <input type='text' className={s.inputMakeMeReason} name='input' value={inputValue} onChange={handleInputChange}></input>
    </div>
  )
}

export default Input