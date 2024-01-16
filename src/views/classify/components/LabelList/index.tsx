import { useAppDispatch, useAppSelector } from '@/store'
import { labelAction } from '@/store/module/classify'
import React, { FC, memo, useEffect, useState } from 'react'
import { BookOutlined } from '@ant-design/icons'
import { LabelStyle } from './style'
import { ILabels } from '../../type'
import classNames from 'classnames'

interface ILabelList {
  onGetLabel: (labelIds: number[]) => void
}

const LabelList: FC<ILabelList> = (props) => {
  const [labels, setLabels] = useState<(ILabels & { active: boolean })[]>([])

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(labelAction())
  }, [])

  const { labelsList } = useAppSelector((state) => ({
    labelsList: state.classify.labelList
  }))

  useEffect(() => {
    setLabels(
      labelsList.map((item) => ({
        active: false,
        ...item
      }))
    )
  }, [labelsList])

  function handleLabel(value: ILabels & { active: boolean }) {
    if (value.active) {
      value.active = false
    } else {
      labels.forEach((item) => {
        if (item.active) item.active = false
      })
      value.active = true
    }

    props.onGetLabel?.([value.id])
  }

  return (
    <LabelStyle>
      <div className="label__desc">
        <BookOutlined />
        <span className="label__desc_text">文章标签</span>
      </div>
      {labels.map((item) => {
        return (
          <div className="label__box" key={item.id}>
            <div
              className={classNames([
                'label__item',
                item.active && 'label__active'
              ])}
              onClick={() => handleLabel(item)}
            >
              {item.name}
              {`(${item.counts})`}
            </div>
          </div>
        )
      })}
    </LabelStyle>
  )
}

export default memo(LabelList)
