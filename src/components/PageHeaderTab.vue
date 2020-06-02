
<template>
  <div class='page-header-nav'>
    <router-link to='/user/reg'>免费注册</router-link> |
    <router-link to='/user/login'>会员登录</router-link>
    <router-link to='/'>【平台首页】</router-link>
  </div>
</template>

<script>
export default {
  name: 'page-header-nav'
}
</script>

<style lang="scss" scoped>
div {
  text-align: right;
}
  div a:first-child {
    padding-right: 10px;
  }
  a {
    padding-left: 10px;
    &:hover {
      opacity: 1;
    }
  }
</style>