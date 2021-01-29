<template>
  <div class="menu container-md">
    <ul class="menu-list col-11 py-md-3">
      <li class="list-item" @click="newsPage">
         <div v-if="this.$store.getters.lan">Finance & Taxation
         </div>
         <div v-else>财税知识
         </div>
      </li>
      <li class="list-item" @click="covidPage">
         <div v-if="this.$store.getters.lan">COVID-19 Benefits </div>
        <div v-else>COVID-19 福利政策</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    covidPage() {
      this.$router.push("/resource/covid19");
      location.reload();
    },
    newsPage() {
      this.$router.push("/resource/Finance&Taxation");
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.menu {
    font-family: $text;
}
.list-item{
    cursor: pointer;
    font-size: 1rem;
    margin: 1em 0 1em 10%;
}
@media only screen and (min-width: 768px) {
  .menu {

   .list-item{
      font-size: 1.2rem;
    }
  }
}
</style>