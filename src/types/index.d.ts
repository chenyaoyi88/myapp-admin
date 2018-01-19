// 全局请求响应格式
interface APP_Response<T> {
    // 相响应码
    code: string;
    // 响应信息
    msg: string;
    // 响应数据
    data: T | any;
}