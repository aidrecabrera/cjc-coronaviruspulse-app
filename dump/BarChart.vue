<!-- <script>
// COVID-19 Data Summary
name: 'BarChart',
  components: { Bar },
props: {
  chartId: {
    type: String,
      default: 'bar-chart'
  },
  datasetIdKey: {
    type: String,
      default: 'label'
  },
  width: {
    type: Number,
      default: 300
  },
  height: {
    type: Number,
      default: 100
  },
  cssClasses: {
      default: '',
      type: String
  },
  styles: {
    type: Object,
      default: () => { }
  },
  plugins: {
    type: Object,
      default: () => { }
  }
},
data() {
  return {
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{ data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }]
    },
    chartOptions: {
      responsive: true
    }
  }
}
</script> -->