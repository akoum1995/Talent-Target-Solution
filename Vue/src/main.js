import Vue from 'vue'
import Job from './components/Job/CreateJob'
import JobList from './components/Job/ListJob'
import Profiles from './components/Profiles/Profils'
import App from './App.vue'
import VueRouter from 'vue-router'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import ToggleButton from 'vue-js-toggle-button'
import allProfiles from './components/profils/Profils'
import pinbored from './components/profils/pin_bored'
import Notifications from 'vue-notification'
import Chat from './components/Chat'
import Dashboard from './components/Dashboard'
import Reporting from './components/Reporting'

const routesArry = [
  { path: '/job/add',
    component:Job
  },
  { path: '/job/list',
    component:JobList
  },
  { path: '/job/profiles/:id',
    component:Profiles
  },
  { path: '/profiles/all',
    component:allProfiles
  },
  { path: '/profiles/pin',
    component:pinbored
  },{
    path: '/help',
    component: Chat
  },
  {
    path: '/evolution',
    component: Dashboard
  },
  {
    path: '/reporting',
    component: Reporting
  }
];

Vue.use(VueLodash, lodash);
Vue.use(require('vue-moment'));
Vue.use(ToggleButton);

Vue.use(ServerTable);
Vue.use(VueRouter);
Vue.use(Notifications);

Vue.filter('date', {
  read: function (val) {
    return formatDate(parseDate(val));
  },
  write: function (val, oldVal) {
    var d = parseDate(val);
    return d ? formatDate(d) : val
  }
});
const router = new VueRouter({
  mode:"hash",
  routes:routesArry
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

