<script>
  import { Line } from 'vue-chartjs'
  import axios from 'axios'
  import schedule from 'node-schedule'

  export default {
    extends: Line,
    data: function () {
      return {
        listeWeek: [],
        numberProfiles: [],
        NameOfTheDay: []
      }
    },
    created: function () {
      this.getData();
      schedule.scheduleJob('59 59 23 * * *', () => { this.getData(); })
    },
    methods: {
      getData(){
        axios.get('http://localhost:3003/reporting/WeekStat')
          .then(response => { this.listeWeek = response.data;
          var i = 0;
          if(this.listeWeek[0].day === 'Tuesday')
          {
            var backup = [];
            backup.push(0);
            this.numberProfiles = backup;
            for (i; i < this.listeWeek.length ; ++i) {
            this.numberProfiles.push(this.listeWeek[i].number)
            }
          }
          else if(this.listeWeek[0].day === 'Wednesday')
          {
            var backup   = [];
            backup.push(0);backup.push(0);
            this.numberProfiles = backup;
            for (i; i < this.listeWeek.length ; ++i) {
              this.numberProfiles.push(this.listeWeek[i].number)
            }
          }
          else if(this.listeWeek[0].day === 'Thursday')
          {
            var backup = [];
            backup.push(0);backup.push(0);backup.push(0);
            this.numberProfiles = backup;
            for (i; i < this.listeWeek.length ; ++i) {
              this.numberProfiles.push(this.listeWeek[i].number)
            }
          }
          else if(this.listeWeek[0].day === 'Friday')
          {
            var backup = [];
            backup.push(0);backup.push(0);backup.push(0);backup.push(0);
            this.numberProfiles = backup;
            for (i; i < this.listeWeek.length ; ++i) {
              this.numberProfiles.push(this.listeWeek[i].number)
            }
          }
          else if(this.listeWeek[0].day === 'Saturday')
          {
            var backup = [];
            backup.push(0);backup.push(0);backup.push(0);backup.push(0);backup.push(0);
            this.numberProfiles = backup;
            for (i; i < this.listeWeek.length ; ++i) {
              this.numberProfiles.push(this.listeWeek[i].number)
            }
          }
          else if(this.listeWeek[0].day === 'Sunday')
          {
            var backup = [];
            backup.push(0);backup.push(0);backup.push(0);backup.push(0);backup.push(0);backup.push(0);
            this.numberProfiles = backup;
            for (i; i < this.listeWeek.length ; ++i) {
              this.numberProfiles.push(this.listeWeek[i].number)
            }
          }
          else
          {
            for (i; i < this.listeWeek.length ; ++i) {
              this.numberProfiles.push(this.listeWeek[i].number)
            }
          }

        if(i === this.listeWeek.length)
        {
          if(i < 7)
          {
            for (var j = i; j < 7 ; ++j) {
              if(j === 0)
              {
                this.numberProfiles.push(0);
              }
              if(j === 1)
              {
                this.numberProfiles.push(0);
              }
              if(j === 2)
              {
                this.numberProfiles.push(0);
              }
              if(j === 3)
              {
                this.numberProfiles.push(0);
              }
              if(j === 4)
              {
                this.numberProfiles.push(0);
              }
              if(j === 5)
              {
                this.numberProfiles.push(0);
              }
              if(j === 6)
              {
                this.numberProfiles.push(0);
              }
            }
          }
        }
        this.renderChart({
          labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          datasets: [
            {
              label: 'Evolution profiles of this week',
              backgroundColor: '#f87979',
              data: this.numberProfiles
            }
          ]
        }, {responsive: true, maintainAspectRatio: false})}).catch(e => { this.errors.push(e) })
      }
    },
    mounted () {

    }
  }
</script>
