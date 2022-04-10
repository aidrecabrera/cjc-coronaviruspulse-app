<template>
  <div>  </div>
</template>

<script>
import axios from 'axios'
export default {
  setup() {


    return {}
  },
  // COVID-19 Data Summary
  async created() {
    const { data } = await axios.get('https://covid19-api-philippines.herokuapp.com/api/summary');
    console.log(data)
  }
}
</script>
<style lang="scss" scoped>
</style>