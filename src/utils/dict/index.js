/**
 * @Author Li bowei
 * @Date 2022/4/16
 * @Description: 数据字典
 */

/**
 * 登录方式
 * 1:账号 2:手机号
 */
 const LoginType = {
    USERNAME: 1, // 账号
    PHONE: 2, // 手机号
    NAMES: ['账号', '手机号']
}

/**
 * 文档类型
 * 
 */
const DocType = {
    HTMLCSS: 1, 
    JS: 2, 
    UNIAPP: 3, 
    WECHAT: 4, 
    VUE2: 5, 
    NODEJS: 6, 
    GIT: 7, 
    VUE3: 8, 
    VUEUSE: 9, 
    NAMES: ['html+css', 'js+jquery','uniapp','微信小程序','Vue2.0','nodeJS','git','Vue3.0','Vue使用技巧']
}
export default {
    LoginType,
    DocType
}