<template>
  <div>
    <!-- <el-button type="primary" icon="el-icon-folder-add" @click="handleAdd">
      增加
    </el-button> -->
    <!-- <el-button type="primary">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :multiple="multiple"
        :showFileList="multiple"
        :on-success="handleSuccess"
        :on-error="handleError"
        show-file-list="false"
        :limit="1"
        accept=".csv"
      >
        <i class="el-icon-upload2"></i>
        上传
      </el-upload>
    </el-button> -->
    <el-button type="primary" icon="el-icon-download" @click="handleDownload">
      导出
    </el-button>
    <!-- <el-dialog title="新增班级信息" :visible.sync="addVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="学院名称" :label-width="formLabelWidth">
          <el-input v-model="form.fleet_Num" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="专业名称" :label-width="formLabelWidth">
          <el-input v-model="form.campany_Name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级名称" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
      </el-form> -->
      <!-- <div slot="footer">
        <el-button type="primary" @click="handleAdd">确 认</el-button>
      </div> -->
    <!-- </el-dialog> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      addVisible: false,
      multiple: false,
      formLabelWidth: "80px",
      form: {
        fleet_Num: "",
        campany_Name: "",
        number: ""
      }
    };
  },
  methods: {
    handleAdd() {
      let myDate = new Date();
      let myTime = this.$moment(myDate).format("YYYYMMDDHHmmss");
      this.form.fleet_Num = myTime;
      console.log(myTime);
      this.addVisible = true;
    },

    handleSuccess() {
      this.$message({
        type: "success",
        message: "文件上传成功"
      });
    },
    handleError() {
      this.$message({
        type: "error",
        message: "文件上传失败"
      });
    },
    handleDownload() {
      console.log("下载");
    }
  }
};
</script>

<style lang="scss" scoped>
.upload-demo {
  display: inline-block;
  color: white;
}
</style>
