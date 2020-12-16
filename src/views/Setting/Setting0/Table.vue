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
      inputVal:'',
      tableData: [{
    fleet_Num:"电气191",
    campany_Name:"190703101",
    number: "张三",
    name: "",
    // people: "97"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703102",
    number: "李四",
    name: "",
    // people: "95"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703103",
    number: "王五",
    name: "",
    // people: "93"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703104",
    number: "赵六",
    name: "",
    // people: "88"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703105",
    number: "张四",
    name: "",
    // people: "89"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703106",
    number: "张五",
    name: "",
    // people: "90"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703107",
    number: "张六",
    name: "",
    // people: "91"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703108",
    number: "张七",
    name: "",
    // people: "86"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703109",
    number: "张八",
    name: "",
    // people: "96"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703110",
    number: "张九",
    name: "",
    // people: "86"
  },
  {
    fleet_Num:"电气191",
    campany_Name:"190703111",
    number: "张十",
    name: "",
    // people: "88"
  }],
      
    };
  },
  // watch:{
  //       inputVal(val){
  //           console.log(val)
  //           this.btnClick();
  //       }
  //   },
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
