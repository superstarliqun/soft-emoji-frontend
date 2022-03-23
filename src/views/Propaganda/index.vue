<template>
  <div class="content">
    <el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
          <el-image  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.musicedu8.com%2Fd%2Ffile%2FTeachingPic%2Fsucai%2F2018-12-10%2Fa2cc12419682f1888f839b3a030b7544.jpg&refer=http%3A%2F%2Fwww.musicedu8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650617481&t=95816580debf204fa0d053028d15b501" fit="true"></el-image>
      </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {

};
</script>

<style>
 .content{
   background-color: white !important;
 }
</style>
