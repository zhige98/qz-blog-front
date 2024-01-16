import React, { FC, useEffect, useRef, useState } from 'react'
import MyList from '@/components/List'
import { getListData } from '@/views/home/services'
import ListItem from '@/views/home/components/HomeList/components/ListItem'
import { IListItem } from '@/views/home/components/HomeList/type'
import { Input } from 'antd'
import ItemSkeleton from '@/views/home/components/HomeList/components/ItemSkeleton'

interface ISearchList {
  labelIdList: number[]
}

const SearchList: FC<ISearchList> = (props) => {
  const keyword = useRef('')
  const labelIdList = useRef<number[]>([])
  const homeUseList = MyList.use<IListItem>({
    api(page, size) {
      return getListData({
        page,
        size,
        keyword: keyword.current,
        labels: labelIdList.current
      }).then((res) => {
        return {
          listData: res
        }
      })
    },
    renderItem: (item) => <ListItem item={item}></ListItem>,
    renderSkeleton: () => <ItemSkeleton />
  })

  const search = () => {
    homeUseList.load(1)
  }

  useEffect(() => {
    labelIdList.current = props.labelIdList

    homeUseList.load(1)
  }, [props.labelIdList])
  return (
    <div>
      <Input
        className="searchInput"
        placeholder="请输入文章关键词搜索"
        onPressEnter={search}
        onChange={(e) => (keyword.current = e.target.value)}
      />
      <MyList use={homeUseList}></MyList>
    </div>
  )
}

export default SearchList
