<template>
    <div class="res-cov">
        <page-header />
        <resource-bar />
        <covid-menu />
        <page-footer />
    </div>
</template>

<script>
import CovidMenu from '../components/covidMenu.vue'
import PageFooter from '../components/pageFooter.vue'
import pageHeader from '../components/pageHeader.vue'
import ResourceBar from '../components/resourceBar.vue'
    export default {
  components: { pageHeader, ResourceBar, CovidMenu, PageFooter },
        
    }
</script>

<style lang="scss" scoped>
.res-cov{
    position: relative;
    min-height: 100vh;
}
.content {
  width: 80%;
  margin: 2em 0 2em 10%;
  min-height: 38vh;
}

</style>