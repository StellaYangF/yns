<template>
  <el-row class='page-header one'>
    <el-col :span='12'>
      今天：武汉小雨转阴 <span class='red'>21</span> ~ <span class='blue'>18℃</span> <router-link to='/weather/detail'>详细 ></router-link>
    </el-col>
    <el-col :span='12'>
      <PageHeaderTab></PageHeaderTab>
    </el-col>
    <el-col>
      <PageHeaderNav :navs='navs'></PageHeaderNav>
    </el-col>
  </el-row>
</template>

<script>
import PageHeaderNav from './PageHeaderNav';
import PageHeaderTab from './PageHeaderTab';
import { mapState, mapActions } from 'vuex';
import { GET_NAVS } from '../store/action-types';

export default {
  name: 'page-header',
  components: {
    PageHeaderNav,
    PageHeaderTab
  },
  computed: {
    ...mapState(['navs']),
  },
  methods: {
    ...mapActions([GET_NAVS])
  },
  mounted() {
    console.log(this.$store);
    if (!this.navs.length)  {
      this[GET_NAVS]();
    };
  },
}
</script>

<style lang="scss" scoped>
  .page-header {
    width: 1200px;
    margin: 0 auto;
    line-height: 36px;
    .red {
      color: #e40525;
    }
    .blue {
      color: #05a7ea;
    }
    
  }
</style>