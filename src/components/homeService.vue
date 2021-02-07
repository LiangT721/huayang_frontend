<template>
  <div >
    <div class="service col-6 py-3 text-center col-md-5 mx-auto ">
      <img class="img" src="../assets/service1.jpg" alt="" />
      <div class="service-name fw-bold py-1 py-md-4 fs-6" @click="toPersonalTaxService">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_project.project1.eng }}
        </div>
        <div v-else>{{ this.$store.state.homepage_project.project1.chi }}</div>
      </div>
    </div>
    <div class="service col-6 py-3 text-center col-md-5 mx-auto ">
      <img class="img" src="../assets/service2.jpg" alt="" />
      <div class="service-name fw-bold py-1 py-md-4 fs-6" @click="toEnterpriseService">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_project.project2.eng }}
        </div>
        <div v-else>{{ this.$store.state.homepage_project.project2.chi }}</div>
      </div>
    </div>
    <div class="service col-6 py-3 text-center col-md-5 mx-auto ">
      <img class="img" src="../assets/service3.jpg" alt="" />
      <div class="service-name fw-bold py-1 py-md-4 fs-6" @click="toSINP">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_project.project3.eng }}
        </div>
        <div v-else>{{ this.$store.state.homepage_project.project3.chi }}</div>
      </div>
    </div>
    <div class="service col-6 py-3 text-center col-md-5 mx-auto ">
      <img class="img" src="../assets/service4.jpg" alt="" />
      <div class="service-name fw-bold py-1 py-md-4 fs-6" @click="toCompanyTaxReturn">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_project.project4.eng }}
        </div>
        <div v-else>{{ this.$store.state.homepage_project.project4.chi }}</div>
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
    toCompanyTaxReturn() {
      this.$router.push("/service/EnterpriseService/companyTaxReturn");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.img {
  object-fit: cover;
  width: 30vw;
  height: 30vw;
}
@media only screen and (min-width: 1200px) {
  .img {
    object-fit: cover;
    width: 10vw;
    height: 10vw;
  }
}
</style>