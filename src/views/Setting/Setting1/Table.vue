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
      tableData: [
  {
    fleet_Num:"车辆192",
    campany_Name:"190703201",
    number: "张三",
    name: "",
    // people: "87"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703202",
    number: "李四",
    name: "",
    // people: "88"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703203",
    number: "王五",
    name: "",
    // people: "89"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703204",
    number: "赵六",
    name: "",
    // people: "90"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703205",
    number: "张四",
    name: "",
    // people: "91"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703206",
    number: "张五",
    name: "",
    // people: "92"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703207",
    number: "张六",
    name: "",
    // people: "93"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703208",
    number: "张七",
    name: "",
    // people: "93"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703209",
    number: "张八",
    name: "",
    // people: "94"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703210",
    number: "张九",
    name: "",
    // people: "95"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703211",
    number: "张十",
    name: "",
    // people: "94"
  }],
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
