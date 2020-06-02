import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路径  读取的子目录
const files = require.context('./',false,/\.router.js$/);
const routes = [];
files.keys().forEach(key=>{
  routes.push(...files(key).default);
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
