<template>
  <div>
    <div v-if="this.$store.getters.lan">
      <h1>Support for Students and Recent Graduates Impacted by COVID-19</h1>
      <p>
        The government has announced a series of measures as part of its
        <a
          href="https://www.canada.ca/en/department-finance/economic-response-plan.html"
          >COVID-19 Emergency Response Plan</a
        >
        that will help Canadian students and recent graduates overcome these
        challenges and support their future success.
      </p>
      <br />
      <h2>Canada Emergency Student Benefit (CESB)</h2>
      <p>
        To qualify for the CESB, the student must have been affected for reasons
        related to the coronavirus disease during the four-week period for which
        they apply for the benefit.
      </p>
      <p>Eligible student must:</p>
      <ul class="l1">
        <li>
          be enrolled, at any time between December 1, 2019 and August 31, 2020,
          in a post-secondary educational program; or
        </li>
        <li>
          have graduated from secondary school in 2020 and have applied for
          enrollment in such a post-secondary educational program that is
          scheduled to begin before February 1, 2021 and plans to enroll in the
          program if their application is accepted.
        </li>
      </ul>
      <p>The application must be based on the fact that the student:</p>
      <ul class="l1">
        <li>is unable to work as an employee or in self-employment; or
</li>
        <li>is seeking work and unable to find it; or</li>
        <li>is working but unable to make more than $1,000.</li>
      </ul>
      <p>The student should not receive for any part of that period:</p>
      <ul class="l1">
        <li>income of more than $1,000 from employment or self-employment; or</li>
        <li>benefits from the Employment Insurance or CERB; or</li>
        <li>allowances, money or other benefits that would be paid to the student under a provincial plan.</li>
      </ul>
      <p>CESB is available for four months from May 2020 to August 2020 but students will be able to retroactively apply for this benefit until September 30, 2020. High school students who complete or expect to complete their studies between June 7 and December 31, 2020, and have applied for post-secondary studies and are intending to pursue it, are eligible to receive two months of the CESB.</p>
      <p>Eligible students can receive $1,250 per month, plus an additional $750 per month if they have dependents or a disability for a maximum of $2,000 per month. Students are only eligible to receive one top-up of $750 per month.</p>
      <p>Please note that the Canada Revenue Agency (CRA) may ask you to provide information later to verify that you have been looking for work during the eligibility period(s) that you have applied for.</p>
      <h2>Changes to the Canada Student Loans Program</h2>
      <ul class="l1">
        <li>Changes to the Canada Student Loans Program (CSLP) have been proposed to allow more students to qualify for support and be eligible for greater amounts;</li>
        <li>The changes would include:</li>
        <ul class="l2">
          <li>Doubling the Canada Student Grants for all eligible full-time students to up to $6,000 and up to $3,600 for part-time students in 2020-21. The Canada Student Grants for Students with Permanent Disabilities and Students with Dependents would also be doubled.</li>
          <li>Broadening eligibility for student financial assistance by removing the expected student’s and spouse’s contributions in 2020-21;</li>
          <li>Raising the maximum weekly amount that can be provided to a student in 2020-21 from $210 to $350.</li>
        </ul>
      </ul>
      <h2>Canada Student Service Grant (CSSG)</h2>
      <ul class="l1">
        <li>The government is launching the Canada Student Service Grant (CSSG), which will help students gain valuable work experience and skills while they help their communities during the COVID‑19 pandemic;</li>
        <li>For students who choose to do national service and serve their communities, the new CSSG will provide up to $5,000 for their education in the fall.</li>
      </ul>
      <p>Note: More details will be made available on the “I Want to Help” platform soon.</p>
      <h2>Supporting international students working in an essential service</h2>
      <ul class="l1">
        <li>The restriction that allows international students to work only a maximum of 20 hours per week while classes are in session will be removed, provided they are working in an essential service or function, such as health care, critical infrastructure, or the supply of food or other critical goods;</li>
        <li>This temporary rule change will be in place until August 31, 2020.</li>
      </ul>
        <h2>Suspending repayment and interest on student and apprentice loans</h2>
      <ul class="l1">
        <li>All student loan borrowers will automatically have their loan repayments and interest suspended until September 30, 2020;</li>
        <li>Students do not need to apply for the repayment pause;</li>
        <li>This moratorium applies to the federal portion of student loans. Borrowers should check with their provincial or territorial student loan provider to see if payment is required on the provincial or territorial portion.</li>
      </ul>
      <h2>Temporary changes to Canada Summer Jobs program</h2>
      <ul class="l1">
        <li>The Canada Summer Jobs program provides opportunities for youth to develop and improve their skills within the not-for-profit, small business, and public sectors, and supports the delivery of key community services;</li>
        <li>Temporary changes will be made to the Canada Summer Jobs program to allow employers to:</li>
        <ul class="l2">
          <li>receive an increased wage subsidy, so that private and public sector employers can also receive up to 100 per cent of the provincial or territorial minimum hourly wage for each employee;</li>
          <li>extend the end date for employment to February 28, 2021;</li>
          <li>adapt their projects and job activities;</li>
          <li>hire staff on a part-time basis.</li>
        </ul>
      </ul>
      <p><a href="https://www.canada.ca/en/department-finance/news/2020/04/support-for-students-and-recent-graduates-impacted-by-covid-19.html">https://www.canada.ca/en/department-finance/news/2020/04/support-for-students-and-recent-graduates-impacted-by-covid-19.html</a></p>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.l1 {
  width: 90%;
  margin-left: 10%;
}
.l2 {
  margin-top: 0.5em;
  width: 90%;
  margin-left: 8%;
}
.l3 {
  margin: 0.5em 0;
  width: 90%;
  margin-left: 5%;
}
</style>