<template>
  <div class="container-sm">
    <div v-if="this.$store.getters.lan">
      <h1 class="text-center col-8 offset-2 py-5">
        Preparation for tax return
      </h1>

      <h3 class="col-10 offset-1 pb-2">For individuals</h3>

      <p class="col-10 offset-1 pb-2">
        The due date for filing an income tax and benefit return and paying any
        related tax balance due is April 30, 2021.
      </p>
      <h2 class="col-10 offset-1 pb-2">For self-employed individuals</h2>
      <p class="col-10 offset-1 pb-2">
        If you are self-employed or have a spouse or common-law partner who is
        self-employed, you both have to file a return by June 15, 2021. To avoid
        late-filing penalties, pay any amount you owe by April 30, 2021. After
        this date, the CRA charges interest on what you owe until your balance
        is paid.
      </p>

      <h2 class="col-10 offset-1 pb-2">List of documents you need for the tax return</h2>
      <p class="col-10 offset-1 pb-2">Get everything you need to calculate your income and support any credits, deductions and expenses you want to claim.</p>
      <ul class="l1 col-10 offset-1 row">
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Last tax year’s NOA
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Basic information including name/date birth/dependents etc.
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">•	Employment Income： T4</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Employment Insurance and other Benefits： T4E
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Investment Income： T3, T5
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Pension/Retirement/Annuity/other Income： T4A
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Other Annuity Income：T4RSP/T4RIF 
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">•	Salesmen expense：T2200</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Assistance Benefits / Workers’ Compensation Benefit： T5007
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">•	Details for taxes already paid</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">•	Income and expense record for self-employed</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">•	Income and expense record for Real Estate Rentals</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Foreign Property
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">•	Donation Receipts</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Medical Expense
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Medical Insurance
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Paid interest for student loan: T2022A
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">•	Union Due and Professional Dues</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">RRSP</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Childcare Expense
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         Moving expense
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         First Time Home Buyer
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          support payment
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">•	Foreign Income and official documents of paid taxes</li>
      </ul>
      <p class="col-10 offset-1 pb-2">
        If you received <a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/apply-for-cerb-with-cra/contact.html"
          >Canada Emergency Response Benefit (CERB),</a
        >
        ，<a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/emergency-student-benefit/cesb-contact.html"
          >Canada Emergency Student Benefit (CESB)</a
        >，<a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/recovery-benefit.html"
          >Canada Recovery Benefit (CRB)</a
        >,
        <a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/recovery-sickness-benefit.html"
          >Canada Recovery Sickness Benefit (CRSB)</a
        >
        或
        <a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/recovery-caregiving-benefit.html"
          >Canada Recovery Caregiving Benefit (CRCB)</a
        >payments
        ，these are considered 
        <b>taxable income</b>
        You will need to file and enter the total amount you received on your return. For any such payments, you will receive a T4A (for benefits issued by the CRA) and/or a T4E (for benefits issued by Service Canada) tax slip in the mail with the information to enter on your return. You can view tax slips online as of February in 
        <a
          href="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals.html"
          >My Account</a
        >.
      </p>
      <h2 class="col-10 offset-1 pb-2">Ways to file your tax return</h2>
      <p class="col-10 offset-1 pb-2">
        To file your return, you can choose to use software/on paper/ By phone with File my Return/ Using the Community Volunteer Income Tax Program. If your income is complicated, please contact a profession.
      </p>
      <h2 class="col-10 offset-1 pb-2">Keep all your receipts</h2>
      <p class="col-10 offset-1 pb-2">
       Regardless of how you send your return, you must keep all your tax documents for at least six years. For example, if you are filing for the 2020 tax year, you have to keep your documents for that year and for 2019, 2018, 2017, 2016 and 2015. If you claimed expenses, deductions or tax credits, keep all your receipts and any related documents in case the CRA asks to see them.
      </p>
    </div>
    <div v-else>
      <h1 class="text-center col-8 offset-2 py-5">报税基本信息以及文件清单</h1>
      <p class="col-10 offset-1 pb-2">
        在加拿大，报税是每个税务居民一年一度的必经之事。报税也会根据每个人，每个家庭不同的情况有所不同，接下来为大家介绍关于报税的基础信息。
      </p>
      <h2 class="col-10 offset-1 pb-2">截止期限</h2>
      <h3 class="col-10 offset-1 pb-2">对于个人</h3>

      <p class="col-10 offset-1 pb-2">
        需在当年的4月30日之前申报所得税以及支付任何应交税款余额。
      </p>
      <h2 class="col-10 offset-1 pb-2">对于自雇人士</h2>
      <p class="col-10 offset-1 pb-2">
        如果您是自雇人士，或者配偶或同居伴侣是自雇人士，则双方都必须在当年6月15日之前提交纳税申报表。
        为避免因迟交而被罚款，请在当年的4月30日之前支付所欠的任何款项。在此日期之后，CRA将对欠款收取利息，直到余额付清为止。
      </p>

      <h2 class="col-10 offset-1 pb-2">报税需要准备的文件</h2>
      <ul class="l1 col-10 offset-1 row">
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          上一年的报税记录（姓名，性别，生日，住址，婚姻状况）
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          如果不打算与配偶一起报税，请提供对方收入
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          上一纳税年度税局通知（NOA）
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">工资收入单： T4</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          失业保险/ 其他福利： T4E
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          基金收益，投资收益： T3, T5
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          退休金/ 年金/其他收入： T4A
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          注册退休储蓄计划的收入和其他年金收入：T4RSP/T4RIF
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">销售人员费用：T2200</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          Assistance Benefits / Workers’ Compensation
          Benefit社会援助金或者工伤赔偿： T5007
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">已经缴纳的税款详细信息</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">自雇收入和相关的费用</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">自雇收入和相关的费用</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          海外资产列别以及相关的信息，不同资产不同要求
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">慈善捐款</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          医疗费用（自己以及家庭成员的，包括任何外地旅游因医疗原因的详细资料）
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
         	医疗保险（包括医疗旅游保险）
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          学生贷款所支付的利息T2022A
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">工会和专业会费</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">RRSP</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          托儿费用Childcare（目的是为了你可以工作，学习，需提供名称，地址和照顾者的SIN）
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">政治捐款</li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          搬迁费（搬到距离工作地点更近的地方，至少比前居所近40公里）
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          首次买房（较复杂，需更具实际情况定）
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">
          配偶赡养费（接收方）support payment
        </li>
        <li class="pb-3 me-xxl-5 mb-xxl-3 col-xxl-5">海外收入及官方纳税证明</li>
      </ul>
      <p class="col-10 offset-1 pb-2">
        如果在2020年因为疫情收到了<a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/apply-for-cerb-with-cra/contact.html"
          >加拿大应急响应福利（CERB）</a
        >
        ，<a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/emergency-student-benefit/cesb-contact.html"
          >加拿大紧急学生福利（CESB）</a
        >，<a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/recovery-benefit.html"
          >加拿大康复福利（CRB）</a
        >
        <a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/recovery-sickness-benefit.html"
          >加拿大康复疾病福利（CRSB）</a
        >
        或
        <a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/recovery-caregiving-benefit.html"
          >加拿大康复护理福利（CRCB）</a
        >
        ，这些均被视为
        <b>应税收入</b>
        。对于任何此类福利金收入，都将收到T4A（用于CRA发出的福利）和/或T4E（用于加拿大服务部发出的福利）税单，并附上报税时要输入的相关信息。您可以在
        <a
          href="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals.html"
          >"我的帐户"</a
        >
        中在线查看截至2月的税单。
      </p>
      <h2 class="col-10 offset-1 pb-2">报税方式</h2>
      <p class="col-10 offset-1 pb-2">
        您可以选择使用相关报税软件，或者通过纸质方式，或者通过CRA自助电话报税服务等方式进行报税，如果您的资产情况较为复杂，建议咨询专业会计师进行报税。
      </p>
      <h2 class="col-10 offset-1 pb-2">保留所有收据</h2>
      <p class="col-10 offset-1 pb-2">
        无论您选择以何种方式进行纳税申报，CRA都建议将所有税务文件保存至少六年。例如，如果您要申报2020纳税年度，则必须保留该年度以及2019、2018、2017、2016和2015的文件。比如收入，支出，扣除或税收抵免等，都请保留所有收据和任何相关文件，以备CRA要求查看。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/style.scss";

h1 {
  font-family: $title;
}
p,
li {
  font-family: $text;
  font-size: 1rem;
}
@media only screen and (min-width: 768px) {
  p,
  li {
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 1280px) {
  p,
  li {
    font-size: 1.2rem;
  }
}
</style>