<template>
  <main class=" bg-white">
    <div class="relative flex flex-wrap items-center justify-between  text-black">
      <div class="container flex-wrap mx-72 px-11 pb-32 items-center">
        <!-- Headline -->
        <div class="mb-7">
          <div class="py-1 pt-20">
            <h2 class=" my-2  text-black font-sans font-extrabold text-7xl">COVID-19 Insights</h2>
            <span class=" text-black py-2 font-sans tracking-normal text-2xl">Get the
              latest COVID-19 epidemiological insights from various organizations.
            </span>
          </div>
          <div class="">
            <hr class="bg-black h-0.5">
          </div>
        </div>
        <div class="embed-container">
          <iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            title="COVID-19"
            src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"></iframe>
        </div>
        <div>
          <p>The COVID-19 Dashboard is maintained by Center for Systems Science and Engineering (CSSE) from Johns
            Hopkins
            University (JHU). The COVID-19 data is sourced from the repository for the 2019 Novel Coronavirus Visual
            Dashboard that is also operated by the Johns Hopkins University Center for Systems Science and Engineering
            (JHU CSSE) and it is also supported by ESRI Living Atlas Team and the Johns Hopkins University Applied
            Physics
            Lab (JHU APL).</p>
        </div>
        <div>
          <iframe class="w-full h-screen"
            src="https://app.powerbi.com/view?r=eyJrIjoiYWRiZWVkNWUtNmM0Ni00MDAwLTljYWMtN2EwNTM3YjQzYmRmIiwidCI6ImY2MTBjMGI3LWJkMjQtNGIzOS04MTBiLTNkYzI4MGFmYjU5MCIsImMiOjh9"
            frameborder="0">
          </iframe>
          <div class=" embed-container">
          <iframe
            src="https://app.powerbi.com/view?r=eyJrIjoiZjY1MzYxNmYtNTQ3OC00NzI5LWIyMDEtYjI3MzVjYjI2NTUzIiwidCI6IjE5NWQzN2JlLTllMGEtNDIwNS1hZGY0LWEyNTk5ZTllMWNjYSIsImMiOjEwfQ%3D%3D"
            frameborder="0"></iframe>
        </div>
        </div>
        <div class="pb-5 border-b-slate-900">
          <div>
            <div class="relative overflow-x-auto shadow-md ">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class=" my-5 border-b border-t border-black text-white uppercase bg-red tracking-wide ">
                  <tr>
                    <th scope="col" class="px-6 pt-3">
                      <h1>Hospital Name</h1>
                    </th>
                    <th scope="col" class="pt-3">
                      <h1>Facility Status</h1>
                    </th>
                  </tr>
                </thead>
                <tbody v-for="Hospital in this.HospitalInformationObjects">
                  <tr class="border-b border-black bg-white hover:bg-slate-300 duration-300 ease-in-out">
                    <th scope="row" class=" text-xl pl-6 text-black font-bold">
                      {{ Hospital.name }}
                    </th>
                    <td>
                      <ul class="py-3 text-ellipsis text-justify font-medium text-black">
                        <li>Asymptomatic Case: {{ Hospital.confinedAsymptomatic }}</li>
                        <li>Mild Case: {{ Hospital.confinedMild }}</li>
                        <li>Severe Case: {{ Hospital.confinedSevere }}</li>
                        <li>Death Case: {{ Hospital.confinedDied }}</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-xs mx-10 pt-5">
                <span>Note that the data depends on the COVID-19 Data Drop provided by the Department of Health.
                  Therefore, it is
                  highly possible that the data that is currently displayed may be outdated since it may depend on the
                  respective hospitals if
                  they
                  had passed their facility data to the DOH Data Drop, DOH Data Drop is updated, or in the COVID-19 API
                  used</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>
            Data Overview and Visualizations
          </h1>
          <div>
            <p>The WHO coronavirus (COVID-19) dashboard presents official daily counts of COVID-19 cases, deaths and
              vaccine utilisation reported by countries, territories and areas. Through this dashboard, we aim to
              provide a
              frequently updated data visualization, data dissemination and data exploration resource, while linking
              users to other useful and informative resources. </p>

            <p>Caution must be taken when interpreting all data presented, and differences between information products
              published by WHO, national public health authorities, and other sources using different inclusion criteria
              and different data cut-off times are to be expected. While steps are taken to ensure accuracy and
              reliability,
              all data are subject to continuous verification and change. All counts are subject to variations in case
              detection, definitions, laboratory testing, vaccination strategy, and reporting strategies. Other
              important considerations are highlighted under the respective Data Sources below.</p>

            <p>The designations employed and the presentation of these materials do not imply the expression of any
              opinion
              whatsoever on the part of WHO concerning the legal status of any country, territory or area or of its
              authorities, or concerning the delimitation of its frontiers or boundaries. Dotted and dashed lines on
              maps
              represent approximate border lines for which there may not yet be full agreement.</p>

            <ul class=" text-xs">
              <li class=" py-1">[1] All references to Kosovo should be understood to be in the context of the United
                Nations Security
                Council
                resolution 1244 (1999).</li>
              <li class=" py-1">
                [2] A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and
                Northern
                Ireland concerning sovereignty over the Falkland Islands (Malvinas).
              </li>
            </ul>

            <p class="py-1 text-xs">
              Data for Bonaire, Sint Eustatius and Saba have been disaggregated and displayed at the subnational level.
            </p>

          </div>
          <p><b>Weekend updates:</b> Starting 19 June 2021, daily counts of COVID-19 confirmed cases and deaths
            reported to WHO
            headquarters on Saturdays and Sundays will be updated on this dashboard on the following Monday.
            Furthermore,
            data from the Eastern Mediterranean Region are no long update on Fridays. Data will continue to be
            attributed
            to the day of initial reporting to avoid artificial spikes in case and death incidence. Given continued and
            increasing volatility in daily count data, we continue to encourage all users to prioritize weekly counts
            and
            long term trends (over several weeks) as a more reliable measure of COVID-19 epidemiological activity and
            trends within countries/territories/areas, and at regional and global levels. Saturday and Sunday daily case
            and death counts may continue to be accessed via WHO Regional Office dashboards until further notice (please
            see links under ‘Other Resources’ below).</p>
        </div>
        <div>
          <h1>Data Sources</h1>
          <h3>Case and death count data</h3>
          <div>
            <p>From the 31 December 2019 to the 21 March 2020, WHO collected the numbers of confirmed COVID-19 cases and
              deaths through official communications under the International Health Regulations (IHR, 2005),
              complemented
              by
              monitoring the official ministries of health websites and social media accounts. Since 22 March 2020,
              global
              data are compiled through WHO region-specific dashboards (see links below), and/or aggregate count data
              reported to WHO headquarters daily.</p>
            <p>
              Counts primarily reflect laboratory-confirmed cases and deaths, based upon WHO case definitions; although
              some
              departures may exist due to local adaptations. Counts include both domestic and repatriated cases. Case
              detection, definitions, testing strategies, reporting practice, and lag times (e.g. time to case
              notification,
              and time to reporting of deaths) differ between countries, territories and areas. These factors, amongst
              others, influence the counts presented with variable under or overestimation of true case and death
              counts,
              and variable delays to reflecting these data at a global level.
            </p>
            <p>All data represent date of reporting as opposed to date of symptom onset. All data are subject to
              continuous
              verification and may change based on retrospective updates to accurately reflect trends, changes in
              country
              case definitions and/or reporting practices. Significant data errors detected or reported to WHO may be
              corrected at more frequent intervals.</p>
            <p><b>New case and death counts:</b> Counts of new cases and deaths are calculated by subtracting previous
              cumulative
              total counts from the current count. These counts are updated incrementally throughout the day as more
              information becomes available. Daily new case and death counts are complete by 23:59 CET/CEST each day.
              Due
              to
              differences in reporting methods, cut-off times, retrospective data consolidation and reporting delays,
              the
              number of new cases may not always reflect daily totals published by individual countries, territories or
              areas. Due to the recent trend of countries conducting data reconciliation exercises which remove large
              numbers of cases or deaths from their total counts, such data may reflect as negative numbers in the new
              cases
              / new deaths counts as appropriate. This will aid users in identifying when such adjustments occur. When
              additional details become available that allow the subtractions to be suitably apportioned to previous
              days,
              data will be updated accordingly.</p>
            <p>
              <b>Current day counts, global epidemic curves and trends:</b> Due to the incremental updates to the
              dashboard,
              global
              case and death counts visualized for the current day may reflect partial data until counts have been fully
              updated for all regions that day. This must be taken into consideration when interpreting global epidemic
              curves and trends.
            </p>
            <p>
              <b>Time stamps and updates:</b> Time/date stamps reflect when the data was last updated by WHO. Due to the
              time
              required to process and validate the incoming data, there is a delay between reporting to WHO and the
              update
              of the dashboard. To account for different time zones across WHO Regions and data transmission methods,
              and
              improve the timeliness of data availability, updates to the global dashboard are applied three times per
              day.
            </p>
            <p>
              Counts and corrections made after these times will be carried forward to the next reporting cycle for that
              specific region. Delayed reporting for any specific country, territory or area may result in pooled counts
              for
              multiple days being presented, with a retrospective update to counts on previous days to accurately
              reflect
              trends. Significant data errors detected or reported to WHO may be corrected at more frequent intervals.
            </p>
            <p><b>Other:</b> cases and deaths reported from international conveyances, included in global totals but not
              reflected
              in epidemiological curves as not associated with a country or region.</p>
            <p><b>Rates:</b> &lt;0.001 per 100,000 population may be rounded to 0.</p>
          </div>

        </div>
        <div>
          <h1>Vaccination data</h1>
          <p>We aim to provide weekly updates on vaccine introduction and administration by countries, territories and
            areas. These data are pooled from numerous sources, including direct reports from Member States, WHO review
            of
            publicly available official data, or data collated and published by third-party sites such as Our World in
            Data. Data published by third-party sites have not been validated by WHO, and WHO cannot comment on accuracy
            or completeness. Differences in counts are expected compared to other sources due to different inclusion
            criteria and data cut-off times.

            Total administered doses, people vaccinated with at least one dose, and people fully vaccinated are
            cumulative
            totals since the start of vaccination in the respective country, through the latest data update. Total
            administered doses refers to single doses, and may not equal the total number of people vaccinated,
            depending
            on the specific dose regime (individuals receive multiple doses). Total doses administered per 100
            population
            may exceed 100, for example when over half of the population receives both required vaccine doses under a
            two
            dose regime. Rates &lt;0.001 per 100 population may be rounded to 0. Where multiple vaccines are used in a
            country/territory/area, the start date displayed is equivalent to start date of the first vaccine
            introduced. Suspensions (temporary or otherwise) of vaccination rollout are not taken into consideration.
            The mention of specific companies or of certain manufacturers' vaccine products does not imply that they are
            endorsed or recommended by the WHO in preference to others of a similar nature that are not mentioned. Apart
            from limited exceptions, the names of proprietary products are distinguished by initial capital letters.
          </p>
        </div>
        <div>
          <h1>Population data</h1>
          <span>Estimated populations and projections are drawn from:</span>
          <ul class=" py-2 text-xs">
            <li class=" py-1">
              United Nations, Department of Economic and Social Affairs, Population Division. World Population Prospects
              2019, Online Edition. Rev. 1 (2020 projections). <a
                href="https://population.un.org/wpp/Download/Standard/Population/" target="_blank">Available
                online.</a>
            </li>
            <li class=" py-1">
              Eurostat. “Demo_pjan” (population as of 1 January by country, year, age and gender; last updated by
              Eurostat
              on 2021-02-12; last year of data: 2020). <a
                href="https://ec.europa.eu/eurostat/estat-navtree-portlet-prod/BulkDownloadListing?dir=data&sort=1&sort=2&start=d"
                target="_blank">Available
                online.</a>
            </li>
            <li class=" py-1">
              National Statistics Office Malta. <a
                href="https://nso.gov.mt/en/News_Releases/Documents/2020/07/News2020_114.xls" target="_blank">Available
                online.</a>
            </li>
            <li class=" py-1">
              The Government of the Pitcairn Islands. <a href="http://www.pitcairn.pn/" target="_blank">Available
                online.</a>
            </li>
            <li class=" py-1">
              Statistics Netherlands (CBS). Estimates of population for Bonaire, Sint Eustatius and Saba. <a
                href="https://opendata.cbs.nl/statline/#/CBS/en/dataset/83698ENG/table?ts=1605093337813"
                target="_blank">Available
                online.</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios"
