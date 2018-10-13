<template>
      <div id="capture2" class="wrapper wrapper-content">
        <div class="animated fadeInRightBig">
      <div class="row">
        <div class="col-lg-2">
          <div >
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>Collected</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.statAll.valueOf()}}</h1>
              <div class="stat-percent font-bold text-success">100% <i class="fa fa-bolt"></i></div>
              <small>Total profiles:</small>
            </div>
          </div>
        </div>
          <div>
            <div class="ibox float-e-margins">
              <div class="ibox-title">
                <h5>LinkedIn</h5>
              </div>
              <div class="ibox-content">
                <h1 class="no-margins">{{ this.statLinkedin.valueOf()}}</h1>
                <div class="stat-percent font-bold text-success">{{Math.round(( statLinkedin.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)}}%</div>
                <small>Total profiles:</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div>
              <div class="ibox float-e-margins">
                <div class="ibox-title">
                  <h5>International</h5>
                </div>
                <div class="ibox-content">
                  <h1 class="no-margins">{{ this.statAllInt.valueOf()}}</h1>
                  <div class="stat-percent font-bold text-success">{{Math.round(( statAllInt.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)}}%</div>
                  <small>Total profiles:</small>
                </div>
              </div>
            </div>
          <div>
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>DoYouBuzz</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.statDoyoubuzz.valueOf()}}</h1>
              <div class="stat-percent font-bold text-success">{{Math.round(( statDoyoubuzz.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)}}%</div>
              <small>Total profiles:</small>
            </div>
          </div>
        </div>
        </div>
        <div class="col-lg-2">
          <div>
            <div class="ibox float-e-margins">
              <div class="ibox-title">
                <h5>Tunisian</h5>
              </div>
              <div class="ibox-content">
                <h1 class="no-margins">{{ this.statAllTun.valueOf()}}</h1>
                <div class="stat-percent font-bold text-success">{{Math.round(( statAllTun.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)}}%</div>
                <small>Total profiles:</small>
              </div>
            </div>
          </div>
          <div>
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>Viadeo</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.statViadeo.valueOf()}}</h1>
              <div class="stat-percent font-bold text-success">{{Math.round(( statViadeo.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)}}%</div>
              <small>Total profiles:</small>
            </div>
          </div>
        </div>
        </div>
        <div class="col-lg-6">
          <div class="ibox-title">
            <h5>Number of profiles added every 3 seconds</h5>
          </div>
          <div class="ibox-content">
          <main-chart-example />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>The Experience of each function</h5>
            </div>
            <div class="ibox-content">
              <radar-example/>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <h5>Integrator and Ingeneering BI</h5>
          </div>
          <div class="ibox-content">
            <h1 class="no-margins">{{ this.IntegraterAndBiTunisian.valueOf() }}</h1>
            <div class="progress progress-mini">
              <div :style="{width: Math.round(( IntegraterAndBiTunisian.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)+'%'}" class="progress-bar"></div>
            </div>
            <div class="m-t-sm small">Tunisian profiles</div>
          </div>
        </div>
      </div>
        <div class="col-lg-3">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>Integrator and Ingeneering BI</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.IntegraterAndBiInternational.valueOf() }}</h1>
              <div class="progress progress-mini">
                <div :style="{width: Math.round(( IntegraterAndBiInternational.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)+'%'}" class="progress-bar progress-bar-danger"></div>
              </div>
              <div class="m-t-sm small">International profiles</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>Developper</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.DevelopperTunisian.valueOf() }}</h1>
              <div class="progress progress-mini">
                <div :style="{width: Math.round(( DevelopperTunisian.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)+'%'}" class="progress-bar"></div>
              </div>
              <div class="m-t-sm small">Tunisian profiles</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>Developper</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.DevelopperInternational.valueOf() }}</h1>
              <div class="progress progress-mini">
                <div :style="{width: Math.round(( DevelopperInternational.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)+'%'}" class="progress-bar progress-bar-danger"></div>
              </div>
              <div class="m-t-sm small">International profiles</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>Consultant</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.ConsultantTunisian.valueOf() }}</h1>
              <div class="progress progress-mini">
                <div :style="{width: Math.round(( ConsultantTunisian.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)+'%'}" class="progress-bar"></div>
              </div>
              <div class="m-t-sm small">Tunisian profiles</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>Consultant</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.ConsultantInternational.valueOf() }}</h1>
              <div class="progress progress-mini">
                <div :style="{width: Math.round(( ConsultantInternational.valueOf()* 100 )/ statAll.valueOf()).toFixed(0)+'%'}" class="progress-bar progress-bar-danger"></div>
              </div>
              <div class="m-t-sm small">International profiles</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-9">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>The Locations</h5>
            </div>
            <div class="ibox-content">
              <gmap-map :center="center" :zoom="4" style="width: 100%; height: 500px">
                <gmap-marker :key="index" v-for="(m, index) in markers" :position="m" :clickable="true" :draggable="false" @click="center=m"></gmap-marker>
              </gmap-map>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
        <div class="ibox">
          <div class="ibox-content">
            <h5>Profiles in Tunisia</h5>
            <h2>{{ this.locationTun.valueOf() }}%</h2>
            <div class="progress progress-mini">
              <div :style="{width: Math.round(( locationTun.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)+'%'}" class="progress-bar"></div>
            </div>
            <div class="stat-percent font-bold text-navy">{{ this.locationTun.valueOf() }} profiles</div>
            <small>Total income</small>
          </div>
        </div>
      </div>
        <div class="col-lg-3">
          <div class="ibox">
            <div class="ibox-content">
              <h5>Profiles outside of Tunisia</h5>
              <h2>{{ this.locationInt.valueOf() }}%</h2>
              <div class="progress progress-mini">
                <div :style="{width: Math.round(( locationInt.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)+'%'}" class="progress-bar progress-bar-danger"></div>
              </div>
              <div class="stat-percent font-bold text-navy">{{ this.locationInt.valueOf() }} profiles</div>
              <small>Total income</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ibox">
            <div class="ibox-content">
              <h5>Gender Male</h5>
              <h1 class="no-margins">{{ this.nbrMale.valueOf() }}</h1>
              <div class="progress progress-mini">
                <div :style="{width: Math.round(( nbrMale.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)+'%'}" class="progress-bar"></div>
              </div>
              <div class="stat-percent font-bold text-navy">{{Math.round(( nbrMale.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)}}%</div>
              <small>Total income</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ibox">
            <div class="ibox-content">
              <h5>Gender Female</h5>
              <h1 class="no-margins"> {{ this.nbrFemale.valueOf() }}</h1>
              <div class="progress progress-mini">
                <div :style="{width: Math.round(( nbrFemale.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)+'%'}" class="progress-bar progress-bar-danger"></div>
              </div>
              <div class="stat-percent font-bold text-danger">{{Math.round(( nbrFemale.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)}}%</div>
              <small>Total income</small>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div >
          <div class="ibox-content">
            <div>
              <div>
                <span>Profiles that have experience under 3 years</span>
                <small class="pull-right">{{Math.round(( ExpDebutant.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)}}%</small>
              </div>
              <div class="progress progress-small">
                <div :style="{width: Math.round(( ExpDebutant.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)+'%'}" class="progress-bar"></div>
              </div>
            </div>
          </div>
        </div>
          <div style="margin-bottom: 1.75%"></div>
          <div >
            <div class="ibox-content">
              <div>
                <div>
                  <span>Profiles that have experience between 3 and 5 years</span>
                  <small class="pull-right">{{Math.round(( ExpMedium.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)}}%</small>
                </div>
                <div class="progress progress-small">
                  <div :style="{width: Math.round(( ExpMedium.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)+'%'}" class="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-bottom: 1.75%"></div>
          <div >
            <div class="ibox-content">
              <div>
                <div>
                  <span>Profiles that have experience between 5 and 7 years</span>
                  <small class="pull-right">{{Math.round(( ExpMedium1.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)}}%</small>
                </div>
                <div class="progress progress-small">
                  <div :style="{width: Math.round(( ExpMedium1.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)+'%'}" class="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-bottom: 1.75%"></div>
          <div >
            <div class="ibox-content">
              <div>
                <div>
                  <span>Profiles that have experience between 7 and 10 years</span>
                  <small class="pull-right">{{Math.round(( ExpMedium2.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)}}%</small>
                </div>
                <div class="progress progress-small">
                  <div :style="{width: Math.round(( ExpMedium2.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)+'%'}" class="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-bottom: 1.75%"></div>
          <div >
            <div class="ibox-content">
              <div>
                <div>
                  <span>Profiles that have experience higher than 10 years</span>
                  <small class="pull-right">{{Math.round(( ExpPro.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)}}%</small>
                </div>
                <div class="progress progress-small">
                  <div :style="{width: Math.round(( ExpPro.valueOf()* 100 )/ statAll.valueOf()).toFixed(2)+'%'}" class="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>About the functions</h5>
            </div>
            <div class="ibox-content">
              <pie-example/>
            </div>
          </div>
        </div>

      </div>
        <button @click="print">Print these results</button>
        <download-excel
          class   = "btn btn-default"
          :data   = "json_data"
          :fields = "json_fields"
          :meta   = "json_meta"
          name    = "ActualStat.xls">
          Download Excel
        </download-excel>
      </div>
    </div>
</template>


<script>
  import axios from 'axios'
  import schedule from 'node-schedule'
  import RadarExample from './charts/RadarExample'
  import MainChartExample from './charts/MainChartExample'
  import LineExample from './charts/LineExample'
  import PieExample from './charts/PieExample'
  import html2pdf  from 'html2pdf.js'
  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'
  import JsonExcel from 'vue-json-excel';

  Vue.component('downloadExcel', JsonExcel);
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
      libraries: 'places'
    }
  })

  export default {
    name: 'dashboard',
    components: {
      RadarExample,
      PieExample,
      LineExample,
      MainChartExample
    },
    data: function () {
      return {
        selected: 'Month',
        statAll: 0,
        statAllTun: 0,
        statAllInt: 0,
        statViadeo: 0,
        statDoyoubuzz: 0,
        statLinkedin: 0,
        nbrMale: 0,
        nbrFemale: 0,
        listeProfiles: [],
        gender: '',
        IntegraterAndBiTunisian: 0,
        IntegraterAndBiInternational: 0,
        DevelopperTunisian: 0,
        DevelopperInternational: 0,
        ConsultantInternational: 0,
        ConsultantTunisian: 0,
        ExpDebutant: 0,
        ExpMedium: 0,
        ExpMedium1: 0,
        ExpMedium2: 0,
        ExpPro: 0,
        center: {lat: 36.8064948, lng: 10.181531599999971},
        markers: [],
        locationTun: 0,
        locationInt: 0,
        response: '',
        listeStat: [],
        json_fields : {
          "statAll": "statAll",
          "statAllTun": "statAllTun",
          "statAllInt": "statAllInt",
          "statDoyoubuzz": "statDoyoubuzz",
          "statLinkedin": "statLinkedin",
          "statViadeo": "statViadeo",
          "nbrMale": "nbrMale",
          "nbrFemale": "nbrFemale",
          "IntegraterAndBiTunisian": "IntegraterAndBiTunisian",
          "IntegraterAndBiInternational": "IntegraterAndBiInternational",
          "DevelopperTunisian": "DevelopperTunisian",
          "DevelopperInternational": "DevelopperInternational",
          "ConsultantInternational": "ConsultantInternational",
          "ConsultantTunisian": "ConsultantTunisian",
          "ExpDebutant": "ExpDebutant",
          "ExpMedium": "ExpMedium",
          "ExpMedium1": "ExpMedium1",
          "ExpMedium2": "ExpMedium2",
          "ExpPro": "ExpPro",
          "locationTun": "locationTun",
          "locationInt": "locationInt",
          "DatePush": "DatePush"
        },
        json_data : [],
        json_meta: [
          [{
            "key": "charset",
            "value": "utf-8"
          }]
        ]
      }
    },
    created: function () {
      this.refreshData()
      setInterval(function () {this.nbrFemale = 0; this.nbrMale = 0; this.refreshData() }.bind(this), 60000)
      schedule.scheduleJob('59 59 23 * * *', () => { this.refreshData(); setTimeout(60000); this.sendData() })
    },
    methods: {
      print () {
        var doc = document.getElementById('capture2')
        html2pdf(doc);
      },
      sendData () {
        let data = {
          statAll: this.statAll,
          statAllTun: this.statAllTun,
          statAllInt: this.statAllInt,
          statDoyoubuzz: this.statDoyoubuzz,
          statLinkedin: this.statLinkedin,
          statViadeo: this.statViadeo,
          nbrMale: this.nbrMale,
          nbrFemale: this.nbrFemale,
          IntegraterAndBiTunisian: this.IntegraterAndBiTunisian,
          IntegraterAndBiInternational: this.IntegraterAndBiInternational,
          DevelopperTunisian: this.DevelopperTunisian,
          DevelopperInternational: this.DevelopperInternational,
          ConsultantInternational: this.ConsultantInternational,
          ConsultantTunisian: this.ConsultantTunisian,
          ExpDebutant: this.ExpDebutant,
          ExpMedium: this.ExpMedium,
          ExpMedium1: this.ExpMedium1,
          ExpMedium2: this.ExpMedium2,
          ExpPro: this.ExpPro,
          locationTun: this.locationTun,
          locationInt: this.locationInt
        }
        axios.post('http://localhost:3003/reporting/AddStatisticsPerWeek', data)
          .then((response) => {console.log(response)}).catch(error => {console.log(error)})
      },
      refreshData () {
        axios.get('http://localhost:3003/stats/')
          .then(response => { this.statAll = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatTun')
          .then(response => { this.statAllTun = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatInt')
          .then(response => { this.statAllInt = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatViadeo')
          .then(response => { this.statViadeo = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatDoyoubuzz')
          .then(response => { this.statDoyoubuzz = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatLinkedin')
          .then(response => { this.statLinkedin = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/ExpDebutant')
          .then(response => { this.ExpDebutant = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/ExpMedium')
          .then(response => { this.ExpMedium = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/ExpMedium1')
          .then(response => { this.ExpMedium1 = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/ExpMedium2')
          .then(response => { this.ExpMedium2 = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/ExpPro')
          .then(response => { this.ExpPro = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/getAllProfiles')
          .then(response => {
          this.listeProfiles = response.data
             for(var i =0;i< this.listeProfiles.length;i = i+1)
             {
               axios.get('https://api.namsor.com/onomastics/api/json/gender/' + this.listeProfiles[i].name + '/' + this.listeProfiles[i].name)
                 .then(response => {
                 this.gender = response.data
               if (this.gender.gender === 'female') { this.nbrFemale = this.nbrFemale + 1 } else { this.nbrMale = this.nbrMale + 1 }
             })
             }


      }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatByFunctionBIandIntegraterInternational')
          .then(response => { this.IntegraterAndBiInternational = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatByFunctionBIandIntegraterTunisian')
          .then(response => { this.IntegraterAndBiTunisian = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatByFunctionDevelopperInternational')
          .then(response => { this.DevelopperInternational = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatByFunctionDevelopperTunisian')
          .then(response => { this.DevelopperTunisian = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatByFunctionConsultantInternational')
          .then(response => { this.ConsultantInternational = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/StatByFunctionConsultantTunisian')
          .then(response => { this.ConsultantTunisian = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/latlon')
          .then(response => { this.markers = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/LocationTun')
          .then(response => { this.locationTun = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/stats/LocationInt')
          .then(response => { this.locationInt = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/reporting/AllStat')
          .then(response => { this.listeStat = response.data; this.json_data = response.data;
          this.json_data.push({"statAll": this.statAll,
          "statAllTun": this.statAllTun,
          "statAllInt": this.statAllInt,
          "statDoyoubuzz": this.statDoyoubuzz,
          "statLinkedin": this.statLinkedin,
          "statViadeo": this.statViadeo,
          "nbrMale": this.nbrMale,
          "nbrFemale": this.nbrFemale,
          "IntegraterAndBiTunisian": this.IntegraterAndBiTunisian,
          "IntegraterAndBiInternational": this.IntegraterAndBiInternational,
          "DevelopperTunisian": this.DevelopperTunisian,
          "DevelopperInternational": this.DevelopperInternational,
          "ConsultantInternational": this.ConsultantInternational,
          "ConsultantTunisian": this.ConsultantTunisian,
          "ExpDebutant": this.ExpDebutant,
          "ExpMedium": this.ExpMedium,
          "ExpMedium1": this.ExpMedium1,
          "ExpMedium2": this.ExpMedium2,
          "ExpPro": this.ExpPro,
          "locationTun": this.locationTun,
          "locationInt": this.locationInt,
            "DatePush": "Today"}) }).catch(e => { this.errors.push(e)})
      }
    }
  }
</script>
