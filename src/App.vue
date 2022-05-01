<template>
  <article id="app" class="background">
    <v-header
      id="headerNav"
      :class="path === '/' ? 'header' : 'color header'"
      :path="path"
      @goRouter="goRouter"
    ></v-header>
    <router-view :class="path === '/' ? '' : 'view'"></router-view>
    <div
      :class="path === '/' ? 'backTop poiner' : 'backTop poiner backTopColor'"
      @click="backTop"
    >
      <i class="iconfont icon-fanhuidingbu back poiner"></i>
    </div>
  </article>
</template>
<script>
import vHeader from "./components/header/Header.vue";
import $ from "jquery";
export default {
  components: {
    vHeader,
  },
  data() {
    return {
      path: "/",
    };
  },
  mounted() {
    this.windowOnscroll();
  },
  watch: {
    $route(route){
      this.path = route.path;
    }
  },
  methods: {
    goRouter(e) {
      this.path = e;
    },
    backTop() {
      $(document.documentElement).animate({ scrollTop: "0px" });
    },
    windowOnscroll() {
      let headerNav = document.getElementById("headerNav");
      let styleColor = headerNav.style.background;
      let fontColor = headerNav.style.color;
      let fontHeight = headerNav.style.height;
      window.onscroll = function () {
        let scroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scroll > 0) {
          headerNav.style.background = "white";
          headerNav.style.color = "black";
          headerNav.style.height = "70px";
          $(".backTop").fadeIn(1000);
        } else {
          headerNav.style.background = styleColor;
          headerNav.style.color = fontColor;
          headerNav.style.height = fontHeight;
          $(".backTop").fadeOut(1000);
        }
      };
    },
  },
};
</script>
<style lang="less">
#app {
  // background-attachment: fixed;
  min-height: 100vh;
  position: relative;
  padding-top: 1px;

  .color {
    color: #606160;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
  }
  .view {
    margin-top: 100px;
  }

  .backTop {
    position: fixed;
    width: 80px;
    height: 80px;
    background-color: rgba(#fff, 0.5);
    bottom: 5%;
    right: 3%;
    display: none;
    transition: all 0.3s;
    z-index: 99;
    text-align: center;
    line-height: 80px;
    border-radius: 5px;
    color: white;

    .back {
      font-size: 40px;
    }
  }

  .backTopColor {
    background-color: rgba(#000, 0.5);
  }
}
.background{
  background: url('./assets/images/background.jpg');
  background-size: 100%;
}
// .container {
//   width: 1200px;
//   margin: 0 auto;
//   min-height: calc(100vh - 100px);
// }

// 文字禁止选中
.notselect {
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}

</style>
