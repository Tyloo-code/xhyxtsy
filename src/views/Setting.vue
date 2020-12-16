<template>
  <div id="demo">
    <div class="func-list">
      <Search class="left" />
      <Funcs class="right" />
    </div>
    <Table />
    <el-button class="button" type="primary" icon="el-icon-download" @click="download">下载报告</el-button>
  </div>
</template>

<script>
import Search from "@/components/setting/Search.vue";
import Funcs from "@/components/setting/Funcs.vue";
import Table from "@/components/setting/Table.vue";
import htmlToPdf from "../common/htmlToPdf"
export default {
  name: "Setting",
  components: {
    Search,
    Funcs,
    Table
    
  },
  props: ['role'],
  mounted() {
    this.$emit('showHeader', true);
  },
  methods:{
    download() {
      htmlToPdf.downloadPDF(document.querySelector("#demo"),"setting报告")
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
</style>
