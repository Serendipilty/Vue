<template>
  <el-container>
    <el-header>
      <div class="header-left">
        <img src="../assets/logo.png" alt="" />
        <span>VUE Manage</span>
      </div>
      <div class="header-right">
        <div class="operation">
          <el-popover placement="bottom" title="" width="320" trigger="hover">
            <div class="notice">
              <h2>通知</h2>
              <ul>
                <li v-for="item in noticeData" :key="item.id">
                  <img :src="item.img" alt="" />
                  <span>{{ item.content }}<a href="#">点击处理</a></span>
                </li>
              </ul>
              <div class="notice-foot" @click="clearNotice">
                <i class="el-icon-circle-close"></i>清空消息
              </div>
            </div>
            <el-badge :value="3" class="item" slot="reference"
              ><i class="el-icon-bell"></i
            ></el-badge>
          </el-popover>
        </div>
        <div class="operation">
          <i class="el-icon-brush" @click="drawer = true"></i>
        </div>
        <div class="operation"><i class="el-icon-refresh"></i></div>
        <div class="message">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">个人信息</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-drawer title="主题配置" :visible.sync="drawer" size="20%">
          <div class="drawer-content">
            <el-form
              :model="configure"
              label-position="left"
              label-width="120px"
              size="small"
            >
              <el-form-item>
                <span slot="label"
                  >布局
                  <el-tooltip
                    class="item"
                    :enterable="false"
                    content="布局配置仅在电脑视窗下生效，手机视窗时将默认锁定为纵向布局"
                    placement="top"
                    ><i class="el-icon-question"></i></el-tooltip
                ></span>
                <el-select placeholder="常规" v-model="configure.layout">
                  <el-option label="常规" value="常规"></el-option>
                  <el-option label="纵向" value="纵向"></el-option>
                  <el-option label="横向" value="横向"></el-option>
                  <el-option label="分栏" value="分栏"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="主题">
                <el-select placeholder="蓝白" v-model="configure.theme">
                  <el-option label="蓝黑" value="蓝黑"></el-option>
                  <el-option label="蓝白" value="蓝白"></el-option>
                  <el-option label="绿黑" value="绿黑"></el-option>
                  <el-option label="绿白" value="绿白"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <span slot="label"
                  >菜单背景<i class="el-icon-question"></i
                ></span>
              </el-form-item>
            </el-form>
            <div class="drawer-footer"></div>
          </div>
        </el-drawer>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      noticeData: [
        {
          id: 1,
          img: "https://i.gtimg.cn/club/item/face/img/8/15918_100.gif",
          content: "待处理信息",
        },
        {
          id: 2,
          img: "https://i.gtimg.cn/club/item/face/img/0/15640_100.gif",
          content: "待处理信息",
        },
        {
          id: 3,
          img: "https://i.gtimg.cn/club/item/face/img/9/15919_100.gif",
          content: "待处理信息",
        },
      ],
      drawer: false,
      configure: {
        layout: "常规",
        theme: "蓝白",
      },
    };
  },
  methods: {
    clearNotice() {
      this.noticeData = [];
    },
  },
};
</script>

<style scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-left img {
  height: 32px;
  width: 32px;
}

.header-left span {
  padding-left: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #515a6e;
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.operation {
  width: 50px;
  text-align: center;
  cursor: pointer;
}

.operation i {
  font-size: 20px;
  font-weight: 500;
}

.notice h2 {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 4px;
  border-bottom: 2px solid #ebeef5;
}

.notice ul {
  height: 200px;
  overflow-y: auto;
}

.notice li {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.notice li img {
  height: 45px;
  width: 45px;
  padding: 0 10px;
  border-radius: 50%;
}

.notice li span {
  font-size: 18px;
}

.notice li span a {
  color: #1890ff;
}

.notice-foot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-top: 1px solid #ebeef5;
  font-size: 14px;
  color: #f34d37;
  cursor: pointer;
}

.notice-foot i {
  padding-right: 4px;
}

.drawer-content {
  height: calc(100vh - 120px);
  padding: 20px 20px 0;
}

.message {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.message .el-avatar {
  margin: 0 10px;
}
</style>