<template>
    <div>
        <page-header />
        <resource-bar />
        <resource-content />
        <page-footer />
    </div>
</template>

<script>
import PageFooter from '../components/pageFooter.vue'
import pageHeader from '../components/pageHeader.vue'
import ResourceBar from '../components/resourceBar.vue'
import ResourceContent from '../components/resourceContent.vue'
    export default {
  components: { pageHeader, ResourceBar, ResourceContent, PageFooter },
        
    }
</script>

<style lang="scss" scoped>

</style>