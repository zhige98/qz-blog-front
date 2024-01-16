import React, { FC } from 'react'
import { IListItem } from '../../type'
import { Item, TitleLink, DescLink } from './style'
import RouterLink from '@/components/RouterLink'

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
      </div>
    </Item>
  )
}

export default ListItem
