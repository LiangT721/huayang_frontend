<template>
  <div class="top-show">
    <div class="phone">Phone: <a href="tel:888888888">(888)888-8888</a></div>
    <div class="language-set">
      <a-button-group class="language-toggle" >
        <a-button :type="english" size="small" @click="ShiftEnglish">English</a-button>
        <a-button :type="chinese" size="small" @click="ShiftChinese">Chinese </a-button>
      </a-button-group>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "ant-design-vue";
import "ant-design-vue/lib/date-picker/style/css";
Vue.use(Button);
export default {
    data() {
        return {
            english: "primary",
            chinese: "default"
        }
    },
    methods: {
        ShiftEnglish() {
            this.english = "primary";
            this.chinese = "default";
            this.$store.commit("language_toggle",true)
        },
        ShiftChinese() {
            this.english = "default";
            this.chinese = "primary";
            this.$store.commit("language_toggle",false)
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.top-show{
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    padding: 0 1em;
}
.phone,a{
    font-size: 1.1rem;
    color: $fontBlue;
    font-family: $title;
    // margin-top: 1em;
}
.language-set{
    justify-self: right;
}
</style>