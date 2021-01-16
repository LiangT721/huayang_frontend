<template>
  <div class="resource">
    <page-header />
    <resource-bar />
    <resource-menu />
    <page-footer />
  </div>
</template>

<script>
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
  },
};
</script>

<style lang="scss" scoped>
.resource {
  position: relative;
}
</style>