<!--
 * @Date: 2022-06-23 11:15:03
 * @LastEditors: DESKTOP-58041OI\zzs squanchy@yeah.net
 * @LastEditTime: 2022-06-29 10:27:53
 * @FilePath: \safety-production\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: calc( 100vh - 50px ) !important;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
