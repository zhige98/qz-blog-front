import React, { FC } from 'react'
import { FieldTimeOutlined, GroupOutlined } from '@ant-design/icons'
import { IListItem } from '../../type'
import { Item, TitleLink, DescLink } from './style'
import RouterLink from '@/components/RouterLink'
import { formatTime } from '@/utils'

const ListItem: FC<{ item: IListItem }> = (props) => {
  const url = `/detail/${props.item.id}`
  return (
    <Item>
      <RouterLink target="_blank" to={url}>
        <img
          className="img"
          src={
            props.item.imgUrl
              ? props.item.imgUrl
              : require('@/assets/images/list-default-img.jpg')
          }
          alt=""
        />
      </RouterLink>
      <div className="right">
        <h3 className="title-box">
          <TitleLink target="_blank" to={url}>
            {props.item.title}
          </TitleLink>
        </h3>
        <p className="content-box">
          <DescLink target="_blank" to={url}>
            {props.item.description}
          </DescLink>
        </p>
        <div className="content-desc">
          <div className="content-time">
            <FieldTimeOutlined className="time-icon" />
            发表于：{formatTime(props.item.createTime)}
          </div>
          <span className="segment">|</span>
          <GroupOutlined className="label-icon" />
          <div>
            {props.item.labels.map((item, index) => (
              <span key={item}>
                {index > 0 && '、'}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Item>
  )
}

export default ListItem
