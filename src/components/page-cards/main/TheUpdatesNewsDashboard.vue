<template>
  <div>
    <article class=" p-10 bg-white mx-72 hover:bg-amber-100 duration-700 ease-in-out">
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
    </article>

    <div
      class="grid overflow-hidden mx-72 grid-cols-2 grid-rows-2 gap-2 items-center place-content-center justify-center">
      <div class="box">
        <a href="#"
          class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div class="">
            <img class="" v-bind:src="MainArticleJSON.media" alt="">
          </div>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
              acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
      </div>
      <div v-for="(info, index) in this.ListArticleJSON" class="box"><a href="#"
          class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class=" ml-5 object-cover w-72 h-full rounded-xl" :src="info.media" alt="">
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{ info.title }} </h5>
            <p class=" mb-3 font-bold text-gray-700 dark:text-gray-400"> {{ ListArticleJSON.published_date }} </p>
            <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400"> </p>
          </div>
        </a></div>
    </div>

    <img v-for="image in images" :src="image.url" :alt="image.alt" />
    <div class=" grid grid-col-2">

    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
import relativeTime from "dayjs/plugin/relativeTime";
export default {
  data() {
    return {
      MainArticleJSON: [],
      ListArticleJSON: [],
    }
  },
  // NewsAPI
  async created() {
    await axios({
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {
        q: '((COVID-19) || (Vaccination))',
        lang: 'en',
        sort_by: 'relevancy',
        countries: 'PH',
        page: "25",
        page_size: "25",
      },
      headers: {
        'x-api-key': 'idjeGtEPBWHUTVvKQp4KBpysFnXdJTiKO8PmKwQdJbM'
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
      let dateParsedList = dayjs(dateParsing).fromNow('h');
      this.ListArticleJSON.published_date = dateParsedList;
      this.ListArticleJSON.splice(0, 1);
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