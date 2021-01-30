<template>
  <div id="app">
    <router-view />
  </div>
</template>

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

</style>
