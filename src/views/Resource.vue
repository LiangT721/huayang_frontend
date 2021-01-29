<template>
  <div class="resource">
    <page-header />
    <resource-bar />
    <bread-crumb />
    <resource-menu />
    <page-footer />
  </div>
</template>

<script>
import BreadCrumb from '../components/BreadCrumb.vue';
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import ResourceBar from "../components/resourceBar.vue";
import ResourceMenu from "../components/resourceMenu.vue";
export default {
  components: {
    pageHeader,
    PageFooter,
    ResourceBar,
    ResourceMenu,
    BreadCrumb,
  },
};
</script>

<style lang="scss" scoped>
.resource {
  position: relative;
  min-height: 100vh;
  padding-bottom: 25em;
}
@media only screen and (min-width: 768px) {
    .resource{
        padding-bottom:15em
    }
}
@media only screen and (min-width: 1280px) {
    .resource{
        padding-bottom:15em
    }
}
</style>