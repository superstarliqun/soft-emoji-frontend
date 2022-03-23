<template>
  <div class="content">
        <el-descriptions class="margin-top" :column="3" :size="size" border>
            <template slot="extra"></template>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-user"></i>姓名</template>向明月
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-mobile-phone"></i>手机号</template>17767746537
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-location-outline"></i>居住地</template>北京市昌平区
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-tickets"></i>职位</template><el-tag size="small">Java工程师</el-tag></el-descriptions-item>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-office-building"></i>联系地址</template>北京市海淀区中关村111号
            </el-descriptions-item>
        </el-descriptions>
        <div class="technology">
            <el-divider></el-divider>
            <p>技术领域：Java、Springboot、mysql、</p>
            <el-divider></el-divider>
             <p>工作经验：</p>
            <el-divider></el-divider>
            <p>项目经验：</p>
            <el-divider></el-divider>
            <p>自我评价：</p>
            <el-divider></el-divider>
            <p>敬语：感谢您百忙之中垂阅我的个人简历！</p>
        </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.technology{
    height: 500px;
    /* background-color: rgb(124, 111, 111); */
    margin-top: 2em;
}
p{
 font-size: 18px;
 color: rgb(87, 87, 87);
}
</style>
