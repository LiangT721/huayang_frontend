<template>
  <div class="menu-bar">
    <div>
      <div v-if="this.$store.getters.lan">HOME</div>
      <div v-else>主页</div>
    </div>
    <div>
      <div v-if="this.$store.getters.lan">ABOUT US</div>
      <div v-else>关于我们</div>
    </div>
    <div>
      <div v-if="this.$store.getters.lan">SERVICES</div>
      <div v-else>服务</div>
    </div>
    <div>
      <div v-if="this.$store.getters.lan">RESOURCE</div>
      <div v-else>资源</div>
    </div>
    <div>
      <div v-if="this.$store.getters.lan">CONTACT US</div>
      <div v-else>联系我们</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.menu-bar {
  display: grid;
  box-sizing: border-box;
  z-index: 50;
  width: 100%;
  height: fit-content;
  background-color: rgba($color: #a7c6e6, $alpha: 0.7);
  > div {
    width: 100%;
    height: 3em;
    display: grid;
    align-items: center;
    &:hover {
      background-color: #fff;
    }
    > div {
      width: 100%;
      text-align: center;
      font-family: $title;
    }
  }
}
@media only screen and (min-width: 768px) {
  .menu-bar {
    grid-template-columns: repeat(5, auto);
    background-color: rgba($color: #a7c6e6, $alpha: 0);
    > div {
      color: white;
      font-size: 0.8rem;
      height: 2em;
      width: auto;
      border-radius: 5px;
      &:hover {
        background-color: #fff;
        color: $barColor;
      }
    }
  }
}
</style>