import dayjs from "dayjs"
import { titleCase } from "title-case"
export default {
  data() {
    return {
      HospitalInformationObjects: [],
    }
  },
  async created() {
    await axios({
      method: 'get',
      url: 'https://covid19-api-philippines.herokuapp.com/api/facilities/',
      headers: {
      }
    }).then(response => {
      let HospitalArray = response.data.data
      console.log(HospitalArray);
      let DigosListStatus = []
      DigosListStatus.push(HospitalArray[302], HospitalArray[318], HospitalArray[338], HospitalArray[473], HospitalArray[730], HospitalArray[1162])
      console.log(DigosListStatus);
      let DigosListNames = []
      DigosListNames.push(HospitalArray[302].cf_name, HospitalArray[318].cf_name, HospitalArray[338].cf_name, HospitalArray[473].cf_name, HospitalArray[730].cf_name, HospitalArray[1162].cf_name)
      DigosListNames = DigosListNames.map(temp => titleCase(temp));
      DigosListNames[1] = 'Digos Doctors Hospital, Inc.'
      DigosListNames[4] = 'Medical Center of Digos Cooperative Hospital (MCDC)'
      console.log(DigosListNames);
      const CompleteDigosHospitalInformation = DigosListNames.map((id, index) => {
        let hospitalInformation = {}
        hospitalInformation.name = DigosListNames[index]
        hospitalInformation.confinedAsymptomatic = DigosListStatus[index].conf_asym
        hospitalInformation.confinedDied = DigosListStatus[index].conf_crit
        hospitalInformation.confinedSevere = DigosListStatus[index].conf_mild
        hospitalInformation.discharged = DigosListStatus[index].conf_severe
        hospitalInformation.confinedMild = DigosListStatus[index].discharged
        hospitalInformation.dateUpdated = dayjs(DigosListStatus[index].updated_date).format('dddd, MMMM D, YYYY')
        return hospitalInformation
      })
      console.log(CompleteDigosHospitalInformation);
      this.HospitalInformationObjects = CompleteDigosHospitalInformation
      console.log(this.HospitalInformationObjects);
    })
  }
}
</script>

<style scoped>
h1 {
  @apply text-xl font-bold mb-3;
}

h3 {
  @apply font-bold mb-2;
}

p {
  @apply text-justify mb-3 text-xs leading-relaxed;
}

a {
  /* @apply text-slate-500 font-bold no-underline hover:underline ease-in-out duration-1000; */
}

div {
  @apply mb-5;
}
</style>