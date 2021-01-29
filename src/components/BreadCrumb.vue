<template>
  <div class="container-sm">
    <nav aria-label="breadcrumb">
      <ol  class="breadcrumb my-3 fs-6">
        <li v-for="path in pathlist" :key="path" class="breadcrumb-item">{{path}}</li>
      </ol>
    </nav>
  </div>
</template>

<script>

export default {
    data() {
        return {
            pathlist: []
        }
    },
    mounted () {
        const path = this.$router.history.current.path;
        this.pathlist = path.split("/")
        this.pathlist[0] = ".."
        // console.log(pathlist);
    },
};
</script>

<style lang="scss" scoped>
</style>