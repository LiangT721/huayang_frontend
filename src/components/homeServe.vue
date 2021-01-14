<template>
  <div class="home-serve">
    <div class="serve">
      <img src="../assets/serve1.jpg" alt="" />
      <div class="serve-name">
        <div v-if="this.$store.getters.lan">TAX</div>
        <div v-else>报税</div>
      </div>
    </div>
    <div class="serve">
      <img src="../assets/serve1.jpg" alt="" />
      <div class="serve-name">
        <div v-if="this.$store.getters.lan">TAX</div>
        <div v-else>报税</div>
      </div>
    </div>
    <div class="serve">
      <img src="../assets/serve1.jpg" alt="" />
      <div class="serve-name">
        <div v-if="this.$store.getters.lan">TAX</div>
        <div v-else>报税</div>
      </div>
    </div>
    <div class="serve">
      <img src="../assets/serve1.jpg" alt="" />
      <div class="serve-name">
        <div v-if="this.$store.getters.lan">TAX</div>
        <div v-else>报税</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.home-serve {
  margin-top: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90vw;
  margin-left: 5vw;
  align-items: center;
  justify-items: center;
  row-gap: 2em;
}
.serve {
  width: 30vw;
  display: grid;
  justify-items: center;
  img {
    width: 100%;
    height: 30vw;
    object-fit: cover;
  }
  .serve-name {
    > div {
      font-family: $title;
      font-size: 1rem;
      font-weight: bold;
    }
  }
}
</style>