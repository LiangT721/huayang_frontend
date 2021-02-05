<template>
  <div class="container-sm">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-3 fs-6">
        <!-- <li v-for="(path, index) in pathlist" :key="path" @click="pageTo(index)" @event="haha" class="breadcrumb-item text-capitalize ">{{path}}</li> -->
        <single-bread-crumb
          v-for="(path, index) in pathlist"
          :key="path"
          :path="path"
          :index="index"
          :length="pathlist.length"
          @topage="topage"
        />
      </ol>
    </nav>
  </div>
</template>

<script>
import SingleBreadCrumb from "./SingleBreadCrumb.vue";

export default {
  components: { SingleBreadCrumb },
  data() {
    return {
      pathlist: [],
    };
  },
  props: {
    index: {
      type: Number,
    },
    path: {
      type: String,
    },
    length:{
      type:Number
    }
  },
  methods: {
    haha() {
      console.log("asa");
    },
    topage(index) {
      this.pathlist[0] = "";
      let path = "";
      for (let i = 0; i <= index; i++) {
        path = path + this.pathlist[i] + "/";
      }
      this.$router.push(path)
    },
  },
  mounted() {
    const path = this.$router.history.current.path;
    this.pathlist = path.split("/");
    this.pathlist[0] = "..";
    if(this.pathlist[this.pathlist.length -1] == "") {
      this.pathlist.pop()
    }
  },
};
</script>

<style lang="scss" scoped>
</style>