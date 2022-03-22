<template>
  <div class="content">
         <el-descriptions class="margin-top" :column="3" :size="size" border>
            <template slot="extra">
            </template>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                用户名
            </template>
            kooriookami
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号
            </template>
            18100000000
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-location-outline"></i>
                居住地
            </template>
            苏州市
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-tickets"></i>
                备注
            </template>
            <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-office-building"></i>
                联系地址
            </template>
            江苏省苏州市吴中区吴中大道 1188 号
            </el-descriptions-item>
        </el-descriptions>
  </div>
</template>

<script>
export default {};
</script>

<style>
.content{
    padding: 50px 10% 0 10%;
    background-color: rgb(193, 255, 213);
    height: 1500px;
}
</style>
