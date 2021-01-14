<template>
  <div class="home-description">
    <div class="words">
      <div class="title">
        <div v-if="this.$store.getters.lan">
          {{this.$store.state.homepage_description.title.eng}}
        </div>
        <div v-else>{{this.$store.state.homepage_description.title.chi}}</div>
      </div>
      <div class="content">
        <div v-if="this.$store.getters.lan">
          {{this.$store.state.homepage_description.content.eng}}
        </div>
        <div v-else>
          {{this.$store.state.homepage_description.content.chi}}
        </div>
      </div>
    </div>
    <home-service />
  </div>
</template>

<script>
import homeService from "./homeService.vue";
export default {
  components: { homeService },
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