import Vue from 'vue'
import App from './App.vue'
import router from './router'



//import Bootstrap and BootstrapVue css files:
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';



//register BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'


//VeeValidate is a plugin for Vue.js that
// allows you to validate input fields and display errors. 

//this is used for CONTACT.VUE and SIGNUP.VUE
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



//Make sure to import the custom.scss file in your app entry point:
//this holds majority of CSS edits for the .vue files but there are still some
//   CSS edits in indiviual .vue files
import './css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
