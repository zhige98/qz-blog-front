import styled from 'styled-components'

export const LabelStyle = styled.div`
  padding: 24px;
  .label__desc {
    padding-bottom: 12px;
    border-bottom: 1px solid #dbd9de;
  }
  .label__desc_text {
    font-size: 16px;
    margin-left: 6px;
    font-weight: 700;
  }
  .label__box {
    padding: 6px 0;
  }
  .label__item {
    cursor: pointer;
    color: #262626;
    &:hover {
      color: ${(props) => props.theme.color.primary};
    }
  }
  .label__active {
    color: ${(props) => props.theme.color.primary};
    font-weight: 600;
  }
`
