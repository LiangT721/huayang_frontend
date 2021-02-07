<template>
  <div class="container-md-fluid py-5 px-0 row mx-auto px-md-4 px-xl-5 mx-xl-5">  
    <div class="words pt-5 col-10 offset-1 col-xl-7 offset-xl-0 order-xl-2 px-xl-5 ">
      <div class="title text-center title-font fs-1 pb-5 text-uppercase">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_description.title.eng }}
        </div>
        <div v-else>{{ this.$store.state.homepage_description.title.chi }}</div>
      </div>
      <div class="content text-font text-center lh-lg pb-5 text-md-start">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_description.content.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.homepage_description.content.chi }}
        </div>
      </div>
    </div>
    <home-service class="home-service row mx-auto px-md-5 col-xl-5 mx-xl-0 "/>
  </div>
</template>

<script>
import homeService from "./homeService.vue";
export default {
  components: { homeService },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

</style>