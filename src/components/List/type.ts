import { ReactNode } from 'react'

interface ApiResult<T> {
  listData: T[]
}

export interface UseListProps<T = any> {
  api: (page: number, size: number) => Promise<ApiResult<T>>
  readonly size?: number
  readonly renderItem: (item: T, index: number) => ReactNode
  readonly finishedText?: string | null | (() => ReactNode)
  readonly renderSkeleton?: () => ReactNode
}

export interface UseList<T = any> extends UseListProps {
  readonly load: (page?: number) => void
  readonly listData: T[]
}
