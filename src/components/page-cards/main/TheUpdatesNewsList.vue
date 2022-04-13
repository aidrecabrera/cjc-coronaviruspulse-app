<template>
  <main>
    <div>
      <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
        <div
          class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
          <!-- News Article Card -->

          <div v-for="item in this.RetrievedJSON" :key="item.id">
            <div>
              <div class=" grid overflow-hidden grid-cols-2 grid-rows-3 grid-flow-col gap-2">
                <div id="info" class="row-span-3 box bg-slate-500">
                  <img v-bind:src="item.media" alt="">
                </div>
                <div id="imgContainer" class="row-span-1 box bg-pink-700">
                  <h1 class="p-5">
                    {{ item.title }}
                  </h1>
                </div>
                <div id="imgContainer" class="row-span-2 box bg-pink-700">
                  <div class="p-2 grid overflow-hidden grid-cols-1 grid-rows-2">
                    <div class="p-5 row-span-1 bg-slate-300 box">datePublishedParsed
                      <span>{{ item.summary }}</span>
                    </div>
                    <div class="p-5 row-span-2 bg-slate-700 box">
                      <span>{{ item.author }}</span>
                      <span v-for="dateArticle in DataWdatePublishedParsed" :key="dateArticle.id">{{
                        dateArticle.published_date
                      }}</span>
                      <div>
                        {{ item.title }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
        <!-- Column Content -->
      </div>

      <div
        class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
        <!-- Column Content -->
      </div>

      <div
        class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
        <!-- Column Content -->
      </div>

      <div
        class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
        <!-- Column Content -->
      </div>

      <div
        class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
        <!-- Column Content -->
      </div>
    </div>
  </main>
</template>

<script>
/*
id: '',
      title: '',
      author: '',
      authors: '',
      published_date: '',
      published_date_precision: '',
      excerpt: '',
      link: '',
      clean_url: '',
      summary: '',
      topic: '',
      media: '',
      _score: '',
*/
import dayjs from "dayjs";
import axios from "axios";
export default {
  data() {
    return {
      id: [],
      title: [],
      author: [],
      authors: [],
      DataWdatePublishedParsed: [],
      excerpt: [],
      link: [],
      summary: [],
      topic: [],
      media: [],
      RetrievedJSON: [],
      parsedArticles: []
    }
  },
  async created() {
    await axios({
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {
        q: '((COVID-19 Vaccination) || (COVID-19)) && (Philippines || World Health Organization || Department of Health)',
        lang: 'en',
        sort_by: 'relevancy',
        page: '1',
      },
      headers: {
        //'x-api-key': 'idjeGtEPBWHUTVvKQp4KBpysFnXdJTiKO8PmKwQdJbM'
      }
    }).then(response => {
      this.RetrievedJSON = response.data.articles;
      this.DataWdatePublishedParsed = dayjs(RetrievedJSON.articles).format('dddd, MMMM D, YYYY, h:mm A')
      // console.log(response.data.articles[0]);
      console.log(response.data.articles[0].title);
      console.log(response.data.articles[0].author);
      console.log(response.data.articles[0].link);
      console.log(response.data.articles[0].summary);
      // console.log(this.RetrievedJSON);
      // this.id = response.data.articles.data.id
      // this.title = response.data.articles.data.title
      // this.author = response.data.articles.data.author
      // this.authors = response.data.articles.data.authors
      // this.published_date = response.data.articles.data.published_date
      // this.excerpt = response.data.articles.data.excerpt
      // this.link = response.data.articles.data.link
      // this.summary = response.data.articles.data.summary
      // this.topic = response.data.articles.data.topic
      // this.media = response.data.articles.data.media
      // console.log(this.id)
      // console.log(this.title)
      // console.log(this.author)
      // console.log(this.authors)
      // console.log(this.published_date)
      // console.log(this.excerpt)
      // console.log(this.link)
      // console.log(this.summary)
      // console.log(this.topic)
      // console.log(this.media)
      this.cards = response.data.articles.map(article => ({
        title: article.title,
        author: article.author,
        urlToImage: article.urlToImage,
        flex: 6,
      }))
    })
  }
}

</script>

<style lang="scss" scoped>
</style>
