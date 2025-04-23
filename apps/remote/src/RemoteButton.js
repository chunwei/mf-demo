import React from 'react'
import { Button } from '@mf-demo/shared-ui'

const RemoteButton = () => {
  return (
    <Button 
      variant="primary" 
      onClick={() => alert('来自远程应用的按钮被点击了！')}
      style={{ backgroundColor: '#ff6b6b' }}
    >
      远程应用按钮
    </Button>
  )
}

export default RemoteButton