<template>
    <el-menu
        id="nav"
        :default-active="routerActive"
        :router="router"
        background-color="#212529"
        text-color="#fff"
        >
        <el-menu-item :index="item.path" v-for="(item,index) in navList" :key="index">
            <i :class="item.icon || 'el-icon-menu'"></i>
            <span>{{item.title}}</span>
        </el-menu-item>
    </el-menu>
</template>


<script>
export default {
    data() {
        return {
            router: true,
            routerActive: this.$route.name,
            navList: [
                {
                    path: 'home',
                    title: '教师界面',
                    icon: 'el-icon-s-home'
                },
                {
                    path: 'fleet',
                    title: '学生界面',
                    icon: 'el-icon-s-grid'
                },
                             
            ]
        };
    },
    // 一级账户的权限就是超级用户的权限，对应Role管理员角色Administrator
    // 二级账户的权限增加、编辑，不能删除数据，对应Role授权用户Supervisor
    // 三级账户的权限只能查看信息，不能增加、编辑和删除，对应用户User
    props: ['role'], // 用户角色
    methods: {
        initNav() {
            if (this.role === 'Administrator') {
                this.navList.push({
                    path: 'user',
                    title: '用户管理',
                    icon: 'el-icon-s-custom'
                });
            }
        }
    },
    mounted() {
        this.initNav();
    }
};
</script>

<style lang="scss" scoped>
#nav {
  font-weight: 700;
  padding-top: 60px;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: scroll;
  background-color: #212529;
}
</style>
