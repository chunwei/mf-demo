import React from 'react'
import { Card } from '@mf-demo/shared-ui'

const RemoteApp = () => {
  return (
    <Card title="远程应用组件" style={{ borderColor: '#ff6b6b' }}>
      <p>这个组件来自远程应用，通过模块联邦加载</p>
      <p>当前时间: {new Date().toLocaleTimeString()}</p>
    </Card>
  )
}

export default RemoteApp