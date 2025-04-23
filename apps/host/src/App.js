import React, { Suspense, useState } from 'react'
import { Button, Card } from '@mf-demo/shared-ui'

// 使用React.lazy动态导入远程模块
const RemoteApp = React.lazy(() => import('remote/RemoteApp'))
const RemoteButton = React.lazy(() => import('remote/RemoteButton'))

const App = () => {
  const [showRemote, setShowRemote] = useState(false)

  return (
    <div className="container">
      <header>
        <h1>模块联邦 + pnpm 最佳实践演示</h1>
        <p>这是主应用，端口3000</p>
      </header>

      <div className="app-section">
        <h2>本地组件（来自共享UI库）</h2>
        <Card title="主应用卡片">
          <p>这个Card组件来自共享UI库 (@mf-demo/shared-ui)</p>
          <Button onClick={() => alert('主应用按钮点击')}>主应用按钮</Button>
        </Card>
      </div>

      <div className="app-section">
        <h2>远程组件（来自远程应用）</h2>
        <Button variant="secondary" onClick={() => setShowRemote(!showRemote)}>
          {showRemote ? '隐藏' : '显示'}远程组件
        </Button>

        {showRemote && (
          <div style={{ marginTop: '20px' }}>
            <Suspense fallback={<div>加载远程按钮...</div>}>
              <RemoteButton />
            </Suspense>

            <Suspense fallback={<div>加载远程应用...</div>}>
              <RemoteApp />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
