import React, { FC, ReactNode } from 'react'
import { Container } from './style'
import classNames from 'classnames'

interface IContainer {
  size?: 'mini' | 'large' | 'full'
  children?: ReactNode
}

const ViewContainer: FC<IContainer> = (props) => {
  const { size = 'mini', children } = props
  return (
    <Container>
      <div
        className={classNames([
          'view_contain_content',
          size === 'mini' && 'view_contain_mini',
          size === 'large' && 'view_contain_large',
          size === 'full' && 'view_contain_full'
        ])}
      >
        {children}
      </div>
    </Container>
  )
}

export default ViewContainer
