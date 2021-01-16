<template>
  <div>
    <div v-if="this.$store.getters.lan">
      <h1>Temporary Wage Subsidy for Employers (TWSE) - 10 %</h1>
      <p>
        The Temporary Wage Subsidy for Employers is a three-month measure
        effective March 18, 2020, that will allow eligible employers to reduce
        the amount of payroll deductions required to be remitted to the Canada
        Revenue Agency (CRA).
      </p>
      <p>
        The subsidy is equal to 10% of the remuneration you pay from March 18,
        2020 to June 19, 2020, up to $1,375 for each eligible employee and to a
        maximum of $25,000 total per employer.
      </p>
      <p class="bg">
        <b>Note</b>: Associated CCPCs will not be required to share the maximum
        subsidy of $25,000 per employer.
      </p>
      <p>Eligible employer:</p>
      <ul class="l1">
        <li>are a(n):</li>
        <ul class="l2">
          <li>individual (excluding trusts),</li>
          <li>partnership (see note below),</li>
          <li>non-profit organization,</li>
          <li>registered charity, or</li>
          <li>
            Canadian-controlled private corporation (including a cooperative
            corporation) eligible for the small business deduction;
          </li>
        </ul>
        <li>
          have an existing business number and payroll program account with the
          CRA on March 18, 2020; and
        </li>
        <li>
          pay salary, wages, bonuses, or other remuneration to an eligible
          employee.
        </li>
      </ul>
      <p>
        CCPCs are only eligible for the subsidy if they have a business limit
        for their last taxation year that ended before March 18, 2020, greater
        than nil (determined without reference to the passive income business
        limit reduction).
      </p>
      <p>An eligible employee is an individual who is employed in Canada.</p>
      <p class="bg">
        <b>Note</b>: Partnerships are only eligible for the subsidy if their
        members consist exclusively of individuals (excluding trusts),
        registered charities, or Canadian-controlled private corporations
        (CCPCs) eligible for the small business deduction.
      </p>
      <p>
        You can start reducing payroll remittances of federal, provincial, or
        territorial income tax in the first remittance period that includes
        remuneration paid from March 18, 2020 to June 20, 2020.
      </p>
      <ul class="l1">
        <li>
          For example, if you are a regular remitter, you can reduce your
          payroll remittance that is due to the CRA on April 15, 2020;
        </li>
        <li>
          You cannot reduce your remittance of Canada Pension Plan contributions
          or Employment Insurance premiums;
        </li>
        <li>
          If the income taxes you deduct are not sufficient to offset the value
          of the subsidy in a specific period, you can reduce future payroll
          remittances to benefit from the subsidy. This includes reducing
          remittances that may fall outside of the application period for the
          wage subsidy (after June 19, 2020).
        </li>
      </ul>
      <p>
        The TWSE is a taxable income, you must report the total amount as income
        in the year in which the subsidy is received.
      </p>
      <br />
      <h3>Frequently Asked Questions</h3>
      <p><b>Temporary Wage Subsidy for Employers </b></p>
      <br />
      <li>
        <a
          href="https://www.canada.ca/en/revenue-agency/services/subsidy/temporary-wage-subsidy.html#h2"
          ><u><b>FAQ</b></u></a
        >
      </li>
      <h2>Useful website</h2>
      <li>
      <a
        href="https://www.canada.ca/en/department-finance/news/2020/03/canadas-covid-19-economic-response-plan-support-for-canadians-and-businesses.html?mc_cid=dfafc6d559&mc_eid=[UNIQID]#Support_for_Businesses"
        ><u><b>Federal - Support for businesses</b></u></a
      >
      </li>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";

.l1 {
  width: 90%;
  margin-left: 10%;
}
.l2 {
  margin-top: 0.5em;
  width: 90%;
  margin-left: 8%;
}
.bg {
  width: 110%;
  margin-left: -5%;
  background-color: #f1f1f1;
  padding: 5%;
}
a{
    color: brown;
}
</style>