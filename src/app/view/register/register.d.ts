// 注册参数
interface Register_params {
  // 用户名
  username: string;
  // 密码
  password: string;
  // 密码2
  password2?: string;
}

// 登录返回
interface Login_Response {
  token: string;
}