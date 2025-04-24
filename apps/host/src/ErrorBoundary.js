import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            style={{
              padding: '20px',
              margin: '20px 0',
              border: '1px solid #f56c6c',
              borderRadius: '4px',
              backgroundColor: '#fef0f0',
              color: '#f56c6c'
            }}
          >
            <h4>组件加载失败</h4>
            <p>{this.state.error?.message}</p>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
