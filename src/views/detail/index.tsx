import MdView from '@/components/MdView'
import ViewContainer from '@/components/ViewContainer'
import { useAppDispatch, useAppSelector } from '@/store'
import { detailContentAction } from '@/store/module/detail'
import htmlCodeLight from '@/utils/markedHighlight'
import React, { memo, useEffect } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const Detail = () => {
  const dispatch = useAppDispatch()
  const params = useParams<{ id: string }>()
  const { data } = useAppSelector((state) => ({
    data: state.detail.detailContent
  }))

  useEffect(() => {
    dispatch(detailContentAction(params.id as string))
  }, [])

  return (
    <ViewContainer>
      {/* <div
        dangerouslySetInnerHTML={{ __html: htmlCodeLight(data.content || '') }}
      ></div> */}
      <MdView content={data.content} />
    </ViewContainer>
  )
}

export default memo(Detail)
