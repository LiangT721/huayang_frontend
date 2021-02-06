<template>
  <div class="newspage">
    <page-header />
    <resource-bar />
    <!-- <bread-crumb /> -->
    <component :is="current" class="content" />
    <page-footer />
  </div>
</template>

<script>
import pageFooter from "../components/pageFooter.vue";
import PageHeader from "../components/pageHeader.vue";
import ResourceBar from "../components/resource/resourceBar";
// import BreadCrumb from "../components/BreadCrumb.vue";
export default {
  components: {
    pageFooter,
    PageHeader,
    ResourceBar,
    taxRelateGift: () =>
      import("../components/resource/Finance&Taxation/TaxRelateGift.vue"),
    AlterEgoTrust: () =>
      import("../components/resource/Finance&Taxation/AlterEgoTrust.vue"),
    TaxReturnInfo: () =>
      import("../components/resource/Finance&Taxation/TaxReturnInfo.vue"),
    HoldingCompany: () =>
      import("../components/resource/Finance&Taxation/HoldingCompany.vue"),
    // BreadCrumb,
  },
  data() {
    return {
      current: "taxRelateGift",
    };
  },
  mounted() {
    let path = this.$router.history.current.fullPath.replace("/resource/", "");
    console.log(path);
    if (path == "Finance&Taxation/taxRelateGift") {
      this.current = "taxRelateGift";
    } else if (path == "Finance&Taxation/AlterEgoTrust") {
      this.current = "AlterEgoTrust";
    } else if (path == "Finance&Taxation/TaxReturnInfo") {
      this.current = "TaxReturnInfo";
    } else if (path == "Finance&Taxation/HoldingCompany") {
      this.current = "HoldingCompany";
    }
    console.log(this.current)
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.newspage {
  position: relative;
  padding-bottom: 25em;
}
@media only screen and (min-width: 768px) {
  .newspage {
    padding-bottom: 15em;
  }
}
@media only screen and (min-width: 1280px) {
  .newspage {
    padding-bottom: 15em;
  }
}
</style>