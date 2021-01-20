<template>
    <div class="res-cov-con">
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
.res-cov-con{
    position: relative;
    min-height: 100vh;
    padding-bottom: 25em;

}
@media only screen and (min-width: 768px) {
    .res-cov-con{
        padding-bottom:15em
    }
}
@media only screen and (min-width: 1280px) {
    .res-cov-con{
        padding-bottom:13em
    }
}
</style>