<template>
  <div class="container-sm">
    <div v-if="this.$store.getters.lan">
      <h1 class="text-center col-8 offset-2 py-5">Business financing</h1>
      <h2 class="col-10 offset-1">
        Canadian government guaranteed business loan program (Canadian emergency
        business account)
      </h2>
      <p class="col-10 offset-1">
        The Canada Emergency Business Account (CEBA) is a loan program which was
        implemented by eligible financial institutions in cooperation with
        Export Development Canada (EDC).
      </p>
      <p class="col-10 offset-1">
        <b
          >As of December 4, 2020, CEBA loans for eligible businesses increased
          from $40,000 to $60,000.</b
        >
      </p>
      <p class="col-10 offset-1">
        This program provides interest-free loans, of up to $60,000, to small
        businesses and not-for-profits, to help cover their operating costs
        during a period where their revenues have been temporarily reduced, due
        to the economic impacts of the COVID-19 virus.
      </p>
      <ul class="l1">
        <li>
          Repaying the balance of the loan on or before December 31, 2022 will
          result in loan forgiveness of 33 percent (up to $20,000).
        </li>
      </ul>
      <p class="col-10 offset-1">
        To qualify, these organizations will need to demonstrate they paid
        between $20,000 to $1.5 million in total payroll in 2019.<br />
        To qualify under the expanded eligibility criteria, applicants with
        payroll lower than $20,000 would need:
      </p>
      <ul class="l1">
        <li>
          a business operating account at a participating financial institution;
        </li>
        <li>
          a Canada Revenue Agency business number, and to have filed a 2018 or
          2019 tax return;
        </li>
        <li>
          eligible non-deferrable expenses between $40,000 and $1.5 million.
          Eligible non-deferrable expenses could include costs such as rent,
          property taxes, utilities, and insurance.
        </li>
      </ul>
      <p class="col-10 offset-1">
        Expenses will be subject to verification and audit by the Government of
        Canada. Funding will be delivered in partnership with financial
        institutions.
      </p>
      <p class="col-10 offset-1">
        All applicants have until March 31, 2021, to apply for $60,000 CEBA loan
        or the $20,000 expansion.
      </p>
      <p class="col-10 offset-1">
      Do not hesitate to consult the<a href="https://ceba-cuec.ca/"
        ><u> Government of Canada website</u></a
      >
      for more details: <br />
      <a href="https://ceba-cuec.ca/"><u>https://ceba-cuec.ca/</u></a></p>
    </div>
    <div v-else>
      <h1 class="text-center col-8 offset-2 py-5">商业融资</h1>
      <h2 class="col-10 offset-1">加拿大政府担保的商业贷款计划（加拿大紧急商业帐户）</h2>
      <p class="col-10 offset-1">
        加拿大紧急商业账户（CEBA）是一项贷款计划，由符合条件的金融机构与加拿大出口发展局（EDC）合作实施。
      </p>
      <p class="col-10 offset-1">
        <b
          >从2020年12月4日起，CEBA为符合条件的企业提供的贷款从40,000加币增加至60,000加币。</b
        >
      </p>
      <p class="col-10 offset-1">
        该计划为小型企业和非营利性组织提供高达60,000加币的无息贷款，以弥补其在疫情期间，因新冠病毒造成的经济影响而暂时收入降低时期的运营成本。
      </p>
      <ul class="l1">
        <li>
          在2022年12月31日或之前偿还贷款余额，将获得33％的贷款免除（最高20,000加币）。
        </li>
      </ul>
      <p class="col-10 offset-1">
        要获得该项贷款的资格，这些组织将需要证明他们在2019年支付了20,000至150万加币的薪资总额。<br />
        支付薪水低于20,000加币的申请组织也能够符合增加贷款的资格标准，如果他们满足以下条件：
      </p>
      <ul class="l1">
        <li>参与金融机构的商业运营账户；</li>
        <li>
          在加拿大税务局拥有商业号码，并已提交2018年或2019年的纳税申报表；
        </li>
        <li>
          符合条件的不可延期支出，介于40,000加币到150万加币之间。符合条件的不可延期支出可能包括诸如租金，财产税，水电和保险等费用。
        </li>
      </ul>
      <p class="col-10 offset-1">费用将由加拿大政府核实和审计。资金将由合作的金融机构提供。</p>
      <p class="col-10 offset-1">
        所有申请人必须在2021年3月31日之前申请60,000加币的CEBA贷款或申请增加20,000加币的贷款额。
      </p>
       <p class="col-10 offset-1">咨询<a href="https://ceba-cuec.ca/"><u>加拿大政府网站 </u></a>
      了解更多细节 <br />
      <a href="https://ceba-cuec.ca/"><u>https://ceba-cuec.ca/</u></a>
       </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
h1 {
  font-family: $title;
}
.l1 {
  width: 90%;
  margin-left: 5%;
}
.l2 {
  margin-top: 0.5em;
  width: 90%;
}
</style>