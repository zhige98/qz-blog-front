import { Col, Row } from 'antd'
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { UseList, UseListProps } from './type'
import { ListLoading } from './style'

const MyList: FC<{ use: UseListProps }> = (props) => {
  const [listData, setListData] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [isFinish, setIsFinish] = useState(false)

  const loadingRef = useRef<boolean>(false)
  loadingRef.current = loading

  const size = useMemo(() => {
    return props.use.size || 10
  }, [props.use.size])

  const getListData = useCallback(
    // 选择采用传入listData是由于闭包，不想多出一个ref对listData的引用，数据更新都在下方监听滚动中添加依赖项传入
    (curPage: number, listData: any[]) => {
      if (loadingRef.current) return
      setLoading(true)
      setPage(curPage)

      props.use.api(curPage, size).then((res) => {
        if (curPage === 1) {
          setListData(res.listData)
        } else {
          setListData(listData.concat(res.listData))
        }

        if (res.listData.length < size) {
          setIsFinish(true)
        }

        setLoading(false)
      })
    },
    []
  )

  useEffect(() => {
    getListData(page, [])
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (isFinish) return
      const clientHeight = document.documentElement.clientHeight // 浏览器窗口可视区域的高度
      const scrollHeight = document.body.scrollHeight // 整个文档的实际高度，包括不可见的部分
      const scrollTop = document.documentElement.scrollTop // 滚动条向下滚动的距离，也就是页面顶部被隐藏在上方的部分的高度

      if (scrollTop + clientHeight >= scrollHeight - 200) {
        getListData(page + 1, listData)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [page, listData.length])

  const finishRender = useMemo(() => {
    if (!isFinish) {
      return null
    }
    if (listData.length === 0) {
      return null
    }
    const { finishedTest = '无更多数据了' } = props.use
    if (typeof finishedTest === 'function') {
      return finishedTest()
    } else if (typeof finishedTest === 'object') {
      return finishedTest
    } else {
      return <div>{finishedTest}</div>
    }
  }, [isFinish])

  // @ts-ignore
  props.use.load = (curPage?: number) => {
    getListData(curPage ?? page, [])
  }

  // @ts-ignore
  props.use.listData = listData

  return (
    <Row>
      {loading && page <= 1
        ? new Array(size).fill('').map((_, index) => {
            return (
              <Col {...{ xs: 24, sm: 24 }} key={`my-skeleton-${index}`}>
                {props.use.renderSkeleton?.()}
              </Col>
            )
          })
        : listData.map((item, index) => {
            return (
              <Col {...{ xs: 24, sm: 24 }} key={`my-list-${index}`}>
                {props.use.renderItem(item, index)}
              </Col>
            )
          })}

      {finishRender}
      {loading && (
        <ListLoading>
          <div> 加载中...</div>
        </ListLoading>
      )}
    </Row>
  )
}

function useList<T>(data: UseListProps<T>) {
  return data as UseList<T>
}

const MyListWithUse = Object.assign(MyList, { use: useList })

export default MyListWithUse
