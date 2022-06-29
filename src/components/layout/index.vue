<!--
 * @Date: 2022-06-28 13:45:36
 * @LastEditors: DESKTOP-58041OI\zzs squanchy@yeah.net
 * @LastEditTime: 2022-06-29 14:41:21
 * @FilePath: \safety-production\src\components\layout\index.vue
-->
<template>
  <WLayout
    v-bind="layoutAttrs"
  />
</template>

<script>
import { userStore } from '@/store/user'
import WLayout from '@common-ui/w-layout';
export default {
  name: 'IndexVue',
  components: {
    WLayout
  },
  data() {
    return {
      opened: true,
      layoutAttrs: {
        menu: userStore().routes,
        navBgColor: 'linear-gradient(90deg, #F5A100, #FFBB34)'
      },
    };
  },
  methods: {
    toggleSideBar() {
      this.opened = !this.opened;
    },
  }
};
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  height: 100% !important;
  width: 100%;
  background: red;
  ::v-deep {
    .sidebar-container {
      top: 0 !important;
      height: 100% !important;
      position: absolute !important;
    }
    .nav-container{
      display: none;
    }
    .main-container {
      height: 100% !important;
      .app-main{
        height:  100% !important;
      }
    }
  }
}
</style>
