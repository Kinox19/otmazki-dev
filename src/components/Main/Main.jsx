import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../scenes/Home/Home'
import MakeMeReason from '../../scenes/MakeMeReason/MakeMeReason'
import Result from '../../scenes/Result/Result'
import { useState } from 'react'
import { AppProvider } from '../../constants/AppContext'

const Main = () => {

  return (
    <AppProvider>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/make' element={<MakeMeReason/>}/>
            <Route path='/res' element={<Result/>}/>
      </Routes>
    </AppProvider>

  )
}

export default Main