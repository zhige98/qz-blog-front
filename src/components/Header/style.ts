import styled from 'styled-components'

export const NavBar = styled.div`
  height: 64px;
  max-width: 100%;
  padding: 0 12px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 40.71%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
`

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  .item {
    a {
      padding: 0 12px;
      color: #fff;
    }
  }
`
