<template>
  <div>
    <div class="func-list">
      <Search class="left" />
      <Funcs class="right" />
    </div>
    <Table />
  </div>
</template>

<script>
import Search from "@/views/Car/Car3/Search.vue";
import Funcs from "@/views/Car/Car3/Funcs.vue";
import Table from "@/views/Car/Car3/Table.vue";

export default {
  name: "Car3",
  components: {
    Search,
    Funcs,
    Table
    
  },
  props: ['role'],
  mounted() {
    this.$emit('showHeader', true);
  },
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
