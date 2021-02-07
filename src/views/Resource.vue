<template>
  <div class="resource page-setting">
    <page-header />
    <resource-bar />
    <!-- <bread-crumb /> -->
    <resource-menu />
    <page-footer />
  </div>
</template>

<script>
// import BreadCrumb from '../components/BreadCrumb.vue';
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import ResourceBar from "../components/resource/resourceBar";
import ResourceMenu from "../components/resource/resourceMenu";
export default {
  components: {
    pageHeader,
    PageFooter,
    ResourceBar,
    ResourceMenu,
    // BreadCrumb,
  },
};
</script>

<style lang="scss" scoped>

</style>