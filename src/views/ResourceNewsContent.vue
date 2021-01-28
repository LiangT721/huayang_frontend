<template>
  <div class="newspage">
    <page-header />
    <resource-bar />
    <component :is="current" class="content" />
    <page-footer />
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import pageFooter from '../components/pageFooter.vue';
import PageHeader from '../components/pageHeader.vue';
import ResourceBar from '../components/resourceBar.vue';
Vue.use(BootstrapVue);
export default {
  components: { 
      pageFooter,
      PageHeader,
      ResourceBar,   
      "taxRelateGift": () => import("@/components/news/TaxRelateGift.vue"),
      "AlterEgoTrust": () => import("@/components/news/AlterEgoTrust.vue")
    },
    data() {
      return {
        current: "taxRelateGift"
      }
    },
  mounted() {
    let path = this.$router.history.current.fullPath.replace("/resource/", "");
    console.log(path);
    if (path == "news/taxRelateGift") {
      this.current = "taxRelateGift";}
    else if (path == "news/AlterEgoTrust") {
      this.current = "AlterEgoTrust";
    }
  }
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