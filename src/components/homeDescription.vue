<template>
  <div class="home-description">
    <home-service v-if="this.$store.getters.device == 'pc'" />
    <div class="words">
      <div class="title">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_description.title.eng }}
        </div>
        <div v-else>{{ this.$store.state.homepage_description.title.chi }}</div>
      </div>
      <div class="content">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.homepage_description.content.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.homepage_description.content.chi }}
        </div>
      </div>
    </div>
    <home-service v-if="this.$store.getters.device != 'pc'" />
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
  padding: 20em 0;
  // margin-bottom: 25em;
}
.words {
  .title {
    > div {
      font-family: $title;
      font-size: 2rem;
      color: $fontBlue;
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
@media only screen and (min-width: 768px) {
  
.home-description {
  padding: 12em 0;
}
  .words {
    .title {
      > div {
        text-align: center;
      }
    }
    .content {
      > div {
        font-size: 1rem;
      }
    }
  }
}
@media only screen and (min-width: 1280px) {
  .home-description {
    grid-template-columns: auto auto;
    align-items: center;
    width: 100%;
    padding:5em 0 15em 0;
    box-sizing: border-box;
  }
  .words {
    .title {
      > div {
        font-family: $title;
        font-size: 2rem;
        color: $fontBlue;
        width: 40vw;
        margin-left: 10%;
      }
    }
    .content {
        box-sizing: border-box;

      > div {
        font-size: 1.2rem;
        width: 40vw;
        margin-left: 10%;
        line-height: 2em;
      }
    }
  }
}
</style>