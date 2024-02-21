import styled from 'styled-components'

const theme = {
  color: {
    primary: '#2254f4'
  },
  width: {
    pad: 1024,
    mobile: 768,
    mini_mobile: 576
  },
  contentPadding: () => {
    return styled.div`
      padding: 48px 32px;

      @media screen and (max-width: ${theme.width.mobile}px) {
        padding: 24px;
      }
      @media screen and (max-width: ${theme.width.mini_mobile}px) {
        padding: 20px;
      }
    `
  }
}

export default theme
