<!--
   @Author: Li bowei
   @Date: 2021/11/25
   @Description:视频组件
 -->

<template>
  <div class="video-play">
    <!-- 
      autoplay
      muted
     -->
    <video ref="video" class="video-js" :poster="image" controls></video>
  </div>
</template>

<script>
// import ""
import _ from "lodash";
import videojs from "video.js";
import "video.js/dist/video-js.min.css";
// import 'video.js/dist/lang/zh-CN'
export default {
  props: {
    options: {
      type: Object,
      default () {
        return {};
      },
    },
    src: {
      type: [String, Object],
      default: "",
    },
    image: {
      type: String,
      default () {
        return '';
      },
    },
  },
  data () {
    return {
      player: {},
      // img: require("../../assets/images/banner/banner1.jpeg"),
    };
  },
  watch: {
    src (src) {
      this.player && this.player.src(src);
    },
  },
  mounted () {
    const _this = this;
    this.player = videojs(
      this.$refs.video,
      _.extend(
        {
          autoplay: true,
          loop: true,
          preload: "auto",
          language: "zh-CN",
          src: this.src,
          fluid: false,
          width: 752,
          height: 350,
        },
        this.options
      ),
      function () {
        _this.src && this.src(_this.src);
        _this.$emit("ready", this);
        this.on("timeupdate", function (time) {
          // console.log(this.currentTime())
          _this.$emit("timeupdate", this.currentTime());
        });
        this.on("loadedmetadata", function () {
          const videoTime = _this.player.duration() * 1000;
          const videoDurationTime = _this.player.duration(); // 获取总时长
          _this.$emit("videoTimes", { videoTime, videoDurationTime });
        });
        // 监听结束状态
        this.on("ended", function () {
          _this.$emit("videoEnd");
        });
      }
    );
    this.end();
  },
  methods: {
    // 获取视频总时长
    videoDuration () {
      const that = this;
      const audio = new Audio(this.src);
      audio.addEventListener("loadedmetadata", function (e) {
        const videoDurationTime = audio.duration;
        that.$emit("videoDuration", videoDurationTime);
      });
    },
    start () {
      this.$refs.video.play();
    },
    end () {
      this.$refs.video.pause();
    },
  },
};
</script>

<style lang="scss" scoped>
.video-play {
  //   position: relative;
  //   display: inline-block;
  //   vertical-align: top;
  width: 100%;
  height: 100%;
}

::v-deep .vjs-tech {
  height: 350px;
}
</style>