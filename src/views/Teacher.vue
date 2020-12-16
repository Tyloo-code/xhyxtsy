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
import Search from "@/views/Teacher/Search.vue";
import Funcs from "@/views/Teacher/Funcs.vue";
import Table from "@/views/Teacher/Table.vue";

export default {
  name: "Teacher",
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
