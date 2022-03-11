<template>
    <header class="header">
        <span class="left_header">Hi 上午好！今天是2022年03月11号 星期五</span>
        <span class="right_header">您好，欢迎访问明月个人博客 QQ登录/微信登录/会员登录</span>
    </header>
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
