<template>
  <div class="res-news">
    <page-header />
    <resource-bar />
    <bread-crumb />
    <new-menu />
    <page-footer />
  </div>
</template>

<script>
import BreadCrumb from '../components/BreadCrumb.vue';
import NewMenu from "../components/Finance&Taxation/newMenu.vue";
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import ResourceBar from "../components/resourceBar.vue";
export default {
  components: { pageHeader, ResourceBar, NewMenu, PageFooter, BreadCrumb },
};
</script>

<style lang="scss" scoped>
.res-news {
  position: relative;
    min-height: 100vh;

  padding-bottom: 25em;
}

@media only screen and (min-width: 768px) {
    .res-news{
        padding-bottom:15em
    }
}
</style>