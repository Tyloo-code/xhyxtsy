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
import Search from "@/components/fleet/Search.vue";
import Funcs from "@/components/fleet/Funcs.vue";
import Table from "@/components/fleet/Table.vue";

export default {
  name: "Fleet",
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
