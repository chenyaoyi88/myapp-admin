// 注册参数
interface Login_params extends Register_params {
    // 是否记住密码
    remember?: boolean;
}

// 登录响应
interface Login_Response extends APP_Response<null> {
    // token
    token: string;
}