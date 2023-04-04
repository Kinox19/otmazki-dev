import React from 'react'
import ResultBackground from './ResultBackground/ResultBackground'
import BaseCenterLayout from '../../layouts/BaseCenterLayout/BaseCenterLayout'
import InfoResult from './InfoResult/InfoResult'
import ResultText from './ResultText/ResultText'
import CopyButton from '../../components/UI/CopyButton/CopyButton'
import MainButton from '../../components/UI/MainButton/MainButton'
import ResultChangeTextButton from './ResultChangeTextButton/ResultChangeTextButton'
import { reasonsDb } from '../../constants/reasonsDb' // НЕ забыть про это!!!!!!!! а то хуй в рот будешь.

const Result = () => {

  function random(reasonsDb){
    return Math.floor(Math.random() * reasonsDb.length);
  }

  return (
    <div>
      <BaseCenterLayout>
        <ResultBackground>
          <InfoResult/>
          <ResultText otmazka={reasonsDb[random(reasonsDb)].text}/>
          <CopyButton/>
          <MainButton/>
          <ResultChangeTextButton/>
        </ResultBackground>
      </BaseCenterLayout>
    </div>
  )
}

export default Result