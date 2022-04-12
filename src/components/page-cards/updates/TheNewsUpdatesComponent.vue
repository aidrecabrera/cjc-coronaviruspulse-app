<template>
  <main>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe quo deleniti quas blanditiis consequatur
      nulla commodi sit, reprehenderit, ducimus hic enim quod alias, quos ipsam veritatis repellendus esse qui?</h1>
    <div>
      <span> {{ RetrievedJSON }} </span>
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
import axios from "axios";
export default {
  data() {
    return {
      id: [],
      title: [],
      author: [],
      authors: [],
      published_date: [],
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
      console.log(response.data.articles[0]);
      console.log(response.data.articles[0].title);
      console.log(response.data.articles[0].author);
      console.log(response.data.articles[0].link);
      console.log(response.data.articles[0].summary);
      console.log(this.RetrievedJSON);
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
    })
  }
}
this.cards = response.data.articles.map(article => ({
  title: article.title,
  author: article.author,
  urlToImage: article.urlToImage,
  flex: 6,
}))
</script>

<style lang="scss" scoped>
</style>
