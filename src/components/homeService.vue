<template>
  <div class="home-service">
    <div class="service">
      <img src="../assets/service1.jpg" alt="" />
      <div class="service-name" @click="toPersonalTaxService">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_project.project1.eng }}
        </div>
        <div v-else>{{ this.$store.state.homepage_project.project1.chi }}</div>
      </div>
    </div>
    <div class="service">
      <img src="../assets/service2.jpg" alt="" />
      <div class="service-name" @click="toEnterpriseService">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_project.project2.eng }}
        </div>
        <div v-else>{{ this.$store.state.homepage_project.project2.chi }}</div>
      </div>
    </div>
    <div class="service">
      <img src="../assets/service3.jpg" alt="" />
      <div class="service-name" @click="toSINP">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_project.project3.eng }}
        </div>
        <div v-else>{{ this.$store.state.homepage_project.project3.chi }}</div>
      </div>
    </div>
    <div class="service">
      <img src="../assets/service4.jpg" alt="" />
      <div class="service-name" @click="toCompanyTaxReturn">
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
      this.$router.push("/service/EnterpriseService/companyTaxReturn")
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.home-service {
  margin-top: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90vw;
  margin-left: 5vw;
  align-items: center;
  justify-items: center;
  row-gap: 2em;
}
.service {
  width: 30vw;
  display: grid;
  justify-items: center;
  img {
    width: 100%;
    height: 30vw;
    object-fit: cover;
  }
  .service-name {
    cursor: pointer;
    > div {
      font-family: $title;
      font-size: 1rem;
      font-weight: bold;
    }
  }
}
@media only screen and (min-width: 768px) {
  .home-service {
    width: 70vw;
    margin-left: 15vw;
  }
  .service {
    width: 25vw;

    img {
      height: 25vw;
    }
    .service-name {
      > div {
        margin-top: 1em;
        font-size: 1.2rem;
      }
    }
  }
}
@media only screen and (min-width: 1280px) {
  .home-service {
    width: 80%;
    margin-left: 15%;
    column-gap: 10%;
  }
  .service {
    width: 15vw;
    img {
      height: 15vw;
    }
  }
}
</style>