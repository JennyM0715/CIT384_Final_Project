import Vue from 'vue'
import App from './App.vue'
import router from './router'

//import Bootstrap and BootstrapVue css files:
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


//register BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(ModalPlugin)

//Alternatively you can import Bootstrap and BootstrapVue scss files in a custom SCSS file:
//import 'node_modules/bootstrap/scss/bootstrap';
//import 'node_modules/bootstrap-vue/src/index.scss';


//Make sure to import the custom.scss file in your app entry point:
//import './custom.scss'
import './css/main.css'




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
