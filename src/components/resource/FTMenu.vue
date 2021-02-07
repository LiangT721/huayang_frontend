<template>
  <div class="menu container-md">
    <div class="menu-list col-11 py-md-3">
      <ul>
        <li class="list-item" @click="taxRelateGift">
            <div v-if="this.$store.getters.lan">
                Tax issues related to gifts to children and others
            </div>
            <div v-else>
                关于赠与子女和其他人的相关税务问题
            </div>
        </li>
        <li class="list-item" @click="AlterEgoTrust"><div v-if="this.$store.getters.lan">
                Six reasons to establish an Alter ego trust
            </div>
            <div v-else>
                建立Alter ego 信托的六个理由
            </div></li>
        <li class="list-item" @click="TaxReturnInfo"><div v-if="this.$store.getters.lan">
               Preparation for tax return
            </div>
            <div v-else>
                报税基本信息以及文件清单
            </div></li>
        <li class="list-item" @click="HoldingCompany"><div v-if="this.$store.getters.lan">
               Do you need a holding company
            </div>
            <div v-else>
              是否需要holding 公司
            </div></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    taxRelateGift() {
      this.$router.push("/resource/Finance&Taxation/taxRelateGift");
    },
    AlterEgoTrust() {
      this.$router.push("/resource/Finance&Taxation/AlterEgoTrust");
    },
    TaxReturnInfo() {
      this.$router.push("/resource/Finance&Taxation/TaxReturnInfo");
    },
    HoldingCompany() {
      this.$router.push("/resource/Finance&Taxation/HoldingCompany");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.menu {
    font-family: $text;
}
.list-item{
    cursor: pointer;
    font-size: 1rem;
    margin: 1em 0 1em 10%;
}
@media only screen and (min-width: 768px) {
  .menu {

   .list-item{
      font-size: 1.2rem;
    }
  }
}

</style>