import React, { useRef, useState } from 'react'
import SearchList from './components/SearchList'
import LabelList from './components/LabelList'
import ViewContainer from '@/components/ViewContainer'
import ClassifyWrapper from '@/components/Wrapper'
import classifyBg from '@/components/Wrapper/images/classify.png'
import { ClassifyStyle } from './style'

const Classify = () => {
  const [labelIdList, setLabelIds] = useState<number[]>([])
  function getLabel(labelIds: number[]) {
    setLabelIds(labelIds)
  }
  return (
    <div>
      <ClassifyWrapper wrapperBg={classifyBg} />
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
    </div>
  )
}

export default Classify
