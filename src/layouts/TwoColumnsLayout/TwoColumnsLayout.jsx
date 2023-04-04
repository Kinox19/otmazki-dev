import React from 'react'
import s from './TwoColumnsLayout.module.scss'

const TwoColumnsLayout = ({children}) => {
  return (
    <div className={s.twoColumns}>
        {children}
    </div>
  )
}

export default TwoColumnsLayout