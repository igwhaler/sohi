<template>
    <div class="login">
        <div class="wrap-from">
            <div class="title">登录夺宝电商后台</div>
            <el-form>
                <el-form-item prop="name">
                    <el-input placeholder="用户名" v-model="ruleForm.name" autocomplete="off" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="密码" type="password" v-model="ruleForm.password" autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm" :style="{width: '100%'}">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            ruleForm: {
                name: '',
                password: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log(this.ruleForm);

            this.$router.replace('/');
        }
    }
};
</script>

<style lang="less" scoped>
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    background-color: #f8f8f9;
}
.wrap-from {
    width: 400px;
    padding: 40px 30px;
    background-color: #ffffff;
    border-radius: 4px;
    .title {
        padding-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: #606266;
    }
}
</style>
