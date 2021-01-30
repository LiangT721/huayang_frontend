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
      <div class="service-selection px-3 fs-6" :class="project1" @click="toService1">
        <div v-if="this.$store.getters.lan">
          Foreign assets declaration
        </div>
        <div v-else>
         海外资产申报
        </div>
      </div>
      <div class="service-selection px-3 fs-6" :class="project2" @click="toService2">
        <div v-if="this.$store.getters.lan">
          Self-employment tax return
        </div>
        <div v-else>
          自雇纳税申报
        </div>
      </div>
      <div class="service-selection px-3 fs-6" :class="project3" @click="toService3">
        <div v-if="this.$store.getters.lan">
          Tax return of Non-resident for tax purpose
        </div>
        <div v-else>
          非税务居民的报税
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Default:"selected",
      project1: "unselected",
      project2: "unselected",
      project3: "unselected",
      btn:""
    };
  },
  methods: {
    toDefault(){
      this.selectService("personalDefault");
    },
    toService1() {
      this.selectService("ForeignAssetsDeclaration");
    },
    toService2() {
      this.selectService("SelfemploymentTaxReturn");
    },
    toService3() {
      this.selectService("TaxReturnofNonresident");
    },
    selectService(data) {
      this.$emit("toggleService", data);
      this.btn = data;
    },
  },
  watch: {
    btn(newValue) {
      console.log(newValue);
      if (this.btn == "ForeignAssetsDeclaration") {
        this.project1 = "selected";
        this.project2 = "unselected";
        this.project3 = "unselected";
        this.default = "unselected";
      } else if (this.btn == "SelfemploymentTaxReturn") {
        this.project1 = "unselected";
        this.project2 = "selected";
        this.project3 = "unselected";
        this.default = "unselected";
      } else if (this.btn == "TaxReturnofNonresident") {
        this.project1 = "unselected";
        this.project2 = "unselected";
        this.project3 = "selected";
        this.default = "unselected";
      } else if (this.btn == "personalDefault") {
        this.project1 = "unselected";
        this.project2 = "unselected";
        this.project3 = "unselected";
        this.Default = "selected";
      }
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