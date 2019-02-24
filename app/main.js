import Vue from 'nativescript-vue'
import HelloWorld from './components/HelloWorld'
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  render: h => h('frame', [h(HelloWorld)])
}).$start()
