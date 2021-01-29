<template>
  <div class="project container py-5">
      <h2 class="title text-center py-3 fs-1 text-uppercase ">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project1.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project1.title.chi }}
        </div>
      </h2>
      <div class="row mt-xl-5">
        <img
          src="../../assets/service1.jpg"
          alt=""
          class="img py-3 col-10 col-md-6 mx-auto offset-1 col-xl-4 order-xl-2"
        />
        <div class="service-content fs-4 py-3 mb-5 col-10 offset-1 col-lg-8 col-xl-6 order-xl-1">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.service_project.project1.description.eng }}
          </div>
          <div v-else>
            {{ this.$store.state.service_project.project1.description.chi }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.project{

  font-family: $text;
}
h2 {
  font-family: $title;
}
.img{
    height: 15em;
    object-fit: cover;
  }

@media only screen and (min-width: 768px) {
  .img{
    height: 20em;
  }
}
@media only screen and (min-width: 1280px) {
  .img{
    height: 20em;
  }
}
</style>