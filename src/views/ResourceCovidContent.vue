<template>
  <div class="res-cov-con page-setting">
    <page-header />
    <resource-bar />
    <!-- <bread-crumb /> -->
    <component :is="current" class="content"></component>
    <page-footer />
  </div>
</template>

<script>
// import BreadCrumb from '../components/BreadCrumb.vue';
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import ResourceBar from "../components/resource/resourceBar";
export default {
  components: {
    pageHeader,
    ResourceBar,
    PageFooter,
    "co-bf": () => import("../components/resource/covid19/resCoBF"),
    "co-cers": () => import("../components/resource/covid19/resCoCERS"),
    "co-cews": () => import("../components/resource/covid19/resCoCEWS"),
    "co-crb": () => import("../components/resource/covid19/resCoCRB"),
    // BreadCrumb,
  },
  data() {
    return {
      current: "co-cers",
    };
  },
  mounted() {
    let path = this.$router.history.current.fullPath.replace("/resource/", "");
    console.log(path);
    if (path == "covid19/cers") {
      this.current = "co-cers";
    } else if (path == "covid19/bf") {
      this.current = "co-bf";
    } else if (path == "covid19/ssrgi") {
      this.current = "co-ssrgi";
    } else if (path == "covid19/cews") {
      this.current = "co-cews";
    } else if (path == "covid19/crb") {
      this.current = "co-crb";
    }
  },
};
</script>

<style lang="scss" scoped>

</style>