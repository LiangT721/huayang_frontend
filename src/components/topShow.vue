<template>
  <div class="top-show">
    <div class="phone">Phone: <a href="tel:888888888">(888)888-8888</a></div>
    <div class="language-set">
      <div class="btn">
        <div
          class="eng"
          :class="{ selected: english, unselected: chinese }"
          @click="ShiftEnglish"
        >
          English
        </div>
        <div
          class="chi"
          :class="{ selected: chinese, unselected: english }"
          @click="ShiftChinese"
        >
          中文
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "ant-design-vue/lib/date-picker/style/css"
export default {
  data() {
    return {
      english: true,
      chinese: false,
    };
  },
  methods: {
    ShiftEnglish() {
      this.english = true;
      this.chinese = false;
      this.$store.commit("language_toggle", true);
    },
    ShiftChinese() {
      this.english = false;
      this.chinese = true;
      this.$store.commit("language_toggle", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.top-show {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  padding: 0 1em;
}
.phone,
a {
  font-size: 1.1rem;
  color: $fontBlue;
  font-family: $title;
  // margin-top: 1em;
}
.language-set {
  justify-self: right;
  .btn {
    display: grid;
    grid-template-columns: auto auto;
    border: 1px solid #d1d1d1;
    border-radius: 2px;
    > div {
      padding: 0 0.2em;
    }
    .eng {
      border-right: 1px solid #d1d1d1;
      transition: all 0.2s ease-in-out;
    }
    .chi {
      transition: all 0.2s ease-in-out;
    }
  }
}
.selected {
  background-color: $darkColor;
  color: #ffff;
}
.unselected {
  background-color: #ffff;
  color: $darkColor;
}
@media only screen and (min-width: 768px) {
.top-show {
  grid-template-columns: 3fr 1fr;
  align-items: end;
  height: 3em;
  justify-items: center;
}
}
.phone,
a {
  font-size: 1.2rem;
  color: #ffff;
  text-shadow: 1px 1px 1px rgb(112, 112, 112);
}
.language-set {
  margin-top: 10px;
  font-size: 0.6rem;
  align-self: center;
  filter: drop-shadow(1px 1px 5px 1px white);
}
</style>