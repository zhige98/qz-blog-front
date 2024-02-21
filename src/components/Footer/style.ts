import styled from 'styled-components'

export const FooterStyle = styled.div<{
  footerbg: string
}>`
  position: relative;
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.footerbg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    content: '';
  }
`
