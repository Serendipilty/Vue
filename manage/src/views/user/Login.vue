<template>
  <div class="container">
    <div class="login">
      <div class="login-left">
        <div class="login-box">
          <h1>用户登录</h1>
          <el-form ref="loginRef" :model="loginForm" :rules="loginRules">
            <el-form-item prop="username">
              <el-input
                v-model="loginForm.username"
                placeholder="手机/电子邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                placeholder="密码"
                type="password"
              ></el-input>
            </el-form-item>
            <el-form-item size="mini">
              <el-checkbox v-model="remember"
                >记住账号密码</el-checkbox
              ></el-form-item
            >
            <el-form-item
              ><el-button type="primary" @click="login"
                >登录</el-button
              ></el-form-item
            >
          </el-form>

          <div class="register">
            没有帐号？<el-link type="primary" :underline="false"
              >点此注册</el-link
            >
          </div>
          <el-divider>其他方式登录</el-divider>
          <div class="other">
            <span>
              <i class="iconfont icon-GitHub"></i>
            </span>
            <span>
              <i class="iconfont icon-zhifubao"></i>
            </span>
            <span>
              <i class="iconfont icon-dingding"></i>
            </span>
            <span>
              <i class="iconfont icon-weixin"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="login-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      remember: false,
      loginRules: {
        username: [
          { required: true, message: "请输入登录账号", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    login() {
      this.$refs.loginRef.validate(async (valid) => {
        if (!valid) return;
        // const { data: res } = await this.$http.post("login", this.loginForm);
        // if (res.meta.status !== 200) {
        //   this.$message.console.error("登录失败");
        // }
        // window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f7fafc;
}
.login {
  display: flex;
  justify-content: space-between;
  width: 1100px;
  height: 600px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
}
.login-left {
  width: 42%;
  background-color: #fff;
}
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
}
h1 {
  font-size: 24px;
  font-weight: 600;
}
.el-form-item {
  margin: 20px 0 0;
}
.el-form-item--mini.el-form-item {
  margin: 0;
}

.el-input {
  display: flex;
  width: 320px;
}

.el-checkbox {
  width: 100%;
  margin-top: 14px;
  text-align: left;
}

.el-button {
  width: 320px;
}

.register {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 16px;
}

.register .el-link {
  font-size: 16px;
}

.el-divider {
  width: 360px;
  margin-top: 140px;
  margin-bottom: 30px;
}

.el-divider__text {
  font-size: 16px;
  color: #8c92a4;
}

.other {
  display: flex;
  justify-content: space-between;
  width: 320px;
}
.other span {
  width: 32px;
  height: 32px;
}
.other span i {
  font-size: 32px;
}
.icon-GitHub {
  color: #0a0203;
}
.icon-zhifubao {
  color: #06b4fd;
}
.icon-dingding {
  color: #3795f9;
}
.icon-weixin {
  color: #46d800;
}

.login-right {
  flex: 1;
  background: url(../../assets/poster.svg) no-repeat;
  background-size: 80%;
  background-position: center;
  background-color: #ebf4ff;
}
</style>