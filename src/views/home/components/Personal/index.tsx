import React, { memo, useEffect } from 'react'
import { PersonalStyle } from './style'
import { Image } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import { getUserInfoAction } from '@/store/module/user'

const Personal = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserInfoAction())
  }, [])
  const { userInfo } = useAppSelector((state) => ({
    userInfo: state.user.userInfo
  }))
  return (
    <PersonalStyle>
      <Image className="avatar" width={150} src={userInfo.avatar} />
      <div className="item">{userInfo.username}</div>
      <div className="item">{userInfo.description}</div>
      <div className="item">{userInfo.email}</div>
      <div className="item">{userInfo.liveIn}</div>
    </PersonalStyle>
  )
}

export default memo(Personal)
