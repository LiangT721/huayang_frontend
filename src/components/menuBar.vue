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

.menu-bar{
    display: grid;
    box-sizing: border-box;
    >div{
        width: 100%;
        height: 3em;
        display: grid;
        align-items: center;
        &:hover{
            background-color: #fff;
        }
        >div{
            width: 100%;
            text-align: center;
            font-family: $title;
        }
    }
}
</style>