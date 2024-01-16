import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/assets/css/index.less'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
// import 'highlight.js/styles/atom-one-light.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ConfigProvider locale={zhCN}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  </ConfigProvider>
)
