import RouterLink from '@/components/RouterLink'
import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);

  .img {
    width: 170px;
    height: 120px;
  }
  .right {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    flex: 1;
  }
  .title-box {
    margin-bottom: 12px;
  }
`

export const TitleLink = styled(RouterLink)`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.88);
  font-weight: bold;
`
export const DescLink = styled(RouterLink)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
`