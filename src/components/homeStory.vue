<template>
  <div class="story">
    <div class="title">
      <vue-aos animation-class="animate__slideInRight">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.story.title.eng }}
        </div>
        <div v-else>{{ this.$store.state.story.title.chi }}</div>
      </vue-aos>
    </div>
    <div class="content">
      <vue-aos animation-class="animate__heartBeat">
        <div class="text">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.story.content.eng }}
          </div>
          <div v-else>
            {{ this.$store.state.story.content.chi }}
          </div>
        </div>
      </vue-aos>
      <div class="img">
        <img src="../assets/story.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import VueAos from "vue-aos";
export default {
  components: { VueAos },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.story {
  padding-top: 5em;
  width: 100%;
  background-color: rgba($color: #a7c6e6, $alpha: 0.2);
  overflow: hidden;
}
.title {
  font-family: $title;
  font-size: 2rem;
  width: 70%;
  margin-left: 15%;
}
.content {
  box-sizing: border-box;
  margin-top: 4em;
  display: grid;
  width: 100%;
  row-gap: 4em;
  .text {
    > div {
      font-family: $text;
      font-size: 0.9rem;
      width: 70vw;
      margin-left: 15vw;
    }
  }
  .img {
    > img {
      width: 100vw;
      height: 80vw;
      object-fit: cover;
    }
  }
}
@media only screen and (min-width: 768px) {
  .story {
    padding: 5em 0 8em 0;
  }
  .title {
    text-align: center;
  }
  .content {
    .text {
      > div {
        font-size: 1rem;
      }
    }
    .img {
      > img {
        width: 50vw;
        height: 40vw;
        margin-left: 25vw;
        object-fit: cover;
      }
    }
  }
}
@media only screen and (min-width: 1280px) {
  .content {
    box-sizing: border-box;
    grid-template-columns: 1.2fr 1fr;
    // column-gap: 5em;
    // margin: 4em 5em;
    align-items: center;
    justify-items: center;
    width: 100%;

    .text {
      > div {
        font-family: $text;
        font-size: 1.2rem;
        line-height: 2em;
        width: 80%;
        margin-left: 20%;
      }
    }
    .img {
      width: 30vw;
      height: 100%;
      > img {
        width: 30vw;
        height: 20vw;
        border-radius: 5px;
        object-fit: cover;
        margin-left: 0;
      }
    }
  }
}
</style>