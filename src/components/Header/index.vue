<template>
    <div class="">
        <header class="header">
            <span class="left_header">Hi 上午好！今天是2022年03月11号 星期五</span>
            <span class="right_header">您好，欢迎访问明月个人博客 QQ登录/微信登录/会员登录</span>
        </header>
        <!-- 主页头部导航栏 -->
        <div class="item">
                <!-- <el-menu
                    :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu> -->
            </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header {
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: rgb(231,231,231) ;
    color: rgb(124,124,124);
    position:sticky;
    z-index: 9999999
}
.left_header{
    padding:  3px 0 0 10%;
    float: left;
}
.right_header{
    padding:  3px 10% 0 ;
    float: right;
    padding-right: 10%;
}
</style>
