<template>
  <div class="home">
    <!-- <p>我是主界面</p> -->
    <!-- <el-button class="button" @click="goClick">编辑实验</el-button> -->
    <div class="func-list">
      <Search class="left" />
      <!-- <Funcs class="right" /> -->
    </div>
    <Table />
  </div>
</template>


<script>
// @ is an alias to /src
import Search from "@/components/home/Search.vue";
import Funcs from "@/components/home/Funcs.vue";
import Table from "@/components/home/Table.vue";

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
      this.$router.replace('/about')
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
