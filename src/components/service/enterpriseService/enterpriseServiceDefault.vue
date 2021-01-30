<template>
  <div class="py-5 text-center text-md-start">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">Enterprise Service Default</div>
      <div v-else>个人业务</div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
          <p>International student tax return, personal/family tax return, overseas asset declaration, self-employment tax return, non-tax resident tax return</p>
          <p>The annual tax return is something that no one who studies or lives in Canada can ignore. Hua Yang Accounting Firm has rich experience and knowledge regarding the complicated steps and regulations of Canadian tax filing, which can help individuals and families of different identities complete tax filings.</p>
      </div>
      <div v-else><p>
          留学生纳税申报，个人/家庭纳税申报，海外资产申报，自雇纳税申报，非税务居民纳税申报，</p>
          <p>每年一度的报税是每个在加拿大学习生活的人不可跳过的一件事情。华杨会计师事务所有丰富的经验，了解加拿大税务申报的各项繁复步骤和规章，可以帮助不同身份的个人和家庭完成报税。</p></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>