<template>
  <div class="service-menu pt-5">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">
        Self-employment tax return
      </div>
      <div v-else>自雇纳税申报</div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
        <p>
          Self-employment is a common and increasingly popular way of working in Canada. Self-employment is a very broad concept, including opening a store, doing real estate, doing sales for commissions, doing contract labor, and even earning extra income in your spare time. The tax filing of self-employed persons is different from that of companies and individuals. The tax filing deadline for self-employed persons is June 30, but the tax payment process must be completed before April 30 of that year to avoid being charged late interest by CRA.
        </p>
        <p>
          For the self-employed person’s tax return, the first step is to confirm the self-employed status, and then to understand the relevant expenses incurred during the period of self-employment income that can be deducted and related administrative expenses incurred to obtain self-employment income, such as general utilities, employee salaries Costs such as food, catering, and business use of cars and houses. All the details have increased the difficulty of completing the tax return by yourself to a certain extent. You can consult our professional team to help the majority of self-employed people make good use of the government’s various preferential policies and reduce taxes reasonably and legally.
        </p>
      </div>
      <div v-else>
        <p>
          自雇在加拿大是一个普遍并且日渐流行的方式，自雇是个很广泛的概念，包括开店，做房地产，做销售拿佣金，做合同工，甚至还包括利用工作之余另外赚取收入。自雇人士的报税与公司和个人的报税都有所不同。自雇人士的报税截止日是6月30日，但是在当年的4月30日之前必须完成税务缴纳过程，以免被税局征收迟交的利息。对于自雇人士的报税，首先要确认自雇的身份，其次是了解可以抵扣的自雇收入期间产生的相关费用支出和为获得自雇收入产生的相关管理费用，比如一般的水电、雇员工资、餐饮，生意用车用房等费用，这在一定程度上增加了自己完成报税的难度，可以咨询我们的专业团队，帮助广大的自雇人士用好政府的各项优惠政策，合理合法避税。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>