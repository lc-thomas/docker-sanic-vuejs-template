<template>
  <div id="app">
    <v-preloader v-if='loading'></v-preloader>
    <v-header></v-header>
    <div id='content'>
      <!--<transition name="custom-classes-transition" enter-active-class="animate__bounceIn" leave-active-class="animate__fadeOutDown">-->
      <transition name="custom-classes-transition" enter-active-class="animate__animated animate__fadeIn" leave-active-class="">
        <router-view v-if='!loading'/>
      </transition>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import {HTTP} from '@/libs/http-common.js'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-preloader': Preloader,
  },
  computed:{
    loading(){
      return this.$store.state.loading
    }
  },

  created(){
    HTTP.get('/api/env')
      .then(response => {
        document.title = `${response.data.env} - ${document.title}`
      })
      .catch(error => {
        this.$awn.warning("There was an issue contacting the API")
        console.log(error)
      })
  }

}
</script>

<style>
@import '~vue-awesome-notifications/dist/styles/style.css';
@import '~animate.css/animate.css';
</style>

<style lang='scss'>
@import '@/assets/style/main.scss';
@import '@/assets/style/keenui_extend.scss';
@import '@/assets/style/variables.scss';

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}

#content{
  width: 90%;
  min-height: calc(100% - 40px); 
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
}


</style>
