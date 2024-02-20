import styled from 'styled-components'

export const NavBar = styled.div`
  position: relative;
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
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  .item {
    position: relative;
    color: #eee;
    a:hover {
      color: #fff;
    }
    &:not(:first-child) {
      margin-left: 12px;
    }
    &:hover {
      &::after {
        width: 100%;
        transition: all 0.3s ease-in-out;
      }
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #ccc;
    }
  }
  .item-name {
    margin-left: 4px;
  }
  .site-name {
    font-weight: bold;
    padding: 0 12px;
    color: #eee;
    &:hover {
      color: #fff;
    }
  }
`

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
