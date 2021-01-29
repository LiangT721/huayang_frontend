<template>
  <div class="container-sm">
    <div v-if="this.$store.getters.lan">
      <h1 class="text-center col-8 offset-2 py-5">The Canada Recovery Benefit (CRB)</h1>
      <p class="col-10 offset-1">
        The Canada Recovery Benefit (CRB) gives income support to employed and
        self-employed individuals who are directly affected by COVID-19 and are
        not entitled to Employment Insurance (EI) benefits. The CRB is
        administered by the Canada Revenue Agency (CRA).
      </p>
      <h2 class="col-10 offset-1">How much you receive per period</h2>
      <p class="col-10 offset-1">
        If you are eligible for the CRB, you can receive $1,000 ($900 after
        taxes withheld) for a 2-week period.
      </p>
      <p class="col-10 offset-1">
        If your situation continues past 2 weeks, you will need to apply again.
        The CRB does not renew automatically. You must apply for each period
        separately.
      </p>
      <p class="col-10 offset-1">
        The CRB is available for a maximum of 13 periods (26 weeks) between
        September 27, 2020 and September 25, 2021.
      </p>
      <h2 class="col-10 offset-1">
        To be eligible for the CRB, you must meet all the following conditions
        for the 2-week period you're applying for:
      </h2>
      <p class="col-10 offset-1">During the period you’re applying for:</p>
      <ul class="l1">
        <li>
          You were not employed or self-employed for reasons related to COVID-19
        </li>
        <p class="col-10 offset-1">or</p>
        <li>
          You had a 50% reduction in your average weekly income compared to the
          previous year due to COVID-19
        </li>
        <ul class="l2">
          <li>
            The 50% reduction is based on your average weekly employment or net
            self-employment income from either 2019, 2020, or the previous 12
            months. You will need to check that you meet these criteria for
            every period you apply for.
          </li>
        </ul>
        <p class="col-10 offset-1"><b>How to calculate the 50% average weekly income:</b></p>
        <p class="col-10 offset-1">
          you earned $26, 000 by employment and/or self-employment income (in
          2019 or the last 12 months) ÷ 52(weeks)= $500 (average weekly income
          in 2019 or the last 12 months) ÷ 2= $250 (50% of the average weekly
          income in 2019 or the last 12 months)
        </p>
        <li>
          You did not apply for or receive any of the following:
          <ul class="l2">
            <li>Canada Recovery Sickness Benefit (CRSB)</li>
            <li>Canada Recovery Caregiving Benefit (CRCB)</li>
            <li>short-term disability benefits</li>
            <li>Employment Insurance (EI) benefits</li>
            <li>Québec Parental Insurance Plan (QPIP) benefits</li>
          </ul>
        </li>
        <li>You were not eligible for EI</li>
        <li>You reside in Canada</li>
        <li>You were present in Canada</li>
        <li>You are at least 15 years old</li>
        <li>You have a valid Social Insurance Number (SIN)</li>
        <li>
          You earned at least $5,000 in 2019, 2020, or in the 12 months before
          the date you apply from any of the following sources:
          <ul class="l2">
            <li>employment income (total or gross pay)</li>
            <li>net self-employment income (after deducting expenses)</li>
            <li>
              maternity and parental benefits from EI or similar QPIP benefits
            </li>
          </ul>
        </li>
        <li>
          You have not quit your job or reduced your hours voluntarily on or
          after September 27, 2020, unless it was reasonable to do so
        </li>
        <li>
          You were seeking work during the period, either as an employee or in
          self-employment
        </li>
        <li>
          You have not turned down reasonable work during the 2-week period
          you’re applying for
        </li>
      </ul>
      <h2 class="col-10 offset-1">Periods start and end dates</h2>
      <p class="col-10 offset-1">
        Each 2-week period starts on a Sunday and ends on the Saturday of the
        following week. The earliest you can apply is on the
        <b> first Monday after</b> the period has ended.
      </p>
      <br />
      <p class="col-10 offset-1"><b>Recent periods</b></p>
      <ul class="l1">
        <li>January 3 to January 16, 2021 (Period 8)</li>
        <li>December 20, 2020 to January 2, 2021 (Period 7)</li>
        <li>December 6 to December 19, 2020 (Period 6)</li>
      </ul>
      <br />
      <p class="col-10 offset-1"><b>Next period</b></p>
      <p class="col-10 offset-1">January 17 to January 30, 2021 (Period 9)</p>
      <br />
      <p class="col-10 offset-1">
        To confirm the number of periods that you have already received the CRB,
        you can review your application history in CRA My Account, under
        “COVID-19 Support Payment Application Details”.
      </p>
      <h2 class="col-10 offset-1">How to apply</h2>
      <p class="col-10 offset-1">
        Apply online through CRA My Account or by phone 1-800-959-2019 or
        1-800-959-2041, Monday to Sunday from 6 am to 3 am (Eastern time)
      </p>
      <p class="col-10 offset-1">
        For more details, please visit:
        <a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/recovery-benefit.htm"
          ><u
            >https://www.canada.ca/en/revenue-agency/services/benefits/recovery-benefit.htm</u
          ></a
        >
      </p>
    </div>
    <div v-else>
      <h1 class="text-center col-8 offset-2 py-5">加拿大复原福利（Canada Recovery Benefit）</h1>
      <p class="col-10 offset-1">
        加拿大复原福利（CRB）是为受COVID-19直接影响且无权获得就业保险（EI）福利的受雇和自雇人士提供的收入支持。
        该福利由加拿大税务局（CRA）管理
      </p>
      <h2 class="col-10 offset-1">您可以申领到的金额</h2>
      <p class="col-10 offset-1">
        如果您符合申领CRB的资格，则可在两周内收到$ 1,000（预扣税后为$ 900）。
      </p>
      <p class="col-10 offset-1">
        如果您的情况持续超过2周，则需要重新申请。
        CRB不会自动续申。您必须每个周期分别申请。从2020年9月27日到2021年9月25日，您最多可以申领13个周期的CRB（总计26周）。
      </p>
      <h2 class="col-10 offset-1">要符合申领CRB的资格，您必须在申请的2周内满足以下所有条件：</h2>
      <p class="col-10 offset-1">在您申请的期间：</p>
      <ul class="l1">
        <li>您因与COVID-19相关的原因而没有工作或自雇；</li>
        <p class="col-10 offset-1">或者</p>
        <li>由于COVID-19，与上一年相比，您的每周平均收入减少了50％。</li>
        <ul class="l2">
          <li>
            50%的减少是根据您2019年、2020年或之前的12年个月平均每周工资或者自雇净收入计算的，您将需要检查在您申请的每一个时期是否符合这些标准。
          </li>
        </ul>
        <p class="col-10 offset-1"><b>如何计算每周平均收入的50％：</b></p>
        <p class="col-10 offset-1">
          假设您在2019年或最近12个月的就业和/或自雇收入中赚了C$ 26，000
          ÷52（周）= 500加币（2019年或最近12个月的平均每周收入） ÷2 = $
          250（2019年或最近12个月平均每周收入的50％）
        </p>
        <li>
          您没有申请或收到以下任何福利：
          <ul class="l2">
            <li>加拿大康复病福利（CRSB）</li>
            <li>•加拿大康复护理福利（CRCB）</li>
            <li>•短期残疾津贴</li>
            <li>•就业保险（EI）福利</li>
            <li>魁北克家长保险计划（QPIP）福利</li>
          </ul>
        </li>
        <li>您不符合EI的申领资格</li>
        <li>您在加拿大生活并且有住所</li>
        <li>你在申报的周期内住在加拿大</li>
        <li>您年满15岁</li>
        <li>您有有效的社会保险号（SIN）</li>
        <li>
          您在2019年，2020年或您申请之日前的12个月内从以下任何来源获得至少5,000加币的收入：
          <ul class="l2">
            <li>就业收入（工资总额或工资总额）</li>
            <li>自雇净收入（扣除费用后）</li>
            <li>EI或类似QPIP福利给产妇和父母带来的好处</li>
          </ul>
        </li>
        <li>
          除非有合理的理由，否则您没有在2020年9月27日或之后自愿辞职或减少工作时间
        </li>
        <li>您在此期间正在寻找工作，无论是作为雇员还是自雇</li>
        <li>您在申请的两周内没有拒绝合理的工作</li>
      </ul>
      <h2 class="col-10 offset-1">申报周期开始和结束日期</h2>
      <p class="col-10 offset-1">
        每2周的时间段从星期日开始，到下周的星期六结束。您最早可以申请的时间是该期限结束后的第一个星期一。
      </p>
      <br />
      <p class="col-10 offset-1"><b>最近可以申报的周期为</b></p>
      <ul class="l1">
        <li>2021年1月3日至1月16日（周期8）</li>
        <li>2020年12月20日至2021年1月2日（周期7）</li>
        <li>2020年12月6日至12月19日（周期6）</li>
      </ul>
      <br />
      <p class="col-10 offset-1"><b>下一个周期为</b></p>
      <p class="col-10 offset-1">2021年1月17日至1月30日（周期9）</p>
      <br />
      <p class="col-10 offset-1">
        要确认您已收到CRB的周期，您可以在“我的帐户”中的“
        COVID-19支持支付申请详细信息”下查看您的历史申请记录。
      </p>
      <h2 class="col-10 offset-1">如何申请</h2>
      <p class="col-10 offset-1">
        通过CRA”我的帐户”在线申请
        或周一至周日上午6点至凌晨3点（东部时间）致电1-800-959-2019或1-800-959-2041
      </p>
      <p class="col-10 offset-1">
        了解更多有关的详细信息，请访问
        <a
          href="https://www.canada.ca/en/revenue-agency/services/benefits/recovery-benefit.htm"
          ><u
            >https://www.canada.ca/en/revenue-agency/services/benefits/recovery-benefit.htm</u
          ></a
        >
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
  width: 95%;
  // margin-left: 1%;
}
.l3 {
  margin: 0.5em 0;
  width: 90%;
  margin-left: 5%;
}
</style>