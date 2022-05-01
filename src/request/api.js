import { get, post } from "./http.js"

// get请求
export const userinfo = () => get("/")

// post有文件
// export const cateadd=(params)=>post("/api/cateadd",params,true)

// post无文件
// export const catedelete=(params)=>post("/api/catedelete",params)

