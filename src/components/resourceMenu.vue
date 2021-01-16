<template>
  <div class="menu">
    <h3>../resource/</h3>
    <ul>
      <li @click="newsPage">News</li>
      <li @click="covidPage">Covid-19</li>
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
      this.$router.push("/resource/news");
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.menu {
  min-height: 45vh;
  margin-top: 2em;
  width: 80%;
  margin-left: 10%;
  h3 {
    color: $fontGray;
    font-family: $text;
  }
  li {
    font-family: $title;
    font-size: 1.2rem;
    width: 90%;
    margin: 1em 0 1em 10%;
    cursor: pointer;
  }
}
@media only screen and (min-width: 768px) {
  .menu {
    width: 70%;
    margin: 2em 0 6em 15%;
  }
}
@media only screen and (min-width: 1280px) {
  .menu {
    width: 60%;
    margin: 2em 0 6em 20%;
  }
}
</style>