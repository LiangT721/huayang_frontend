<template>
  <div class="slider">
    <div class="image-set">
      <img src="../assets/Slide.jpg" alt="" class="bg" />
      <div class="text">
        <div class="slogen">
          <div v-if="this.$store.getters.lan">SLOGEN SLOGEN SLOGEN SLOGEN SLOGEN</div>
          <div v-else>大标语</div>
        </div>
        <div class="sub-slogen">
          <div v-if="this.$store.getters.lan">Small Business Accounting services</div>
          <div v-else>小标语</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.image-set {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: grid;
  align-items: center;
  > img {
    position: absolute;
    top: 0;
    height: 100%;
    object-fit: cover;
  }
  .text{
      position: relative;
      .slogen{
          font-family: $title;
          font-size: 2rem;
          width: 80%;
          margin-left: 10%;
          color: #ffffff;
          text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.7);
      }
      .sub-slogen{
          font-family: $title;
          font-size: 1.5rem;
          width: 80%;
          margin-left: 10%;
          color: #ffffff;
          text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.7);
      }
  }
}
</style>