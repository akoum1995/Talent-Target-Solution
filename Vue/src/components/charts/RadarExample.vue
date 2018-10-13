<script>
import { Radar } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Radar,
  data: function () {
    return {
      nbrIngBiUnder3: 0,
      nbrIntWebUnder3: 0,
      nbrDevWebUnder3: 0,
      nbrConsManagementUnder3: 0,
      nbrConsItDigitalUnder3: 0,
      nbrIntDonneesUnder3: 0,
      nbrDevMobileUnder3: 0,
      nbrIngBiUnder5: 0,
      nbrIntWebUnder5: 0,
      nbrDevWebUnder5: 0,
      nbrConsManagementUnder5: 0,
      nbrConsItDigitalUnder5: 0,
      nbrIntDonneesUnder5: 0,
      nbrDevMobileUnder5: 0,
      nbrIngBiUnder7: 0,
      nbrIntWebUnder7: 0,
      nbrDevWebUnder7: 0,
      nbrConsManagementUnder7: 0,
      nbrConsItDigitalUnder7: 0,
      nbrIntDonneesUnder7: 0,
      nbrDevMobileUnder7: 0,
      nbrIngBiUnder10: 0,
      nbrIntWebUnder10: 0,
      nbrDevWebUnder10: 0,
      nbrConsManagementUnder10: 0,
      nbrConsItDigitalUnder10: 0,
      nbrIntDonneesUnder10: 0,
      nbrDevMobileUnder10: 0,
      nbrIngBiSup10: 0,
      nbrIntWebSup10: 0,
      nbrDevWebSup10: 0,
      nbrConsManagementSup10: 0,
      nbrConsItDigitalSup10: 0,
      nbrIntDonneesSup10: 0,
      nbrDevMobileSup10: 0
    }
  },
  created: function () {
    axios.get('http://localhost:3003/stats/nbrIngBiUnder3')
      .then(response => { this.nbrIngBiUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebUnder3')
      .then(response => { this.nbrIntWebUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementUnder3')
      .then(response => { this.nbrConsManagementUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalUnder3')
      .then(response => { this.nbrConsItDigitalUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesUnder3')
      .then(response => { this.nbrIntDonneesUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileUnder3')
      .then(response => { this.nbrDevMobileUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebUnder3')
      .then(response => { this.nbrDevWebUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIngBiUnder5')
      .then(response => { this.nbrIngBiUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebUnder5')
      .then(response => { this.nbrIntWebUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementUnder5')
      .then(response => { this.nbrConsManagementUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalUnder5')
      .then(response => { this.nbrConsItDigitalUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesUnder5')
      .then(response => { this.nbrIntDonneesUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileUnder5')
      .then(response => { this.nbrDevMobileUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebUnder5')
      .then(response => { this.nbrDevWebUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIngBiUnder7')
      .then(response => { this.nbrIngBiUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebUnder7')
      .then(response => { this.nbrIntWebUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementUnder7')
      .then(response => { this.nbrConsManagementUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalUnder7')
      .then(response => { this.nbrConsItDigitalUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesUnder7')
      .then(response => { this.nbrIntDonneesUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileUnder7')
      .then(response => { this.nbrDevMobileUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebUnder7')
      .then(response => { this.nbrDevWebUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIngBiUnder10')
      .then(response => { this.nbrIngBiUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebUnder10')
      .then(response => { this.nbrIntWebUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementUnder10')
      .then(response => { this.nbrConsManagementUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalUnder10')
      .then(response => { this.nbrConsItDigitalUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesUnder10')
      .then(response => { this.nbrIntDonneesUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileUnder10')
      .then(response => { this.nbrDevMobileUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebUnder10')
      .then(response => { this.nbrDevWebUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIngBiSup10')
      .then(response => { this.nbrIngBiSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebSup10')
      .then(response => { this.nbrIntWebSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementSup10')
      .then(response => { this.nbrConsManagementSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalSup10')
      .then(response => { this.nbrConsItDigitalSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesSup10')
      .then(response => { this.nbrIntDonneesSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileSup10')
      .then(response => { this.nbrDevMobileSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebSup10')
      .then(response => { this.nbrDevWebSup10 = response.data; this.renderChart({labels: ['Consultants IT,Digital', 'DEV WEB', 'DEV Mobile', 'INT des données', 'Consultant Management', 'INT WEB', 'ING BI'], datasets: [{label: '<3 years Exp', backgroundColor: 'rgba(179,181,198,0)', borderColor: 'rgba(179,181,198,1)', pointBackgroundColor: 'rgba(179,181,198,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(179,181,198,1)', data: [this.nbrConsItDigitalUnder3, this.nbrDevWebUnder3, this.nbrDevMobileUnder3, this.nbrIntDonneesUnder3, this.nbrConsManagementUnder3, this.nbrIntWebUnder3, this.nbrIngBiUnder3]}, {label: '[3..5]years Exp', backgroundColor: 'rgba(7,105,255,0)', borderColor: 'rgba(7,105,255,1)', pointBackgroundColor: 'rgba(7,105,255,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(7,105,255,1)', data: [this.nbrConsItDigitalUnder5, this.nbrDevWebUnder5, this.nbrDevMobileUnder5, this.nbrIntDonneesUnder5, this.nbrConsManagementUnder5, this.nbrIntWebUnder5, this.nbrIngBiUnder5]}, {label: '[5..7]years Exp', backgroundColor: 'rgba(237,188,11,0)', borderColor: 'rgba(237,188,11,1)', pointBackgroundColor: 'rgba(237,188,11,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(237,188,11,1)', data: [this.nbrConsItDigitalUnder7, this.nbrDevWebUnder7, this.nbrDevMobileUnder7, this.nbrIntDonneesUnder7, this.nbrConsManagementUnder7, this.nbrIntWebUnder7, this.nbrIngBiUnder7]}, {label: '[7..10]years Exp', backgroundColor: 'rgba(4,97,52,0)', borderColor: 'rgba(4,97,52,1)', pointBackgroundColor: 'rgba(4,97,52,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(4,97,52,1)', data: [this.nbrConsItDigitalUnder10, this.nbrDevWebUnder10, this.nbrDevMobileUnder10, this.nbrIntDonneesUnder10, this.nbrConsManagementUnder10, this.nbrIntWebUnder10, this.nbrIngBiUnder10]}, {label: '>10 years Exp', backgroundColor: 'rgba(199,32,0,0)', borderColor: 'rgba(199,32,0,1)', pointBackgroundColor: 'rgba(199,32,0,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(199,32,0,1)', data: [this.nbrConsItDigitalSup10, this.nbrDevWebSup10, this.nbrDevMobileSup10, this.nbrIntDonneesSup10, this.nbrConsManagementSup10, this.nbrIntWebSup10, this.nbrIngBiSup10]}]}, {responsive: true, maintainAspectRatio: false}) }).catch(e => { this.errors.push(e) })

    setInterval(function () {
    axios.get('http://localhost:3003/stats/nbrIngBiUnder3')
      .then(response => { this.nbrIngBiUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebUnder3')
      .then(response => { this.nbrIntWebUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementUnder3')
      .then(response => { this.nbrConsManagementUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalUnder3')
      .then(response => { this.nbrConsItDigitalUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesUnder3')
      .then(response => { this.nbrIntDonneesUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileUnder3')
      .then(response => { this.nbrDevMobileUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebUnder3')
      .then(response => { this.nbrDevWebUnder3 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIngBiUnder5')
      .then(response => { this.nbrIngBiUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebUnder5')
      .then(response => { this.nbrIntWebUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementUnder5')
      .then(response => { this.nbrConsManagementUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalUnder5')
      .then(response => { this.nbrConsItDigitalUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesUnder5')
      .then(response => { this.nbrIntDonneesUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileUnder5')
      .then(response => { this.nbrDevMobileUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebUnder5')
      .then(response => { this.nbrDevWebUnder5 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIngBiUnder7')
      .then(response => { this.nbrIngBiUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebUnder7')
      .then(response => { this.nbrIntWebUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementUnder7')
      .then(response => { this.nbrConsManagementUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalUnder7')
      .then(response => { this.nbrConsItDigitalUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesUnder7')
      .then(response => { this.nbrIntDonneesUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileUnder7')
      .then(response => { this.nbrDevMobileUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebUnder7')
      .then(response => { this.nbrDevWebUnder7 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIngBiUnder10')
      .then(response => { this.nbrIngBiUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebUnder10')
      .then(response => { this.nbrIntWebUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementUnder10')
      .then(response => { this.nbrConsManagementUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalUnder10')
      .then(response => { this.nbrConsItDigitalUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesUnder10')
      .then(response => { this.nbrIntDonneesUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileUnder10')
      .then(response => { this.nbrDevMobileUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebUnder10')
      .then(response => { this.nbrDevWebUnder10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIngBiSup10')
      .then(response => { this.nbrIngBiSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntWebSup10')
      .then(response => { this.nbrIntWebSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsManagementSup10')
      .then(response => { this.nbrConsManagementSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrConsItDigitalSup10')
      .then(response => { this.nbrConsItDigitalSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrIntDonneesSup10')
      .then(response => { this.nbrIntDonneesSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevMobileSup10')
      .then(response => { this.nbrDevMobileSup10 = response.data }).catch(e => { this.errors.push(e) })
    axios.get('http://localhost:3003/stats/nbrDevWebSup10')
      .then(response => { this.nbrDevWebSup10 = response.data; this.renderChart({labels: ['Consultants IT,Digital', 'DEV WEB', 'DEV Mobile', 'INT des données', 'Consultant Management', 'INT WEB', 'ING BI'], datasets: [{label: '<3 years Exp', backgroundColor: 'rgba(179,181,198,0)', borderColor: 'rgba(179,181,198,1)', pointBackgroundColor: 'rgba(179,181,198,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(179,181,198,1)', data: [this.nbrConsItDigitalUnder3, this.nbrDevWebUnder3, this.nbrDevMobileUnder3, this.nbrIntDonneesUnder3, this.nbrConsManagementUnder3, this.nbrIntWebUnder3, this.nbrIngBiUnder3]}, {label: '[3..5]years Exp', backgroundColor: 'rgba(7,105,255,0)', borderColor: 'rgba(7,105,255,1)', pointBackgroundColor: 'rgba(7,105,255,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(7,105,255,1)', data: [this.nbrConsItDigitalUnder5, this.nbrDevWebUnder5, this.nbrDevMobileUnder5, this.nbrIntDonneesUnder5, this.nbrConsManagementUnder5, this.nbrIntWebUnder5, this.nbrIngBiUnder5]}, {label: '[5..7]years Exp', backgroundColor: 'rgba(237,188,11,0)', borderColor: 'rgba(237,188,11,1)', pointBackgroundColor: 'rgba(237,188,11,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(237,188,11,1)', data: [this.nbrConsItDigitalUnder7, this.nbrDevWebUnder7, this.nbrDevMobileUnder7, this.nbrIntDonneesUnder7, this.nbrConsManagementUnder7, this.nbrIntWebUnder7, this.nbrIngBiUnder7]}, {label: '[7..10]years Exp', backgroundColor: 'rgba(4,97,52,0)', borderColor: 'rgba(4,97,52,1)', pointBackgroundColor: 'rgba(4,97,52,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(4,97,52,1)', data: [this.nbrConsItDigitalUnder10, this.nbrDevWebUnder10, this.nbrDevMobileUnder10, this.nbrIntDonneesUnder10, this.nbrConsManagementUnder10, this.nbrIntWebUnder10, this.nbrIngBiUnder10]}, {label: '>10 years Exp', backgroundColor: 'rgba(199,32,0,0)', borderColor: 'rgba(199,32,0,1)', pointBackgroundColor: 'rgba(199,32,0,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(199,32,0,1)', data: [this.nbrConsItDigitalSup10, this.nbrDevWebSup10, this.nbrDevMobileSup10, this.nbrIntDonneesSup10, this.nbrConsManagementSup10, this.nbrIntWebSup10, this.nbrIngBiSup10]}]}, {responsive: true, maintainAspectRatio: false}) }).catch(e => { this.errors.push(e) })
    }.bind(this), 60000)
      },
  mounted () {
  }
}
</script>
