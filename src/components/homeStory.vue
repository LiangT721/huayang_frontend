<template>
  <div class="story">
    <div class="title">
      <div v-if="this.$store.getters.lan">
        The #1 Small Business Accounting Services Firm
      </div>
      <div v-else>NO.1 小业主服务</div>
    </div>
    <div class="content">
      <div class="text">
        <div v-if="this.$store.getters.lan">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam
          aliquid necessitatibus doloremque architecto. Nisi quasi tempora
          voluptates sequi. Quis expedita reprehenderit veniam numquam quo
          consequuntur eos itaque ipsum libero rem sunt cupiditate eum iusto
          mollitia voluptatem optio vitae porro cum fuga, quia animi nostrum
          aliquam a eaque! Pariatur, assumenda delectus optio vel, fugiat hic
          quam at tempora accusamus quibusdam nesciunt possimus, sit magni
          asperiores perspiciatis?
        </div>
        <div v-else>
          中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事中文故事
        </div>
      </div>
      <div class="img">
        <img src="../assets/story.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.story {
  padding-top: 5em;
  width: 100%;
  background-color:rgba($color: #a7c6e6, $alpha: 0.2)
}
.title {
  font-family: $title;
  font-size: 2rem;
  width: 70%;
  margin-left: 15%;
}
.content {
  margin-top: 4em;
  display: grid;
  width: 100%;
  row-gap: 4em;
  .text {
    > div {
      font-family: $text;
      font-size: 0.9rem;
      width: 70vw;
      margin-left: 15vw;
    }
  }
  .img{
      >img{
          width: 100vw;
          height: 80vw;
          object-fit: cover;
      }
  }
}
</style>