<template>
    <div class="res-cov page-setting">
        <page-header />
        <resource-bar />
        <!-- <bread-crumb /> -->
        <covid-menu />
        <page-footer />
    </div>
</template>

<script>
// import BreadCrumb from '../components/BreadCrumb.vue'
import PageFooter from '../components/pageFooter.vue'
import pageHeader from '../components/pageHeader.vue'
import CovidMenu from '../components/resource/covidMenu.vue'
import ResourceBar from '../components/resource/resourceBar'
    export default {
  components: { pageHeader, ResourceBar, CovidMenu, PageFooter },
        
    }
</script>

<style lang="scss" scoped>

</style>