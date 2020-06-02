<template>
  <div class='page-footer'>
    <div>
      <span 
        v-for='question in commonQs' 
        :key='question'
        class='nav-item'
      >{{question}}</span>
    </div>
    <div>Copyright@2017 乡聚益农 版权所有 鄂 ICP 备 14002677 号</div>
    <div>技术支持：武汉乡聚信息产业有限公司 027-87812316</div>
    <div>鄂公网安备 42018502003711 号</div>
  </div>
</template>

<script>
export default {
  name: 'page-footer',
  created() {
    this.commonQs = [ '常见问题', '联系我们', '法律声明', '网站地图' ];
  },
}
</script>

<style lang="scss" scoped>
  .page-footer {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 25px;
    span.nav-item {
      margin-right: 10px;
      cursor: pointer;
      &:not(:last-child)::after{
        content: "|";
        display: inline-block;
        margin-left: 10px;
      }
    }
  }
</style>