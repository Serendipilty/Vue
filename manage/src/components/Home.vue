<template>
  <el-container>
    <el-header>
      <div class="header-left">
        <img src="../assets/logo.png" alt="" />
        <span>VUE Manage</span>
      </div>
      <div class="header-right">
        <div><i class="el-icon-bell"></i></div>
        <div><i class="el-icon-brush"></i></div>
        <div><i class="el-icon-refresh"></i></div>
        <div>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>

              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
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
</style>