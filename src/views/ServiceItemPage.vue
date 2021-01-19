<template>
  <div class="service-items-page">
    <page-header />
    <!-- <service-content /> -->
    <component :is="service" class="content"/>
    <service-menu @toggleService="toggleService" :btn="service"/>
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
            service: ""
        }
    },
    props: {
        btn: {
            type: String,
        },
    },
  components: {
    pageHeader,
    PageFooter,
    ServiceContent,
    ServiceMenu,
    "tax" :() => import("@/components/service/serviceContent"),
    "tax2" :() => import("@/components/service/serviceContent2")
  },
  methods: {
      toggleService(data) {
          this.service = data
      }
  },
   mounted () {
      let path = this.$router.history.current.path.replace('/service/', '');
      console.log(path);
        this.service = path;
  },
};
</script>

<style lang="scss" scoped>
.service-items-page {
  min-height: 100vh;
  padding-bottom: 10em;
  position: relative;
}
@media only screen and (min-width: 768px) {}
@media only screen and (min-width: 1280px) {
    .content{
        width: 50vw;
        margin-left:30vw;
        // background-color: red;
        // padding-bottom: 25em;
    }
}
</style>