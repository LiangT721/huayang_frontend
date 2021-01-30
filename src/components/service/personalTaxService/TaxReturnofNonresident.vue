<template>
   <div class="service-menu pt-5">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">
        Tax return of Non-resident for tax purpose
      </div>
      <div v-else>非税务居民的报税</div>
    </h1>
   <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
          <p>Whether you are a resident for tax purpose determines whether you need to declare assets outside of Canada.   Non-resident for tax purpose refers to special residents who have completely cut off their residential relationship with Canada and have not lived in Canada at all or stayed in Canada for less than 183 days in the previous tax year. Under the Canadian tax system, Non-resident for tax purpose only need to pay taxes (or be tax deducted) to Canada for your (specified) income from Canada. Income in other countries does not need to be declared in Canada.</p>
          <p>The following are some conditions that can be identified as a   Non-resident for tax purpose,</p>
          <ol>
              <li class="ps-1 ms-3 pb-2">New immigrants who did not live for 183 days that year</li>
              <li class="ps-1 ms-3 pb-2">International students who did not live for 183 days that year</li>
              <li class="ps-1 ms-3 pb-2">Foreigners who have had income in Canada with a visitor visa who has not lived for 183 days in the year</li>
              <li class="ps-1 ms-3 pb-2">Former tax residents who have left Canada and whose spouse or dependants are not in Canada</li>
              <li class="ps-1 ms-3 pb-2">Former tax residents who have left Canada and whose spouse temporarily resides in Canada</li>
              <li class="ps-1 ms-3 pb-2">Former tax residents who have left Canada but have businesses, investments or bank deposits in Canada</li>
          </ol>
          <p>Satisfying the above-mentioned conditions does not necessarily identify that you are the non-resident for tax purpose. If necessary, please consult a professional accountant or lawyer.</p>
      </div>
      <div v-else><p>
          <p>是否是税务居民，决定了是否需要申报在加拿大以外的资产。非税务居民，指的是完全切断与加拿大的居住关系，而且上个税务年度完全没有住在加拿大或者呆在加拿大的时间少于183天的特殊居民。在加拿大税制下，非税务居民只需要为你从加拿大所取得的(特定)收入向加拿大纳税(或被扣税)，在其他国家的收入不需要在加拿大申报，而无需为你从加拿大以外，比如中国所取得的收入向加拿大纳税。</p>
          <p>以下列了几个可以规划为非税务居民的条件，</p>
          <ol>
              <li class="ps-1 ms-3 pb-2">当年未住满183天的新移民</li>
              <li class="ps-1 ms-3 pb-2">当年未住满183天的国际留学生</li>
              <li class="ps-1 ms-3 pb-2">当年未住满183天的visitor签证在加拿大有收入的外国人</li>
              <li class="ps-1 ms-3 pb-2">已离开加拿大，配偶或被赡养人都不在加拿大的前税务居民</li>
              <li class="ps-1 ms-3 pb-2">已离开加拿大，配偶短期暂住加拿大的前税务居民</li>
              <li class="ps-1 ms-3 pb-2">已离开加拿大，但在加拿大有企业、投资或银行存款的前税务居民</li>
          </ol>
          <p>非税务居民的认定并不一定满足上述的几个条件就可以，有需要还是请咨询专业的会计师或者律师。</p>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>