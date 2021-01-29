<template>
  <div class="header">
    <top-show class="pad" />
    <div class="header-bar">
      <div class="logo-set">
        <img src="../assets/logo.png" alt="" class="logo" />
        <div class="text">
          <div class="chi">華楊會計師事務所</div>
          <div class="eng">YANG GAO. CPA P.C Ltd.</div>
        </div>
      </div>
      <menu-bar v-if="this.$store.getters.device != 'mobile'" />
      <div
        v-if="this.$store.getters.device == 'mobile'"
        class="menu-btn"
        @click="menu_toggle"
      >
        <img src="../assets/menu.png" alt="" />
      </div>
      <top-show class="pc" />
    </div>
    <transition>
      <menu-bar v-if="this.menu_show" />
    </transition>
  </div>
</template>

<script>
import MenuBar from "./menuBar.vue";
import topShow from "./topShow.vue";
export default {
  components: { topShow, MenuBar },
  data() {
    return {
      menu_show: false,
    };
  },
  methods: {
    menu_toggle() {
      this.menu_show = !this.menu_show;
    },
  },
  mounted() {
    console.log(this.$store.getters.device);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.pc {
  display: none;
}
.header {
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 8em;
  background-color: $barColor;
}

.header-bar {
  position: relative;
  z-index: 99;
  box-sizing: border-box;
  padding: 0 2em;
  height: 5em;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  background-color: $barColor;
  .logo-set {
    height: 3em;
    display: grid;
    grid-template-columns: 1fr 4fr;
    .logo {
      height: 3em;
    }
    .text {
      color: #ffffff;
      font-size: 0.8rem;
      display: grid;
      align-items: center;
    }
  }
  .menu-btn {
    justify-self: right;
    > img {
      height: 2em;
    }
  }
}

.v-enter,
.v-leave-to {
  transform: translateY(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s linear;
}

@media only screen and (min-width: 768px) {
  .top-show {
    background-color: $barColor;
  }
  .header-bar {
    padding: 0 5em;
    height: 5em;
    grid-template-columns: 2fr 3fr;
  }
}
@media only screen and (min-width: 1280px) {
  .pc {
    display: block;
  }
  .pad {
    display: none;
  }
  .header {
    height: 6em;
    width: 100%;
  }
  .header-bar {
    grid-template-columns: 2fr 3fr 1fr;
    height: 100%;
    .logo-set {
      justify-self: center;
      height: 4em;
      display: grid;
      grid-template-columns: 1fr 4fr;
      .logo {
        height: 4em;
      }
      .text {
        height: 3em;
        margin-top: 0.3em;
        color: #ffffff;
        font-size: 1rem;
        display: grid;
        align-items: center;
      }
    }
  }
}
</style>