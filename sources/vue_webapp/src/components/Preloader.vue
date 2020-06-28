<template>
  <div id='preloader'>
    <ui-preloader :show='loading'></ui-preloader>

    <!-- This is used to get scss variables values with javascript (eg: for vue-chart.js) -->
    <ul style='display:none'>
      <li id='primary-text-color'></li>
      <li id='secondary-text-color'></li>
      <li id='primary-bg-color'></li>
      <li id='secondary-bg-color'></li>
    </ul>

  </div>
</template>

<script>
export default {
  computed: {
    loading(){
      return this.$store.state.loading;
    }
  },
  methods: {
    loadScssVariables(){
      let elementVariables = {
        'primary-text-color': 'color',
        'secondary-text-color': 'color',
        'primary-bg-color': 'color',
        'secondary-bg-color': 'color',
      }
      for (const [k, v] of Object.entries(elementVariables)){
        this.$store.state.style[k] = getComputedStyle(document.querySelector(`#${k}`)).getPropertyValue(v);
      }
    }
  },
  mounted(){
    this.loadScssVariables()
    this.$store.dispatch('toggleLoading')
  }
}
</script>


<style lang='scss' scoped>
@import '@/assets/style/variables.scss';

#preloader{
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
  background-color: $primary-bg-color;
  color: $primary-text-color;
  font-size: 20pt;
}

#primary-text-color{color: $primary-text-color}
#secondary-text-color{color: $secondary-text-color}
#primary-bg-color{color: $primary-bg-color}
#secondary-bg-color{color: $secondary-bg-color}
</style>