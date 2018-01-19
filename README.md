## APP 后台管理

此项目为 APP 的后台管理，配合 [myapp-backend](https://github.com/chenyaoyi88/myapp-backend) 这个后端项目的数据展示

### 开发模式

前后端分离，后端服务提供接口，前端请求接口获取数据并实现路由和页面逻辑。

### 技术栈

- angular           v5.0.0
- augular-cli       v1.6.1
- ng-zorro-antd     v0.6.7

### 预期实现功能

1. 注册、登录、退出
2. 增删改查文章
3. 上传图片
4. 留言、评论
5. 用户权限

### 目前已完成功能

| 项目                | 完成度     | 
| ------------------- | -------- |
| 界面布局              | 30% | 
| 数据对接             | 10% | 


### cli命令

创建组件

```bash
# 在 src/app/view/home 下面添加一个 setting 组件
ng g component view/home/setting --module app
```
