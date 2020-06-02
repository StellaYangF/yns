<template>
  <div>
    首页
    <router-view></router-view>
  </div>
</template>

<script>
import { getProfessionNav } from '@/api/profession.js';

export default {
  name: 'profession-home',
  async mounted() {
    const navs = await getProfessionNav();
  },
}
</script>