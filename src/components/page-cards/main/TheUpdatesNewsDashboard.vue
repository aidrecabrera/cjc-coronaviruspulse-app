<template>
  <main class="" style="background-color: #2c8a8d;">
    <div>
      <!-- Headline -->
      <div class="mb-7 mx-72">
        <div class="py-5 pt-20 my-b ">
          <h1 class=" my-2  text-black font-sans font-extrabold text-7xl">COVID-19 Updates</h1>
          <p class=" text-white pt-2 font-sans tracking-normal text-2xl">Get the latest COVID-19 related news and
            updates from various
            media
            outlets.
          </p>
        </div>
        <hr>
      </div>

      <!-- <article class="my-7 p-10 bg-white mx-72 hover:bg-amber-100 duration-700 ease-in-out">
      <div class="grid grid-rows-1 grid-flow-col">
        <div class=" pb-5 col-span-2">
          <h5 @click="navTo(MainArticleJSON.link)" class="leading-tight cursor-pointer text-5xl font-bold text-red">
            {{
              MainArticleJSON.title
            }}</h5>
        </div>
        <div class="item row-span-1 col-span-2">
          <p class=" text-ellipsis text-justify font-medium text-gray-700 ">{{
            MainArticleJSON.summary
          }}</p>
          <h1 class=" pt-5 font-bold text-black"> {{ MainArticleJSON.published_date }} ago</h1>
        </div>

        <div class=" align-top ml-10 row-span-2 col-span-1 w-144">
          <img class="object-cover" v-bind:src="MainArticleJSON.media" alt="">
        </div>
      </div>
    </article> -->

      <!-- List Articles -->

      <div class=" pb-10 ">
        <article v-for="(listArticleInfo, index) in this.ListArticleJSON"
          class="my-7 p-10 hover:border-1 border hover:border-black border-transparent bg-white mx-72 hover:bg-amber-100 duration-700 ease-in-out">
          <div class="grid grid-rows-1 grid-flow-col">
            <div class=" pb-5 col-span-2">
              <h5 @click="navTo(listArticleInfo.link)" class="leading-tight cursor-pointer text-5xl font-bold text-red">
                {{
                  listArticleInfo.title
                }}</h5>
            </div>
            <div class="item row-span-1 col-span-2">
              <p class=" text-ellipsis text-justify font-medium text-gray-700 ">{{
                listArticleInfo.summary
              }}</p>
              <h1 class=" pt-5 font-bold text-black"> {{ listArticleInfo.published_date }} ago</h1>
            </div>

            <div class=" align-top ml-10 row-span-2 col-span-1 w-144">
              <img class="object-cover" v-bind:src="listArticleInfo.media" :key="index" alt="">
            </div>
          </div>
        </article>
      </div>

      <!-- <div v-for="(info, index) in this.ListArticleJSON" class="box"><a href="#"
        class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class=" ml-5 object-cover w-72 h-full rounded-xl" :src="info.media" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{ info.title }} </h5>
          <p class=" mb-3 font-bold text-gray-700 dark:text-gray-400"> {{ ListArticleJSON.published_date }} </p>
          <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400"> </p>
        </div>
      </a>
    </div> -->

      <!-- <div class=" mx-72">
      <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">

      </div>
    </div>

    <div class="grid overflow-hidden grid-cols-2 auto-rows-auto gap-2 w-full">
      <div class="box">
        <div
          class="my-3 px-3 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
          <div v-for="(info, index) in this.ListArticleJSON" class="box"><a href="#"
              class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class=" ml-5 object-cover w-72 h-full rounded-xl" :src="info.media" alt="">
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{ info.title }}
                </h5>
                <p class=" mb-3 font-bold text-gray-700 dark:text-gray-400"> {{ ListArticleJSON.published_date }} </p>
                <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400"> </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div> -->


    </div>
  </main>

