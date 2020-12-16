<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="fleet_Num" label="班级名称" />
      <el-table-column prop="campany_Name" label="学号" />
      <el-table-column prop="number" label="姓名" />
      <el-table-column prop="people" label="选课状态" />
      <!-- <el-table-column fixed="right" label="功能列表" width="120">
        <template slot-scope="scope"> -->
          <!-- <el-button @click="handleChange" type="text" size="small">
            班级管理 -->
          <!-- </el-button> -->
          <!-- <el-button @click="handleDelete(scope.row)" type="text" size="small"
            > 更改选课</el-button
          >
        </template> -->
      <!-- </el-table-column> -->
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
    fleet_Num:"机械194",
    campany_Name:"190743101",
    number: "张三",
    name: "北京林业大学",
    people: "87"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743102",
    number: "李四",
    name: "北京林业大学",
    people: "88"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743103",
    number: "王五",
    name: "北京林业大学",
    people: "90"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743104",
    number: "赵六",
    name: "北京林业大学",
    people: "86"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743105",
    number: "张四",
    name: "北京林业大学",
    people: "86"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743106",
    number: "张五",
    name: "北京林业大学",
    people: "88"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743107",
    number: "张六",
    name: "北京林业大学",
    people: "89"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743108",
    number: "张七",
    name: "北京林业大学",
    people: "98"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743109",
    number: "张八",
    name: "北京林业大学",
    people: "89"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743110",
    number: "张九",
    name: "北京林业大学",
    people: "90"
  },
  {
    fleet_Num:"机械194",
    campany_Name:"190743111",
    number: "张十",
    name: "北京林业大学",
    people: "91"
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
