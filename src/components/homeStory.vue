<template>
  <div class="story">
    <div class="title">
      <div v-if="this.$store.getters.lan">
        {{this.$store.state.story.title.eng}}
      </div>
      <div v-else>{{this.$store.state.story.title.chi}}</div>
    </div>
    <div class="content">
      <div class="text">
        <div v-if="this.$store.getters.lan">
          {{this.$store.state.story.content.eng}}
        </div>
        <div v-else>
          {{this.$store.state.story.content.chi}}
        </div>
      </div>
      <div class="img">
        <img src="../assets/story.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.story {
  padding-top: 5em;
  width: 100%;
  background-color:rgba($color: #a7c6e6, $alpha: 0.2)
}
.title {
  font-family: $title;
  font-size: 2rem;
  width: 70%;
  margin-left: 15%;
}
.content {
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
  .img{
      >img{
          width: 100vw;
          height: 80vw;
          object-fit: cover;
      }
  }
}
</style>