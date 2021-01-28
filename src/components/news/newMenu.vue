<template>
  <div class="menu container-md">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-3">
        <li class="breadcrumb-item"><a href="">Resource</a></li>
        <li class="breadcrumb-item active" aria-current="page">News</li>
      </ol>
    </nav>
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
        <li class="list-item" @click="AlterEgoTrust">Dapibus ac facilisis in</li>
        <li class="list-item">Morbi leo risus</li>
        <li class="list-item">Porta ac consectetur ac</li>
        <li class="list-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
export default {
  methods: {
    taxRelateGift() {
      this.$router.push("/resource/news/taxRelateGift");
    },
    AlterEgoTrust() {
      this.$router.push("/resource/news/AlterEgoTrust");
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