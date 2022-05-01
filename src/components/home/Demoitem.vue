<!--
   @Author: Li bowei
   @Date: 2021/12/10
   @Description:首页demo组件
 -->
<template>
  <article class="contain" @click="go(demoList)">
    <img :src="demoList.img" class="smallBox" alt="" />
    <p>{{ demoList.title }}</p>
    <span>{{ demoList.time }}</span>
  </article>
</template>
<script>
export default {
  props: {
    demoList: {
      type: Object,
      default () {
        return {
          id: 1,
          img: require("../../assets/images/demo/demo05.jpeg"),
          title: "我的小博客~",
          time: "发布日期：2021-12-30",
          src: "https://gitee.com/llzhiyi/blog",
        };
      },
    },
  },

  components: {},

  data () {
    return {
      //   demoList: {
      //     id: 1,
      //     img: require("../../assets/images/demo/demo05.jpeg"),
      //     title: "我的小博客~",
      //     time: "发布日期：2021-12-30",
      //     src: "https://gitee.com/llzhiyi/blog",
      //   },
    };
  },

  methods: {
    go (e) {
      console.log(e);
      window.open(e.src);
    },
  },

  mounted () { },
};
</script>
<style scoped  lang='scss'>
.contain {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  .smallBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.6s;
  }

  .smallBox:hover {
    cursor: url("../../assets/images/link.png"), pointer;
    transform: scale(1.2);
  }

  p {
    position: absolute;
    top: 20%;
    left: -100%;
    width: 100%;
    transition: all 0.6s;
    z-index: 30;
    background-color: rgba(0, 0, 0, 0.6);
    line-height: 3;
    font-size: 20px;
    cursor: url("../../assets/images/link.png"), pointer;
    letter-spacing: 3px;
    font-weight: 400;
    text-align: center;
  }

  span {
    position: absolute;
    bottom: 20%;
    left: 0%;
    width: 100%;
    font-size: 12px;
    cursor: url("../../assets/images/link.png"), pointer;
    transition: all 0.6s;
    transform: translate(100%, 0);
    line-height: 3;
    color: rgb(212, 211, 211);
    text-align: center;
  }
}

.contain:hover {
  .smallBox {
    background-color: rgba(0, 0, 0, 0.6);
    transform: scale(1.2);
  }
  p {
    transform: translate(100%, 0);
  }
  span {
    transform: translate(0%, 0);
  }
}
</style>