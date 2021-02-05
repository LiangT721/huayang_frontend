<template>
  <li class="breadcrumb-item text-uppercase" :class="clickable" @click="topage">
    <span v-if="clickable== 'clickable'"><u>{{ path }}</u></span>
    <span v-else>{{ path }}</span>
  </li>
</template>

<script>
export default {
    data() {
        return {
            clickable: "clickable"
        }
    },
  props: {
    index: {
      type: Number,
    },
    path: {
      type: String,
    },
    length: {
      type: Number,
    },
  },
  methods: {
    topage(){
        if(this.clickable== 'clickable'){
        this.$emit("topage", this.index)}
    }
  },
  mounted() {
    if ((this.length - 1) == this.index){
        this.clickable = "unclickable"
    }
  },
};
</script>

<style lang="scss" scoped>
.clickable{
    // color: red;
    cursor: pointer;
}
</style>