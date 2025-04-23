# 模块联邦(Module Federation) + pnpm 最佳实践

这个项目展示了如何结合使用Webpack的模块联邦(Module Federation)和pnpm工作空间来创建高效的微前端架构。

包括：
- 使用pnpm工作空间管理多个应用和共享库
- 使用Webpack的模块联邦(Module Federation)实现微前端架构
- 通过 pnpm 的内容寻址存储可以有效减少重复依赖
- 通过模块联邦在应用间共享组件
- 共享依赖以减少重复加载
- 使用React.lazy和Suspense实现动态加载
- 每个应用可以独立开发和部署，同时保持集成能力
- 统一的构建和开发体验


## 项目结构

```
├── apps/
│   ├── host/         # 主应用 - 集成所有远程模块
│   └── remote/       # 远程应用 - 提供可被主应用消费的模块
├── packages/
│   └── shared-ui/    # 共享UI组件库
├── package.json      # 根项目配置
└── pnpm-workspace.yaml  # pnpm工作空间配置
```

## 核心技术

- **模块联邦(Module Federation)**: Webpack 5 提供的功能，允许多个独立构建的应用共享代码
- **pnpm**: 高性能的包管理器，支持monorepo工作空间
- **React**: 用于构建用户界面的JavaScript库

## 关键特性

1. **共享依赖**: 所有应用共享相同版本的React，避免重复加载
2. **运行时集成**: 主应用可以在运行时动态加载远程应用的组件
3. **独立开发/部署**: 每个应用可以独立开发和部署
4. **工作空间管理**: 使用pnpm高效管理多包项目依赖

## 使用方法

### 准备
```bash
# 克隆项目到本地：
git clone https://github.com/chunwei/mf-demo.git

# 进入项目目录：
cd mf-demo
```

### 安装依赖

```bash
pnpm install
```

### 启动所有开发服务器

```bash
pnpm dev
```

您可以通过访问 http://localhost:3000 查看主应用，
通过 http://localhost:3001 查看远程应用。

### 构建所有项目

```bash
pnpm build
```

### 启动所有生产服务器

```bash
pnpm serve
```

### 单独启动

```bash
# 启动主应用（端口3000）
pnpm serve:host

# 启动远程应用（端口3001）
pnpm serve:remote
```

## 模块联邦配置说明

每个应用都有自己的webpack配置，其中包含模块联邦插件的设置：

- **主应用(Host)**: 配置为消费远程模块
- **远程应用(Remote)**: 配置为暴露模块给主应用

共享依赖通过`shared`配置项实现，确保React等库只加载一次。