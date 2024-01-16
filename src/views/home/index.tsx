import React, { memo } from 'react'
import { Content } from './style'
import Persional from './components/Personal'
import HomeList from './components/HomeList'
import ViewContainer from '@/components/ViewContainer'

const Home = () => {
  return (
    <div>
      <ViewContainer>
        <Content>
          <div className="content_left">
            <Persional />
          </div>
          <div className="content_right">
            <HomeList />
          </div>
        </Content>
      </ViewContainer>
    </div>
  )
}

export default memo(Home)
