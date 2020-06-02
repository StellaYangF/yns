export default [
  {
    path: '/profession',
    component: () => import(/*webpackChunkName:'profession.home'*/'@/views/profession/Home.vue'),
    meta: {
      title: '专业社'
    },
    children: [
      { 
        path: 'enterprise', 
        component: () => import(/*webpackChunkName:'profession.enterprise'*/'@/views/profession/Enterprise.vue'),
        meta: {
          title: '企业介绍'
        },
      },{ 
        path: 'product', 
        component: () => import(/*webpackChunkName:'profession.product'*/'@/views/profession/Product.vue'),
        meta: {
          title: '产品介绍'
        },
      },{ 
        path: 'honor', 
        component: () => import(/*webpackChunkName:'profession.honor'*/'@/views/profession/Honor.vue'),
        meta: {
          title: '荣誉资质'
        },
      },{ 
        path: 'contact', 
        component: () => import(/*webpackChunkName:'profession.contact'*/'@/views/profession/Contact.vue'),
        meta: {
          title: '联系我们'
        },
      },
    ]
  }, 
]