<template>
  <div id="capture3" class="wrapper wrapper-content">
    <div class="animated fadeInRightBig">
      <div class="row">
        <div class="col-lg-3">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <span class="label label-primary pull-right">Today evolution</span>
              <h5>Collected profiles</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.statAll.valueOf() }}</h1>
              <div class="stat-percent font-bold text-navy">{{Math.round(( (statAll.valueOf() - allProfilesYesterday.valueOf() )* 100 )/ statAll.valueOf() ).toFixed(0)}}% <i class="fa fa-level-up"></i></div>
              <small>Total profiles</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <span class="label label-primary pull-right">Collected</span>
              <h5>Today's  added</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.statAll.valueOf() - this.allProfilesYesterday.valueOf() }}</h1>
              <small>Profiles collected</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <span class="label label-primary pull-right">Today evolution</span>
              <h5>Tunisian </h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.locationTun.valueOf() - this.nbrLocationTun.valueOf() }}</h1>
              <div class="stat-percent font-bold text-navy">{{Math.round(( (locationTun.valueOf() - nbrLocationTun.valueOf() )* 100 )/ locationTun.valueOf() ).toFixed(0)}}% <i class="fa fa-level-up"></i></div>
              <small>Total profiles: {{this.locationTun.valueOf()}}</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <span class="label label-primary pull-right">Tomorrow evolution</span>
              <h5>Tomorrow</h5>
            </div>
            <div class="ibox-content">
              <h1 class="no-margins">{{ this.prediction.valueOf().toFixed(0) }}</h1>
              <div class="stat-percent font-bold text-navy"> <i class="fa fa-level-up"></i></div>
              <small>Total profiles:{{Math.round( statAll.valueOf() + prediction.valueOf()).toFixed(0)}}</small>
            </div>
          </div>
        </div>
      </div>
      <div class="row">

    <div class="col-lg-12">
      <div class="ibox float-e-margins">
        <div class="ibox-title">
          <h5>Profiles function</h5>
        </div>
        <div class="ibox-content">
        <table>
          <thead>
          <tr>
            <th>Function</th>
            <th>Total collected</th>
            <th>Collected today</th>
            <th>Collected yesterday</th>
            <th>Evolution</th>
            <th>Prediction of tomorrow</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Integrater and engineer BI</td>
            <td>{{ this.IntegraterAndBiInternational.valueOf() + this.IntegraterAndBiTunisian.valueOf() }}</td>
            <td>{{ (this.IntegraterAndBiInternational.valueOf() + this.IntegraterAndBiTunisian.valueOf() ) - (this.nbrIntegraterAndBiTunisian.valueOf() + this.nbrIntegraterAndBiInternational.valueOf()) }}</td>
            <td>{{ this.nbrIntegraterAndBiTunisian.valueOf() + this.nbrIntegraterAndBiInternational.valueOf() }}</td>
            <td><div class="stat-percent font-bold text-navy">{{Math.round(( ((IntegraterAndBiInternational.valueOf() + IntegraterAndBiTunisian.valueOf() ) - (nbrIntegraterAndBiTunisian.valueOf() + nbrIntegraterAndBiInternational.valueOf()))* 100 )/ (IntegraterAndBiInternational.valueOf() + IntegraterAndBiTunisian.valueOf()) ).toFixed(0)}}% <i class="fa fa-level-up"></i></div></td>
            <td>{{ this.IntegraterAndBiInternational.valueOf() + this.IntegraterAndBiTunisian.valueOf() + this.predictionBi.valueOf() }}</td>
          </tr>
          <tr>
            <td> Consultants</td>
            <td>{{ this.ConsultantInternational.valueOf() + this.ConsultantTunisian.valueOf() }}</td>
            <td>{{ (this.ConsultantInternational.valueOf() + this.ConsultantTunisian.valueOf() ) - (this.nbrConsultantTunisian.valueOf() + this.nbrConsultantInternational.valueOf()) }}</td>
            <td>{{ this.nbrConsultantTunisian.valueOf() + this.nbrConsultantInternational.valueOf() }}</td>
            <td><div class="stat-percent font-bold text-navy">{{Math.round(( ((ConsultantInternational.valueOf() + ConsultantTunisian.valueOf() ) - (nbrConsultantTunisian.valueOf() + nbrConsultantInternational.valueOf()))* 100 )/ (ConsultantInternational.valueOf() + ConsultantTunisian.valueOf()) ).toFixed(0)}}% <i class="fa fa-level-up"></i></div></td>
            <td>{{ this.ConsultantInternational.valueOf() + this.ConsultantTunisian.valueOf() + this.predictionConsultants.valueOf() }}</td>
          </tr>
          <tr>
            <td>Developpers</td>
            <td>{{ this.DevelopperInternational.valueOf() + this.DevelopperTunisian.valueOf() }}</td>
            <td>{{ (this.DevelopperInternational.valueOf() + this.DevelopperTunisian.valueOf() ) - (this.nbrDevelopperInternational.valueOf() + this.nbrDevelopperTunisian.valueOf()) }}</td>
            <td>{{ this.nbrIntegraterAndBiTunisian.valueOf() + this.nbrIntegraterAndBiInternational.valueOf() }}</td>
            <td><div class="stat-percent font-bold text-navy">{{Math.round(( ((DevelopperInternational.valueOf() + DevelopperTunisian.valueOf() ) - (nbrDevelopperTunisian.valueOf() + nbrIntegraterAndBiInternational.valueOf()))* 100 )/ (DevelopperInternational.valueOf() + DevelopperTunisian.valueOf()) ).toFixed(0)}}% <i class="fa fa-level-up"></i></div></td>
            <td>{{ this.DevelopperInternational.valueOf() +  this.DevelopperTunisian.valueOf() + this.predictionDevelopper.valueOf() }}</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>This Week evolution</h5>
            </div>
            <div class="ibox-content">
              <line-example></line-example>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>This Month evolution</h5>
            </div>
            <div class="ibox-content">
              <line-example2></line-example2>
            </div>
          </div>
        </div>
      </div>
      <button @click="print">Print these results</button>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import LineExample from './charts/LineExample'
