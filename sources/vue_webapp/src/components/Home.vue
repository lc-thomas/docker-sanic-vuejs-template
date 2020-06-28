<template>
  <section>
    <h1>Components</h1>
    <h2>Libraries</h2>
    <span><a href="https://github.com/axios/axios">Axios (HTTP)</a></span>
    
    <h2>UI</h2>
    <span><a href="https://github.com/JosephusPaye/Keen-UI">Keen UI</a></span>
    <span><a href="https://material.io/resources/icons/?style=baseline">Google Material Icons</a></span>
    <span><a href="https://github.com/apertureless/vue-chartjs">vue-chart.js</a></span>
    <span><a href="https://animate.style/">animate.css</a></span>
    <h2>Examples</h2>
    <div id='examples'>
      <div>
        <v-doughnut class='chart' :chart-data=doughnut_data :options=doughnut_options></v-doughnut>
      </div>
      <div>
        <ui-button color='primary'>I'm a simple KeenUI Button</ui-button>
        <br/><br/>
        <ui-button color='accent' icon='done'>Button with icon</ui-button>
      </div>
      <div>
        <ui-select
          has-search
          label="Select multiple with search"
          multiple
          placeholder="Select some colours"
          :options="colours"
          v-model="selectedValues"
        ></ui-select>
      </div>
    </div>
    
    
  </section>
</template>

<script>
import Doughnut from '@/components/charts/Doughnut.js'

export default {
  name: 'home',
  
  components: {
    'v-doughnut': Doughnut,
  },

  data () {
    return {
      doughnut_data:{
        labels:['valeur 1', 'valeur 2'],
        datasets: [{
            backgroundColor: ["#5a9e6f", "#f48024"],
            data: [25,50],
          }
        ]
      },
      doughnut_options:{
        legend: {
          labels: {
            fontColor: this.$store.state.style['secondary-text-color']
          }
        }
      },
      colours: ['red', 'orange', 'blue', 'yellow'],
      selectedValues: '',
    }
  },

  methods: {
    buttonClicked(){
      this.$awn.success("Bouton cliqué - awesome notifications")
    }
  },

  mounted(){
    this.$awn.success("Merci pour votre visite.", {'labels': {'success': 'Bienvenue !'}})
  }

}
</script>

<style scoped>
span{
  display: block;
}
#examples{
  display: flex;
}
#examples > div{
  margin: 20px;
}
.chart{
  width: 200px;
}
</style>
