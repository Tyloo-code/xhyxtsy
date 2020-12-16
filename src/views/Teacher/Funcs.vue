<template>
  <div>
       <el-button type="primary" icon="el-icon-download" @click="handleDownload">
      导出
    </el-button>
   
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
