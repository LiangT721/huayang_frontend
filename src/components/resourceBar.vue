<template>
    <div class="bar">
        <div>{{ title }}</div>
    </div>
</template>

<script>
    export default {
     data() {
         return {
             title: "COVID-19"
         }
     },  
     mounted () {
         const path = this.$router.history.current.fullPath
         if (path.includes("news")){
             this.title = "news"
         }
     },
    }
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.bar{
    width: 100%;
    height: 12vh;
    // background-color: $pageTopBarColor;
    display: grid;
    align-items: center;
    justify-items: center;
    font-family: $title;
    font-size: 2rem;
    background-image: url("../assets/blue-watercolor-texture-background.jpg");
}

</style>