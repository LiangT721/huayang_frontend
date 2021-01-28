<template>
  <div class="service-items container-lg py-5">
    <!-- sdsdsds -->
    <div class="row">
      <div class="service-item col-10 offset-1 col-md-8 offset-md-2 py-5 col-lg-3 offset-lg-1" @click="toServicePage1">
        <img  src="../../assets/service1.jpg" alt="" class="service-image w-100" />
        <div class="service-title py-3 text-center">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.service_project.project1.title.eng }}
          </div>
          <div v-else>
            {{ this.$store.state.service_project.project1.title.chi }}
          </div>
        </div>
        <div class="service-description ms-3 m-3 ms-lg-0 ">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.service_project.project1.description.eng }}
          </div>
          <div v-else>
            {{ this.$store.state.service_project.project1.description.chi }}
          </div>
        </div>
        <div class="more ms-3 ms-lg-0">
          <u>
            <div v-if="this.$store.getters.lan">More Information</div>
            <div v-else>获取更多信息</div></u
          >
        </div>
      </div>
      <div class="service-item col-10 offset-1 col-md-8 offset-md-2 py-5 col-lg-3 offset-lg-1" @click="toServicePage2">
        <img src="../../assets/service2.jpg" alt="" class="service-image w-100" />
        <div class="service-title py-3 text-center">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.service_project.project2.title.eng }}
          </div>
          <div v-else>
            {{ this.$store.state.service_project.project2.title.chi }}
          </div>
        </div>
        <div class="service-description ms-3 m-3 ms-lg-0 ">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.service_project.project2.description.eng }}
          </div>
          <div v-else>
            {{ this.$store.state.service_project.project2.description.chi }}
          </div>
        </div>
        <div class="more ms-3 ms-lg-0">
          <u>
            <div v-if="this.$store.getters.lan">More Information</div>
            <div v-else>获取更多信息</div></u
          >
        </div>
      </div>
      <div class="service-item col-10 offset-1 col-md-8 offset-md-2 py-5 col-lg-3 offset-lg-1" @click="toServicePage3">
        <img src="../../assets/service3.jpg" alt="" class="service-image w-100" />
        <div class="service-title py-3 text-center">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.service_project.project3.title.eng }}
          </div>
          <div v-else>
            {{ this.$store.state.service_project.project3.title.chi }}
          </div>
        </div>
        <div class="service-description ms-3 m-3 ms-lg-0 ">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.service_project.project3.description.eng }}
          </div>
          <div v-else>
            {{ this.$store.state.service_project.project3.description.chi }}
          </div>
        </div>
        <div class="more ms-3 ms-lg-0">
          <u>
            <div v-if="this.$store.getters.lan">More Information</div>
            <div v-else>获取更多信息</div></u
          >
        </div>
      </div>
      <!-- <div class="service-item" @click="toServicePage4" >
      <img src="../../assets/service4.jpg" alt="" class="service-image" />
      <div class="service-title">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project4.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project4.title.chi }}
        </div>
      </div>
      <div class="service-description">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project4.description.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project4.description.chi }}
        </div>
      </div>
      <div class="more"><u>
        <div v-if="this.$store.getters.lan">More Information</div>
        <div v-else>获取更多信息</div></u>
      </div>
    </div> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
export default {
  methods: {
    toServicePage1() {
      this.$router.push("/service/project1");
    },
    toServicePage2() {
      this.$router.push("/service/project2");
    },
    toServicePage3() {
      this.$router.push("/service/project3");
    },
    toServicePage4() {
      this.$router.push("/service/project4");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
  .service-image {
    height: 60vw;
    object-fit: cover;
  }
  .service-title {
    font-family: $title;
    font-size: 1.2rem;
    height: 4rem;
  }
  .service-description {
    font-family: $text;
    width: 95%;
    max-height:9em;
    overflow: hidden;
    font-size: 1rem;
  }
  .more {
    font-size: 1rem;
    color: coral;
    font-weight: 500;
    cursor: pointer;
  }
@media only screen and (min-width: 768px) {
    .service-image {
      height: 40vw;
    }
}
@media only screen and (min-width: 1280px) {
    .service-image {
      height: 20em;
    }
}

</style>