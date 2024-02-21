import React, { memo } from 'react'
import { Content } from './style'
import Personal from './components/Personal'
import HomeList from './components/HomeList'
import ViewContainer from '@/components/ViewContainer'
import homeBg from '@/components/Wrapper/images/home.png'
import HomeWrapper from '@/components/Wrapper'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <HomeWrapper wrapperbg={homeBg} type="home" />
      <div id="home-content">
        <ViewContainer>
          <Content>
            <div className="content_left">
              <Personal />
            </div>
            <div className="content_right">
              <HomeList />
            </div>
          </Content>
        </ViewContainer>
      </div>
      <Footer footerbg={homeBg} />
    </div>
  )
}

export default memo(Home)
