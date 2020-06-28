/************** vue-chart.js ***************/
/*
See : https://github.com/apertureless/vue-chartjs
Available charts :
- Bar
- Line
- Doughnut
- Pie
- Radar
- Polarea
- Bubble
- Scatter
*/


import { Doughnut, mixins } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}