<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="fleet_Num" label="班级名称" />
      <el-table-column prop="campany_Name" label="学号" />
      <el-table-column prop="number" label="姓名" />
      <!-- <el-table-column prop="people" label="选课状态" /> -->
      <el-table-column fixed="right" label="功能列表" width="120">
        <template slot-scope="scope">
          <el-button @click="handleChange(scope.row)" type="text" size="small">
            修改状态
          </el-button>
          <!-- <el-button @click="handleDelete(scope.row)" type="text" size="small"
            > 更改选课</el-button >-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      background
      layout="total, prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>
    <el-dialog title="新增班级信息" :visible.sync="changeVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="学院名称" :label-width="formLabelWidth">
          <el-input v-model="form.fleet_Num" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="专业名称" :label-width="formLabelWidth">
          <el-input v-model="form.campany_Name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级名称" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="选课人数" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="handlePush">确 认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const data = [
  {
    fleet_Num:"车辆192",
    campany_Name:"190703201",
    number: "张三",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703202",
    number: "李四",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703203",
    number: "王五",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703204",
    number: "赵六",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703205",
    number: "张四",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703206",
    number: "张五",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703207",
    number: "张六",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703208",
    number: "张七",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703209",
    number: "张八",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703210",
    number: "张九",
    name: "北京林业大学",
    people: "已选"
  },
  {
    fleet_Num:"车辆192",
    campany_Name:"190703211",
    number: "张十",
    name: "北京林业大学",
    people: "已选"
  },
];
export default {
  data() {
    return {
      tableData: data,
      changeVisible: false,
      formLabelWidth: "80px",
      form: {
        campany_Name: "",
        number: "",
        fleet_Num: ""
      }
    };
  },
  methods: {
    handleChange(data) {
      this.changeVisible = true;
      this.form = data;
      console.log(data);
    },
    handlePush() {
      // 将修改好的信息上传至服务器
    },
    handleDelete(data) {
      // this.$router.replace('/car'+data.id)
      console.log(data)
      // 将信息上传至服务器进行删除
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
