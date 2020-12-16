<template>
    <div class="login">
        <div class="login-input">
            <div class="title">《信号与系统》仿真实验平台</div>
            <el-form ref="form" :model="form" label-width="0" :rules="rules" v-loading="loading">
                <el-form-item prop="userNum">
                    <el-input
                        placeholder="用户名"
                        v-model="form.userNum">
                        <i slot="prefix" class="el-input__icon el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="密码"
                        v-model="form.password">
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn" round @click="onSubmit('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import {http} from '@/common/http';
import apis from '@/common/api';

export default {
    name: 'Login',
    components: {
    },
    props: ['role'],
    data() {
        return {
            loading: false,
            form: {
                userNum: '',
                password: ''
            },
            userIdentity: {},
            rules: {
                userNum: [
                    {required: true, message: '请输入用户名', trigger: 'submit'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'submit'}
                ]
            }
        };
    },
    methods: {
        // 点击登录
        onSubmit(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.loading = true;
                    http({
                        method: 'post',
                        url: apis.login.api,
                        data: this.form
                    })
                    .then(res => {
                        this.loading = false;
                        this.userIdentity = res;
                        for (let item in res) {
                            document.cookie = `${item}=${res[item]};`;
                        }
                        this.$router.push({path: '/home'});
                    }).catch(error => {
                        this.loading = false;
                        this.$message({
                            showClose: true,
                            message: error || '登录失败，请重试',
                            type: 'error'
                        });
                        console.log(error);
                    });
                }
            });
        }
    },
    mounted() {
        this.$emit('showHeader', false);
    }
};
</script>
<style lang="scss">
.login {
    background: url('http://intelforestry.org/ms/one.jpg') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    margin: 0!important;
    .login-input {
        position: fixed;
        padding: 30px;
        top: 20%;
        left: 50%;
        transform: translate(-50%, 0);
        color: #fff;
        width: 600px;
        text-align: center;
        .title {
            font-size: 40px;
            margin: 40px;
        }
        .el-form {
            width: 300px;
            margin: 0 auto;
        }
        .el-input__icon {
            color: #fff;
            font-size: 20px;
            padding-left: 10px;
        }
        input {
            padding: 9px 9px 9px 45px;
            font-size: 18px;
            border-radius: 20px;
            line-height: 40px;
            height: 40px;
            outline: none;
            background: rgba(215, 215, 215, 0.5) !important;
            margin: 0 auto;
            width: 100%;
            display: block;
            border: 1px solid #ddd;
            font-weight: bold;
            color: #fff;
        }
        ::-webkit-input-placeholder {
            color: #fff;
            font-weight: bold;
        }
        .login-btn {
            width: 100%;
        }
    }
    .el-loading-mask {
        background-color: rgba(255,255,255,.1);
    }
}
</style>
