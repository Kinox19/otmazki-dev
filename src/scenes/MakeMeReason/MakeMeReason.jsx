import React, { useState } from 'react'
import Input from './Input/Input'
import UpperText from './UpperText/UpperText'
import BaseCenterLayout from '../../layouts/BaseCenterLayout/BaseCenterLayout'
import Select from './Select/Select'
import MainButton from '../../components/UI/MainButton/MainButton'
import { Link } from 'react-router-dom'

const MakeMeReason = ({onChange}) => {

  return (
    <div>
      <BaseCenterLayout>
        <UpperText/>
        <Select/>
        <Input/>
        <Link to='/res'>
        <MainButton/>
        </Link>
      </BaseCenterLayout>
    </div>
  )
}

export default MakeMeReason