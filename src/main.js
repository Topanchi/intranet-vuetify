import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faTrashAlt, faEdit, faCheck, faEye, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret,faTrashAlt,faEdit, faCheck, faEye, faSignInAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
/*
import DatatableFactory from 'vuejs-datatable';
Vue.use(DatatableFactory);
 */

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


var firebase = require("firebase/app");

require("firebase/auth");
//require("firebase/database");
require("firebase/firestore");
//require("firebase/messaging");
//require("firebase/functions");

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDVbX9uVWE2ttWIZYYAA7ThP_DFFB47w38",
  authDomain: "ingemat-intranet.firebaseapp.com",
  databaseURL: "https://ingemat-intranet.firebaseio.com",
  projectId: "ingemat-intranet",
  storageBucket: "ingemat-intranet.appspot.com",
  messagingSenderId: "491597163222",
  appId: "1:491597163222:web:bf312be376b6b6ba"
};
  


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore()
export default firebaseApp.firestore()

Vue.config.productionTip = false


firebase.auth().onAuthStateChanged((user)=>{
  console.log(user);
  if(user){
    store.dispatch('detectarUsuario', {email:user.email, uid: user.uid})
  }else{
    store.dispatch('detectarUsuario', null)
  }

  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')

})