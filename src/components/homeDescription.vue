<template>
  <div class="home-description">
    <div class="words">
      <div class="title">
        <div v-if="this.$store.getters.lan">Accountants you can trust</div>
        <div v-else>你值得信赖</div>
      </div>
      <div class="content">
        <div v-if="this.$store.getters.lan">
          We put our clients at the centre of everything we do and our systems
          and processes are designed to help us look after you throughout your
          business journey. We advise ambitious and dynamic businesses, social
          enterprises, not for profit organisations, private individuals and
          families on all aspects of business, tax and growth. We will be with
          you every step of the way, making your life easier and offering great
          advice to help you achieve your dreams.
        </div>
        <div v-else>
          中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介中文简介
        </div>
      </div>
    </div>
    <home-serve />
  </div>
</template>

<script>
import homeServe from "./homeServe.vue";
export default {
  components: { homeServe },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.home-description {
  width: 100vw;
  display: grid;
  padding: 5em 0;
}
.words {
  .title {
    > div {
      font-family: $title;
      font-size: 2rem;
      width: 70vw;
      margin-left: 15vw;
    }
  }
  .content {
    margin-top: 4em;

    > div {
      font-family: $text;
      font-size: 0.9rem;
      width: 70vw;
      margin-left: 15vw;
    }
  }
}
</style>