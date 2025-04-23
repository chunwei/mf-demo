import React from 'react'
import { Card, Button } from '@mf-demo/shared-ui'
import RemoteButton from './RemoteButton'
import RemoteApp from './RemoteApp'

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>远程应用</h1>
        <p>这是远程应用，端口3001</p>
      </header>

      <div className="app-section">
        <h2>远程应用组件</h2>
        <Card title="远程应用卡片">
          <p>这个卡片在远程应用中渲染，使用共享UI库</p>
          <Button onClick={() => alert('远程应用按钮点击')}>远程应用按钮</Button>
        </Card>
      </div>

      <div className="app-section">
        <h2>被暴露的组件</h2>
        <p>以下组件通过模块联邦暴露给主应用使用：</p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <div>
            <h3>RemoteButton</h3>
            <RemoteButton />
          </div>
          <div>
            <h3>RemoteApp</h3>
            <RemoteApp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App