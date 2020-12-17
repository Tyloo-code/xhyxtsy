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
import Search from "@/views/CarTeacher/Car2/Search.vue";
import Funcs from "@/views/CarTeacher/Car2/Funcs.vue";
import Table from "@/views/CarTeacher/Car2/Table.vue";

export default {
  name: "Car2",
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
