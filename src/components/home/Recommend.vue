<!--
   @Author: Li bowei
   @Date: 2022/1/9
   @Description:首页---视频
 -->
<template>
  <article class="recommend">
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="tab" label=" 动 漫 " name="comic">
        <div class="tabItem">1</div>
        <div class="tabItem">2</div>
        <div class="tabItem">3</div>
        <div class="tabItem">4</div>
        <div class="tabItem">4</div>
        <div class="tabItem">4</div>
        <div class="tabItem">4</div>
        <div class="tabItem">4</div>
      </el-tab-pane>
      <el-tab-pane class="tab" label=" 游 戏 " name="game">
        <div class="tabItem">1</div>
        <div class="tabItem">2</div>
        <div class="tabItem">3</div>
        <div class="tabItem">4</div>
        <div class="tabItem">4</div>
      </el-tab-pane>
    </el-tabs> -->
    <ul class="left">
      <li class="recom">推荐几部炫酷的动漫</li>
      <li v-for="(item, index) in recommendList" :key="index" @click="detail(item)">
        <span class="NoOne"> No{{ item.ind }}. </span>{{ item.chineseName }}
      </li>
    </ul>
    <div class="right">
      <VideoPlay ref="video" class="video" style="max-height: 80%" :options="videoOptions" :src="videoSrc" :image="image"
        @ready="videoReady" @timeupdate="updatetime" @videoTimes="videoTimes" />
    </div>
  </article>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      activeName: "comic",
      recommendList: [
        {
          ind: 1,
          name: "doupo",
          chineseName: "斗破苍穹",
          // videoSrc: require("../../assets/video/one.mp4"),
          // image: require("../../assets/images/banner/banner1.jpeg"),
          image: '',
        },
        {
          ind: 2,
          name: "douluo",
          chineseName: "斗罗大陆",
          // videoSrc: require("../../assets/video/qqq.mp4"),
          // image: require("../../assets/images/banner/banner2.jpeg"),
          image: '',
        },
        {
          ind: 3,
          name: "wanmeishijie",
          chineseName: "完美世界",
          // videoSrc: require("../../assets/video/two.mp4"),
          // image: require("../../assets/images/banner/banner3.jpeg"),
          image: '',
        },
        {
          ind: 4,
          name: "yirenzhixia",
          chineseName: "一人之下",
          // videoSrc: require("../../assets/video/one.mp4"),
          // image: require("../../assets/images/banner/banner4.jpeg"),
          image: '',
        },
        {
          ind: 5,
          name: "zhihaobeipandiqiule",
          chineseName: "只好背叛地球了",
          // videoSrc: require("../../assets/video/qqq.mp4"),
          // image: require("../../assets/images/banner/banner5.jpeg"),
          image: '',
        },
      ],
      // videoSrc: require("../../assets/video/one.mp4"),
      videoOptions: {
        autoplay: false,
        loop: false,
        preload: "auto",
      },
      // image: require("../../assets/images/banner/banner1.jpeg"),
      image: '',
    };
  },
  methods: {
    handleClick (e) {
      console.log(e.name);
    },
    videoReady (e) {
      // video实例
      //   console.log("videoReady", e);
    },
    updatetime (e) {
      // 实时获取视频进度
      //   console.log("updatetime", e);
    },
    detail (e) {
      this.videoSrc = e.videoSrc;
      this.image = e.image;
    },
    videoTimes (e) { },
  },
  mounted () { },
};
</script>
<style scoped lang='scss'>
.recommend {
  padding: 0 30px;
  display: flex;
  height: 350px;

  .left {
    width: 300px;
    font-size: 18px;

    li {
      padding: 15px 10px;
      font-size: 16px;
      border-bottom: 1px dashed grey;
      letter-spacing: 2px;
      transition: all 0.3s;
      border-radius: 4px;

      span {
        font-size: 20px;
      }

      .NoOne {
        font-style: initial !important;
      }
    }

    .recom {
      font-size: 20px;
      padding: 15px 10px;
      border-bottom: none;
    }
    li:nth-last-of-type(1) {
      border-bottom: none;
    }

    li:hover {
      padding-left: 25px;
      box-shadow: 0px 0px 10px white;
      border-bottom: 1px dashed transparent;
    }
    .recom:hover {
      padding-left: 10px;
      box-shadow: none;
      border-bottom: 1px dashed transparent;
    }
  }

  .right {
    position: relative;
    flex: 1;
    box-sizing: border-box;
    padding: 0 15px;

    .video {
      width: 100%;
      height: 350px;
    }

    // ::v-deep .video-js {
    //   width: 100%;
    //   height: 350px;
    // }

    ::v-deep .vjs-big-play-button {
      position: absolute;
      top: 80%;
      left: 85%;
    }
  }
}
</style>