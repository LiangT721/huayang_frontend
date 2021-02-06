<template>
  <div class="service-menu mt-5 pt-5">  
    <div class="service-select text-capitalize ">
      <div class="service-selection px-3 fs-6" :class="Default" @click="toDefault">
        <div v-if="this.$store.getters.lan">
          About SINP
        </div>
        <div v-else>
          关于SINP
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Default:"selected",
      btn:""
    };
  },
  methods: {
    toDefault(){
      this.selectService("SINP");
    },
    selectService(data) {
      this.$emit("toggleService", data);
      this.btn = data;
    },
  },

};
</script>

<style lang="scss" scoped>
@import "../../../assets/style.scss";

.service-select {
  display: grid;
  row-gap: 1em;
  .service-selection {
    background: #f1f1f1;
    text-align: center;
    padding: 1em 0;
    font-family: $text;
    color: $fontGray;
    filter: drop-shadow(1px 1px 2px rgb(100, 100, 100));
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background-color: $barColor;
      color: #fff;
    }
  }
  .selected {
    background-color: $barColor;
    color: #fff;
  }
}

@media only screen and (min-width: 768px) {
  .service-select {
    margin-top: 2em;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
  }
}
@media only screen and (min-width: 1280px) {

  .service-select {
    margin-top: 2em;
    grid-template-columns: 1fr;
    column-gap: 2em;
  }
}
</style>