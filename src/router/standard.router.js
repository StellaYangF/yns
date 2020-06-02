export default [
  {
    path: '/standard',
    component: () => import(/*webpackChunkName:'standard.home'*/'@/views/standard/Home.vue'),
    meta: {
      title: '标准社'
    },
    children: [
      { 
        path: 'state', 
        component: () => import(/*webpackChunkName:'standard.state'*/'@/views/standard/State.vue'),
        meta: {
          title: '本地农情'
        },
      },{ 
        path: 'agri', 
        component: () => import(/*webpackChunkName:'standard.agri'*/'@/views/standard/Agri.vue'),
        meta: {
          title: '品牌农业'
        }
      },{ 
        path: 'special', 
        component: () => import(/*webpackChunkName:'standard.special'*/'@/views/standard/Special.vue'),
        meta: {
          title: '农特产品'
        },
      },{ 
        path: 'tavel', 
        component: () => import(/*webpackChunkName:'standard.tavel'*/'@/views/standard/Travel.vue'),
        meta: {
          title: '乡村旅游'
        },
      },{ 
        path: 'expert', 
        component: () => import(/*webpackChunkName:'standard.expert'*/'@/views/standard/Expert.vue'),
        meta: {
          title: '专家服务'
        }
      },
    ]
  }, 
]