<script>
  import { Line } from 'vue-chartjs'
  import axios from 'axios'
  import schedule from 'node-schedule'

  export default {
    extends: Line,
    name:'line-example2',
    data: function () {
      return {
        listeMonths: {listes:[],month:''},
        numberProfiles: [],
        dateOfTheDay: [],
        NameMonth: ''
      }
    },
    created: function () {
      this.getData();
      schedule.scheduleJob('59 59 23 * * *', () => { this.getData(); })
    },
    methods: {
      getData(){
        axios.get('http://localhost:3003/reporting/MonthStat')
          .then(response => { this.listeMonths = response.data;
          this.NameMonth = this.listeMonths.month;
        var i = 0;
          if(this.listeMonths.listes.length === 0)
          {
            for (var k = 0; k < 30 ; ++k) {
              var d = new Date();
              var n = d.getDay();
              var date = new Date()
              date.setDate(d.getDate() + k)
              function formatDate(date) {
                var d = new Date(date),
                  month = '' + (d.getMonth()+1),
                  day = '' + d.getDate(),
                  year = d.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                return [year, month, day].join('-');
              }
              var date2 = formatDate(date);
              var date3 = date2.toString()
              this.dateOfTheDay.push(date3)
              this.numberProfiles.push(0)
            }
          }
        else
        {
          for (i; i < this.listeMonths.listes.length ; ++i) {
            this.numberProfiles.push(this.listeMonths.listes[i].number);
            var date = this.listeMonths.listes[i].date;
            function formatDate(date) {
              var d = new Date(date),
                month = '' + (d.getMonth()+1),
                day = '' + d.getDate(),
                year = d.getFullYear();

              if (month.length < 2) month = '0' + month;
              if (day.length < 2) day = '0' + day;

              return [year, month, day].join('-');
            }
            var date2 = formatDate(date);
            var date3 = date2.toString();
            this.dateOfTheDay.push(date3)
          }

          if(i < 30)
          {
            for (var j = i; j < 30 ; ++j) {
              var d = new Date();
              var n = d.getDay();
              var date = new Date()
              date.setDate(d.getDate() + j)
              function formatDate(date) {
                var d = new Date(date),
                  month = '' + (d.getMonth()+1),
                  day = '' + d.getDate(),
                  year = d.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                return [year, month, day].join('-');
              }
              var date2 = formatDate(date);
              var date3 = date2.toString()
              this.numberProfiles.push(0);
              this.dateOfTheDay.push(date3)
            }
          }
        }

        this.renderChart({
          labels: this.dateOfTheDay,
          datasets: [
            {
              label: 'Evolution profiles of this Month'+ this.NameMonth,
              backgroundColor: '#1c84c6',
              data: this.numberProfiles
            }
          ]
        }, {responsive: true, maintainAspectRatio: false})}).catch(e => { this.errors.push(e) })
      }
    }
  }
</script>
