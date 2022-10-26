<template>
  <PageLayout>
    <div slot="content">
      <robotTab :active-name="activeName" />
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import robotTab from './robotTab.vue'
export default {
  components:{
    PageLayout,
    robotTab
  },
  data() {
    return {
      activeName:'power'
    }
  },
}
</script>

<style>

</style>