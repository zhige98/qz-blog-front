import React, { memo, FC } from 'react'
import { FooterStyle } from './style'

interface IFooter {
  footerbg: string
}

const Footer: FC<IFooter> = (props) => {
  return <FooterStyle footerbg={props.footerbg}></FooterStyle>
}

export default memo(Footer)
