<template>
  <div class="container-sm">
    <div v-if="this.$store.getters.lan">
      <h1 class="text-center col-8 offset-2 py-5">The Canada Emergency Wage Subsidy (CEWS) – 75%</h1>
      <p class="col-10 offset-1">
        The new Canada Emergency Wage Subsidy (CEWS) provides a 75% wage subsidy
        to eligible employers for up to 24 weeks, retroactive to March 15, 2020.
        <br />
        <br />
        The grant is available since Monday on the Canada Revenue Agency’s
        website. You can access it through "My Business Account".
        <br />
        <br />
        Employers who meet the eligibility conditions for temporary wage subsidy
        to 10% of employees, must deduct from Canada's emergency wage subsidy
        (75%) the amounts to which they are entitled under the temporary wage
        subsidy for employees the same period.
        <br />
        <br />
        If an eligible employer completes their CEWS application and does not
        enter any amount for the 10% temporary wage subsidy, the CEWS will be
        determined as if the employer is electing 0% as the prescribed
        percentage for calculating their 10% temporary wage subsidy and
        requesting the maximum CEWS.
      </p>
      <h2 class="col-10 offset-1">Eligibility</h2>
      <ul class="l1">
        <li>
          Eligibility for the CEWS of an employee's remuneration is available to
          employees other than those who have been without remuneration for 14
          or more consecutive days in the eligibility period, i.e., from March
          15 to April 11, from April 12 to May 9, or from May 10 to June 6, from
          June 7 to July 4, from July 5 to August 1,, or from August 2 to August
          29.
        </li>
        <li>
          Applies to small, medium and large businesses, not-for-profit
          organizations and charities, except for public sector entities,
          regardless of the number of employees.
        </li>
        <li>
          Those that see a drop of at least 15% of their revenue in March 2020
          and 30% for the following months (see Eligible Periods).
        </li>
      </ul>
      <h2 class="col-10 offset-1">Amount of Subsidy</h2>
      <ul class="l1">
        <li>
          The subsidy amount for a given employee on eligible remuneration paid
          for a claim period (between March 15 and August 29, 2020) is the
          greater of:
        </li>
        <ul class="l2">
          <li>
            75% of the amount of remuneration paid, up to a maximum benefit of
            $847 per week; and
          </li>
          <li>
            the amount of remuneration paid, up to a maximum benefit of $847 per
            week or 75% of the employee's pre-crisis weekly remuneration,
            whichever is less.
          </li>
        </ul>
        <li>
          Employers may be eligible for a subsidy of up to 100% of the first 75%
          of pre-crisis wages or salaries of existing employees.
        </li>
        <li>
          Employers will also be eligible for a subsidy of up to 75% of salaries
          and wages paid to new employees.
        </li>
        <li>
          A special rule will apply to employees that do not deal at arm’s
          length with the employer. The subsidy amount for such employees will
          be limited to the eligible remuneration paid in any pay period between
          March 15 and August 29, 2020, up to a maximum benefit of $847 per week
          or 75% of the employee’s pre-crisis weekly remuneration;
        </li>
      </ul>
      <h2 class="col-10 offset-1">Calculating Revenues</h2>
      <ul class="l1">
        <li>
          In recognition that the time between when revenue is earned and when
          it is paid could be highly variable in certain sectors of the economy,
          it is proposed that employers be allowed to measure revenues either:
        </li>
        <ul class="l2">
          <li>on the basis of accrual accounting (as they are earned); or</li>
          <li>
            cash accounting (as they are received). Special rules would also be
            provided to address issues for corporate groups, non-arm’s length
            entities and joint ventures.
          </li>
        </ul>
        <li>
          For registered charities and not-for-profit organizations, it will be
          allowed to choose to include or exclude government funding in their
          revenues for the purpose of applying the revenue reduction test.
        </li>
      </ul>
      <h2 class="col-10 offset-1">Eligible Periods</h2>
      <ul class="l1">
        <li>
          Eligibility is determined by the change in an eligible employer's
          monthly revenues, year-over-year, for the calendar month in which the
          period began.
        </li>
        <li>
          All employers are allowed to calculate their change in revenue using
          an alternative benchmark to determine their eligibility. This provides
          more flexibility to employers for which the general approach may not
          be appropriate, including high-growth firms, sectors that faced
          difficulties in 2019, non-profits and charities, as well as employers
          established after February 2019.
        </li>
        <li>
          Under this alternative approach, employers are allowed to compare
          their revenue using an average of their revenue earned in January and
          February 2020.
        </li>
        <li>
          The amount of wage subsidy (provided under the COVID-19 Economic
          Response Plan) received by the employer in a given month is ignored
          for the purpose of measuring year-over-year changes in monthly
          revenues.
        </li>
        <ul class="l2">
          <li>
            For example, if revenues in March 2020 were down 20% compared to
            March 2019, the employer would be allowed to claim the CEWS (as
            calculated above) on remuneration paid between March 15 and April
            11, 2020, as well as between April 12 to May 9.
          </li>
          <li>
            Alternatively, this employer could use its average revenue from the
            months of January and February 2020, instead of March 2019, to
            determine if it is eligible for the CEWS.
          </li>
          <li>
            Once an approach is chosen, the employer would have to apply it
            throughout the program period.
          </li>
        </ul>
      </ul>
      <p class="col-10 offset-1">
        By qualifying at the level of income decline in a particular period, you
        automatically qualify for the following period. The table below outlines
        first three claiming period, the required reduction in revenue and the
        reference period for eligibility:
      </p>
      <table class="col-xxl-10 offset-xxl-1 ms-1 ms-xxl-5">
        <tr>
          <th></th>
          <th>Claiming period</th>
          <th>Required reduction in revenue</th>
          <th>Reference period for eligibility</th>
        </tr>
        <tr>
          <td class="col1">Periode 1</td>
          <td>March 15 to April 11</td>
          <td>15 %</td>
          <td>
            <p class="col-10 offset-1">March 2020 over:</p>
            <ul class="l1">
              <li>March 2019 or</li>
              <li>Average of January and February 2020</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="col1">Periode 2</td>
          <td>April 12 to May 9</td>
          <td>30 %</td>
          <td>
            <p class="col-10 offset-1">Eligible for Period 1</p>
            <p class="col-10 offset-1"><b>OR</b></p>
            <p class="col-10 offset-1">April 2020 over:</p>
            <ul class="l1">
              <li>April 2019 or</li>
              <li>Average of January and February 2020</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="col1">Periode 3</td>
          <td>May 10 to June 6</td>
          <td>30 %</td>
          <td>
            <p class="col-10 offset-1">Eligible for Period 2 OR May 2020 over:</p>
            <ul class="l1">
              <li>May 2019 or</li>
              <li>Average of January and February 2020</li>
            </ul>
          </td>
        </tr>
      </table>
      <h2 class="col-10 offset-1">Refund for Certain Payroll Contributions</h2>
      <ul class="l1">
        <li>
          100% refund for certain employer-paid contributions to Employment
          Insurance, the Canada Pension Plan, the Quebec Pension Plan, and the
          Quebec Parental Insurance Plan, and the health services fund.
        </li>
        <li>
          This refund covers 100% of employer-paid contributions for eligible
          employees for each week throughout which those employees are on leave
          with pay and for which the employer is eligible to claim for the CEWS
          for those employees.
        </li>
        <li>
          In general, an employee will be considered to be on leave with pay
          throughout a week if that employee is remunerated by the employer for
          that week but does not perform any work for the employer in that week.
          This refund is not be available for eligible employees that are on
          leave with pay for only a portion of a week.
        </li>
        <li>
          Employers are required to continue to collect and remit employer and
          employee contributions to each program as usual. Eligible employers
          apply for a refund, as described above, at the same time that they
          apply for the CEWS.
        </li>
        <li>
          This refund would not be subject to the weekly maximum benefit per
          employee of $847 that an eligible employer may claim in respect of the
          CEWS. There would be no overall limit on the refund amount that an
          eligible employer may claim.
        </li>
      </ul>
      <h2 class="col-10 offset-1">How to Apply</h2>
      <ul class="l1">
        <li>
          Eligible employers will be able to apply for the CEWS through the
          Canada Revenue Agency's My Business Account portal. Employers will
          need to keep records demonstrating their reduction in arm's-length
          revenues and remuneration paid to employees. More details about the
          application process will be made available shortly.
        </li>
        <li>
          The funds will be paid within 3 to 6 weeks from April 1, 2020. Signing
          up for direct deposit is recommended for businesses to speed up the
          process;10% Wage SubsidyThe employers that do not qualify for the
          Canada Emergency Wage Subsidy may continue to qualify for the 10% of
          remuneration paid from March 18 to before June 20, up to a maximum
          subsidy of $1,375 per employee and $25,000 per employer.
        </li>
      </ul>
      <h2 class="col-10 offset-1">10% Wage Subsidy</h2>
      <p class="col-10 offset-1">
        The employers that do not qualify for the Canada Emergency Wage Subsidy
        may continue to qualify for the 10% of remuneration paid from March 18
        to before June 20, up to a maximum subsidy of $1,375 per employee and
        $25,000 per employer.
      </p>
      <button class="btn btn-secondary col-10 offset-1"><b><a href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy.html">The Canada Emergency Wage Subsidy</a></b></button>
    </div>
    <div v-else></div>
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
  width: 95%;
  // margin-left: 1%;
}
.l3 {
  margin: 0.5em 0;
  width: 90%;
  margin-left: 5%;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 1em;
}
.col1 {
  font-weight: bold;
}
th {
  background-color: #002766;
  color: white;
}
table {
  margin-left: -5%;
  font-size: 0.8rem;
}
span {
  margin-left: -10%;
}
button{
    a{
        color: white;
    }
}
</style>