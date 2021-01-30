<template>
  <div class="service-items-page">
    <page-header />
    <div class="row container mx-auto">
      <component class=" col-xl-8 offset-xl-1 order-xl-2" :is="current" />
      <personal-service-menu class=" col-xl-3 offset-xl-0" @toggleService="toggleService" />
    </div>
    <page-footer />
  </div>
</template>

<script>
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import PersonalServiceMenu from "../components/service/personalTaxService/personalServiceMenu.vue";

export default {
  components: {
    pageHeader,
    PageFooter,
    PersonalServiceMenu,
    default: () =>
      import("../components/service/personalTaxService/defaultDisplay"),
    ForeignAssetsDeclaration: () =>
      import(
        "../components/service/personalTaxService/ForeignAssetsDeclaration"
      ),
    SelfemploymentTaxReturn: () =>
      import(
        "../components/service/personalTaxService/SelfemploymentTaxReturn"
      ),
    TaxReturnofNonresident: () =>
      import("../components/service/personalTaxService/TaxReturnofNonresident"),
  },
  data() {
    return {
      current: "default",
    };
  },
  props: {
    btn: {
      type: String,
    },
    service: {
      type: String,
    },
  },
  methods: {
    toggleService(data) {
      this.current = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.service-items-page {
  min-height: 100vh;
  padding-bottom: 25em;
  position: relative;
}
@media only screen and (min-width: 768px) {
  .service-items-page {
    padding-bottom: 25em;
  }
}
@media only screen and (min-width: 1280px) {
  .service-items-page {
    padding-bottom: 15em;
  }
}
</style>