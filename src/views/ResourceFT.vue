<template>
  <div class="res-news page-setting">
    <page-header />
    <resource-bar />
    <!-- <bread-crumb /> -->
    <new-menu />
    <page-footer />
  </div>
</template>

<script>
// import BreadCrumb from "../components/BreadCrumb.vue";
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import ResourceBar from "../components/resource/resourceBar.vue";
import NewMenu from "../components/resource/FTMenu";
export default {
  components: { pageHeader, ResourceBar, NewMenu, PageFooter },
};
</script>

<style lang="scss" scoped>

</style>