<template>
  <div class="menu">
    <div class="top">
      <h3>../resource/covid-19</h3>
      <img @click="back" src="../assets/enter.png" alt="" />
    </div>
    <ul>
      <li @click="cers">Canada Emergency Rent Subsidy (CERS)</li>
      <li @click="bf">Business financing</li>
      <li @click="ssrgi">
        Support for Students and Recent Graduates Impacted by COVID-19
      </li>
      <li @click="cews">The Canada Emergency Wage Subsidy (CEWS) – 75%</li>
      <li @click="twes">Temporary Wage Subsidy for Employers (TWSE) - 10 %</li>
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
    twes() {
      this.$router.push("/resource/covid19/twes");
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.menu {
  width: 80%;
  margin-left: 10%;
  margin-top: 2em;
  min-height: 45vh;

  .top {
    display: flex;
    justify-content: space-between;
    h3 {
      color: $fontGray;
      font-family: $text;
      font-size: 1rem;
      display: inline;
    }
    > img {
      height: 1rem;
    }
  }
  li {
    font-family: $title;
    font-size: 1rem;
    width: 90%;
    margin: 1em 0 1em 10%;
    cursor: pointer;
  }
}
</style>