</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
import relativeTime from "dayjs/plugin/relativeTime";
export default {
  data() {
    return {
      MainArticleJSON: [],
      ListArticleJSON: [
        {
          "title": "Use of the Janssen (Johnson & Johnson) COVID-19 Vaccine",
          "author": "Sara E. Oliver",
          "published_date": "2022-04-13 05:15:00",
          "published_date_precision": "timezone unknown",
          "link": "https://www.medscape.com/viewarticle/967164",
          "clean_url": "medscape.com",
          "excerpt": "Review the latest recommendations from the ACIP on use of the Johnson & Johnson COVID-19 vaccine.",
          "summary": "On February 27, 2021, the Food and Drug Administration (FDA) issued an Emergency Use Authorization (EUA) for the adenovirus-vectored COVID-19 vaccine (Janssen Biotech, Inc., a Janssen Pharmaceutical company, Johnson & Johnson), and on February 28, 2021, the Advisory Committee on Immunization Practices (ACIP) issued an interim recommendation for its use as a single-dose primary vaccination in persons aged ≥18 years.[1,2] On April 13, 2021, CDC and FDA recommended a pause in the use of Janssen COVID-19 vaccine after reports of thrombosis with thrombocytopenia syndrome (TTS), a rare condition characterized by low platelets and thrombosis, including at unusual sites such as the cerebral venous sinus (cerebral venous sinus thrombosis [CVST]), after receipt of the vaccine.",
          "rights": "medscape.com",
          "rank": 708,
          "topic": "news",
          "country": "US",
          "language": "en",
          "authors": [
            "Sara E. Oliver",
            "Md",
            "Megan Wallace",
            "Drph",
            "Isaac See",
            "Sarah Mbaeyi",
            "Monica Godfrey",
            "Mph",
            "Stephen C. Hadler",
            "Tara C. Jatlaoui"
          ],
          "media": "https://img.medscape.com/thumbnail_library/Social_Facebook_806x806.jpg",
          "is_opinion": false,
          "twitter_account": "@Medscape",
          "_score": 17.587986,
          "_id": "95a05ba6c9902621245a420368f52662"
        },
        {
          "title": "Is It Safe To Get COVID-19 Vaccine With Other Vaccines?",
          "author": "Dr. Adrian Wong",
          "published_date": "2022-04-09 03:11:30",
          "published_date_precision": "full",
          "link": "https://www.techarp.com/science/other-vaccine-covid-19-vaccines/",
          "clean_url": "techarp.com",
          "excerpt": "Can you get vaccinated with the COVID-19 vaccine, and other vaccines? Or should you space them out? Find out what's the latest CDC advice!",
          "summary": "Your doctor may have told you that the COVID-19 vaccine cannot be given with other vaccinations, but that's NO LONGER TRUE!\nFind out why it is safe to take your COVID-19 vaccine with other vaccines at the same time! Earlier : Avoid COVID-19 Vaccine Within 2 Weeks Of Other Vaccines\nThe US FDA approved the Pfizer mRNA vaccine for 12- to 15-year old children (with 100% efficacy!) on 10 May 2021.\nAt that time, the US CDC recommended avoiding taking the COVID-19 vaccine within two weeks of other vaccinations.",
          "rights": "techarp.com",
          "rank": 29526,
          "topic": "news",
          "country": "MY",
          "language": "en",
          "authors": [
            "Dr. Adrian Wong"
          ],
          "media": "https://www.techarp.com/wp-content/uploads/2021/05/COVID-19-vaccine-and-other-vaccines.jpg",
          "is_opinion": false,
          "twitter_account": "@TechARP",
          "_score": 17.43327,
          "_id": "c266206ab376fa8d598a09c54c0149c1"
        },
        {
          "title": "Study explores myopericarditis incidence and COVID-19 vaccination",
          "author": null,
          "published_date": "2022-04-13 12:30:00",
          "published_date_precision": "timezone unknown",
          "link": "https://www.news-medical.net/news/20220413/Study-explores-myopericarditis-incidence-and-COVID-19-vaccination.aspx",
          "clean_url": "news-medical.net",
          "excerpt": "Researchers investigated the impact of COVID-19 vaccination on the incidence of myopericarditis.",
          "summary": "In a recent study published in The Lancet Respiratory Medicine journal, researchers investigated the impact of coronavirus disease 2019 (COVID-19) vaccination on the incidence of myopericarditis.\n\nBackground\n\nStudies have reported several cases of myopericarditis after COVID-19 vaccination in adolescents and young adults. However, there is insufficient knowledge regarding the mechanism of pathogenesis of myopericarditis post-COVID-19 vaccination.\n\nAbout the study\n\nIn the present meta-analysis, the researchers compared the presentation of myopericarditis after COVID-19 vaccination to that after vaccination against other diseases such as influenza, smallpox, and mixed infections.",
          "rights": "news-medical.net",
          "rank": 1616,
          "topic": "news",
          "country": "GB",
          "language": "en",
          "authors": [],
          "media": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_710677_16498499181555953.jpg",
          "is_opinion": false,
          "twitter_account": "@NewsMedical",
          "_score": 17.365206,
          "_id": "1af48498a3a18ea7def23736df584602"
        },
        {
          "title": "Data points to Increased Mortality of the Vaccinated: Canada and Israel Are Suffering from \"A Pandemic of the Fully Vaccinated\"",
          "author": "Arsenio Toledo",
          "published_date": "2022-04-08 13:38:06",
          "published_date_precision": "full",
          "link": "https://www.globalresearch.ca/data-canada-israel-suffering-from-pandemic-fully-vaccinated/5776870",
          "clean_url": "globalresearch.ca",
          "excerpt": "All Global Research articles can be read in 51 languages by activating the 'Translate Website' drop down menu on the top banner of our home page (Desktop version). To receive Global Research's Daily…",
          "summary": "All Global Research articles can be read in 51 languages by activating the 'Translate Website' drop down menu on the top banner of our home page (Desktop version).\nTo receive Global Research's Daily Newsletter (selected articles), click here.\nVisit and follow us on Instagram, Twitter and Facebook. Feel free to repost and share widely Global Research articles.\n***\nWhat this article confirms is that there is a wave of hospitalizations and deaths of the vaccinated\nThe so-called Covid deaths statistics are erroneous and misleading.",
          "rights": "Global Research. Centre for Research on Globalization (CRG). Montreal, 2012",
          "rank": 2490,
          "topic": "news",
          "country": "CA",
          "language": "en",
          "authors": [
            "Arsenio Toledo"
          ],
          "media": "https://www.globalresearch.ca/wp-content/uploads/2021/10/covid-vaccine.png",
          "is_opinion": false,
          "twitter_account": null,
          "_score": 17.32706,
          "_id": "32b728c29952ac66dcf53d3e7337edb4"
        },
        {
          "title": "Myopericarditis following COVID-19 vaccination is rare, finds international study",
          "author": null,
          "published_date": "2022-04-11 22:30:01",
          "published_date_precision": "full",
          "link": "https://medicalxpress.com/news/2022-04-myopericarditis-covid-vaccination-rare-international.html",
          "clean_url": "medicalxpress.com",
          "excerpt": "The overall risk of myopericarditis following COVID-19 vaccination is very low, affecting 18 people per million vaccine doses. A new study published in The Lancet Respiratory Medicine, confirms that…",
          "summary": "Credit: Pixabay/CC0 Public Domain \nThe overall risk of myopericarditis following COVID-19 vaccination is very low, affecting 18 people per million vaccine doses. A new study published in The Lancet Respiratory Medicine, confirms that this risk is comparable to or lower following COVID-19 vaccination than other non-COVID-19 vaccines. The researchers examined international databases, looking at more than 400 million vaccination doses, to compare the risk of myopericarditis following vaccination against COVID-19 and other diseases such as influenza and smallpox.",
          "rights": "medicalxpress.com",
          "rank": 1697,
          "topic": "news",
          "country": "GB",
          "language": "en",
          "authors": [],
          "media": "https://scx2.b-cdn.net/gfx/news/hires/2021/covid-19-vaccine.jpg",
          "is_opinion": false,
          "twitter_account": null,
          "_score": 17.312689,
          "_id": "094f43b7cb2b9ee6ff27d73661da3df1"
        },
        {
          "title": "COVID-19 vaccines and reports of menstrual disorders",
          "author": null,
          "published_date": "2022-04-12 01:15:00",
          "published_date_precision": "timezone unknown",
          "link": "https://www.news-medical.net/news/20220411/COVID-19-vaccines-and-reports-of-menstrual-disorders.aspx",
          "clean_url": "news-medical.net",
          "excerpt": "A new study estimates the potential relationship between COVID-19 vaccines and menstrual disorders.",
          "summary": "As of April 11, 2022, almost 500 million individuals around the world have been infected with the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), of which over 6.2 million people have died.\n\nStudy: COVID-19 vaccine and Menstrual conditions in female: data analysis of the Vaccine Adverse Event Reporting System. Image Credit: Prostock-studio / Shutterstock.com\n\nBackground\n\nSafe and effective vaccines against the coronavirus disease 2019 (COVID-19) are considered long-term solutions to gain control of the current pandemic.",
          "rights": "news-medical.net",
          "rank": 1953,
          "topic": "news",
          "country": "GB",
          "language": "en",
          "authors": [],
          "media": "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_710472_16497042443496728.jpg",
          "is_opinion": false,
          "twitter_account": "@NewsMedical",
          "_score": 17.284801,
          "_id": "f018a118a3da3b6e779b676b3c384517"
        },
        {
          "title": "Overall Risk of Myopericarditis Low After COVID-19 Vaccine",
          "author": "Physician S Briefing Staff",
          "published_date": "2022-04-12 15:03:21",
          "published_date_precision": "full",
          "link": "https://consumer.healthday.com/overall-risk-of-myopericarditis-not-increased-after-covid-19-vaccine-2657132380.html",
          "clean_url": "healthday.com",
          "excerpt": "Overall incidence of myopericarditis does not differ significantly for those receiving COVID-19 vaccines versus non-COVID-19 vaccines",
          "summary": "TUESDAY, April 12, 2022 (HealthDay News) -- Myopericarditis is rare following COVID-19 vaccination, with an overall incidence not differing significantly for those receiving COVID-19 vaccines or non-COVID-19 vaccines, according to a review published online April 11 in The Lancet Respiratory Medicine.Ryan Ruiyang Ling, from the Yong Loo Lin School of Medicine in Singapore, and colleagues conducted a systematic review and meta-analysis to examine the incidence of myocarditis following vaccination. Data were included from 22 studies, with 405,272,721 vaccine doses.",
          "rights": "healthday.com",
          "rank": 5772,
          "topic": "news",
          "country": "US",
          "language": "en",
          "authors": [
            "Physician S Briefing Staff",
            "Steven Reinberg",
            "Amy Norton"
          ],
          "media": "https://consumer.healthday.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yOTM4OTIyMC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY3NTgwMDMyOH0.s_cLTbCY2J_k5t2JZAM7KoouzLJlQ8X7FodlhE3mO70/image.jpg?width=1200&coordinates=0%2C560%2C0%2C560&height=600",
          "is_opinion": false,
          "twitter_account": "@",
          "_score": 17.261192,
          "_id": "0b737977fa8579e7901ddae759784242"
        },
        {
          "title": "Risk of heart inflammation after Covid-19 vaccination found to be very low, says new study",
          "author": null,
          "published_date": "2022-04-12 01:00:00",
          "published_date_precision": "full",
          "link": "https://www.straitstimes.com/singapore/risk-of-heart-inflammation-after-covid-19-vaccination-found-to-be-very-low-says-new-study",
          "clean_url": "straitstimes.com",
          "excerpt": "It affects just 18 people per million vaccine doses. . Read more at straitstimes.com.",
          "summary": "SINGAPORE - The overall risk of heart inflammation following Covid-19 vaccination has been found to be very low, affecting just 18 people per million vaccine doses.\nA new study published in The Lancet Respiratory Medicine confirms that the risk of myopericarditis - a condition that causes inflammation of the heart muscle - following Covid-19 vaccination is comparable to or lower than the risk following non-Covid-19 vaccinations.\nThe study was led by researchers in Singapore, namely Dr Kollengode Ramanathan, a senior consultant from the department of cardiac, thoracic and vascular surgery at the National University Heart Centre, Singapore.",
          "rights": "straitstimes.com",
          "rank": 1203,
          "topic": "science",
          "country": "ID",
          "language": "en",
          "authors": [],
          "media": "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2022/04/12/AK_sgvax_120422.jpg?VersionId=BGZrZ7DPP_5giMGL.fu6y92p4bSAP6sZ",
          "is_opinion": false,
          "twitter_account": "@straits_times",
          "_score": 17.258493,
          "_id": "b4eac155d9ba25e91a4c1d622ea9e3d5"
        },
        {
          "title": "Myopericarditis after COVID-19 vaccination: unexpected but not unprecedented",
          "author": "Margaret Ryan",
          "published_date": "2022-04-12 01:30:00",
          "published_date_precision": "timezone unknown",
          "link": "https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(22)00091-1/abstract",
          "clean_url": "thelancet.com",
          "excerpt": "In the midst of the devastating COVID-19 pandemic, rapid development of highly effective vaccines was enthusiastically welcomed. Unfortunately, myopericarditis after COVID-19 vaccination was an…",
          "summary": "In the midst of the devastating COVID-19 pandemic, rapid development of highly effective vaccines was enthusiastically welcomed. Unfortunately, myopericarditis after COVID-19 vaccination was an unanticipated adverse event. In The Lancet Respiratory Medicine, Ryan Ruiyang Ling and colleagues commendably review the risk of this adverse event in the context of risk after other vaccines. Their study provides an important perspective on the historical global experience with cardiac adverse events after vaccination.",
          "rights": "thelancet.com",
          "rank": 445,
          "topic": "news",
          "country": "GB",
          "language": "en",
          "authors": [
            "Margaret Ryan",
            "Immunization Healthcare Division",
            "Defense Health Agency",
            "Falls Church",
            "Va",
            "University Of California San Diego",
            "San Diego",
            "Ca",
            "Jay Montgomery",
            "Walter Reed National Military Medical Center"
          ],
          "media": "https://els-jbs-prod-cdn.jbs.elsevierhealth.com/pb-assets/Lancet/lanres/ogImg-1592318608477.png",
          "is_opinion": false,
          "twitter_account": null,
          "_score": 17.246456,
          "_id": "72c5fb37c5d46029b6c2090222f2365f"
        },
        {
          "title": "Risk of myopericarditis following COVID-19 vaccination is very low, confirms study",
          "author": null,
          "published_date": "2022-04-13 05:30:00",
          "published_date_precision": "timezone unknown",
          "link": "https://www.news-medical.net/news/20220413/Risk-of-myopericarditis-following-COVID-19-vaccination-is-very-low-confirms-study.aspx",
          "clean_url": "news-medical.net",
          "excerpt": "The overall risk of myopericarditis following COVID-19 vaccination is very low, affecting 18 people per million vaccine doses. A new study published in The Lancet Respiratory Medicine, confirms that…",
          "summary": "The overall risk of myopericarditis following COVID-19 vaccination is very low, affecting 18 people per million vaccine doses. A new study published in The Lancet Respiratory Medicine, confirms that this risk is comparable to or lower following COVID-19 vaccination than other non-COVID-19 vaccines.\n\nThe researchers examined international databases, looking at more than 400 million vaccination doses, to compare the risk of myopericarditis following vaccination against COVID-19 and other diseases such as influenza and smallpox.",
          "rights": "news-medical.net",
          "rank": 1616,
          "topic": "news",
          "country": "GB",
          "language": "en",
          "authors": [],
          "media": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Respiratory-620x480.jpg",
          "is_opinion": false,
          "twitter_account": "@NewsMedical",
          "_score": 17.211273,
          "_id": "6701ebad4c6ad3419f2d69633686edd9"
        },
        {
          "title": "Heart inflammation following Covid vaccination rare: Lancet",
          "author": "Shriparna Saha",
          "published_date": "2022-04-12 10:58:38",
          "published_date_precision": "full",
          "link": "https://www.financialexpress.com/lifestyle/health/heart-inflammation-following-covid-vaccination-rare-lancet/2489390/",
          "clean_url": "financialexpress.com",
          "excerpt": "The research confirms that the risk of myopericarditis is comparable to or lower following COVID-19 vaccination than other non-COVID-19 vaccines.",
          "summary": "The overall risk of myopericarditis — a condition that causes inflammation of the heart muscles — following COVID-19 vaccination is very low, affecting 18 people per million vaccine doses, according to a study published in The Lancet Respiratory Medicine journal. The research confirms that the risk of myopericarditis is comparable to or lower following COVID-19 vaccination than other non-COVID-19 vaccines. The team analysed international databases, looking at over 400 million vaccination doses, to compare the risk of myopericarditis following vaccination against COVID-19 and other diseases such as influenza and smallpox.",
          "rights": "financialexpress.com",
          "rank": 2591,
          "topic": "news",
          "country": "IN",
          "language": "en",
          "authors": [
            "Shriparna Saha"
          ],
          "media": "https://www.financialexpress.com/wp-content/uploads/2022/04/heart-attack-afp-620x400-1.jpeg",
          "is_opinion": false,
          "twitter_account": "@FinancialXpress",
          "_score": 17.204643,
          "_id": "1665ab2ce840e1898d6f7e519826b8d8"
        },
        {
          "title": "Can You Test Positive for COVID-19 After Your Booster?",
          "author": "Rachael Zimlich",
          "published_date": "2022-04-08 13:58:00",
          "published_date_precision": "full",
          "link": "https://www.healthline.com/health/can-you-test-positive-for-covid-after-booster",
          "clean_url": "healthline.com",
          "excerpt": "A booster shot won't cause you to test positive, but you could still get COVID-19 after receiving a booster. Find out what your test means and what to do.",
          "summary": "The development of vaccines against COVID-19 has played a big role in helping reduce the number of new COVID-19 cases. But the time is approaching when a first dose isn't enough anymore.Booster shots are common with many vaccines and can help your immune system develop added protection against a virus. COVID-19 vaccine boosters are recommended for just about everyone roughly 5 months after the first series of vaccinations is complete.According to the Centers for Disease Control and Prevention (CDC), almost 82 percent of people ages 5 and up in the United States have received at least one dose of a COVID-19 vaccine, and nearly 66 percent of the total U.",
          "rights": "healthline.com",
          "rank": 380,
          "topic": "science",
          "country": "US",
          "language": "en",
          "authors": [
            "Rachael Zimlich",
            "Rn"
          ],
          "media": "https://post.healthline.com/wp-content/uploads/2022/04/holding-positive-covid-test-732-549-feature-thumb-732x549.jpg",
          "is_opinion": false,
          "twitter_account": "@healthline",
          "_score": 17.200634,
          "_id": "0b71cd863c83aa66eb7bf53da2dbacb3"
        },
        {
          "title": "More than 17.47cr Covid-19 vaccine doses available with States, UTs: Centre",
          "author": null,
          "published_date": "2022-04-10 07:30:00",
          "published_date_precision": "timezone unknown",
          "link": "https://www.dnaindia.com/india/report-more-than-1747cr-covid-19-vaccine-doses-available-with-states-uts-centre-2945218",
          "clean_url": "dnaindia.com",
          "excerpt": "More than 17.47cr Covid-19 vaccine doses available with States, UTs: Centre - The new phase of universalisation of Covid-19 vaccination commenced on 21 June 2021.",
          "summary": "More than 17.47 crore balanced and unutilized coronavirus vaccine doses are still available with the Indian states and Union Territories (UTs), informed the Ministry of Health and Family Welfare, in its official statement on Sunday. \"More than 188.55 crore (1,88,55,67,715) vaccine doses have been provided to States/UTs so far through the Government of India (free of cost channel) and through direct state procurement category,\" said the ministry. Read more: Covid-19 update: India logs 1,054 fresh cases, 29 more deaths \"More than 17.",
          "rights": "dnaindia.com",
          "rank": 3103,
          "topic": "news",
          "country": "IN",
          "language": "en",
          "authors": [],
          "media": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/04/10/1405020-covid-vaccine.jpg",
          "is_opinion": false,
          "twitter_account": "@dna",
          "_score": 17.200113,
          "_id": "acaf7c296de779184252733cb3d9c187"
        },
        {
          "title": "covid 19: Over 17.47 crore Covid-19 vaccine doses available with States, UTs: Centre",
          "author": "Ani",
          "published_date": "2022-04-10 07:15:00",
          "published_date_precision": "timezone unknown",
          "link": "https://timesofindia.indiatimes.com/india/over-17-47-crore-covid-19-vaccine-doses-available-with-states-uts-centre/articleshow/90757755.cms",
          "clean_url": "indiatimes.com",
          "excerpt": "India News: NEW DELHI: More than 17.",
          "summary": "NEW DELHI: More than 17.47 crore balanced and unutilized coronavirus vaccine doses are still available with the Indian states and Union Territories (UTs), informed the Ministry of Health and Family Welfare, in its official statement on Sunday.\"More than 188.55 crore (1,88,55,67,715) vaccine doses have been provided to States/UTs so far through the Government of India (free of cost channel) and through direct state procurement category,\" said the ministry.\"More than 17.47 Crore (17,47,01,726) balance and unutilized Covid Vaccine doses are still available with the States/UTs to be administered,\" it added.",
          "rights": "indiatimes.com",
          "rank": 325,
          "topic": "news",
          "country": "IN",
          "language": "en",
          "authors": [
            "Ani"
          ],
          "media": "https://static.toiimg.com/thumb/msid-90757744,width-1070,height-580,imgsize-48018,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "is_opinion": false,
          "twitter_account": "@timesofindia",
          "_score": 17.181122,
          "_id": "f3df06e198511b481aeaf46b4d005f3a"
        },
        {
          "title": "Heart inflammation following Covid vaccination rare: Lancet study",
          "author": null,
          "published_date": "2022-04-12 11:58:38",
          "published_date_precision": "full",
          "link": "https://www.hindustantimes.com/lifestyle/health/heart-inflammation-following-covid-vaccination-rare-lancet-study-101649764364242.html",
          "clean_url": "hindustantimes.com",
          "excerpt": "The research confirms that the risk of myopericarditis is comparable to or lower following COVID-19 vaccination than other non-COVID-19 vaccines.",
          "summary": "The overall risk of myopericarditis -- a condition that causes inflammation of the heart muscles -- following COVID-19 vaccination is very low, affecting 18 people per million vaccine doses, according to a study published in The Lancet Respiratory Medicine journal. (Also read: Doctor reveals why heart attacks are commonly seen in women)The research confirms that the risk of myopericarditis is comparable to or lower following COVID-19 vaccination than other non-COVID-19 vaccines.The team analysed international databases, looking at over 400 million vaccination doses, to compare the risk of myopericarditis following vaccination against COVID-19 and other diseases such as influenza and smallpox.",
          "rights": "hindustantimes.com",
          "rank": 1187,
          "topic": "news",
          "country": "IN",
          "language": "en",
          "authors": [],
          "media": "https://images.hindustantimes.com/img/2022/04/12/1600x900/0306653a-b90a-11ec-98b6-3c446ddc2d1a_1649621351385_1649764446846.jpg",
          "is_opinion": false,
          "twitter_account": "@httweets",
          "_score": 17.176981,
          "_id": "34e8518865d2887941dd0940140a37e8"
        },
        {
          "title": "Heart inflammation following Covid vaccination rare: Lancet study",
          "author": "Pti",
          "published_date": "2022-04-12 09:45:00",
          "published_date_precision": "timezone unknown",
          "link": "https://timesofindia.indiatimes.com/world/rest-of-world/heart-inflammation-following-covid-vaccination-rare-lancet-study/articleshow/90796587.cms",
          "clean_url": "indiatimes.com",
          "excerpt": "Rest of World News: SINGAPORE: The overall risk of myopericarditis -- a condition that causes inflammation of the heart muscles -- following Covid-19 vaccination is very .",
          "summary": "SINGAPORE: The overall risk of myopericarditis -- a condition that causes inflammation of the heart muscles -- following Covid-19 vaccination is very low, affecting 18 people per million vaccine doses, according to a study published in The Lancet Respiratory Medicine journal The research confirms that the risk of myopericarditis is comparable to or lower following Covid-19 vaccination than other non-Covid-19 vaccines.The team analysed international databases, looking at over 400 million vaccination doses, to compare the risk of myopericarditis following vaccination against Covid-19 and other diseases such as influenza and smallpox.",
          "rights": "indiatimes.com",
          "rank": 325,
          "topic": "world",
          "country": "IN",
          "language": "en",
          "authors": [
            "Pti"
          ],
          "media": "https://static.toiimg.com/thumb/msid-90796584,width-1070,height-580,imgsize-26896,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "is_opinion": false,
          "twitter_account": "@timesofindia",
          "_score": 17.171057,
          "_id": "5f208cff9f2e534552403fe518833d73"
        },
        {
          "title": "Overall Risk of Myopericarditis Low After COVID-19 Vaccine",
          "author": null,
          "published_date": "2022-04-12 20:03:00",
          "published_date_precision": "full",
          "link": "https://www.doctorslounge.com/index.php/news/pb/108598",
          "clean_url": "doctorslounge.com",
          "excerpt": "Overall incidence of myopericarditis does not differ significantly for those receiving COVID-19 vaccines versus non-COVID-19 vaccines",
          "summary": "Back to Journal Articles\n\nOverall Risk of Myopericarditis Low After COVID-19 Vaccine\n\nOverall incidence of myopericarditis does not differ significantly for those receiving COVID-19 vaccines versus non-COVID-19 vaccines Share | Comments: (0) Tell-a-Friend\n\nTUESDAY, April 12, 2022 (HealthDay News) -- Myopericarditis is rare following COVID-19 vaccination, with an overall incidence not differing significantly for those receiving COVID-19 vaccines or non-COVID-19 vaccines, according to a review published online April 11 in The Lancet Respiratory Medicine.",
          "rights": "Copyright 2017",
          "rank": 16559,
          "topic": "news",
          "country": "unknown",
          "language": "en",
          "authors": [],
          "media": "https://consumer.healthday.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yOTM4OTIyMC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY3NTgwMDMyOH0.s_cLTbCY2J_k5t2JZAM7KoouzLJlQ8X7FodlhE3mO70/image.jpg?width=180&coordinates=373%2C0%2C373%2C0&height=135",
          "is_opinion": false,
          "twitter_account": null,
          "_score": 17.161148,
          "_id": "8890c201b1aaf4a2175603f64b427d5a"
        },
        {
          "title": "COVID-19 vaccines for children and teens",
          "author": null,
          "published_date": "2022-04-12 01:30:00",
          "published_date_precision": "timezone unknown",
          "link": "https://menafn.com/1103995480/COVID-19-vaccines-for-children-and-teens&source=27",
          "clean_url": "menafn.com",
          "excerpt": "ATLANTA, USA, (CDC) – COVID-19 can make children and teens of any age very sick and sometimes requires treatment in a hospital",
          "summary": "(MENAFN- Caribbean News Global)\n\nATLANTA, USA, (CDC) – COVID-19 can make children and teens of any age very sick and sometimes requires treatment in a hospital.\n\nHelp protect children ages 5 years and older, especially from severe disease, hospitalization, or death by getting them vaccinated against COVID-19. Getting eligible children and teens vaccinated against COVID-19 can help keep them:\n\nFrom getting really sick if they do get COVID-19\n\nIn school or daycare\n\nSafely participating in sports, playdates, and other group activities\n\nThere is no way to tell in advance how children or teens will be affected by COVID-19.",
          "rights": "menafn.com",
          "rank": 7126,
          "topic": "news",
          "country": "US",
          "language": "en",
          "authors": [],
          "media": "https://menafn.com/updates/pr/2022-04/11/CNG_2ac22image_story.jpg",
          "is_opinion": false,
          "twitter_account": null,
          "_score": 17.158934,
          "_id": "5bbd20f38778816b5020c7fb5ac27729"
        },
        {
          "title": "4,023 Fetal Deaths Now Recorded in VAERS Following COVID-19 Vaccines as US Appeals Court Reinstates Vaccine Mandate for Federal Workers",
          "author": "Brian-Admin",
          "published_date": "2022-04-09 20:51:16",
          "published_date_precision": "full",
          "link": "https://healthimpactnews.com/2022/4023-fetal-deaths-now-recorded-in-vaers-following-covid-19-vaccines-as-us-appeals-court-reinstates-vaccine-mandate-for-federal-workers/",
          "clean_url": "healthimpactnews.com",
          "excerpt": "The U.S. Government's Vaccine Adverse Events Reporting System (VAERS) was updated yesterday (April 8, 2022) and another 100+ cases were added this past week where an unborn child died after their…",
          "summary": "by Brian Shilhavy\nEditor, Health Impact News\nThe U.S. Government's Vaccine Adverse Events Reporting System (VAERS) was updated yesterday (April 8, 2022) and another 100+ cases were added this past week where an unborn child died after their mother received a COVID-19 vaccine, bringing the total now to 4,023 fetal deaths following COVID-19 vaccines for the past 16 months. (Source.)\n\nBy way of contrast, there were 2,238 recorded deaths of unborn babies in VAERS for the 30 years (360 months) prior to the authorizations of the COVID-19 vaccines in December of 2020, following all FDA-approved vaccines combined during that time period.",
          "rights": "healthimpactnews.com",
          "rank": 19619,
          "topic": "news",
          "country": "US",
          "language": "en",
          "authors": [
            "Brian-Admin"
          ],
          "media": "https://healthimpactnews.com/wp-content/uploads/sites/2/2022/04/4023-fetal-deaths-vaers.jpg",
          "is_opinion": false,
          "twitter_account": null,
          "_score": 17.145044,
          "_id": "62a2aac5726ece1b0990d1461a0d5bfd"
        },
        {
          "title": "No, the COVID-19 vaccines do not contain ‘HIV lipid wrappers'",
          "author": "April",
          "published_date": "2022-04-12 17:50:13",
          "published_date_precision": "full",
          "link": "https://www.politifact.com/factchecks/2022/apr/12/facebook-posts/no-covid-19-vaccines-do-not-contain-hiv-lipid-wrap/",
          "clean_url": "politifact.com",
          "excerpt": "Since the first COVID-19 vaccines became available to the public in late 2020, people have falsely claimed that all sort",
          "summary": "Facebook post, April 10, 2022\nPolitiFact, The COVID-19 vaccines do not contain aluminum, March 22, 2021 \nPolitiFact, No evidence of ‘graphene oxide' that's ‘toxic' in Pfizer COVID-19 vaccine, July 8, 2021 \nPolitiFact, No, these magnet videos don't prove the COVID-19 vaccines contain microchips, May 17, 2021 \nPolitiFact, COVID-19 vaccines do not contain HIV, Feb. 14, 2022  \nU.S. Food & Drug Administration, Comirnaty and Pfizer-BioNTech COVID-19 Vaccine, Updated March 29, 2022\nU.S. Food & Drug Administration,  VACCINE INFORMATION FOR MODERNA COVID-19 VACCINE,  Updated March 29, 2022\nU.",
          "rights": "politifact.com",
          "rank": 2058,
          "topic": "business",
          "country": "US",
          "language": "en",
          "authors": [
            "April"
          ],
          "media": "https://static.politifact.com/politifact/rulings/tom_ruling_pof.png",
          "is_opinion": false,
          "twitter_account": "PolitiFact",
          "_score": 17.14475,
          "_id": "04f58798352718835dac03d8305b2cef"
        }
      ],
    }
  },
  // NewsAPI
  async created() {
    await axios({
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {
        q: '(((COVID-19) || (Vaccination)) -BBM -UniTeam -Jinggoy -Marcos)',
        lang: 'en',
        sort_by: 'relevancy',
        countries: 'PH',
        page: "25",
        page_size: "25",
      },
      headers: {
        //'x-api-key': 'toIzlMTAZVFDwzritj0ILnH1e1O1471htDcWCnlHjdw'
      }
    }).then(response => {
      this.MainArticleJSON = response.data.articles[0];
      let dateParsing = response.data.articles[0].published_date;
      dayjs.extend(relativeTime);
      let dateParsed = dayjs(dateParsing).fromNow('h');
      this.MainArticleJSON.published_date = dateParsed;

      this.ListArticleJSON = response.data.articles;
      let dateParsingList = response.data.articles.published_date;
      dayjs.extend(relativeTime);
      let dateParsedList = dayjs(dateParsingList).fromNow('h');
      this.ListArticleJSON.published_date = dateParsedList;
      console.log(dateParsedList);
      console.log(this.ListArticleJSON.published_date);
      this.ListArticleJSON.splice(0, 1);
      console.log(this.ListArticleJSON);
      // console.log(this.MainArticleJSON);
      // console.log(this.ListArticleJSON);
    })
  },
  methods: {
    navTo(url) {
      window.open(url);
    },
  }
}
</script>


<style lang="scss" scoped>
</style>