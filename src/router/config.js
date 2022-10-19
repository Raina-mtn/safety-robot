import Layout from '@/components/layout/index.vue';

// 路由白名单
export const whiteList = ['/login', '/home'];


export const asyncRoutes = [
  {
    path: '/static',
    code: 'Static',
    component: () => import('@/views/static/index.vue'),
    meta: { title: '统计分析', icon: 'icon-shouye-shouye' },
  },
];
// 默认路由
export const constantRoutes = [
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index.vue')
  // },
  // {
  //   path: '/404',
  //   component: () => import('@/views/404.vue')
  // },
  {
    path: '/',
    component: Layout,
    name: 'index',
    redirect: '/static',
    children: asyncRoutes
  }
];
