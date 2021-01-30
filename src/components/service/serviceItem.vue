<template>
  <div class="service-items container-lg py-5">
    <!-- sdsdsds -->
    <div class="container d-xl-flex  justify-content-xl-between">
      <div class="service-item mx-auto pb-5" @click="toPersonalTaxService">
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
      <div class="service-item mx-auto pb-5" @click="toEnterpriseService">
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
      <div class="service-item mx-auto pb-5" @click="toSINP">
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
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toPersonalTaxService() {
      this.$router.push("/service/PersonalTaxService");
    },
    toEnterpriseService() {
      this.$router.push("/service/EnterpriseService");
    },
    toSINP() {
      this.$router.push("/service/SINP");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
  .service-image {
    height: 18em;
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
    .service-item {
      width: 60vw;
    }
    .service-image {
      height: 40vw;
    }
}
@media only screen and (min-width: 1200px) {
    .service-item {
      width: clamp(300px, 22vw ,350px);
    }
    .service-image {
      height: 15vw;
    }
    .service-title {
    font-family: $title;
    font-size: 1.2rem;
    height: 5rem;
  }
}

</style>