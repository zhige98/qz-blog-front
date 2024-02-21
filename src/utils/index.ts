import dayjs from 'dayjs'

// 系统显示时间格式
export const formatTime = (dateString: string) => {
  return dayjs(dateString).format('YYYY-MM-DD')
}
