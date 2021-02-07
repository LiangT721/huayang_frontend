<template>
  <div class="menu container-md">
    <ul class="menu-list col-11 py-md-3">
      <li class="list-item" @click="cers">
        <div v-if="this.$store.getters.lan">
          Canada Emergency Rent Subsidy (CERS)
        </div>
        <div v-else>加拿大紧急租金补贴计划（CERS）</div>
      </li>
      <li class="list-item" @click="bf">
        <div v-if="this.$store.getters.lan">Business financing</div>
        <div v-else>商业融资（business financial）</div>
      </li>
      <li class="list-item" @click="cews">
        <div v-if="this.$store.getters.lan">
          The Canada Emergency Wage Subsidy (CEWS) – 75%
        </div>
        <div v-else>加拿大紧急工资补贴（CEWS）– 75％</div>
      </li>
      <li class="list-item" @click="crb">
        <div v-if="this.$store.getters.lan">
          The Canada Recovery Benefit (CRB)
        </div>
        <div v-else>加拿大复原福利（Canada Recovery Benefit）</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/resource");
      location.reload();
    },
    bf() {
      this.$router.push("/resource/covid19/bf");
      location.reload();
    },
    ssrgi() {
      this.$router.push("/resource/covid19/ssrgi");
      location.reload();
    },
    cers() {
      this.$router.push("/resource/covid19/cers");
      location.reload();
    },
    cews() {
      this.$router.push("/resource/covid19/cews");
      location.reload();
    },
    // twes() {
    //   this.$router.push("/resource/covid19/twes");
    //   location.reload();
    // },
    crb() {
      this.$router.push("/resource/covid19/crb");
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";

.menu {
  font-family: $text;
}
.list-item {
  cursor: pointer;
  font-size: 1rem;
  margin: 1em 0 1em 10%;
}
@media only screen and (min-width: 768px) {
  .menu {
    .list-item {
      font-size: 1.2rem;
    }
  }
}
</style>