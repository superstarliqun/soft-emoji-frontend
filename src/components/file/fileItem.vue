<template>
  <article class="fileItem">
    <h1 class="title">
      我是主标题
      <span> —— 三千字吃透SpringCloud的组成</span>
    </h1>
    <p class="content">
      Spring社区推出Spring Cloud框架与其自身的理念
      演变密切相关。Spring是于2003年兴起的一个轻量级的Java开发
      框架，但是随着其不断地发展壮大，框架的代码规模越来越庞大，集成的项
      目越来越多，配置文件也变得越来越混乱，慢慢地背离最初的理念。如今，分
      布式系统和微服务架构等更多新的技术理念的陆续出现，催生了这样一种想法: Sp
      ring社区需要一款框架来改善以前的开发模式并适应微服务开发环境。SpringClo
      ud也就此应运而生。
    </p>
    <div class="footer">
      <p>Vue2</p>
      <p>2022/2/3</p>
      <p>
        <i class="iconfont icon-duihuaxinxi iconSize"></i>
        123333
      </p>
      <p>
        <i class="iconfont icon-dianzan iconSize"></i>
        3456789
      </p>
      <p>
        <i class="iconfont icon-yanjing iconSize"></i>
        9999999999
      </p>
    </div>
  </article>
</template>
<script>
export default {
  components: {},
  data () {
    return {};
  },
  methods: {},
  mounted () { },
};
</script>
<style scoped lang='scss'>
.fileItem {
  height: 160px;
  width: 100%;
  border: 1px solid rgba(100, 101, 102, 0.8);
  box-shadow: 0 2px 12px 0 rgba(100, 101, 102, 0.55);
  background: rgba(100, 101, 102, 0.12);
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 32px;
  padding: 0 20px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    margin: 0;
    padding: 15px 0;
  }

  .content {
    color: #ababab;
    line-height: 1.5;
    font-size: 14px;
    width: 100%;
    // text-indent:28px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: 25px;
  }

  .footer {
    display: flex;
    font-size: 12px;
    color: #989898;
    padding-left: 0px;

    p {
      margin-right: 30px;
    }

    .iconSize {
      font-size: 12px;
    }
  }
}
</style>