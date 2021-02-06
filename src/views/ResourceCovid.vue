<template>
    <div class="res-cov">
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
.res-cov{
  position: relative;
  min-height: 100vh;
  padding-bottom: 25em;

}
.content {
  width: 80%;
  margin: 2em 0 2em 10%;
  min-height: 38vh;
}
@media only screen and (min-width: 768px) {
    .res-cov{
        padding-bottom:15em
    }
}
@media only screen and (min-width: 1280px) {
    .res-cov{
        padding-bottom:13em
    }
}
</style>