<template>
  <main class=" color " style=" background-color: #0D1321;">
    <div>
      <!-- Headline -->
      <div class="mb-7 mx-72">
        <div class="py-5 pt-20 my-b ">
          <h1 class=" my-2  text-white font-sans font-extrabold text-7xl">COVID-19 Updates</h1>
          <p class=" text-white pt-2 font-sans tracking-normal text-2xl">Get the latest COVID-19 related news and
            updates from various
            media
            outlets.
          </p>
        </div>
        <hr>
      </div>

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
      ListArticleJSON: [],
    }
  },
  // NewsAPI
  async created() {
    await axios({
      method: 'GET',
      // url: 'https://api.newscatcherapi.com/v2/search',
      url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
      // params: {
      //   q: 'covid',
      //   lang: 'en',
      //   sort_by: 'relevancy',
      //   countries: 'PH',
      //   page: "25",
      //   page_size: "25",
      // },
      // params: {
      //   q: 'covid',
      //   lang: 'en',
      //   media: 'True'
      // },
      // headers: {
      //   // 'x-api-key': 'toIzlMTAZVFDwzritj0ILnH1e1O1471htDcWCnlHjdw'
      //   'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com',
      //   'X-RapidAPI-Key': '219b425ab4msh2bb05f0b18c4f30p1057fdjsnc65dc852e2d7'
      // }
      params: {
        q: 'covid',
        lang: 'en',
        sort_by: 'relevancy',
        country: 'PH',
        media: 'True'
      },
      headers: {
        'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com',
        'X-RapidAPI-Key': '4654f7147bmsha14fefd6aba622ep12dcb9jsne9b3877e70a2'
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
      this.ListArticleJSON.splice(0, 1);
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