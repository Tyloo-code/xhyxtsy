<template>
  <div class="header">
    <h3>《信号与系统》仿真实验平台</h3>
 
    <div class="user">
      <span >系统时间：{{this.datetime}}</span> 
      <span class="time">111</span> 
      <span class="username">
        <label> 用户： </label>
        <code> {{ userName }} </code>
      </span>

      <span class="logout">
        <i class="el-icon-switch-button"></i>
        <label @click="logout"> 退出 </label>
      </span>
    </div>
  </div>
</template>

<script>
import {setCookie} from '@/common/utils';
export default {
    data() {
        return {
          timer: '',
          datetime: ''
        }
    },
    props: ['userName'],
    methods: {
        logout() {
            setCookie('userNum', '', -1);
            setCookie('role', '', -1);
            setCookie('access_token', '', -1);
            this.$emit('showHeader', false);
            window.location.href = '#/login';
        }
    },
       mounted() {
      /* 每秒定时刷新 */
      this.timer = setInterval(() => {
        this.datetime = this.dayjs().format("YYYY-MM-DD HH:mm:ss")
        // console.log(this.datetime)
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

<style lang="scss" scoped>
.header {
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  background-color: #343a40;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  h3 {
    font-size: 24px;
    color: white;
    display: inline-block;
  }
  .user {
    font-weight: bold;
    font-size: 14px;
    padding: 0 20px;
    height: 24px;
    line-height: 24px;
    margin: 18px 30px;
    border-radius: 12px;
    background-color: #6c757d;
    color: white;
    float: right;
    .time{
      color: rgba(0,0,0,0);
    }
    .logout {
      display: inline-block;
      height: 24px;
      line-height: 24px;
      padding: 0 5px;
      cursor: pointer;
      label,
      i {
        cursor: pointer;
      }
      &:hover {
        color: #dc3545;
      }
    }
  }
}
</style>
