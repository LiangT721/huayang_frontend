<template>
  <div class="service-content">
    <component :is="projectDisplay" class="content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectDisplay: "project2"
    }
  },
  props: {
    service: {
      type: String,
    },
  },
  components: {
    "project1": () => import("@/components/service/serviceProject1"),
    "project2": () => import("@/components/service/serviceProject2"),
    "project3": () => import("@/components/service/serviceProject3"),
    "project4": () => import("@/components/service/serviceProject4"),
  },
  watch: {
    service(newValue) {
      console.log(newValue);
      this.projectDisplay = newValue
    },
  },
  mounted() {
    let path = this.$router.history.current.path.replace("/service/", "");
    console.log(path);
    this.projectDisplay = path;
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";

@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 1280px) {
 .content{
   width: 70vw;
 margin-left: 25vw;}
}
</style>