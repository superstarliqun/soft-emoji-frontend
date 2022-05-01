export function filterTime(time) {
    let date = new Date(time)
    let y = date.getFullYear()
    let m = String(date.getMonth() + 1).padStart(2, "0")
    let d = (date.getDate() + "").padStart(2, "0")
    let h = (date.getHours() + "").padStart(2, "0")
    let mi = (date.getMinutes() + "").padStart(2, "0")
    let s = (date.getSeconds() + "").padStart(2, "0")

    let t = `${y}-${m}-${d}  ${h}:${mi}:${s}`

    return t
}

export function dateFormat(timestamp, pattern = 'yyyy-MM-dd HH:mm') {
    if (!timestamp) {
        return ''
    }
    const time = new Date(timestamp)
    if (!time) {
        return ''
    }

    const o = {
        'M+': time.getMonth() + 1, // 月份
        'd+': time.getDate(), // 日
        'H+': time.getHours(), // 小时
        'm+': time.getMinutes(), // 分,
        's+': time.getSeconds(), // 秒
        // 'w+': getWeek(time.getDay()), // 秒
        'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
        S: time.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(pattern)) {
        pattern = pattern.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(pattern)) {
            pattern = pattern.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return pattern
}