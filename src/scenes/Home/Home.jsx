import React from 'react'
import BaseCenterLayout from '../../layouts/BaseCenterLayout/BaseCenterLayout'
import UpperText from './UpperText/UpperText'
import HeadingMain from './HeadingMain/HeadingMain'
import DownText from './DownText/DownText'
import ImageHome from './ImageHome/ImageHome'
import TwoColumnsLayout from '../../layouts/TwoColumnsLayout/TwoColumnsLayout'
import MainButton from '../../components/UI/MainButton/MainButton'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <BaseCenterLayout>
        <TwoColumnsLayout>
          <div>
            <UpperText/>
            <HeadingMain/>
            <DownText/>
            <Link to="/make">
              <MainButton/>
            </Link>
          </div>
          <ImageHome/>
        </TwoColumnsLayout>
      </BaseCenterLayout>
    </div>
  )
}

export default Home