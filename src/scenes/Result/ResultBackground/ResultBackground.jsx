import React from 'react'
import s from './ResultBackground.module.scss'

const ResultBackground = ({children}) => {
  return (
    <div className={s.resultBackground}>
        {children}
    </div>
  )
}

export default ResultBackground