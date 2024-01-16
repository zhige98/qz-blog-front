import theme from '@/assets/theme'
import styled from 'styled-components'

export const Container = styled(theme.contentPadding())`
  .view_contain_content {
    width: 100%;
    margin: 0 auto;
  }
  .view_contain_mini {
    max-width: 1200px;
  }
  .view_contain_large {
    max-width: 1344px;
  }
  .view_contain_large {
    max-width: 100%;
  }
`
