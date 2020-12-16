<template>
  <div class="home">
    <div id="demo">
    <!-- <p>我是主界面</p> -->
    <!-- <el-button class="button" @click="goClick">编辑实验</el-button>
    <el-button class="button" @click="goClick">编辑实验</el-button> -->
    
    <div class="func-list">
      <Search class="left" />
      <Funcs class="right" />
    </div>
    <Table />
    
    <el-button class="button" type="primary" icon="el-icon-download" @click="download">下载报告</el-button>
    </div>
  </div>
  
</template>


<script>
// @ is an alias to /src
import Search from "@/components/home/Search.vue";
import Funcs from "@/components/home/Funcs.vue";
import Table from "@/components/home/Table.vue";
import htmlToPdf from "../common/htmlToPdf"
export default {
  name: "Home",
  components: {
    Search,
    Funcs,
    Table
  },
  
  props: ['role'],
  mounted() {
    this.$emit('showHeader', true);
  },
  methods: {
    goClick() {
      this.$router.push('/about')
    },
    handleExport() {
      this.$getPdf('exportBox', this.realName)
    },
    download() {
      htmlToPdf.downloadPDF(document.querySelector("#demo"),"home报告")
    }
  }
};
</script>


<style lang="scss" scoped>
.func-list {
  margin-bottom: 20px;
  .left {
    display: inline-block;
  }
  .right {
    float: right;
  }
}
.button {
    float: right;
    color: #fff;
    background-color: #409eff;
    }
</style>
