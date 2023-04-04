import React from 'react'
import s from './InfoResult.module.scss'
import icon from '../../../assets/info-icon.png'

const InfoResult = () => {
  return (
    <div>
        <img className={s.infoResult} src={icon} />
    </div>
  )
}

export default InfoResult