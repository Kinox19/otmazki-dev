import React from 'react'
import s from './BaseCenterLayout.module.scss'

const BaseCenterLayout = ({children}) => {
  return (
    <div className={s.centerLayout}>
      <div>
        {children}
      </div>
    </div>
  )
}

export default BaseCenterLayout