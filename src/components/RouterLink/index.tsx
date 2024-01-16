import { To, Link } from 'react-router-dom'
import React, { FC, ReactNode, memo } from 'react'
import { MyLink } from './style'

interface ILink {
  children?: ReactNode
  to: To
  html?: string
  className?: string
  target?: '_self' | '_blank'
}

const RouterLink: FC<ILink> = (props) => {
  const { target = '_self' } = props
  if (props.html) {
    return (
      <MyLink
        target={target}
        className={props.className}
        dangerouslySetInnerHTML={{ __html: props.html }}
        to={props.to}
      ></MyLink>
    )
  } else {
    return (
      <MyLink
        replace={true}
        target={target}
        className={props.className}
        to={props.to}
      >
        {props.children}
      </MyLink>
    )
  }
}

export default memo(RouterLink)
