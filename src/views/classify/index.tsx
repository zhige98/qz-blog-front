import React, { useRef, useState } from 'react'

import SearchList from './components/SearchList'
import LabelList from './components/LabelList'
import { ClassifyStyle } from './style'
import ViewContainer from '@/components/ViewContainer'

const Classify = () => {
  const [labelIdList, setLabelIds] = useState<number[]>([])
  function getLabel(labelIds: number[]) {
    setLabelIds(labelIds)
  }
  return (
    <ViewContainer>
      <ClassifyStyle>
        <div className="classify_left">
          <LabelList onGetLabel={getLabel} />
        </div>
        <div className="classify_right">
          <SearchList labelIdList={labelIdList} />
        </div>
      </ClassifyStyle>
    </ViewContainer>
  )
}

export default Classify