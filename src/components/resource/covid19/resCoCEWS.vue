<template>
  <div class="container-sm">
    <div v-if="this.$store.getters.lan">
      <h1 class="text-center col-8 offset-2 py-5">
        The Canada Emergency Wage Subsidy (CEWS) – 75%
      </h1>
      <p class="col-10 offset-1 text-font">
        The Canada Emergency Wage Subsidy (CEWS) provides an up to 75% wage
        subsidy to eligible employers.
      </p>
      <p class="col-10 offset-1 text-font">
        <b> CHANGES</b> to CEWS as of January 6, 2021:
      </p>
      <p class="col-10 offset-1 text-font">
        details for claim periods 11 to 13 (December 20, 2020, to March 13,
        2021):
      </p>
      <ul class="col-10 offset-1 text-font" >
        <li>the maximum top-up subsidy rate is 35%</li>
        <li>
          the maximum subsidy amount for employees on leave with pay is $595
        </li>
        <li>
          the base revenue drop-comparison months for period 11 will be the same
          as period 10
        </li>
      </ul>
      <p class="col-10 offset-1 text-font">
        The grant is available on the Canada Revenue Agency’s website. You can
        access it through "My Business Account".
      </p>
      <h2 class="col-10 offset-1">Eligibility</h2>
      <ul class="col-10 offset-1 text-font" >
        <li>Have had a CRA payroll account on March 15, 2020</li>
        <li>
          Applies to small, medium and large businesses, not-for-profit
          organizations and charities, except for public sector entities,
          regardless of the number of employees.
        </li>
        <li>Have experienced a drop in revenue</li>
      </ul>
      <h2 class="col-10 offset-1">Amount of Subsidy</h2>
      <p class="col-10 offset-1 text-font">
        CRA provides an online calculator to help you know the amount of
        subsidy. CRA recommend using it before claim. Here is the link:
        <a href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy/cews-calculate-subsidy-amount.html"> https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy/cews-calculate-subsidy-amount.html</a>
      </p>
      <h2 class="col-10 offset-1">Eligible revenue</h2>
      <p class="col-10 offset-1 text-font">
        Eligible revenue generally includes revenue earned in Canada from:
      </p>
      <ul class="col-10 offset-1 text-font" >
        <li>selling goods</li>
        <li>rendering services, and</li>
        <li>others' use of your resources</li>
      </ul>
      <p class="col-10 offset-1 text-font">
        Generally, you should use your normal accounting method when calculating
        your eligible revenue. If your normal accounting method is the accrual
        method, you can elect to use the cash method (and vice versa), but once
        you choose you must use the same accounting method for all your claims.
      </p>
      <h2 class="col-10 offset-1">Eligible Periods</h2>
      <ul class="col-10 offset-1 text-font" >
        <li>
          Each CEWS claim period is a specific period of 4 weeks, beginning on
          a Sunday.
        </li>
        <li>
          The wage subsidy does not renew automatically. Each period, you must
          confirm that you're eligible and calculate your amount according to
          that period's rules before you apply.
        </li>
      </ul>
      <h3 class="col-10 offset-1 py-3">
        Current Claim Period <br /> <br>
        Period 11: December 20, 2020 to January 16, 2021
      </h3>
      <h3 class="col-10 offset-1 py-3">
        Next Claim Period <br /> <br>
        Period 12: January 17 to February 13, 2021
      </h3>
      <h2 class="col-10 offset-1">How to Apply</h2>
      <p class="col-10 offset-1 text-font">
        Eligible employers will be able to apply for the CEWS through the Canada
        Revenue Agency's My Business Account portal. Employers will need to keep
        records demonstrating their reduction in arm's-length revenues and
        remuneration paid to employees.
      </p>
      <p class="col-10 offset-1 text-font">There are three ways to apply:</p>
      <ul class="col-10 offset-1 text-font" >
        <li>apply using My Business Account</li>
        <li>
          Business representatives may apply using Represent a Client <br /> <br>
          Note: Only representatives authorized at Level 2 or 3 will be able to
          apply
        </li>
        <li>
          If neither is an option for you, use the Web Forms application using
          your web access code (WAC)
        </li>
      </ul>
      <h2 class="col-10 offset-1">After applying</h2>
      <p class="col-10 offset-1 text-font">
        You can generally expect to receive your payment within 3 to 8 days if
        you are registered for direct deposit on your payroll account. If you
        are not registered for direct deposit, please allow additional time for
        a cheque to be delivered by mail to the address on your payroll account.
        In some cases, we may need to delay your payment if we need to contact
        you for additional review of your claim.
      </p>
      <p class="col-10 offset-1 text-font">
        The CEWS is paid by direct deposit or by cheque.
      </p>
    </div>
    <div v-else>
       <h1 class="text-center col-8 offset-2 py-5">
        加拿大紧急工资补贴（CEWS）– 75％
      </h1>
      <p class="col-10 offset-1 text-font">
       加拿大紧急工资补贴（CEWS）向符合条件的雇主提供高达75％的工资补贴。
      </p>
      <p class="col-10 offset-1 text-font">
        自2021年1月6日起对CEWS做出以下更改：
      </p>
      <p class="col-10 offset-1 text-font">
        补贴期11至13（2020年12月20日至2021年3月13日）：
      </p>
      <ul class="col-10 offset-1 text-font" >
        <li>最高补足的补贴率为35％</li>
        <li>
          带薪休假的雇员的最高补贴额为$ 595
        <li>
         补贴期11的基本收入下降比较月将与补贴期10相同
        </li>
      </ul>
      <p class="col-10 offset-1 text-font">
        该补贴计划可在加拿大税务局的网站上找到。您可以通过“我的商业帐户”访问它。
      </p>
      <h2 class="col-10 offset-1">什么企业能够符合申请的资格</h2>
      <ul class="col-10 offset-1 text-font" >
        <li>于2020年3月15日拥有CRA工资单帐户</li>
        <li>
         适用于小型，中型和大型企业，非营利组织和慈善机构，公共部门实体除外，无论雇员人数多大。
        </li>
        <li>遭遇了收入下降的情况</li>
      </ul>
      <h2 class="col-10 offset-1">补贴金额</h2>
      <p class="col-10 offset-1 text-font">
        CRA提供了一个在线计算器，可帮助您了解可获得的补贴金额。 CRA建议在申请前使用它来做初步预估。这是链接：<a href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy/cews-calculate-subsidy-amount.html"> https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy/cews-calculate-subsidy-amount.html</a>
      </p>
      <h2 class="col-10 offset-1">符合条件的收入</h2>
      <p class="col-10 offset-1 text-font">
        符合条件的收入通常包括在加拿大从以下方面获得的收入：
      </p>
      <ul class="col-10 offset-1 text-font" >
        <li>销售商品</li>
        <li>提供服务，以及</li>
        <li>他人对您资源的使用</li>
      </ul>
      <p class="col-10 offset-1 text-font">
        通常，在计算符合条件的收入时，应使用常规会计方法。如果通常的会计方法是权责发生制，则可以选择使用现金方法（反之亦然），但是一旦选择，就必须对该补贴计划的所有申请期都使用相同的会计方法。
      </p>
      <h2 class="col-10 offset-1">可以申请的周期</h2>
      <ul class="col-10 offset-1 text-font" >
        <li>
         每个CEWS补贴申请期为特定的4个星期，从星期日开始。
        </li>
        <li>
         紧急工资补贴不会自动更新。每个期间，您都必须确认自己有资格，并根据该期间的规则计算您的金额，然后再申请。</li>
      </ul>
      <h3 class="col-10 offset-1 py-3">
       当前可以申请的周期<br /> <br>
       期间11：2020年12月20日至2021年1月16日
      </h3>
      <h3 class="col-10 offset-1 py-3">
       下一个可以申请的周期<br /> <br>
       期间12：2021年1月17日至2月13日
      </h3>
      <h2 class="col-10 offset-1">如何申请</h2>
     
      <p class="col-10 offset-1 text-font">有三种申请方法：</p>
      <ul class="col-10 offset-1 text-font" >
        <li>使用“我的商业帐户”申请</li>
        <li>
          授权代表可以使用“代表客户”申请（注意：只有2级或3级授权代表才能申请）
        </li>
        <li>
          如果以上两种方式都不适合您，请通过Web访问代码（WAC）使用Web文件的申请方式
        </li>
      </ul>
      <p class="col-10 offset-1 text-font">
        雇主将需要保存记录，以证明他们减少了与雇员的公平收入和报酬。
      </p>
      <h2 class="col-10 offset-1">申请后</h2>
      <p class="col-10 offset-1 text-font">
        如果您已注册直接存入工资帐户，通常可以在3至8天内收到补贴款。如果您没有注册直接存入工资账户，将需要更多时间通过邮寄支票到工资单帐户上的地址。在某些情况下，如果我们需要与您联系以进一步审查您的申请，可能会遭遇延迟。
      </p>
      <p class="col-10 offset-1 text-font">
        通常来说，CEWS通过直接存款或支票支付。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// @import "../../../assets/style.scss";
// h1 {
//   font-family: $title;
// }
// .l1 {
//   width: 90%;
//   margin-left: 10%;
// }
// .l2 {
//   margin-top: 0.5em;
//   width: 95%;
//   // margin-left: 1%;
// }
// .l3 {
//   margin: 0.5em 0;
//   width: 90%;
//   margin-left: 5%;
// }
// table,
// th,
// td {
//   border: 1px solid black;
//   border-collapse: collapse;
//   padding: 1em;
// }
// .col1 {
//   font-weight: bold;
// }
// th {
//   background-color: #002766;
//   color: white;
// }
// table {
//   margin-left: -5%;
//   font-size: 0.8rem;
// }
// span {
//   margin-left: -10%;
// }
// button {
//   a {
//     color: white;
//   }
// }
</style>