import LineExample2 from './charts/LineExample2'
import html2pdf  from 'html2pdf.js'

  export default {
    name: 'reporting',
    components: {LineExample,
      LineExample2},
    data: function () {
      return {
        prediction: 0,
        predictionBi: 0,
        predictionConsultants: 0,
        predictionDevelopper: 0,
        allProfilesYesterday: 0,
        nbrLocationTun: 0,
        nbrLocationInt: 0,
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
        nbrIntegraterAndBiTunisian: 0,
        nbrDevelopperTunisian: 0,
        nbrDevelopperInternational: 0,
        nbrIntegraterAndBiInternational: 0,
        nbrConsultantInternational: 0,
        nbrConsultantTunisian: 0,
        evolusiontFunctions: []
      }
    },
    created: function () {
      this.getLastDay();
      this.refreshData();
      setInterval(function () {this.refreshData() }.bind(this), 60000)
    },

    mounted () {
    },
    methods: {
      print () {
        var doc = document.getElementById('capture3')
        html2pdf(doc);
      },
      getLastDay(){
        axios.get('http://localhost:3003/reporting/YesterdayStat')
          .then(response => { this.allProfilesYesterday  = response.data[0].statAll;
                              this.nbrLocationTun  = response.data[0].locationTun;
                              this.nbrLocationInt  = response.data[0].locationInt;
                              this.nbrIntegraterAndBiTunisian  = response.data[0].IntegraterAndBiTunisian;
                              this.nbrIntegraterAndBiInternational  = response.data[0].IntegraterAndBiInternational;
                              this.nbrDevelopperTunisian  = response.data[0].DevelopperTunisian;
                              this.nbrDevelopperInternational  = response.data[0].DevelopperInternational;
                              this.nbrConsultantInternational  = response.data[0].ConsultantInternational;
                              this.nbrConsultantTunisian  = response.data[0].ConsultantTunisian;}).catch(e => { this.errors.push(e) })

      },
      refreshData(){
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
          .then(response => { this.listeStat = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/reporting/predict')
          .then(response => { this.prediction = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/reporting/predictBi')
          .then(response => { this.predictionBi = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/reporting/predictConsultants')
          .then(response => { this.predictionConsultants = response.data }).catch(e => { this.errors.push(e) })
        axios.get('http://localhost:3003/reporting/predictDevelopper')
          .then(response => { this.predictionDevelopper = response.data }).catch(e => { this.errors.push(e) })

      }
    }
  }
</script>

<style scoped>
  table{
    width: 100%;
    margin:auto;
    border-collapse: collapse;
  }
  th, td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even){background-color: #f2f2f2}

  th {
    background-color: #4CAF50;
    color: white;
  }
  @media print {
    /* All your print styles go here */
    #template { display: none !important; }
  }
</style>
