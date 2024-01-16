import { Skeleton } from 'antd'
import React from 'react'
const ItemSkeleton = () => {
  return (
    <div>
      <Skeleton
        avatar={{
          shape: 'square',
          size: 170
        }}
        paragraph={{ rows: 4 }}
        active
      />
    </div>
  )
}

export default ItemSkeleton
