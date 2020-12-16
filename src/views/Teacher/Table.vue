<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="序号" width="100" />
      
      <el-table-column prop="campany_Name" label="用户名" />
      <el-table-column prop="number" label="密码" />
     
      
    </el-table>
    <el-pagination
      class="pagination"
      background
      layout="total, prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
  {
    
    campany_Name:"190703101",
    number: "190703101",
    
  },
  {
    
    campany_Name:"190703102",
    number: "190703102",
    
  },
  {
  
    campany_Name:"190703103",
    number: "190703103",
    
  },
  {
    
    campany_Name:"190703104",
    number: "190703104",
   
  },
  {
  
    campany_Name:"190703105",
    number: "190703105",
    
  },
  {
  
    campany_Name:"190703106",
    number: "190703106",
 
  },
  {
   
    campany_Name:"190703107",
    number: "190703107",
  
  },
  {
   
    campany_Name:"190703108",
    number: "190703108",
   
  },
  {
  
    campany_Name:"190703109",
    number: "190703109",
    
  },
  {
    
    campany_Name:"190703110",
    number: "190703110",
   
  },
  {
   
    campany_Name:"190703111",
    number: "190703111",
 
  },
  {
   
    campany_Name:"190703112",
    number: "190703112",
  
  },
  {
   
    campany_Name:"190703113",
    number: "190703113",
   
  },
  {
  
    campany_Name:"190703114",
    number: "190703114",
    
  },
  {
    
    campany_Name:"190703115",
    number: "190703115",
   
  },
  {
   
    campany_Name:"190703116",
    number: "190703116",
 
  },
],
     
    };
  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
