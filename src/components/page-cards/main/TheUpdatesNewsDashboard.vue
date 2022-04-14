<template>
  <div>
    <div>
      <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
        <div
          class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <!-- News Article Card -->
          News will be shown below
          <div>
            <article @click="navTo(article.link)">
              <div>
                <div class=" grid overflow-hidden grid-cols-2 grid-rows-3 grid-flow-col gap-2">
                  <header id="info" class="row-span-3 box bg-slate-500">
                    <img v-bind:src="MainArticleJSON.media">
                  </header>
                  <div id="imgContainer" class="row-span-1 box bg-pink-700">
                    <h1 class="p-5">
                      {{ MainArticleJSON.title }}
                    </h1>
                  </div>
                  <div id="imgContainer" class="row-span-2 box bg-pink-700">
                    <div class="p-2 grid overflow-hidden grid-cols-1 grid-rows-2">
                      <div class="p-5 row-span-1 bg-slate-300 box">
                        <span>{{ MainArticleJSON.summary }}</span>
                      </div>
                      <div class="p-5 row-span-2 bg-slate-700 box">
                        <span>{{ MainArticleJSON.author }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
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
import axios from "axios";
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
      this.MainArticleJSON = response.data.articles[1];
      this.ListArticleJSON = response.data.articles;
      this.ListArticleJSON.splice(0, 3);
      console.log(this.MainArticleJSON);
      console.log(this.ListArticleJSON);
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