<template>
  <div class="menu container-md">
    <ul class="menu-list col-11 py-md-3">
      <li class="list-item" @click="cers">Canada Emergency Rent Subsidy (CERS)</li>
      <li class="list-item"  @click="bf">Business financing</li>
      <li class="list-item" @click="cews">The Canada Emergency Wage Subsidy (CEWS) – 75%</li>
      <li class="list-item" @click="crb">The Canada Recovery Benefit (CRB)</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/resource");
      location.reload();
    },
    bf() {
      this.$router.push("/resource/covid19/bf");
      location.reload();
    },
    ssrgi() {
      this.$router.push("/resource/covid19/ssrgi");
      location.reload();
    },
    cers() {
      this.$router.push("/resource/covid19/cers");
      location.reload();
    },
    cews() {
      this.$router.push("/resource/covid19/cews");
      location.reload();
    },
    // twes() {
    //   this.$router.push("/resource/covid19/twes");
    //   location.reload();
    // },
    crb() {
      this.$router.push("/resource/covid19/crb");
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