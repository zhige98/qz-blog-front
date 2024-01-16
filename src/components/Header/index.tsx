import React, { useState } from 'react'
import { NavBar, MenuList } from './style'
import RouterLink from '@/components/RouterLink'

interface Navbar {
  url: string
  title: string
  children?: Navbar[]
}

function menuContent() {
  const [headerList] = useState<Navbar[]>([
    {
      title: '首页',
      url: '/home'
    },
    {
      title: '分类',
      url: '/classify'
    }
  ])

  return (
    <>
      {headerList.map((item) => {
        return (
          <div className="item" key={item.url}>
            <RouterLink to={item.url}>{item.title}</RouterLink>
          </div>
        )
      })}
    </>
  )
}

function Header() {
  return (
    <NavBar>
      <MenuList>{menuContent()}</MenuList>
    </NavBar>
  )
}

export default Header
