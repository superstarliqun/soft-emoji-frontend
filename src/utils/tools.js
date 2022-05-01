import { Loading } from 'element-ui'
// 控制loading加载状态
export const loading = (function(options) {
    let instance
    return function(show = true, custom) {
      if (show) {
        instance = Loading.service(custom || options)
        return instance
      } else if (instance) {
        instance.close()
      }
    }
  })({
    lock: true,
    text: '请稍后...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })


    // "@vue/cli-plugin-eslint"