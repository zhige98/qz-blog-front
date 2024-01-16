import React, { memo, useEffect } from 'react'
import { Persion } from './style'
import { Image } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import { getUserInfoAction } from '@/store/module/user'

const Persional = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserInfoAction())
  }, [])
  const { userInfo } = useAppSelector((state) => ({
    userInfo: state.user.userInfo
  }))
  return (
    <Persion>
      {/* <Image className="avatar" width={150} src={userInfo.avatar} />
      <div className="item">{userInfo.username}</div>
      <div className="item">{userInfo.description}</div>
      <div className="item">{userInfo.email}</div>
      <div className="item">{userInfo.liveIn}</div> */}
    </Persion>
  )
}

export default memo(Persional)
