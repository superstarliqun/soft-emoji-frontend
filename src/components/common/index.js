// 在components/index.js中
import Vue from "vue"

import VideoPlay from "./ComicVideo.vue"
let obj = {
    VideoPlay
}

for (let i in obj) {
    Vue.component(i, obj[i])
}
