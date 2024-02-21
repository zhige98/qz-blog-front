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
    justify-content: space-between;
    margin-left: 24px;
    flex: 1;
  }
  .content-desc {
    display: flex;
    align-items: center;
    color: #858585;
    font-size: 12px;
  }
  .title-box {
    margin-bottom: 12px;
  }
  .time-icon {
    margin-right: 4px;
  }
  .content-time {
    margin-right: 12px;
  }
  .segment {
    margin-right: 12px;
  }
  .label-icon {
    margin-right: 6px;
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
