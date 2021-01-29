<template>
  <div class="bar">
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "COVID-19",
    };
  },
  mounted() {
    const path = this.$router.history.current.fullPath;
    if (path.includes("Finance&Taxation")) {
      if (this.$store.getters.lan) {
        this.title = "Finance & Taxation";
      } else {
        this.title = "财税知识";
      }
    } else if (path.includes("covid19")) {
      if (this.$store.getters.lan) {
        this.title = "COVID-19 Benefits";
      } else {
        this.title = "COVID-19 福利政策";
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.bar {
  width: 100%;
  height: 12vh;
  // background-color: $pageTopBarColor;
  display: grid;
  align-items: center;
  justify-items: center;
  font-family: $title;
  font-size: 2rem;
  background-image: url("../assets/blue-watercolor-texture-background.jpg");
}
</style>