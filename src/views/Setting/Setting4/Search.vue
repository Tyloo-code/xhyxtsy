<template>
  <div class="search-group">
    <el-input placeholder="请输入学生名称" v-model="fleet_Num" class="input">
      <!-- <el-select
        class="select"
        v-model="select"
        slot="prepend"
        placeholder="请选择"
      >
        <el-option label="编号" value="number"></el-option>
        <el-option label="名称" value="name"></el-option>
      </el-select> -->
      
    </el-input>
    
    <!-- <el-input placeholder="请输入班级名称" v-model="campany_Name" class="input"></el-input> -->
    <el-button
        slot="append"
        @click="handleSearch"
        icon="el-icon-search" 
        class="button"
      >搜索</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "number",
      fleet_Num: "",
      campany_Name:""
    };
  },
  methods: {
    handleSearch() {
      console.log(this.input);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-group {
  width: 400px;
  .select {
    width: 80px;
  }
  .input{
    width:150px;
    float: left !important;
    margin-right: 5px;
  }
  .button{
    color: #FFF;
    background-color: #409EFF;
  }
}
</style>
