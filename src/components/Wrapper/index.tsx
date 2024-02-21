import React, { memo, useState, useRef, useEffect, FC } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { FieldTimeOutlined, GroupOutlined } from '@ant-design/icons'
import { WrapperStyle, SiteInfoStyle, DetailInfo } from './style'
import { DetailItem } from '@/views/detail/type'
import { formatTime } from '@/utils'

interface IWrapper {
  type?: 'home' | 'detail' | 'other'
  wrapperbg: string
  detailData?: DetailItem
}

function SiteInfo() {
  const desc = [
    '你的代码就像诗一样美丽',
    '你的逻辑思维如同艺术家一般独特',
    '你的技术能力使我惊叹不已',
    '你简直是一个编程天才！'
  ]

  const [siteDesc, setSiteDesc] = useState('')
  const index = useRef<number>(0)
  const descIndex = useRef<number>(0)
  const isFinish = useRef<boolean>(false)

  function writer(str: string) {
    const strArr = str.split('')
    if (index.current < strArr.length && !isFinish.current) {
      setTimeout(() => {
        setSiteDesc(siteDesc + strArr[index.current])
        index.current++
      }, 200)
    } else if (
      (isFinish.current || index.current === strArr.length) &&
      index.current
    ) {
      isFinish.current = true
      index.current--
      setTimeout(() => {
        strArr.length = index.current
        setSiteDesc(strArr.join(''))
      }, 100)
    } else {
      isFinish.current = false
      if (descIndex.current === desc.length - 1) {
        descIndex.current = 0
      }
      writer(desc[descIndex.current++])
    }
  }
  useEffect(() => {
    writer(desc[descIndex.current])
  }, [index.current])
  return (
    <SiteInfoStyle>
      <h1 className="site-name">爱coding的猫</h1>
      <div className="site-info">
        <span>{siteDesc}</span>
        <span className="blink"></span>
      </div>
    </SiteInfoStyle>
  )
}

function DownElement() {
  return <DownOutlined />
}

const Wrapper: FC<IWrapper> = (props) => {
  const downScroll = () => {
    const element = document.querySelector('#home-content')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <WrapperStyle
      wrapperbg={props.wrapperbg}
      type={props.type ? props.type : 'other'}
    >
      {props.type === 'home' && (
        <>
          <div className="site-info-box">{SiteInfo()}</div>
          <div className="site-info-down" onClick={downScroll}>
            <div className="down-icon">{DownElement()}</div>
          </div>
        </>
      )}
      {props.type === 'detail' && props.detailData && (
        <DetailInfo>
          <div className="info-title">{props.detailData.title}</div>
          <div className="info-desc">
            <div className="info-box">
              <div className="info-time">
                <FieldTimeOutlined className="time-icon" />
                发表于：{formatTime(props.detailData.createTime)}
                <span className="segment">|</span>
              </div>
              <div className="info-time">
                <FieldTimeOutlined className="time-icon" />
                更新于：{formatTime(props.detailData.updateTime)}
                <span className="segment">|</span>
              </div>

              <GroupOutlined className="label-icon" />
              {props.detailData.labels && (
                <div>
                  {props.detailData.labels.map((item, index) => (
                    <span key={item.id}>
                      {index > 0 && '、'}
                      {item.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DetailInfo>
      )}
    </WrapperStyle>
  )
}

export default memo(Wrapper)
