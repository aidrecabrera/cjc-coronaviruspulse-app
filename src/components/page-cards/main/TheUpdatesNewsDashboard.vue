<template>
  <div>
    <article class=" p-10 bg-white mx-72 my-0 hover:bg-amber-100 duration-700 ease-in-out">
      <div class="grid grid-rows-1 grid-flow-col">
        <div class=" col-span-2">
          <h5 @click="navTo(MainArticleJSON.link)"
            class=" pb-5 leading-tight cursor-pointer text-5xl font-bold text-red">
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

        <div class=" align-top ml-10 row-span-2 col-span-1 w-144 h-72">
          <img class="object-cover " v-bind:src="MainArticleJSON.media" alt="">
        </div>
      </div>
    </article>
    <div class="">

      <div
        class="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg bg-pink-700 flex flex-wrap justify-center center overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">



        <article class="px-72">
          <div>
            <div class=" grid overflow-hidden grid-cols-5 grid-rows-2 grid-flow-col gap-2">
              <div id="imgContainer" class="row-span-1 col-span-3 my-72 box bg-pink-700">
                <h1 @click="navTo(MainArticleJSON.link)" class=" font-extrabold text-5xl text-left p-5 cursor-pointer">
                  {{ MainArticleJSON.title }}
                </h1>
                <div>
                  <div id="imgContainer" class=" col-span-3 row-span-1 box bg-pink-700">
                    <div class="p-2 grid overflow-hidden grid-cols-1 grid-rows-2">
                      <div class="p-5 row-span-1 bg-slate-300 text-black text-justify text-ellipsis">
                        <span>{{ MainArticleJSON.summary }}</span>
                      </div>
                      <div class="p-5 row-span-2 bg-slate-700 box">
                        <span>{{ MainArticleJSON.author }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <header id="info" class=" h-1/2 flex-shrink col-span-3 row-span-2 object-cover bg-slate-500">
                <img class=" p-10" v-bind:src="MainArticleJSON.media">
              </header>
            </div>
          </div>
        </article>
      </div>

      <div
        class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
        <div
          class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <div v-for="ListItem in this.ListArticleJSON">
            <div>
              <div class=" grid overflow-hidden grid-cols-2 grid-rows-3 grid-flow-col gap-2">
                <div id="info" class="row-span-3 box bg-slate-500">
                  <img v-bind:src="ListItem.media" alt="">
                </div>
                <div id="imgContainer" class="row-span-1 box bg-pink-700">
                  <h1 class="p-5">
                    {{ ListItem.title }}
                  </h1>
                </div>
                <div id="imgContainer" class="row-span-2 box bg-pink-700">
                  <div class="p-2 grid overflow-hidden grid-cols-1 grid-rows-2">
                    <div class="p-5 row-span-1 bg-slate-300 box">
                      <span>{{ ListItem.summary }}</span>
                    </div>
                    <div class="p-5 row-span-2 bg-slate-700 box">
                      <span>{{ ListItem.author }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">

        </div>

        <div
          class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">

        </div>

        <div
          class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">

        </div>
      </div>
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
        q: 'COVID-19',
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
      this.MainArticleJSON = response.data.articles[17];
      let dateParsing = response.data.articles[23].published_date;
      dayjs.extend(relativeTime);
      let dateParsed = dayjs(dateParsing).fromNow('h');
      this.MainArticleJSON.published_date = dateParsed;
      this.ListArticleJSON = response.data.articles;
      this.ListArticleJSON.splice(0, 3);
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