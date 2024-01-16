import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MyLink = styled(Link)`
  color: inherit;
  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`
