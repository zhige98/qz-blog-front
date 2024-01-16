import React from 'react'
import MyList from '@/components/List'
import { getListData } from '../../services'
import ListItem from './components/ListItem'
import { IListItem } from './type'
import ItemSkeleton from './components/ItemSkeleton'
import { ListStyle } from './style'

function HomeList() {
  const homeUseList = MyList.use<IListItem>({
    api(page, size) {
      return getListData({ page, size }).then((res) => {
        return {
          listData: res
        }
      })
    },
    renderItem: (item) => <ListItem item={item}></ListItem>,
    renderSkeleton: () => <ItemSkeleton />
  })

  return (
    <ListStyle>
      <MyList use={homeUseList}></MyList>
    </ListStyle>
  )
}

export default HomeList
