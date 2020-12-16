<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="fleet_Num" label="班级名称" width="200" />
      <el-table-column prop="campany_Name" label="学号" width="200" />
      <el-table-column prop="number" label="姓名"  width=""/>

      <el-table-column prop="name" label="填写成绩" > 
           <template slot-scope="scope">
                  <el-input v-model="scope.row.name" size="small" placeholder="输入打分"></el-input>
           </template>
      </el-table-column>
      <el-table-column  prop="name" label="实验成绩">
                <template slot-scope="scope">
                   {{ scope.row.name }}
                </template>
      </el-table-column>
     
    </el-table>
    <el-pagination
      class="pagination"
      background
      layout="total, prev, pager, next, jumper"
      :total="100"
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
    fleet_Num:"自动化191",
    campany_Name:"190713101",
    number: "张三",
    name: "",
    people: "79"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190713102",
    number: "李四",
    name: "",
    people: "90"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190713103",
    number: "王五",
    name: "",
    people: "88"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190713104",
    number: "赵六",
    name: "",
    people: "87"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190713105",
    number: "张四",
    name: "",
    people: "86"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190713106",
    number: "张五",
    name: "",
    people: "86"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190713107",
    number: "张六",
    name: "",
    people: "85"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190713108",
    number: "张七",
    name: "",
    people: "85"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190713109",
    number: "张八",
    name: "",
    people: "83"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190743110",
    number: "张九",
    name: "",
    people: "84"
  },
  {
    fleet_Num:"自动化191",
    campany_Name:"190743111",
    number: "张十",
    name: "",
    people: "84"
  },
],
     
    };
  },
  methods: {
     btnClick(){
            console.log(this.scope.row.name,'点击按钮')
     },
    
    }
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
