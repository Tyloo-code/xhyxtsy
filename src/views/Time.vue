<template>
  <div id="Time">
    {{this.datetime}}
  </div>
  
</template>

<script>
export default {
  name: "Time",
  data() {
    return{
      timer: '',
      datetime: ''
    }
  },
  mounted() {
      /* 每秒定时刷新 */
      this.timer = setInterval(() => {
        this.datetime = this.dayjs().format("YYYY-MM-DD HH:mm:ss")
        console.log(this.datetime)
      }, 1000)
    },
    beforeDestroy() {
      /* 离开页面前销毁定时器 */
      if(this.timer){
        clearInterval(this.timer);
      }
    }
}
</script>

<style>

</style>