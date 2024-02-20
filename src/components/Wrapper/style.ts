import styled from 'styled-components'

export const WrapperStyle = styled.div<{
  type: 'home' | 'other'
  wrapperBg: string
}>`
  position: relative;
  width: 100%;
  height: ${(props) => (props.type === 'home' ? '100vh' : '400px')};
  background-image: url(${(props) => props.wrapperBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: -64px;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    content: '';
  }
  .site-info-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .site-info-down {
    position: absolute;
    width: 100%;
    bottom: 24px;
    font-size: 36px;
    color: #eee;
    animation: moveDown 1.5s infinite;
    cursor: pointer;
    display: flex;
    justify-content: center;
    &:hover {
      color: #fff;
    }
  }

  @keyframes moveDown {
    0% {
      bottom: 24px;
    }
    50% {
      bottom: 0px;
    }
    100% {
      bottom: 24px;
    }
  }
`
export const SiteInfoStyle = styled.div`
  color: #fff;
  text-align: center;
  .site-name {
    font-size: 36px;
  }
  .site-info {
    position: relative;
    margin-top: 12px;
    font-size: 24px;
    height: 32px;
  }
  .blink {
    position: absolute;
    top: 4px;
    width: 3px;
    margin-left: 2px;
    background-color: #fff;
    animation: blink 1s infinite;
    height: 28px;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
