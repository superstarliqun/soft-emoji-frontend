// 在utils/alert.js中
import Vue from "vue"
const vm = new Vue()

export const success = (msg) => {
    vm.$message({
        showClose: true,
        message: msg,
        type: 'success'
    });
}

export const warning = (msg) => {
    vm.$message({
        showClose: true,
        message: msg,
        type: 'warning'
    });
}

// 以后在组件中使用的时候
// import {success,warning} from "./utils/alert.js"
// successAlert("哈哈哈，成功了")
// warningAlert("嘿嘿嘿，失败了")