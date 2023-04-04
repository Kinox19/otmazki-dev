import React from 'react'
import s from './ResultText.module.scss'
import { AppContext } from '../../../constants/AppContext';
import { useContext } from 'react';

const ResultText = ({otmazka}) => {

  const { inputValue } = useContext(AppContext);

  return (
    <div>
        <p className={s.resultText}>{inputValue}{otmazka}</p>
    </div>
  )
}

export default ResultText