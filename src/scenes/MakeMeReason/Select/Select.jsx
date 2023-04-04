import React from 'react'
import s from './Select.module.scss'

const Select = () => {
  return (
    <div>
        <label for='select'>Выберите стиль желаемой отмазки</label>
        <select name='select' className={s.selectMakeMeReason}>
            <option value="">1</option>
            <option value="dog">2</option>
            <option value="cat">3</option>
        </select>
    </div>
  )
}

export default Select