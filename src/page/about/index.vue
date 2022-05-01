<template>
  <article>
    <section class="container">
      <el-button @click="getInfo">请求</el-button>
    </section>
  </article>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    getInfo() {
      // let obj = {
      //   id: 1,
      // };
      this.$get(this.$urls.edition + "/banner").then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {},
};
</script>
<style scoped  lang='scss'>
.container {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
</style>