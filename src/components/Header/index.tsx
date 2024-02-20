import React, { ReactElement, useState } from 'react'
import { NavBar, MenuList } from './style'
import { HomeOutlined, FolderOpenOutlined } from '@ant-design/icons'
import RouterLink from '@/components/RouterLink'

interface Navbar {
  url: string
  title: string
  children?: Navbar[]
  icon: ReactElement
}

function menuContent() {
  const [headerList] = useState<Navbar[]>([
    {
      title: '首页',
      url: '/home',
      icon: <HomeOutlined />
    },
    {
      title: '分类',
      url: '/classify',
      icon: <FolderOpenOutlined />
    }
  ])

  return (
    <>
      {headerList.map((item) => {
        return (
          <div className="item" key={item.url}>
            {item.icon}
            <RouterLink className="item-name" to={item.url}>
              {item.title}
            </RouterLink>
          </div>
        )
      })}
    </>
  )
}

function Header() {
  return (
    <NavBar>
      <RouterLink className="site-name" to={'/home'}>
        爱coding的猫
      </RouterLink>
      <MenuList>{menuContent()}</MenuList>
    </NavBar>
  )
}

export default Header
