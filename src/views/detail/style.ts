import styled from 'styled-components'
import linkSvg from './images/link.svg'
import hoverLinkSvg from './images/hoverLink.svg'

export const DetailStyle = styled.div`
  .detail-content {
    padding: 48px;
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      position: relative;
      margin: 20px 0 14px;
      padding-left: 26px;
      transition: all 0.2s ease-out;
      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 7px);
        margin-left: -26px;
        display: block;
        width: 22px;
        height: 19px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${linkSvg});
      }
      &:hover {
        padding-left: 34px;

        &::before {
          background-image: url(${hoverLinkSvg});
        }
      }
    }
    p {
      margin: 0 0 16px;
      color: #4c4948;
    }
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
  }
`
