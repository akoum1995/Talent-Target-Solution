<script>
import { Pie } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Pie,
  data: function () {
    return {
      nbrIngBi: 0,
      nbrIntWeb: 0,
      nbrDevWeb: 0,
      nbrConsManagement: 0,
      nbrConsItDigital: 0,
      nbrIntDonnees: 0,
      nbrDevMobile: 0
    }
  },
  methods: {
    setNbrIngBi (e) { this.nbrIngBi = e },
    setNbrIntWeb (e) { this.nbrIntWeb = e },
    setNbrDevWeb (e) { this.nbrDevWeb = e },
    setNbrConsManagement (e) { this.nbrConsManagement = e },
    setNbrConsItDigital (e) { this.nbrConsItDigital = e },
    setNbrIntDonnees (e) { this.nbrIntDonnees = e },
    setNbrDevMobile (e) { this.nbrDevMobile = e }
  },
  created: function () {
    axios.get('http://localhost:3003/stats/nbrIngBi')
      .then(response => { this.nbrIngBi = response.data; this.setNbrIngBi(this.nbrIngBi) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWeb')
      .then(response => { this.nbrIntWeb = response.data; this.setNbrIntWeb(this.nbrIntWeb) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagement')
      .then(response => { this.nbrConsManagement = response.data; this.setNbrConsManagement(this.nbrConsManagement) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigital')
      .then(response => { this.nbrConsItDigital = response.data; this.setNbrConsItDigital(this.nbrConsItDigital) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonnees')
      .then(response => { this.nbrIntDonnees = response.data; this.setNbrIntDonnees(this.nbrIntDonnees) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobile')
      .then(response => { this.nbrDevMobile = response.data; this.setNbrDevMobile(this.nbrDevMobile) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWeb')
      .then(response => { this.nbrDevWeb = response.data; this.setNbrDevWeb(this.nbrDevWeb); this.renderChart({labels: ['INT WEB', 'DEV WEB', 'DEV mobile', 'INT des données', 'ING BI', 'Consultant IT,Digital', 'Consultant management'], datasets: [ {backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#ddc725', '#36dd32', '#dd1dd4'], data: [this.nbrIntWeb, this.nbrDevWeb, this.nbrDevMobile, this.nbrIntDonnees, this.nbrIngBi, this.nbrConsItDigital, this.nbrConsManagement]} ]}, { responsive: true, maintainAspectRatio: false }) }).catch(e => { this.errors.push(e) })

    setInterval(function () {
    axios.get('http://localhost:3003/stats/nbrIngBi')
      .then(response => { this.nbrIngBi = response.data; this.setNbrIngBi(this.nbrIngBi) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWeb')
      .then(response => { this.nbrIntWeb = response.data; this.setNbrIntWeb(this.nbrIntWeb) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagement')
      .then(response => { this.nbrConsManagement = response.data; this.setNbrConsManagement(this.nbrConsManagement) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigital')
      .then(response => { this.nbrConsItDigital = response.data; this.setNbrConsItDigital(this.nbrConsItDigital) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonnees')
      .then(response => { this.nbrIntDonnees = response.data; this.setNbrIntDonnees(this.nbrIntDonnees) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobile')
      .then(response => { this.nbrDevMobile = response.data; this.setNbrDevMobile(this.nbrDevMobile) }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWeb')
      .then(response => { this.nbrDevWeb = response.data; this.setNbrDevWeb(this.nbrDevWeb); this.renderChart({labels: ['INT WEB', 'DEV WEB', 'DEV mobile', 'INT des données', 'ING BI', 'Consultant IT,Digital', 'Consultant management'], datasets: [ {backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#ddc725', '#36dd32', '#dd1dd4'], data: [this.nbrIntWeb, this.nbrDevWeb, this.nbrDevMobile, this.nbrIntDonnees, this.nbrIngBi, this.nbrConsItDigital, this.nbrConsManagement]} ]}, { responsive: true, maintainAspectRatio: false }) }).catch(e => { this.errors.push(e) })
    }.bind(this), 60000)
    }
}
</script>
