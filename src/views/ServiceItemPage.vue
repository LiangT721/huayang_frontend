<template>
  <div class="service-items-page">
    <page-header />
    <service-content :service="projectDisplay"/>
    <service-menu @toggleService="toggleService" :btn="projectDisplay"/>
    <page-footer />
  </div>
</template>

<script>
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import ServiceContent from "../components/service/serviceContent.vue";
import ServiceMenu from "../components/service/serviceMenu.vue";
export default {
    data() {
      return {
        projectDisplay: ""
      }
    },
    props: {
        btn: {
            type: String,
        },
        service: {
            type: String,
        },
    },
  components: {
    pageHeader,
    PageFooter,
    ServiceContent,
    ServiceMenu,
  },
  methods: {
      toggleService(data) {
          this.projectDisplay = data
      }
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
      .service-items-page{
      padding-bottom: 25em;
    }
}
@media only screen and (min-width: 1280px) {
    .content{
        width: 50vw;
        margin-left:30vw;
        // background-color: red;
        // padding-bottom: 25em;
    }
    .service-items-page{
      padding-bottom: 15em;
    }
}
</style>