<!--
   @Author: Li bowei
   @Date: 2022/1/9
   @Description:文归档详情
 -->
<template>
  <div>
    <h1>markdown</h1>
    <mavon-editor
      @save="saveDoc"
      @change="changeEditor"
      ref="editor"
      v-model="form.doc"
    >
    </mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  components: {
    mavonEditor,
  },
  data() {
    return {
      form:{
        doc:'',
        contentMd:'',
        contentHtml:''
      }
    };
  },
  methods: {
    changeEditor(markdown, html){
      console.log(markdown, html);
      console.log("doc:" + this.form.doc);
    },
    saveDoc(markdown, html) {
      this.form.contentMd = markdown;
      this.form.contentHtml = html;
      console.log("doc:" + this.form.doc);
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容:" + this.form.contentMd);
      console.log("html内容:" + this.form.contentHtml);
    },
  },
  mounted() {},
};
</script>
<style scoped lang='scss'>
section {
  width: 100%;
  height: 100%;
  background: salmon;
}
</style>