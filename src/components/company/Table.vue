<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="fleet_Num" label="课程名称" />
      <el-table-column prop="campany_Name" label="实验题目" />
      <el-table-column prop="number" label="班级数量" />
      <!-- <el-table-column prop="people" label="选课人数" /> -->
      <el-table-column fixed="right" label="功能列表" width="120">
        <template slot-scope="scope">
          <el-button @click="handleChange(scope.row)" type="text" size="small">
            班级调整
          </el-button>
          <!-- <el-button @click="handleDelete(scope.row)" type="text" size="small"
            >删除</el-button
          > -->
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
    <el-dialog title="新增实验信息" :visible.sync="changeVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="form.fleet_Num" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验题目" :label-width="formLabelWidth">
          <el-input v-model="form.campany_Name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级数量" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
         <!-- <el-form-item label="选课人数" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item> -->
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
    fleet_Num:"信号与系统",
    campany_Name:"信号的基本运算实验",
    number: "2",
    name: "北京林业大学",
    people: "35"
  },
  {
    fleet_Num:"信号与系统",
    campany_Name:"方波信号的分解与合成实验",
    number: "2",
    name: "北京林业大学",
    people: "39"
  },

  {
    fleet_Num:"信号与系统",
    campany_Name:"信号的采样与恢复实验",
    number: "3",
    name: "北京林业大学",
    people: "40"
  },
   {
    fleet_Num:"信号与系统",
    campany_Name:"有源无源滤波器实验",
    number: "3",
    name: "北京林业大学",
    people: "31"
  },
  /* {
    number: 4,
    name: "北京林业大学",
    people: "谢辉平"
  },
  {
    number: 5,
    name: "北京林业大学",
    people: "谢辉平"
  },
  {
    number: 6,
    name: "北京林业大学",
    people: "谢辉平"
  },
  {
    number: 7,
    name: "北京林业大学",
    people: "谢辉平"
  },
  {
    number: 8,
    name: "北京林业大学",
    people: "谢辉平"
  },
  {
    number: 9,
    name: "北京林业大学",
    people: "谢辉平"
  },
  {
    number: 10,
    name: "北京林业大学",
    people: "谢辉平"
  } */
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
