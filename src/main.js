import Vue from 'vue'
import App from './App.vue'
import router from './router'



//import Bootstrap and BootstrapVue css files:
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';



//register BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("en", en);

// Install VeeValidate components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
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
