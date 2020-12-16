<template>
    <div id="app">
        <div>
            <sys-nav v-if="hasHeader" :role="role"></sys-nav>
            <sys-header v-if="hasHeader" :userName="userName"  @showHeader="showHeader"></sys-header>
            <router-view class="main" @showHeader="showHeader" :role="role" :userName="userName" />
        </div>
    </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Nav from "@/components/Nav.vue";
import {getCookie} from '@/common/utils';

export default {
    name: 'App',
    components: {
        'sys-header': Head,
        'sys-nav': Nav
    },
    data() {
        return {
            hasHeader: false,
            // 一级账户的权限就是超级用户的权限，对应Role管理员角色Administrator
            // 二级账户的权限增加、编辑，不能删除数据，对应Role授权用户Supervisor
            // 三级账户的权限只能查看信息，不能增加、编辑和删除，对应用户User
            role: 'User',
            userName: ''
        };
    },
    methods: {
        showHeader(show) {
            this.hasHeader = show;
            if (show) {
                this.getUserNum();
            }
        },
        getUserNum() {
            this.userName = getCookie(document.cookie, 'userNum');
            this.role = getCookie(document.cookie, 'role');
        }
    },
    mounted() {
        this.getUserNum();
    }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,body {
    width: 100%;
    height: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    .main {
        margin-top: 60px;
        margin-left: 200px;
        overflow-y: scroll;
        padding: 20px;
        min-height: 800px;
        height: 100%;
    }
}
</style>
