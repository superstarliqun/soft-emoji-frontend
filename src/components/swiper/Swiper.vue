<!--
   @Author: Li bowei
   @Date: 2021/12/10
   @Description:轮播图组件
 -->

<template>
  <div class="swiper">
    <el-carousel
      ref="swiper"
      height="100vh"
      :autoplay="true"
      :interval="5000"
      indicator-position="none"
      arrow="never"
      @change="change"
    >
      <el-carousel-item
        v-for="item in bannerList"
        :key="item.id"
        class="demo-image__preview"
      >
        <el-image
          ref="elimage"
          style="width: 100%; height: 100%"
          :src="item.path"
          :alt="item.alt"
        >
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      // 轮播图
      bannerList: [
        {
          id: 1,
          path: require("../../assets/images/banner/banner2.jpeg"),
          alt: "备注",
        },
        {
          id: 2,
          path: require("../../assets/images/banner/banner1.jpg"),
          alt: "备注",
        },
        {
          id: 3,
          path: require("../../assets/images/banner/banner3.jpeg"),
          alt: "备注",
        },
        {
          id: 4,
          path: require("../../assets/images/banner/banner4.jpeg"),
          alt: "备注",
        },
        {
          id: 5,
          path: require("../../assets/images/banner/banner5.jpeg"),
          alt: "备注",
        },
      ],
    };
  },
  methods: {
    prev() {
      this.$refs.swiper.prev();
    },
    // 下一张
    next() {
      this.$refs.swiper.next();
    },
  },
  mounted() {},
};
</script>
<style scoped  lang='scss'>
.swiper {
  width: 100%;
  height: 100vh;
}
</style>