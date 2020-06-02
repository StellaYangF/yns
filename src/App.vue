<template>
  <div id="app">
    <el-container>
      <el-header style='height: 108px; padding:0; '>
        <PageHeader></PageHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style='padding:33px 0 36px; height: 165px; '>
        <PageFooter></PageFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @/ 标识 src 目录
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'app',
  components: { // 注册组件
    PageHeader,
    PageFooter,
  },
  created() {
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #333;
  opacity: .7;
  &:hover {
    opacity: 1;
  }
  &.router-link-exact-active {
    color: #222;
    opacity: 1;
  }
}
#app {
  min-width: 1200px;
  overflow: hidden;
  .el-header, .el-footer {
    color: #333;
    font-size: 14px;
  }
  .el-header {
    background: linear-gradient(180deg, #f5f5f5 33%, #fff 33%);
  }
  .el-footer {
    background: #f5f5f5;
  }
  .el-main {
    padding: 0;
    min-height: calc(100vh - 436px);
  }
}
</style>