<template>
    <header>
        <div class="first_floor">
            <span class="top1">Hi <span v-html="dateData.hour<12?'上午好！':'下午好！'"/> 今天是 {{dateData.year}}年{{dateData.month}}月{{dateData.date}}号 {{weekday[dateData.week]}}</span>
            <span class="floatright">您好，欢迎访问 明月 个人博客
                <el-button type="primary" size="mini" plain>QQ登录</el-button>
                <el-button type="success" size="mini" plain>微信登录</el-button>
                <el-button type="warning" size="mini" plain>会员登录</el-button>
            </span>
        </div>
        <div class="second_floor">
            <ul>
                <li>Home</li>
                <li>Resume</li>
                <li>Settings</li>
                <li>Blog</li>
                <li>Propaganda</li>
                <li>Notepad</li>
                <li>Commodity</li>
                <li>Backstage</li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return {
            dateData: {
                year: '',
                month: '',
                date: '',
                hour: '',
                week: ''
            },
            weekday: { 0: '星期日', 1: '星期一', 2: '星期二', 3: '星期三', 4: '星期四', 5: '星期五', 6: '星期六' }
        };
    },
    created () {
        const nowDate = new Date();
        this.dateData = {
            year: nowDate.getFullYear(),
            month: nowDate.getMonth() + 1,
            date: nowDate.getDate(),
            hour: nowDate.getHours(),
            week: nowDate.getDay()
        };
    }
};
</script>

<style lang="scss" scoped>
*{
    margin: 0px;
    padding: 0px;
}
.header{
    position:fixed;
    z-index: 9999999;
    width:100%;
    padding: 0 10% 0 10%;
}
ul{
    list-style:none;
    margin:0;
}
li{
    display:inline;
    margin-right: 50px;
    cursor: pointer;
}
.first_floor{
    background-color: #e7e7e7;
    height: 30px;
    color: #7c7c7c;
    padding: 0 10% 0 10%;
    display: flex;
}
.top1{
    align-self: center;
}
.floatright{
    right: 10%;
    align-self: center;
    position: absolute;
}
.second_floor{
    padding: 0 10% 0 10%;
    background-color: #3b3b3b;
    height: 30px;
    display: flex;
    align-items: center;
    color: #e7e7e7;
    font-size: 8px;
}
</style>
