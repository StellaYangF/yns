<template>
  <div class='page-header-tab'>
    <div class='left'>
      <img src="" alt="logo" class='logo'>
      <span>子站名称专业站</span>
    </div>
    <!-- 右侧导航栏 -->
    <div class='right'>
      <span
        v-for='(nav, index) in navs'
        :key='nav.text'
        @click='selectNav(nav.path, index)'
        :class='["nav-item", selectedNavIndex === index ? "active" : ""]'
      >{{ nav.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-header-tab',
  data() {
    return {
      selectedNavIndex: 0,
      // navList: [],
    }
  },
  props: {
    navs: {
      type: Array,
      default: () => [],
    }
  },
  created() {
    // this.navs = [
    //   { text: '首页', path: '/profession' },
    //   { text: '企业介绍', path: '/profession/enterprise' },
    //   { text: '产品介绍', path: '/profession/product' },
    //   { text: '荣誉资质', path: '/profession/honor' },
    //   { text: '联系我们', path: '/profession/contact' },
    // ]
  },

  methods: {
    selectNav(path, index) {
      if (this.selectedNavIndex == index) return;
      this.selectedNavIndex = index;
      this.$router.push(path);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles.scss';

.page-header-tab {
  width: 1200px;
  margin: 0 auto;
  height: 72px;
  display: flex;
  justify-content: space-between;
  line-height: 72px;
  .left {
    color: $--color-primary;
    font-size: 20px;
    display: flex;
    align-items: center;
    .logo {
      height: 100%;
      width:100px;
      display: inline-block;
      background: $--color-primary;
      margin-right: 10px;
      box-shadow: 0 0 10px 0px rgba(0,0,0,.1);
      border-right: 2px;
    }
  }
  .right {
    font-size: 18px;
    color: $--font-grey;
    .nav-item {
      padding: 0 20px;
      display: inline-block;
      transition: color .3s, background-color .3s;
      opacity: .8;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
      &.active {
        background: linear-gradient(103deg, #fff 17%,#52af24 18%, #52af24 82%,#fff 83%);
        color: #fff;
      }
    }
  }
}
</style>
