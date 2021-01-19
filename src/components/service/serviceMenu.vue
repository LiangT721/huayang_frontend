<template>
  <div class="service-menu">
    <h1 class="title">
      <div v-if="this.$store.getters.lan">OUR SERVICES</div>
      <div v-else>我们的服务</div>
    </h1>
    <div class="service-select">
      <div class="service-selection" :class="project1" @click="toService1">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project1.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project1.title.chi }}
        </div>
      </div>
      <div class="service-selection" :class="project2" @click="toService2">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project2.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project2.title.chi }}
        </div>
      </div>
      <div class="service-selection" :class="project3" @click="toService3">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project3.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project3.title.chi }}
        </div>
      </div>
      <div class="service-selection" :class="project4" @click="toService4">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project4.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project4.title.chi }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project1: "unselected",
      project2: "unselected",
      project3: "unselected",
      project4: "unselected",
    };
  },
  props: {
    btn: {
      type: String,
    },
  },
  methods: {
    toService1() {
      this.selectService("tax");
    },
    toService2() {
      this.selectService("tax2");
    },
    toService3() {
      this.selectService("tax3");
    },
    toService4() {
      this.selectService("tax4");
    },
    selectService(data) {
      this.$emit("toggleService", data);
    },
  },
  watch: {
    btn(newValue) {
      console.log(newValue);
      if (this.btn == "tax") {
        this.project1 = "selected";
        this.project2 = "unselected";
        this.project3 = "unselected";
        this.project4 = "unselected";
      } else if (this.btn == "tax2") {
        this.project1 = "unselected";
        this.project2 = "selected";
        this.project3 = "unselected";
        this.project4 = "unselected";
      } else if (this.btn == "tax3") {
        this.project1 = "unselected";
        this.project2 = "unselected";
        this.project3 = "selected";
        this.project4 = "unselected";
      } else if (this.btn == "tax4") {
        this.project1 = "unselected";
        this.project2 = "unselected";
        this.project3 = "unselected";
        this.project4 = "selected";
      }
    },
  },
  mounted() {
    let path = this.$router.history.current.path.replace("/service/", "");
    if (path == "tax") {
      this.project1 = "selected";
    } else if (path == "tax2") {
      this.project2 = "selected";
    } else if (path == "tax3") {
      this.project3 = "selected";
    } else if (path == "tax4") {
      this.project4 = "selected";
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";

.service-menu {
  width: 80%;
  margin-left: 10%;
}
.title {
  text-align: center;
  font-family: $title;
}
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
  .service-menu {
    position: absolute;
    bottom: 12em;
  }
  .service-select {
    margin-top: 2em;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
  }
}
@media only screen and (min-width: 1280px) {
  .service-menu {
    top: 10em;
    left: 0;
    width: 15vw;
  }
  .service-select {
    margin-top: 2em;
    grid-template-columns: 1fr;
    column-gap: 2em;
  }
}
</style>