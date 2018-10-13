<script>
import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
      test: [],
      backup: [],
      brandInfo: '#63c2de',
      actualProfiles: 0,
      profiles: 0
    }
  },
  created: function () {
    axios.get('http://localhost:3003/stats/test').then(response => { if (this.test.length === 0) { this.test.push(0); this.actualProfiles = response.data } else { if (this.test.length === 27) { this.profiles = response.data; this.backup = []; this.backup.push(this.profiles - this.actualProfiles); this.test.forEach(number => { this.backup.push(number) }); this.test = this.backup; this.test.splice(-1, 1); this.actualProfiles = this.profiles } else { this.profiles = response.data; this.backup = []; this.backup.push(this.profiles - this.actualProfiles); this.test.forEach(number => { this.backup.push(number) }); this.test = this.backup; this.actualProfiles = this.profiles } } this.renderChart({labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S'], datasets: [{label: 'Number profiles', backgroundColor: this.convertHex(this.brandInfo, 10), borderColor: this.brandInfo, pointHoverBackgroundColor: '#fff', borderWidth: 2, data: this.test}]}, {maintainAspectRatio: false, legend: {display: false}, scales: {xAxes: [{gridLines: {drawOnChartArea: true}}], yAxes: [{ticks: {beginAtZero: true, maxTicksLimit: 5, stepSize: Math.ceil(250 / 5), max: 250}, gridLines: {display: true}}]}, elements: {point: {radius: 0, hitRadius: 10, hoverRadius: 4, hoverBorderWidth: 3}}}) }).catch(e => { this.errors.push(e) })

    setInterval(function () { axios.get('http://localhost:3003/stats/test').then(response => { if (this.test.length === 0) { this.test.push(0); this.actualProfiles = response.data } else { if (this.test.length === 27) { this.profiles = response.data; this.backup = []; this.backup.push(this.profiles - this.actualProfiles); this.test.forEach(number => { this.backup.push(number) }); this.test = this.backup; this.test.splice(-1, 1); this.actualProfiles = this.profiles } else { this.profiles = response.data; this.backup = []; this.backup.push(this.profiles - this.actualProfiles); this.test.forEach(number => { this.backup.push(number) }); this.test = this.backup; this.actualProfiles = this.profiles } } this.renderChart({labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S'], datasets: [{label: 'Number profiles', backgroundColor: this.convertHex(this.brandInfo, 10), borderColor: this.brandInfo, pointHoverBackgroundColor: '#fff', borderWidth: 2, data: this.test}]}, {maintainAspectRatio: false, legend: {display: false}, scales: {xAxes: [{gridLines: {drawOnChartArea: true}}], yAxes: [{ticks: {beginAtZero: true, maxTicksLimit: 5, stepSize: Math.ceil(250 / 5), max: 250}, gridLines: {display: true}}]}, elements: {point: {radius: 0, hitRadius: 10, hoverRadius: 4, hoverBorderWidth: 3}}}) }).catch(e => { this.errors.push(e) }) }.bind(this), 3000)
  },
  methods: {
    convertHex (hex, opacity) {
      hex = hex.replace('#', '')
      const r = parseInt(hex.substring(0, 2), 16)
      const g = parseInt(hex.substring(2, 4), 16)
      const b = parseInt(hex.substring(4, 6), 16)
      const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
      return result
    }
  },
  props: ['height'],
  mounted () {

  }
}
</script>
