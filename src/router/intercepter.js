import router from '@/router';
import { userStore } from '@/store/user';
import { isEmpty } from 'lodash-es';
import { whiteList, asyncRoutes as staticAsyncRoutes } from './config';

export const beforeEachInterceptor = async (to, from, next) => {
  const useUserStore = userStore();
  const { token } = useUserStore;
  // token不存在
  if (!token) {
    if (whiteList.indexOf(to.path) !== -1) {
      return next();
    }
    // next(`/login?redirect=${to.path}`);
    window.location.href = `/login?redirect=${to.path}`;
    return
  }

  // token存在,路由信息不存在
  try {
    let { asyncRoutes } = useUserStore;
    if (isEmpty(asyncRoutes)) {
      let { userInfo } = useUserStore;
      if (isEmpty(userInfo)) userInfo = (await useUserStore.getInfo()).data;
      // const { resourceCodes } = userInfo;
      const resourceCodes = [
        'Static',
      ]

      asyncRoutes = filterAsyncRoutesByCode(resourceCodes, staticAsyncRoutes);
      const settedRoutes = await useUserStore.setAsyncRoutes(asyncRoutes);

      // 添加路由到index下面
      settedRoutes.forEach((routeObj) => {
        router.addRoute('index', routeObj);
      });
      return next({ ...to, replace: true });
    }
    next();
  } catch (error) {
    console.error(' safety-production router intercepter:', error);
    await useUserStore.resetUserInfo()
    // next(`/login?redirect=${to.path}`);
    window.location.href = `/login?redirect=${to.path}`;
  }

  // 路由不存在
  if (to.matched.length === 0) {
    console.log('路由匹配失败');
    window.location.href = '/404';
  }
};

function filterAsyncRoutesByCode(routesCodes, routes) {
  let filterRoutes = [];
  for (const iterator of routes) {
    if (routesCodes.includes(iterator.code)) {
      let newItem = iterator;
      if (!isEmpty(iterator.children)) {
        newItem.children = filterAsyncRoutesByCode(routesCodes, iterator.children);
      }
      filterRoutes.push(newItem);
    }
  }
  return filterRoutes;
}
