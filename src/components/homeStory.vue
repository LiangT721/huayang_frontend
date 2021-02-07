<template>
  <div class="story container-md-fluid pt-5 px-0 px-md-5 py-md-5 row mx-auto ">
    <div class="title title-font text-center text-uppercase py-3 px-md-5 col-xl-12">
      <div v-if="this.$store.getters.lan">
        {{ this.$store.state.story.title.eng }}
      </div>
      <div v-else>{{ this.$store.state.story.title.chi }}</div>
    </div>
    <div class="content text-font px-5 text-center py-3 lh-lg text-md-start col-xl-6 my-xl-5 pt-xl-2 mx-xl-auto">
        <div class="text">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.story.content.eng }}
          </div>
          <div v-else>
            {{ this.$store.state.story.content.chi }}
          </div>
        </div>
    </div>
    <div class="px-0 ratio ratio-4x3 mt-5 w-md-50 mx-md-auto col-xl-5 w-xl-30 mt-xl-5 mb-md-5">
      <img class="img-cover" src="../assets/story.webp" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.story {
  background-color: rgba($color: #a7c6e6, $alpha: 0.2);
}
</style>