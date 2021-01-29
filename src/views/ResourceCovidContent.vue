<template>
  <div class="res-cov-con">
    <page-header />
    <resource-bar />
    <bread-crumb />
    <component :is="current" class="content"></component>
    <page-footer />
  </div>
</template>

<script>
import BreadCrumb from '../components/BreadCrumb.vue';
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import ResourceBar from "../components/resourceBar.vue";
export default {
  components: {
    pageHeader,
    ResourceBar,
    PageFooter,
    "co-bf": () => import("@/components/content/resCoBF"),
    // "co-cerb": () => import("@/components/content/resCoCERB"),
    "co-cers": () => import("@/components/content/resCoCERS"),
    "co-cews": () => import("@/components/content/resCoCEWS"),
    // "co-ssrgi": () => import("@/components/content/resCoSSRGI"),
    // "co-twse": () => import("@/components/content/resCoTWSE"),
    "co-crb": () => import("@/components/content/resCoCRB"),
    BreadCrumb,
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
      // }else if (path == "covid19/cers") {
      //     this.current = "co-bf"
    } else if (path == "covid19/cews") {
      this.current = "co-cews";
      // } else if (path == "covid19/twes") {
      //   this.current = "co-twse";
    } else if (path == "covid19/crb") {
      this.current = "co-crb";
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.res-cov-con {
  position: relative;
  min-height: 100vh;
  padding-bottom: 25em;
}
.content{
  font-family: $text;
  font-size: 1rem;
}

@media only screen and (min-width: 768px) {
  .res-cov-con {
    padding-bottom: 15em;
  }
  .content{
  font-family: $text;
  font-size: 1.2rem;
}
}
@media only screen and (min-width: 1280px) {
  .res-cov-con {
    padding-bottom: 13em;
  }
  .content{
  font-family: $text;
  font-size: 1.2rem;
}
}
</style>