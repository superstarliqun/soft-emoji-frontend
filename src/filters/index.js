// 在filters/index.js中
import Vue from "vue"
import { filterTime, dateFormat } from "./filterTime"

let obj = {
    filterTime,
    dateFormat
}

for (let i in obj) {
    Vue.filter(i, obj[i])
}