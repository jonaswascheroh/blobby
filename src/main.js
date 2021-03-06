import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/tailwind.css';
import Vuelidate from 'vuelidate';
import VueMeta from 'vue-meta';
import SmoothPicker from 'vue-smooth-picker';
import 'vue-smooth-picker/dist/css/style.css';
import vClickOutside from 'v-click-outside';

var dataLayer = dataLayer || [];
require('typeface-open-sans');

Vue.use(SmoothPicker);
Vue.use(Vuelidate);
Vue.use(vClickOutside);
Vue.use(VueMeta, {
  // optional pluginOptions
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
