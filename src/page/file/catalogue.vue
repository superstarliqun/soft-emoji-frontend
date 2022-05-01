<!--
   @Author: Li bowei
   @Date: 2022/1/9
   @Description:文归档目录
 -->
 <template>
  <article class="file">
    <ul class="file_list">
      <!-- 搜索 -->
      <el-input 
      style="margin-bottom: 12px;"
        v-model="keyWords"
        placeholder="请输入您要搜索的内容哦"
        suffix-icon="el-icon-search"
        @keydown.enter.native="searchFile"
      ></el-input>
      <!-- 列表 -->
      <li class="file_item" 
          v-for="chapter in chapterList" 
          :key="chapter.id" 
          :class="location===chapter.id?'file_active':''"
          @click="goFileDetail(chapter)">
          {{ chapter.chapterName }}
      </li>
    </ul>
    <div class="right filelist_right">
      <File v-for="i in 20" :key="i"></File>
    </div>
  </article>
</template>
<script>
import $ from 'jquery'
export default {
  components: {
    File: ()=>import('../../components/file/fileItem.vue')
  },
  data() {
    return {
      keyWords:'',
      location:'',
      chapterList:[
        {
          id: 1,
          chapterName: 'html+css',
          type: 1
        },
        {
          id: 2,
          chapterName: 'js+jquery',
          type: 2
        },
        {
          id: 3,
          chapterName: 'uniapp',
          type: 3
        },
        {
          id: 4,
          chapterName: '微信小程序',
          type: 4
        },
        {
          id: 5,
          chapterName: 'Vue2.0',
          type: 5
        },
        {
          id: 6,
          chapterName: 'nodeJS',
          type: 6
        },{
          id: 7,
          chapterName: 'git',
          type: 7
        },{
          id: 8,
          chapterName: 'Vue3.0',
          type: 8
        },
        {
          id: 9,
          chapterName: 'Vue使用技巧',
          type: 9
        }
      ],
      verseList:[
        {
          id:1,
          verseName:'路由传参',
          createTime:1651070873372,
          unpdateTime:1651070873372,
          parentType:5
        }
      ]
    };
  },
  mounted() {
    if(this.$route.query.id){
      let { type , id } = this.$route.query
      let index = this.chapterList.findIndex(item=>item.type == type)
      this.location = this.chapterList[index].id
    }else{
      this.location = this.chapterList[0].id
    }
    this.backTop()
  },
  methods: {
    backTop(){
      let oDiv = document.getElementsByClassName('backTop')[0]
      oDiv.addEventListener("click", ()=>{
        $('.filelist_right').animate({ scrollTop: "0px" });
      });
    },
    searchFile(){
      console.log(this.keyWords , '我是搜索');
      this.keyWords = ''
    },
    goFileDetail(file){
      this.location = file.id
      console.log(file);
    }
  },
};
</script>
<style scoped lang='scss'>
.file {
  width: 70%;
  margin: 0 auto;
  height: calc(100vh - 100px);
  display: flex;
  color: white;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: space-between;

  .file_list{
    width: 300px;
    
    .file_item{
      width: 100%;
      height: 60px;
      transition: all .2s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 0.5px solid rgb(209, 207, 207);
      border-radius: 4px;
    }

    .file_item:hover{
      border-radius: 4px;
      background: rgba($color: #FFF, $alpha: 0.3);
    }

    .file_active{
      background: rgba($color: #FFF, $alpha: 0.3);
    }
  }
  .right{
    padding: 0 30px;
    flex: 1;
    max-height: calc(100vh - 180px);
    overflow-y: auto;
  }
}

::v-deep .el-input__inner{
  color: #FFF;
  background: transparent;
}
</style>