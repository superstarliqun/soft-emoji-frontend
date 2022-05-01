<!--
   @Author: Li bowei
   @Date: 2021/12/6
   @Description:头部导航组件
 -->
<template>
  <article class="header">
    <div class="left">
      <span>{{ personal.identify }}</span> {{ personal.nickName }}
    </div>
    <ul class="right">
      <li v-for="(pathItem, pathIndex) in pathArr" :key="pathIndex" :class="path === pathItem.path?'active':''" @click="goRoute(pathItem.path)">
        {{ pathItem.meta }}
        <i></i>
      </li>
    </ul>
    <i class="iconfont icon-sousuo1 search" @click="goSearch()"></i>
  </article>
</template>
<script>
export default {
  components: {},
  props: {
    path: {
      type: String,
      default: '/'
    }
  },
  data () {
    return {
      personal: {},
      pathArr: [],
    };
  },
  methods: {
    getInfo () {
      this.$get(this.$urls.edition + "/basicsInfo", { id: 1 }).then((res) => {
        this.personal = res.data[0];
      });
    },
    // 路由跳转
    goRoute (e) {
      this.$router.push(e, () => { });
      this.$emit("goRouter", e);
    },
    // 去搜索
    goSearch () {
      console.log("我是搜索");
    },
  },
  mounted () {
    this.pathArr = this.$router.options.routes
    this.getInfo();
  },
};
</script>

<style scoped  lang='scss'>
.header {
  height: 100px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  color: white;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  transition: all linear 0.3s;

  .left {
    font-size: 24px;
    color: #606060;
    span {
      display: inline-block;
      padding: 3px 5px;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .left:hover {
    color: #f09b38;
    cursor: url("../../assets/images/link.png"), pointer;
  }
  .right {
    display: flex;
    li {
      position: relative;
      padding: 10px 30px;
      font-size: 20px;
      text-align: center;
      transition: all linear 0.5s;

      i {
        position: absolute;
        bottom: -20%;
        left: 50%;
        transform: translate(-50%, 0);
        display: block;
        width: 0px;
        height: 5px;
        transition: all 0.5s;
        background-color: #f09b38;
      }
    }

    li:hover {
      color: #f09b38;
      cursor: url("../../assets/images/link.png"), pointer;
      i {
        width: 50%;
      }
    }

    .active {
      color: #f09b38;
      cursor: url("../../assets/images/link.png"), pointer;
      i {
        width: 50%;
      }
    }

    p:hover {
      color: #f09b38;
      text-align: center;
    }
  }

  .search {
    font-size: 30px;
  }

  .left,
  .search,
  .right {
    transition: all 0.5s linear;
  }

  .search:hover {
    color: #f09b38;
    cursor: url("../../assets/images/link.png"), pointer;
  }
}

.header:hover {
  color: #464646;
  background-color: #fff;
}
</style>