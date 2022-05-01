<!--
   @Author: Li bowei
   @Date: 2021/12/1
   @Description:首页
 -->

<template>
  <article class="container">
    <!-- 轮播图区域 -->
    <div class="swiper">
      <el-carousel ref="swiper"
                   height="100vh"
                   :autoplay="true"
                   :interval="5000"
                   indicator-position="none"
                   arrow="never"
                   @change="change">
        <el-carousel-item v-for="item in bannerList"
                          :key="item.id"
                          class="demo-image__preview">
          <el-image ref="elimage"
                    style="width: 100%; height: 100%;"
                    :src="item.url"
                    :alt="item.title">
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 中间阴影块 -->
    <div class="detail notselect">
      <div class="personal">
        <!-- 个人信息区域 -->
        <div class="info">
          <!-- 时间 -->
          <div class="timer">{{ nowTime }}</div>
          <!-- 头像及签名区域 -->
          <div class="person">
            <!-- 头像 -->
            <div class="img">
              <img :src="userImg" />
            </div>
            <!-- 个性签名 -->
            <div class="option">
              <p>{{ personal.motto }}</p>
              <span>{{ mottoEnglish }}</span>
            </div>
            <!-- 控制台区域--轮播 -->
            <div class="console">
              <i class="iconfont icon-icon_on_the_left icon"
                 @click="prev()"></i>
              <div class="center">
                <!-- 图标 -->
                <div class="relative tag-read"
                     v-for="item in iconList"
                     :key="item.name"
                     :data-clipboard-text="item.email ? item.email : ''"
                     @click="copy(item)">
                  <i :class="item.icon + ' iconfont icon'"></i>
                  <img v-if="item.name !== 'youxiang' && item.path"
                       :src="item.path" />
                  <p v-else-if="item.name === 'youxiang'">
                    {{ item.email }}
                  </p>
                  <p style="width: 100px; margin-left: 30px;"
                     v-else-if="item.name === 'logo'">
                    跳转至gitee
                  </p>
                </div>
              </div>
              <i class="iconfont icon-icon_on_the_right icon"
                 @click="next()"></i>
            </div>
          </div>
        </div>
        <!-- 新闻区域 -->
        <div class="news">
          <div class="item"
               v-for="item in newsList"
               :key="item.id">
            <p>
              <span> <i class="iconfont icon-remen"></i> {{ item.title }} </span>
              <span>{{ item.time }}</span>
            </p>
            <div class="question">
              <h3 class="title">{{ item.question }}</h3>
              <p v-for="(queItem, queIndex) in item.answer"
                 :key="queIndex">
                {{ queIndex + 1 + "、" + queItem.key }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容块 -->
    <div class="bottom">
      <!-- 个签 -->
      <p class="tips notselect">
        <i class="iconfont icon-gonggao"></i> {{ tipsDefault.tips }}
      </p>
      <!-- demo示例 -->
      <div class="demo notselect">
        <p class="notselect"><i class="iconfont icon-anli"></i> demo</p>
        <div class="itemDemo">
          <demo-item v-for="(item, index) in demoList"
                     :key="index"
                     class="demoItem"
                     :demoList="item"></demo-item>
        </div>
      </div>
      <!-- 学习笔记 -->
      <div class="file notselect">
        <p class="notselect">
          <i class="iconfont icon-APIwendang"></i>
          学到老活到老~
        </p>
        <ApiFile class="fileItem"
                 v-for="(item, index) in fileList"
                 :key="index"
                 :fileList="item"
                 :index="index"
                 @goFileDetail="goFileDetail"></ApiFile>

        <div class="loadMore"
             @click="loadMore()">加载更多</div>
      </div>
      <!-- 动漫推荐 -->
      <div class="file notselect">
        <p class="notselect">
          <i class="iconfont icon-xiuxi"></i>
          学累了，要记得休息一下！
        </p>
        <recommend></recommend>
      </div>
      <!-- 留言 -->
      <div class="message">
        <p class="notselect">
          <i class="iconfont icon-jianyi"></i>
          留下您宝贵的建议叭~
        </p>
        <el-input type="textarea"
                  :autosize="{ minRows: 10, maxRows: 15 }"
                  placeholder="请输入您宝贵的建议"
                  v-model="textarea"
                  resize="none">
        </el-input>
        <span>
          留言会公开显示哒，请勿在留言内容写下微信等私人联系方式，谨防诈骗。
        </span>
        <el-button plain
                   class="btn">发布</el-button>
      </div>
      <!-- 版权 -->
      <div class="footer">
        <p>Copyright ©2021 之一 邢台职业技术学院</p>
        <p>邮编：072750 | 地址：河北省保定市涿州市</p>
        <p>网站总运行时间{{ langData }}</p>
      </div>
    </div>
  </article>
</template>
<script>
import $ from "jquery";
// 点击复制文字插件
import Clipboard from "clipboard";
import _ from "lodash";
export default {
  components: {
    DemoItem: () => import("../../components/home/Demoitem.vue"),
    ApiFile: () => import("../../components/home/Apifile.vue"),
    Recommend: () => import("../../components/home/Recommend.vue"),
  },
  data() {
    return {
      // 加载个人头像
      userImg: "",
      // 获取现在时间
      nowTime: (this.nowTime = new Date(+new Date() + 8 * 3600 * 1000)
        .toJSON()
        .substr(0, 19)
        .replace("T", " ")
        .split(" ")[1]),
      // 轮播图
      bannerList: [],
      // 实现 动态打字机效果
      mottoEnglish: "",
      // 个人信息
      personal: {},
      // 实现 动态打字机效果
      typewriter: {
        i: 0,
        timer: 0,
      },
      // 图标列表
      iconList: [
        {
          name: "logo",
          src: "https://gitee.com/llzhiyi/blog",
          icon: "icon-icon-test",
        },
        {
          name: "QQ",
          icon: "icon-qq",
        },
        {
          name: "weixin",
          icon: "icon-weixin",
        },
        {
          name: "youxiang",
          icon: "icon-youxiang",
        },
        {
          name: "xinlangweibo",
          icon: "icon-xinlangweibo",
        },
      ],
      newsList: [
        {
          id: 1,
          title: "1つ之一",
          time: "2021-12-9 12:11:21",
          question: "Vue中MVVM模式?",
          answer: [
            {
              key: "模型和视图部分本没有任何联系，依靠的视图模型，视图模型作为中间的桥梁，当一方发生变化，另一方也会发生变化。",
            },
          ],
        },
        {
          id: 2,
          title: "1つ之一",
          time: "2021-12-9 12:11:21",
          question: "vue中key值的作用?",
          answer: [
            {
              key: "在v-for时使用，标识组件的唯一性，更好的区分组件，高效的更新虚拟DOM",
            },
            {
              key: "当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。在一个页面中，已经渲染完整个页面，已经渲染完的数据会存在于虚拟DOM中，页面中的某个数据需要被改变，如不加 :key ，在更改数据后，页面中的所有数据就会重新被渲染，浪费资源，加上:key，则不会全部被渲染，哪个被改变，重新渲染哪个。key的作用主要是为了高效的更新虚拟DOM。",
            },
          ],
        },
        {
          id: 3,
          title: "1つ之一",
          time: "2021-12-9 12:11:21",
          question: "请列出至少4个vue基本指令，并简要说明其作用?",
          answer: [
            {
              key: "v-text：解析文本，无法识别标签",
            },
            {
              key: "v-html：解析文本，可以识别html标签",
            },
            {
              key: "v-once：这个元素只渲染一次，即使绑定3的数据出现了改变，也不会重新渲染",
            },
            {
              key: "v-if：条件渲染，控制元素的显示与隐藏，v-if会引起元素的创建与销毁",
            },
            {
              key: "v-else： 必须和v-if连用 不能单独使用 否则报错 模板编译错误",
            },
            {
              key: "v-show：条件渲染，控制元素的显示与隐藏，v-show是通过元素的display样式来控制显示与隐藏",
            },
            {
              key: "v-bind：动态绑定属性，可以绑定自定义属性，可以简写为':'",
            },
            {
              key: "v-for：循环数组或对象；",
            },
          ],
        },
        {
          id: 4,
          title: "1つ之一",
          time: "2021-12-9 12:11:21",
          question: "v-show 与 v-if 有什么区别?",
          answer: [
            {
              key: "两者都是控制元素的显示与隐藏，但是v-if是惰性加载，条件不满足就不会加载这个节点，v-show是通过display样式进行显示与隐藏。",
            },
          ],
        },
        {
          id: 5,
          title: "1つ之一",
          time: "2021-12-9 12:11:21",
          question: "怎样理解Vue的单向数据流?",
          answer: [
            {
              key: "默认父变，子变；子变，父不变，并且还报错。",
            },
            {
              key: "在子组件的生命周期中将父组件传递过来的数据赋值给我自己data的数据，然后渲染并改变我自己data的数据，父变，子不变；子变，父不变；但是不报错了。",
            },
            {
              key: "如果想要实现父变，子变；子变，父变。我们就要传递一个json类型",
            },
          ],
        },
      ],
      index: -1,
      // demo例子
      demoList: [
        {
          id: 1,
          img: require("../../assets/images/demo/demo04.jpeg"),
          title: "不清楚就问度娘哦😊~",
          time: "发布日期：2021-12-11",
          src: "https://www.baidu.com/",
        },
        {
          id: 1,
          img: require("../../assets/images/demo/demo03.jpeg"),
          title: "单词不明白一定要翻译！！",
          time: "发布日期：2021-12-11",
          src: "https://fanyi.baidu.com/?aldtype=16047#auto/zh",
        },
        {
          id: 1,
          img: require("../../assets/images/demo/demo05.jpeg"),
          title: "我的小博客~",
          time: "发布日期：2021-12-11",
          src: "https://gitee.com/llzhiyi/blog",
        },
      ],
      // tips 动态打字
      tipsDefault: {
        tips: "",
        i: 0,
        timer: 0,
      },
      // 活到老学到老
      fileList: [
        {
          id: 1,
          type: 1,
          img: require("../../assets/images/file/file1.jpeg"),
          src: "",
          time: "2021-12-11 12:30:45",
          label: "HTML+CSS",
          title: "HTML+CSS大前端学习第一步！",
          list: [
            {
              introduce: " CSS 指的是层叠样式表* (Cascading Style Sheets)",
            },
            {
              introduce:
                "CSS 描述了如何在屏幕、纸张或其他媒体上显示 HTML 元素 ",
            },
            {
              introduce: "CSS 节省了大量工作。它可以同时控制多张网页的布局",
            },
            {
              introduce: "外部样式表存储在 CSS 文件中",
            },
          ],
        },
        {
          id: 2,
          type: 2,
          img: require("../../assets/images/file/file2.jpeg"),
          src: "",
          time: "2021-12-11 12:30:45",
          label: "JS",
          title: "我们一起玩转JS~",
          list: [
            {
              introduce: "JS是一种解释性脚本语言（代码不进行预编译）。",
            },
            {
              introduce:
                "主要用来向HTML（标准通用标记语言下的一个应用）页面添加交互行为。",
            },
            {
              introduce:
                "可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离。",
            },
            {
              introduce:
                "跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如Windows、Linux、Mac、Android、iOS等）。",
            },
          ],
        },
        {
          id: 3,
          type: 6,
          title: "大前端当然少不了Node.js!",
          img: require("../../assets/images/file/file3.jpeg"),
          src: "",
          time: "2021-12-11 12:30:45",
          label: "Node.js",
          list: [
            {
              introduce: " Node.js 就是运行在服务端的 JavaScript。",
            },
            {
              introduce:
                "Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。",
            },
            {
              introduce:
                "Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。",
            },
            {
              introduce:
                "编写高性能网络服务器的javascript工具包（用js开发服务端程序）",
            },
            {
              introduce: "单线程、异步、事件驱动",
            },
          ],
        },
        {
          id: 4,
          type: 5,
          title: "Vue轻量级框架，也是必会的哟~",
          img: require("../../assets/images/file/file4.jpeg"),
          src: "",
          time: "2021-12-11 12:30:45",
          label: "Vue.js",
          list: [
            {
              introduce:
                " vue是轻量级的，它有很多独立的功能或库，我们会根据我们的项目来选用vue的一些功能。",
            },
            {
              introduce: "双向数据绑定，当数据发生变化时，vue自动更新视图。",
            },
            {
              introduce: "组件化思想，划分组件可维护、可复用、可测试。",
            },
            {
              introduce:
                "虚拟DOM，利用在内存中生成与真实DOM与之对应的数据结构，这个在内存中生成的结构称之为虚拟DOM。",
            },
          ],
        },
        {
          id: 6,
          type: 4,
          title: "小程序也超级好玩哦~",
          img: require("../../assets/images/file/file5.jpeg"),
          src: "",
          time: "2021-12-11 12:30:45",
          label: "微信小程序",
          list: [
            {
              introduce:
                "微信小程序其实就是一种不需要下载安装即可使用的应用，它基于微信运行，类似于APP，不过无需下载安装，想用就用，用完即走，不占内存。",
            },
            {
              introduce:
                "小程序的用处还是很多的。在微信小程序里会有一个“附近的小程序”功能，可以显示出用户周边5KM的小程序。这就增加了线下商家的曝光机会，让你抓住附近的潜在客户。",
            },
            {
              introduce:
                "下拉微信的聊天页面，会有你最近使用的小程序和收藏的小程序；二是“发现-小程序”页面。",
            },
            {
              introduce: "若想拥有自己的小程序，你需要找合适的平台动手搭建。",
            },
          ],
        },
        {
          id: 7,
          type: 3,
          title: "uniapp可实现一套代码适应多端！！",
          img: require("../../assets/images/file/file6.jpeg"),
          src: "",
          time: "2021-12-11 12:30:45",
          label: "uniapp",
          list: [
            {
              introduce:
                "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。",
            },
            {
              introduce:
                "uni-app在手，做啥都不愁。即使不跨端，uni-app也是更好的小程序开发框架（详见）、更好的App跨平台框架、更方便的H5开发框架。不管领导安排什么样的项目，你都可以快速交付，不需要转换开发思维、不需要更改开发习惯。",
            },
            {
              introduce:
                "一套代码编到13个平台，这不是梦想。眼见为实，扫描13个二维码，亲自体验最全面的跨平台效果！",
            },
            {
              introduce:
                "uni-app在开发者数量、案例、跨端抹平度、扩展灵活性、性能体验、周边生态、学习成本、开发成本等8大关键指标上拥有更强的优势。",
            },
          ],
        },
      ],
      // 留言
      textarea: "",
      langData: "",
    };
  },
  mounted() {
    // 初始化数据
    this.initData();
    // 定时器实时更新时间
    setInterval(() => {
      this.getTime();
      this.langDataTime();
    }, 1000);
    // 循环新闻
    setInterval(() => {
      this.loop();
    }, 1500);
  },
  methods: {
    goFileDetail(info) {
      console.log(info);
      this.$router.push({
        path: "/file",
        query: {
          type: info.type,
          id: info.id,
        },
      });
    },
    initData() {
      this.langDataTime();
      this.getBannerList();
      this.getOwnInfo().then(() => {
        // 打字机数据
        this.typeing();
        this.tipsType();
      });
    },
    // 获取本人信息
    getOwnInfo() {
      return new Promise((reslove, reject) => {
        this.$get(this.$urls.edition + "/userInfo", { id: 1 })
          .then((res) => {
            let data = res.data[0];
            this.userImg = this.$pre + data.avatar;
            this.personal = data;
            this.iconList.forEach((iconItem) => {
              switch (iconItem.name) {
                case "QQ":
                  this.$set(iconItem, "path", this.$pre + data.QQ);
                  break;
                case "weixin":
                  this.$set(iconItem, "path", this.$pre + data.weChat);
                  break;
                case "youxiang":
                  this.$set(iconItem, "email", data.email);
                  break;
                case "xinlangweibo":
                  this.$set(iconItem, "path", this.$pre + data.microblog);
                  break;
              }
            });

            reslove();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getBannerList() {
      this.$get(this.$urls.edition + "/banner").then((res) => {
        _.each(res.data, (bannerItem) => {
          bannerItem.url = this.$pre + bannerItem.url;
        });
        this.bannerList = res.data;
      });
    },
    // 轮播图 切换 显示的下标
    change(e) {
      // console.log(e);
    },
    // 获取当前时间
    getTime() {
      this.nowTime = new Date(+new Date() + 8 * 3600 * 1000)
        .toJSON()
        .substr(0, 19)
        .replace("T", " ")
        .split(" ")[1];
    },
    // 打字机效果
    typeing() {
      if (this.typewriter.i <= this.personal.mottoEnglish.length) {
        this.mottoEnglish =
          this.personal.mottoEnglish.slice(0, this.typewriter.i++) + "_";
        this.typewriter.timer = setTimeout(() => {
          this.typeing();
        }, 150);
      } else {
        this.mottoEnglish = this.personal.mottoEnglish;
        clearTimeout(this.typewriter.timer);
        this.typewriter = {
          i: 0,
          timer: 0,
        };
        this.mottoEnglish = "";
        this.typeing();
      }
    },
    // 上一张
    prev() {
      this.$refs.swiper.prev();
    },
    // 下一张
    next() {
      this.$refs.swiper.next();
    },
    // 点击复制文字
    copy(e) {
      if (e.name === "youxiang") {
        let clipboard = new Clipboard(".tag-read");
        clipboard.on("success", (e) => {
          // 复制成功
          this.$success("邮箱复制成功！😋");
          //  释放内存
          clipboard.destroy();
        });
        clipboard.on("error", (e) => {
          // 不支持复制
          this.$warning("该浏览器不支持复制！🤕");
          // 释放内存
          clipboard.destroy();
        });
      }
      if (e.name === "logo") {
        window.open(e.src);
      }
    },
    // 循环新闻
    loop() {
      this.index++;
      if (this.index >= this.newsList.length) this.index = -1;
      $(".item").eq(this.index).css("transform", " scale(0.9)");
      $(".item").eq(this.index).css("opacity", 0.6);
      $(".item").eq(this.index).css("transition", "all 1s");
      let setOut = setTimeout(() => {
        $(".item").eq(this.index).css("transform", " scale(1)");
        $(".item").eq(this.index).css("opacity", 0.8);
        clearTimeout(setOut);
      }, 500);
    },
    tipsType() {
      if (this.tipsDefault.i <= this.personal.ownTips.length) {
        this.tipsDefault.tips =
          this.personal.ownTips.slice(0, this.tipsDefault.i++) + "_";
        this.tipsDefault.timer = setTimeout(() => {
          this.tipsType();
        }, 160);
      } else {
        this.tipsDefault.tips = this.personal.ownTips;
        clearTimeout(this.tipsDefault.timer);
        this.tipsDefault = {
          i: 0,
          timer: 0,
        };
        this.tipsDefault.tips = "";
        this.tipsType();
      }
    },
    // 学习 笔记 加载更多
    loadMore() {
      this.$loading(true);
      setTimeout(() => {
        this.$loading(false);
      }, 1000);
    },
    langDataTime() {
      //倒计时 =  未来时间 - 现在时间
      //1.创建未来时间
      let oldTime = new Date(2018, 6 - 1, 14, 12, 12, 12);
      //2.创建现在时间
      let now = new Date();
      //3.倒计时 =  未来时间 - 现在时间
      let time = parseInt((now - oldTime) / 1000); //时间戳-- 毫秒数
      let t = parseInt(time / 86400); /* 总天数 */
      let month = parseInt(t / 30); /* 月 */
      let monthBackups = month;
      monthBackups = parseInt(monthBackups / 12);
      let mon = month - monthBackups * 12;
      let day = t - month * 30; /* 天 */
      let h = parseInt((time % 86400) / 3600); /* 小时 */
      let m = parseInt((time % 3600) / 60); /* 分 */
      let s = time % 60; /* 秒 */
      let timer =
        this.num(monthBackups) +
        "年" +
        this.num(mon) +
        "月" +
        this.num(day) +
        "天" +
        this.num(h) +
        "小时" +
        this.num(m) +
        "分钟" +
        this.num(s) +
        "秒";
      this.langData = timer;
    },
    num(num) {
      return num < 10 ? "0" + num : num;
    },
  },
};
</script>
<style scoped lang='scss'>
.container {
  position: relative;
  width: 100%;
  color: white;
  background-color: white;

  .swiper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  .detail {
    position: relative;
    width: 100%;
    height: 100vh;

    .personal {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 18;
      display: flex;
      width: 1100px;
      height: 530px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 8px;
      transform: translate(-50%, -50%);

      .info {
        width: 500px;

        .timer {
          padding: 30px 0;
          font-size: 40px;
          text-align: center;
        }

        .person {
          .img {
            width: 150px;
            height: 150px;
            margin: 0 auto;
            overflow: hidden;
            border: 5px solid;
            border-color: rgba($color: #b1b0b4, $alpha: 0.3);
            border-radius: 50%;

            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              transition: all 1s;
            }
          }

          .option {
            margin-top: 10px;
            line-height: 2;
            text-align: center;
          }

          .img:hover {
            img {
              transform: rotate(360deg);
              cursor: url("../../assets/images/link.png"), pointer;
            }
          }

          .console {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            margin: 30px auto;
            border-radius: 6px;

            .icon {
              font-size: 26px;
            }

            .icon:hover {
              cursor: url("../../assets/images/link.png"), pointer;
            }

            .center {
              display: flex;
              align-items: center;
              justify-content: space-around;
              width: 300px;
              // background: chocolate;
              height: 50px;

              .relative:nth-of-type(1) {
                i {
                  color: #d6c9b6;
                }
              }

              .relative:nth-of-type(2) {
                i {
                  color: skyblue;
                }
              }

              .relative:nth-of-type(3) {
                i {
                  color: greenyellow;
                }
              }

              .relative:nth-of-type(4) {
                i {
                  color: #c18cf4;
                }
              }

              .relative:nth-of-type(5) {
                i {
                  color: #e96140;
                }
              }

              .relative {
                position: relative;

                img,
                p {
                  position: absolute;
                  top: 150%;
                  left: -150%;
                  width: 100px;
                  height: 100px;
                  opacity: 0;
                  transition: all 0.5s;
                }

                p {
                  left: -250%;
                  width: auto;
                  height: auto;
                  padding: 5px 8px;
                  line-height: 2;
                  background-color: rgba(0, 0, 0, 0.5);
                  border-radius: 5px;
                }

                i:hover {
                  + img {
                    opacity: 1;
                  }

                  + p {
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
      }

      .news {
        flex: 1;
        box-sizing: border-box;
        padding: 20px;
        overflow-y: auto;

        .item {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          height: 180px;
          margin-bottom: 10px;
          padding: 10px;
          color: black;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 8px;
          transition: all 0.3s;

          p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 10px;
            cursor: url("../../assets/images/link.png"), pointer;

            span:nth-of-type(2) {
              color: #5e6060;
            }
          }

          .question {
            position: relative;
            flex: 1;
            box-sizing: border-box;
            padding: 10px 0;
            overflow: hidden;
            font-size: 16px;
            cursor: url("../../assets/images/link.png"), pointer;

            h3 {
              margin: 0;
              margin-bottom: 10px;
              padding: 10px 0 0 30px;
              font-weight: 400;
              font-size: 18px;
              cursor: url("../../assets/images/link.png"), pointer;
            }

            p {
              box-sizing: border-box;
              width: 500px;
              line-height: 1.5;
              letter-spacing: 2px;
              cursor: url("../../assets/images/link.png"), pointer;
            }
          }
        }
        // .item:nth-of-type(1) {
        // opacity: 0;
        // display: none;
        // }
        .item:hover {
          background-color: rgba(255, 255, 255, 0.9);
          cursor: url("../../assets/images/link.png"), pointer;
        }
      }
    }
  }

  .bottom {
    position: relative;
    z-index: 19;
    box-sizing: border-box;
    width: 1300px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    color: black;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);

    .tips {
      box-sizing: border-box;
      width: 80%;
      height: 70px;
      margin: 0 auto;
      padding-left: 30px;
      color: white;
      line-height: 70px;
      // background-color: white;
      border: 1px dashed white;
      border-radius: 10px;

      i {
        margin-right: 10px;
      }
    }

    .demo,
    .file,
    .message,
    footer {
      box-sizing: border-box;
      width: 90%;
      margin: 20px auto 30px;
      color: white;
      font-size: 24px;
      vertical-align: middle;

      // 个签
      p {
        margin-bottom: 20px;
        padding: 15px 30px;
        border-bottom: 1px dashed white;
      }

      i {
        font-size: 24px;
        vertical-align: 0;
      }
      // demo案例
      .itemDemo {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .demoItem {
          width: 370px;
          height: 240px;
          margin-bottom: 30px;
          color: white;
          font-size: 16px;
        }
      }

      // 文档推荐
      .fileItem {
        width: 80%;
      }

      // 加载更多
      .loadMore {
        width: 120px;
        height: 60px;
        margin: 100px auto;
        font-size: 14px;
        line-height: 60px;
        text-align: center;
        border: 1px solid rgb(139, 138, 138);
        border-radius: 60px;
        cursor: url("../../assets/images/link.png"), pointer;
        transition: all 0.1s;
      }

      .loadMore:active {
        color: orangered;
        border-color: orangered;
      }
    }

    .file {
      p {
        margin-bottom: 40px;
      }
    }

    .message {
      margin-top: 60px;
      text-align: center;

      p {
        text-align: left;
      }

      ::v-deep .el-textarea__inner {
        box-sizing: border-box;
        width: 700px;
        margin: 0 auto;
        padding: 30px;
        color: white;
        font-size: 18px;
        letter-spacing: 5px;
        text-align: left;
        background-color: transparent;
      }

      span {
        display: inline-block;
        margin-top: 20px;
        font-size: 14px;
      }

      .btn {
        display: block;
        margin: 30px auto;
      }

      ::v-deep .el-button {
        color: white;
        background-color: transparent;
        transition: all 0.3s;
      }

      ::v-deep .el-button:hover {
        color: #588edf;
      }
    }

    .footer {
      margin-top: 100px;
      color: white;
      letter-spacing: 3px;
      text-align: center;

      p {
        font-size: 14px;
        line-height: 2;
      }
    }
  }
}

::v-deep .el-tabs__nav-wrap::after {
  display: none;
}
</style>
