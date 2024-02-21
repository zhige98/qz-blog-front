import MdView from '@/components/MdView'
import ViewContainer from '@/components/ViewContainer'
import { useAppDispatch, useAppSelector } from '@/store'
import { detailContentAction } from '@/store/module/detail'
import React, { memo, useEffect } from 'react'
import DetailWrapper from '@/components/Wrapper'
import detailBg from '@/components/Wrapper/images/detail.png'
import { DetailStyle } from './style'
import { useParams } from 'react-router-dom'
import Footer from '@/components/Footer'

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
    <DetailStyle>
      <DetailWrapper detailData={data} type="detail" wrapperbg={detailBg} />
      <ViewContainer size="mini">
        <div className="detail-content">
          <MdView content={data.content} />
        </div>
      </ViewContainer>
      <Footer footerbg={detailBg} />
    </DetailStyle>
  )
}

export default memo(Detail)
