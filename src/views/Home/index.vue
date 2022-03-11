<template>
    <div class="top_context">
        <!-- 主页头部导航栏 -->
        <div class="item"></div>
        <!-- 正文内容 -->
        <div class="context">
            <el-row>
                <!-- 左侧card -->
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <el-card class="box-card" :body-style="{ padding: '10px' }">
                            <div slot="header" class="clearfix">
                                <span>介绍</span>
                            </div>
                            <p>博主：明月</p>
                            <p>个人名言：前人栽树，后人乘凉</p>
                            <p>
                                <i class="el-icon-cold-drink"></i>
                                <i class="el-icon-cold-drink"></i>
                                <i class="el-icon-cold-drink"></i>
                                <i class="el-icon-cold-drink"></i>
                            </p>
                        </el-card>
                        <el-card class="box-card" :body-style="{ padding: '10px' }">
                            <div slot="header" class="clearfix">
                                <span>专栏</span>
                            </div>
                            <p>java</p>
                            <p>Web</p>
                            <p>笔记</p>
                            <p>面试</p>
                            <p>心得</p>
                        </el-card>
                        <el-card class="box-card" :body-style="{ padding: '10px' }">
                            <div slot="header" class="clearfix">
                                <span>最近文章推荐</span>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item1">
                                <el-image style="width: 100px; height: 100px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                                <span>初级工程师面试问题：</span>
                            </div>
                        </el-card>
                    </div>
                </el-col>
                <!-- 右侧card -->
                <el-col :span="15">
                    <div class="grid-content" v-for="o in 5" :key="o">
                        <el-card class="box-card" :body-style="{ padding: '10px',margin:'0 0 0 20px' }">
                            初级工程师面试问题：
                            <el-divider></el-divider>
                            堆与栈的区别很明显：
                            1.栈内存存储的是局部变量而堆内存存储的是实体；
                            2.栈内存的更新速度要快于堆内存，因为局部变量的生命周期很短；
                            3.栈内存存放的变量生命周期一旦结束就会被释放，而堆内存存放的实体会被垃圾回收机制不定时的回收。
                            <el-divider></el-divider>
                            <span>展现量 190340  阅读 73526  评论 71  收藏 59</span>
                        </el-card>
                    </div>
                    <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value1: ''
        };
    }
};
</script>
<style>
    .item{
        height: 50px;
        background: rgb(170, 162, 162);
        position:sticky;
        z-index: 9999999
    }
    .context{
        background: #e7e7e7;
        height: 1200px;
        padding: 0 10% 0 10%;
        flex: 1;
        overflow-x: hidden;
    }

    .el-row {
        margin-bottom: 20px;
    }
    .el-icon-cold-drink{
        padding: 0 10px 0 0;
        font-size: 35px
    }
    .el-col {
        border-radius: 4px;
    }
    .box-card{
        margin-top: 20px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .item1{
        padding: 18px 0;
    }
    .el-col-15{
        margin-left: 50px;
        height: 500px;
    }
    p{
        padding:  8px;
    }
    .el-pagination{
        text-align: right;
        padding: 20px 0px;
    }
</style>
