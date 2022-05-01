<template>
  <article class="fileItem" @click="go(fileList)">
    <section class="img" v-if="index % 2 === 1">
      <img :src="fileList.img" alt="" />
    </section>
    <div :class="index % 2 === 1 ? 'txt' : 'txt textalign'">
      <p class="title">
        <i class="iconfont icon-shijian icon"></i>
        <span>{{ fileList.time }}</span>
      </p>
      <h2>{{ fileList.title }}</h2>
      <p class="elem">
        <i class="iconfont icon-24gl-tags4"></i>
        <span>技术点 · </span>
        <span>{{ fileList.label }}</span>
      </p>
      <ul>
        <li v-for="(item, index) in fileList.list" :key="index" v-show="index < 4">
          <i class="iconfont icon-dian dianFont"></i> {{ item.introduce }}
        </li>
      </ul>
      <p class="detail">
        <i class="iconfont icon-liebiaodaohang_dongman iconDetail"></i> go>>
      </p>
    </div>
    <section class="img" v-if="index % 2 !== 1">
      <img :src="fileList.img" alt="" />
    </section>
  </article>
</template>
<script>
import { stringify } from "qs";
export default {
  props: {
    fileList: {
      type: Object,
      default () {
        return {};
      },
    },
    index: {
      type: [Number, String],
      default () {
        return 1;
      },
    },
  },
  components: {},
  data () {
    return {
    };
  },
  methods: {
    go (info) {
      this.$emit('goFileDetail', info)
      //   window.open(e.src);
    },
  },
  mounted () { },
};
</script>
<style scoped lang='scss'>
.fileItem {
  margin: 50px auto;
  background-color: white;
  color: black;
  border-radius: 20px;
  transition: all 0.4s;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  .img {
    width: 430px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: all 0.4s;
    }
  }

  .txt {
    flex: 1;
    color: rgb(53, 52, 52);
    text-align: right;
    box-sizing: border-box;
    padding: 20px;
    font-size: 16px;

    .title {
      font-size: 14px;
    }

    h2 {
      padding: 0;
      margin-top: 15px;
      transition: all 0.5s;
    }

    .icon {
      color: rgb(53, 52, 52);
      font-size: 14px;
      padding: 0 8px;
    }

    .elem {
      padding: 0 20px;
      margin-top: 15px;
      cursor: url("../../assets/images/link.png"), pointer;
      i {
        padding: 0 8px;
        font-size: 12px;
      }

      span {
        font-size: 12px;
      }
    }

    ul {
      min-width: 300px;
      max-width: 420px;
      margin-top: 10px;
      cursor: url("../../assets/images/link.png"), pointer;
      display: inline-block;
      li {
        font-size: 14px;
        cursor: url("../../assets/images/link.png"), pointer;
        text-align: left;
        line-height: 1.5;
        overflow: hidden;
        letter-spacing: 2px;
        text-overflow: ellipsis;
        white-space: nowrap;

        .dianFont {
          font-size: 18px;
        }
      }
    }

    .detail {
      margin-top: 20px;
      font-size: 16px;
      transition: all 0.6s;

      .iconDetail {
        transition: all 0.5s;
        font-size: 18px;
      }
    }
  }

  .textalign {
    text-align: left;
  }
}

.fileItem:hover {
  box-shadow: 0px 0px 25px teal;
  cursor: url("../../assets/images/link.png"), pointer;
  img {
    transform: scale(1.2);
    cursor: url("../../assets/images/link.png"), pointer;
  }

  h2 {
    color: #f09b38;
    cursor: url("../../assets/images/link.png"), pointer;
  }
  .detail {
    color: orangered;
    cursor: url("../../assets/images/link.png"), pointer;
  }
  .iconDetail {
    color: orangered;
    cursor: url("../../assets/images/link.png"), pointer;
  }
}
</style>