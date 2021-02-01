<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "./assets/style/main.css"
export default {
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@700&family=Rubik&display=swap');
@import "./assets/style.scss";
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: #ffffff;
}
h1{
  font-family: $title;
}
p,a,li{
  font-family: $text;
}
.page{
  min-height: 100vh;
  padding-bottom: 10em;
  position: relative;
}
@media only screen and (min-width: 768px) {
  .page{
  padding-bottom: 5em;
  }
}
@media only screen and (min-width: 1280px) {}
</style>
