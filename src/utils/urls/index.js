/**
 * @Author Li bowei
 * @Date 2021/2/12
 * @Description: 配置文件
 */

export default {
  // 服务器地址
  target: '',
  // 资源文件地址
  resourceHost: '',
  // 论坛地址
  forumHost: '',
  // 三方登录地址
  otherLoginUrl: '',
  // 老平台地址
  originalCloud: '',
  // socket服务
  lessonSocket: 'ws://172.20.10.5:8082/ws/chat',
  // 接口版本
  edition: '/v1',
  // IP地址
  // targetUrl: 'http://192.168.100.79:3000',
  targetUrl: 'http://172.20.10.5:3000',

  // 上传文件
  uploadFile: '/fileManage/upload',
  // 学生导入模板obs路径
  excelTemplate: '/public/xlsx/',
  // 开课服务
  instance: '/instances',
  // 系统服务
  sys: '/sys',
  // 课堂服务
  lesson: '/lesson',
  // 用户服务
  user: '/user',
  // 租户服务
  tenant: '/tenant',
  // 课程服务
  clazz: '/classes',
  // 作业服务
  homework: '/homework',
  // 论坛管理
  forum: '/forum',
  // 数据统计
  stats: '/stats/data-analysis'

}
