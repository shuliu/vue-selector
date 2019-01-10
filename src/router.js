import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index';
import Home from './views/desktop/Home.vue'
import mobileDevice from './helpers/device';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /**
     * desktop routers
     */
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/desktop/About.vue'),
    },
    /**
     * desktop routers
     */
    {
      path: '/mobile',
      name: 'mobileHome',
      component: () => import('./views/mobile/Home.vue'),
    },
  ]
});

/** 網址與裝置判斷不符時轉跳 */
function checkToredirect(to, from, next) {
  
  const mobilePath = 'mobile';
  const isMobile = (mobileDevice.mobile() || mobileDevice.tablet()) !== null || false;
  const isMobilePath = (to.fullPath.split('/').filter(x => x.length > 0)[0] || '') === mobilePath;

  // mobile device 但是網址是 desktop
  if (isMobile && !isMobilePath) {
    return next('/mobile');
  }

  // desktop device 但是網址是 mobile
  if (!isMobile && isMobilePath) {
    return next('/');
  }

  return next();
}

/** 畫面 loading */
function loading(to, from, next) {
  store.dispatch('Loading/updateLoading', { isLoading: true });
  next();
}
const unloading = () => {
  store.dispatch('Loading/updateLoading', { isLoading: false });
};

router.beforeEach(checkToredirect);
router.beforeEach(loading);
router.afterEach(unloading);

export default router;