## APP 后台管理

此项目为 APP 的后台管理，配合 [myapp-backend](https://github.com/chenyaoyi88/myapp-backend) 这个后端项目的数据展示

### 开发模式

前后端分离，后端服务提供接口，前端请求接口获取数据并实现路由和页面逻辑。

### 技术栈

* angular v5.0.0
* augular-cli v1.6.1
* ng-zorro-antd v0.6.7（后期将会移除，改为全部自己写的 UI 组件）

### 预期实现功能

1. 注册、登录、退出
2. 增删改查文章
3. 上传图片
4. 留言、评论
5. 用户权限

### 目前已完成功能

| 项目     | 完成度 |
| -------- | ------ |
| 界面布局 | 30%    |
| 数据对接 | 10%    |

### 命令

##### 安装

```bash
npm install
```

注：尽量使用 npm 安装，因为使用 cnpm 安装会出现 angular-cli 依赖模块没有安装上的情况。

##### 开发 / 启动项目：

```bash
npm start
```

##### 打包项目（aot 模式）

```bash
npm run build:prod
```

### 目录结构描述

```
├── node_modules                        // 应用所需的依赖包
├── src                                 // 应用的全部业务代码以及资源文件
│   └── app                             // 应用的主业务代码
|       ├── api                         // 应用的 api
|       ├── component                   // 应用的公共页面/功能组件
|       ├── services                    // 应用的公共服务
|       ├── shared                      // 应用的公共方法
|       ├── view                        // 应用的所有页面
|       ├── app.component.html          // 应用的根组件 html
|       ├── app.component.scss          // 应用的根组件 scss
|       ├── app.component.ts            // 应用的根组件 ts
|       ├── app.module.ts               // 应用的主模块
|       └── app.routing.module.ts       // 应用的主路由模块配置      
│   ├── assets                          // 应用的图片资源
│   ├── environments                    // 应用的环境变量
│   ├── styles                          // 应用的所有的样式文件
│   ├── types                           // 应用的主要业务的声明文件
│   ├── favicon.ico                     // 应用的 icon
│   ├── index.html                      // 应用的 html 入口
│   ├── main.ts                         // 应用的引导程序和平台相关的逻辑
│   ├── polyfills.ts                    // 应用的兼容性补丁包
│   ├── test.ts                         // 应用的测试入口
│   ├── tsconfig.app.json               // 应用的业务文件的编译配置
│   ├── tsconfig.spec.json              // 应用的测试文件的编译配置
│   └── typings.d.ts                    // 接口声明
├── .angular-cli.json                   // angular-cli默认配置
├── .editorconfig                       // 编码风格规范
├── .gitignore                          // 用于配置不需要加入版本管理的文件
├── package-lock.json                   // 记录并且锁定应用的依赖包和项目的配置
├── package.json                        // 应用的开发/执行依赖包、命令配置和项目说明
├── protractor.conf                     // 应用的自动化测试配置
├── README.md                           // 应用的介绍文件（本文件）
├── tsconfig.json                       // typescript的编译配置
└── tslint.json                         // typescript的编码规范配置
```

### cli 命令

创建组件

```bash
# 在 src/app/view/home 下面添加一个 setting 组件
ng g component view/home/setting --module app
```

### 问题记录

2017.01.22

开发的时候出现以下提示：

```bash
WARNING in Duplicated path in loadChildren detected during a rebuild. We will take the latest version detected and override it to save rebuild time. You should perform a full build to validate that your routes don't overlap.
```

在重建过程中检测到的 loadChildren 中的重复路径警告。我们将使用最新的版本，并覆盖它以节省重建时间。您应该执行完整的构建，以验证您的路由不会重叠。

issue：[相关issue地址](https://github.com/angular/angular-cli/issues/8722)