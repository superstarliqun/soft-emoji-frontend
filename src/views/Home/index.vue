<template>
    <div class="content">
        <el-row>
            <el-col :span="8">
                <el-card class="box-card">
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
                <el-card class="box-card">
                   <div slot="header" class="clearfix">
                        <span>专栏</span>
                    </div>
                    <p>java</p>
                    <p>Web</p>
                    <p>笔记</p>
                    <p>面试</p>
                    <p>心得</p>
                </el-card>
                <el-card class="box-card">
                   <div slot="header" class="clearfix">
                        <span>最近文章推荐</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item1">
                        <el-image style="width: 100px; height: 100px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-image>
                        <span>初级工程师面试问题：</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
                <ul>
                    <li v-for="o in 4" :key="o" class="text item">
                        <el-card class="box-card">
                            初级工程师面试问题：
                            <el-divider></el-divider>
                            堆与栈的区别很明显：
                            1.栈内存存储的是局部变量而堆内存存储的是实体；
                            2.栈内存的更新速度要快于堆内存，因为局部变量的生命周期很短；
                            3.栈内存存放的变量生命周期一旦结束就会被释放，而堆内存存放的实体会被垃圾回收机制不定时的回收。
                            <el-divider></el-divider>
                            <span>展现量 190340  阅读 73526  评论 71  收藏 59</span>
                        </el-card>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value1: '',
            activeIndex: '1',
            activeIndex2: '1',
            dateData: {
                year: '',
                month: '',
                date: '',
                hour: '',
                minute: '',
                second: ''
            }
        };
    },
    activated () {
    },
    methods: {
    }
};
</script>
<style>
.content{
    padding: 20px 10% 0 10%;
    background-color:#e7e7e7;
    height: 800px;
}
.el-col{
    padding: 5px;
}
.box-card{
    margin-bottom: 20px;
}
ul{
    list-style:none;
}
</style>
