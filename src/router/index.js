import Vue from 'vue';
import VueRouter from 'vue-router';

import { constantRoutes } from './config';
import { beforeEachInterceptor } from './intercepter';

Vue.use(VueRouter);

// 重写push方法
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch((err) => err);
};

// 生成默认路由
const router = new VueRouter({
  base: '/micro-container/safe',
  routes: constantRoutes,
  mode: 'history'
});

// 重置路由
export function resetRouter() {
  const newRouter = new VueRouter({
    base: '/micro-container/safe',
    routes: constantRoutes,
    mode: 'history'
  });
  router.matcher = newRouter.matcher; // reset router
}

// 路由守卫
router.beforeEach(beforeEachInterceptor);
export default router;