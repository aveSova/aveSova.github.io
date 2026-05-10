import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import '@ant-design/v5-patch-for-react-19'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#e9b53a',
        },

        components: {
          Select: {
            colorText: '#FFFF',
            selectorBg: '#e9b53a',
            optionSelectedBg: '#e9b53a',
            optionSelectedColor: '#2e2b2c',
            optionActiveBg: '#AC862C',
            colorBorder: '#e9b53a',
            colorBgElevated: '#2e2b2c',
          },

          Radio: {
            colorText: '#FFFF'
          },

          Checkbox: {
            colorText: '#FFFF'
          }
        }
      }}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
