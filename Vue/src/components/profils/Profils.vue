<template>

  <div class="wrapper wrapper-content animated fadeInRight">
    <div class="row wrapper border-bottom white-bg page-heading">
      <div class="col-lg-10">
        <h2>Profiles</h2>
      </div>
      <div class="col-lg-2">

      </div>
    </div>
    <div class="row">

      <div class="col-lg-4">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <span class="label label-primary pull-right">Total</span>
            <h5>Total Profiles</h5>
          </div>
          <div class="ibox-content">
            <h1 class="no-margins">{{stat_list}}</h1>
            <div class="stat-percent font-bold text-navy"><i class="fa fa-level-up"></i></div>
            <small>Profile</small>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <span class="label label-info pull-right">Annual</span>
            <h5>Total Profiles this year</h5>
          </div>
          <div class="ibox-content">
            <h1 class="no-margins">{{yearly.length}}</h1>
            <div class="stat-percent font-bold text-info"><i class="fa fa-level-up"></i></div>
            <small>Profile</small>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <span class="label label-warning pull-right">Monthly</span>
            <h5>Total Profiles this Month</h5>
          </div>
          <div class="ibox-content">
            <h1 class="no-margins">{{monthly.length}}</h1>
            <div class="stat-percent font-bold text-warning"><i class="fa fa-level-up"></i></div>
            <small>Profile</small>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        Your Favorite Profils
      </div>
      <div class="card-body">

    <div class="panel panel-primary">
      <span><strong>{{selectedItems.length}}</strong> profils selected</span>
      <div class="m-tags-items">
        <a v-for="(item,indexx) in selectedItems" v-on:click="removeSelectedItem(item,indexx)" class="badge badge-pill badge-success">
          {{item.name}}
          <button type="button"  class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </a>
      </div>

    </div>
      <button type="button" class="btn btn-danger btn-xs" :disabled="disableButton == true"  @click="postPost()">Add To Favorite</button>
    </div>
    </div>
    <br>
    <div class="card">
      <div class="card-header">
       <b> Filtring Data</b>
      </div>
      <div class="card-body">
          <div class="input-group m-b">
            <div class="input-group-btn">
              <button tabindex="-1" class="btn btn-white" type="button">Search</button>
              <button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button"><span class="caret"></span></button>
              <!--<ul class="dropdown-menu">
                <li><a href="#">Current Job</a></li>
                <li><a href="#">Domain</a></li>
                <li><a href="#">Full_Name</a></li>
              </ul>-->
            </div>
            <input type="text" v-model="searchQuery" class="form-control" placeholder="type anything a name , job , domain or exprience years"></div>

    </div>
    </div>
     <br>
    <div class="card">
      <div class="card-header">
       <b>Sort Options</b>
      </div>
      <div class="card-body">
        <span class="label label-info">Sort by names</span>
    <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked"/>
    <label for="toggle-button">{{ checked }}</label>

        <span class="label label-info">Sort by years of exprience</span>
        <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked2"/>
        <label for="toggle-button">{{ checked2 }}</label>

        <span class="label label-info">Sort by update date</span>
        <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked3"/>
        <label for="toggle-button">{{ checked3 }}</label>


      </div>
    </div>
    <br>
    <!--sort by domaine name -->
    <div class="card">
      <div class="card-header">
        <b>sort by domaine</b>
      </div>
      <div class="card-body">
        <span class="label label-info">WEB integrators</span>
        <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked5"/>
        <label for="toggle-button">{{ checked5 }}</label>

        <span class="label label-info">WEB developers</span>
        <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked6"/>
        <label for="toggle-button">{{ checked6 }}</label>

        <span class="label label-info">Mobile developers</span>
        <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked7"/>
        <label for="toggle-button">{{ checked7 }}</label>

        <span class="label label-info">data integrators</span>
        <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked8"/>
        <label for="toggle-button">{{ checked8 }}</label>
        <br>
        <br>
        <span class="label label-info">BI engineers</span>
        <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked9"/>
        <label for="toggle-button">{{ checked9 }}</label>

        <span class="label label-info">IT consultants</span>
        <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked10"/>
        <label for="toggle-button">{{ checked10 }}</label>

        <span class="label label-info">management consultants</span>
        <toggle-button :value="false" color="#82C7EB"  :sync="true" :labels="true" v-model="checked11"/>
        <label for="toggle-button">{{ checked11 }}</label>
      </div>
    </div>
    <!-- --->

    <br>
    <br>



    <div class="row">
      <div class="col-md-4 col-lg-4" v-for="(item, index) in filteredItems">
        <div class="contact-box center-version">

          <a href="#">

            <img alt="image" class="img-circle" :src="item.picture">


            <h3 class="m-b-xs"><strong>{{ item.name }}</strong></h3>

            <div class="font-bold" style="height: 5px;">{{item.Domain}}</div>
            <address class="m-t-md">
           <!--   <strong>{{item.company}}</strong><br>-->
              {{ item.location }}<br>
         <!--     <abbr title="Phone">P:</abbr> (123) 456-7890-->
            </address>

          </a>
          <div class="contact-box-footer">
            <div class="m-t-xs btn-group">
              <a @click="showModal(index)" data-toggle="modal" data-target="#myModal2" class="btn btn-xs btn-white"><i class="fa fa-user"></i> More </a>
              <a class="btn btn-xs btn-white"><i class="fa fa-envelope"></i> Email</a>
              <a v-on:click="selectItem(item,index)" class="btn btn-xs btn-white"><i class="fa fa-star"></i> Add</a>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div class="modal inmodal" id="myModal2" tabindex="-1" role="dialog" aria-hidden="true" v-if="current">
      <div class="modal-dialog">
        <div class="modal-content animated flipInY">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <h4 class="modal-title">{{current.name}}</h4>
            <small class="font-bold">{{current.nationalty}}</small>
            <div class="infont"><a :href="current.url"><i class="fa fa-external-link"></i>Vist Profil</a></div>
            <small class="font-bold">Currentlly working as <b> {{current.job_title}}</b> </small>
            <br>
            <small class="font-bold">at <b>{{current.company}}</b></small>
            <br>
            <small class="font-bold">exprienced within <b>{{current.years_of_exp}}</b></small>
          </div>
          <div class="modal-body">
            <p><strong>Competences : </strong> {{current.skills}}</p>
            <p><strong>exprience : </strong> {{current.experiences}}</p>
            <p><strong>information last update at : </strong> {{current.UPDATE_DATE}}</p>
          </div>
          <div class="modal-footer">
            <button @click="hideModal" type="button" class="btn btn-white" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  import axios from 'axios'

  export default {

    mounted() {

    },
    data: () => {
      return {
        items: [],
        errors: [],
        current: null,
        index:0,
        indexx:0,
        selectedItems: [],
        selectedurls: [],
        disableButton:true,
        searchQuery: '',
        searchQuery2: '',
        checked:false,
        sorting: -1,
        checked2:false,
        checked3:false,
        yearly:[],
        monthNames : ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ],
        monthly:[],
        stat_list:'',
        checked5:false,
        checked6:false,
        checked7:false,
        checked8:false,
        checked9:false,
        checked10:false,
        checked11:false,

      }
    },
    computed: {
      filteredItems() {
        if(this.checked===true)
          return this.items.slice(0).sort((a, b) => a.name < b.name ? this.sorting : -this.sorting )
        if(this.checked2===true) {
          this.checked2=false;
          function compare(a, b) {
            if (!isNaN(parseInt(a.years_of_exp))) {
              if (!isNaN(parseInt(b.years_of_exp))) {
            /*console.log(parseInt(a.years_of_exp))
            if (parseInt(a.years_of_exp) < parseInt(b.years_of_exp))
              return -1;
            if (parseInt(a.years_of_exp) > parseInt(b.years_of_exp))
              return 1;
            return 0;*/
              return parseInt(a.years_of_exp) -parseInt(b.years_of_exp);
          }
            }
          }
          console.log(this.items.sort(compare))
          return this.items.sort(compare);

        }
        if(this.checked3===true){

          return _.sortBy(this.items,function(node){return - (new Date(node.UPDATE_DATE).getTime());})
        //return _.pullAll(this.items,this.selectedItems);

        }
        if(this.checked5===true){
          return this.items.filter(item => {
            return item.Domain.toLowerCase().indexOf('Intégrateur web'.toLowerCase()) > -1
          })
        }
        if(this.checked6===true){
          return this.items.filter(item => {
            return item.Domain.toLowerCase().indexOf('développeur web'.toLowerCase()) > -1
          })
        }
        if(this.checked7===true){
          return this.items.filter(item => {
            return item.Domain.toLowerCase().indexOf('développeur Mobile'.toLowerCase()) > -1
          })
        }
        if(this.checked8===true){
          return this.items.filter(item => {
            return item.Domain.toLowerCase().indexOf('intégrateur de données'.toLowerCase()) > -1
          })
        }
        if(this.checked9===true){
          return this.items.filter(item => {
            return item.Domain.toLowerCase().indexOf('ingénieur BI'.toLowerCase()) > -1
          })
        }
        if(this.checked10===true){
          return this.items.filter(item => {
            return item.Domain.toLowerCase().indexOf('consultant IT'.toLowerCase()) > -1
          })
        }
        if(this.checked11===true){
          return this.items.filter(item => {
            return item.Domain.toLowerCase().indexOf('consultant management'.toLowerCase()) > -1
          })
        }


        return this.items.filter(item => {
            return this.selectedurls.indexOf(item.url) === -1 &&

              (item.years_of_exp.indexOf(this.searchQuery) > -1 ||
              item.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.Domain.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.nationalty.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.skills.toString().toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.job_title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.company.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1)
          })

      }
    },

    // Fetches posts when the component is created.
    created () {
      axios.get(`http://127.0.0.1:3003/api/v1/composer/profile`)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
          this.items = response.data
          this.stat_list=this.items.length;
          for(var i = 0, len = this.items.length; i < len ; i++){
            var d = new Date();
            var n = d.getFullYear();
            var date=this.items[i].UPDATE_DATE
            var res = date.split(",");
            var res2 = date.split(" ");
            if(d.getFullYear()===parseInt(res[1])){
             this.yearly.push(this.items[i])}

            if(this.monthNames[d.getMonth()]===res2[2]){
              this.monthly.push(this.items[i])}
          }


        })
        .catch(e => {
          console.log(e)
          this.errors.push(e)
        }),
        axios.get(`http://localhost:3003/bookMarkP`)
          .then(response => {
            // JSON responses are automatically parsed.
            console.log(response.data)
            this.selectedItems = response.data
            for(var i = 0, len = this.selectedItems.length; i < len ; i++){
              this.selectedurls.push(this.selectedItems[i].url)
            }

          })
          .catch(e => {
            console.log(e)
            this.errors.push(e)
          })


    },

    methods: {
      showModal (index) {
        console.log(index)
        console.log(this.filteredItems[index])
        this.current = this.filteredItems[index]
       // this.$refs.myModalRef.show()
      },
      hideModal () {
      // this.$refs.myModalRef.hide()
      },
      selectItem(item,index){
        item.selected = true
        this.selectedItems.push(item)
        this.items.splice(index, 1)
        this.$notify({
          group: 'foo',
          type: 'warn',
          title: 'Add profile to pin bored ',
          text: 'Profile added to pin bored don t forget to confirm !',
          duration: 3000,
          speed: 1000,
          data: {}
        })
        if(this.disableButton===true)
          this.disableButton=false
      },
      removeSelectedItem(item,indexx){
        item.selected = false
        //this.selectedItems.$remove(item)
        this.selectedItems.splice(indexx, 1)
        this.items.push(item)
        axios.delete('http://localhost:3003/bookMarkP/' +item._id)
          .then((response) => {
            console.log(response)
          }, (error) => {
            console.log(response)
          })
        this.$notify({
          group: 'foo',
          type: 'warn',
          title: 'Delete profile from pin bored ',
          text: 'Profile deleted from pin bored',
          duration: 3000,
          speed: 1000,
          data: {}
        })
        if(this.selectedItems.length===0)
          this.disableButton=true

       // this.searchInTheList(this.searchItem, this.pagination.currentPage)
      },
      frontEndDateFormat: function(date) {
        return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
      },
      postPost() {

        this.selectedItems.forEach(function(element) {
         // console.log(JSON.parse(element.UPDATE_DATE))
          axios.post(`http://localhost:3003/bookMarkP`, {
            "_id":element._id,
            "UPDATE_DATE": element.UPDATE_DATE,
            "current_job": element.job_title,
            "company": element.company,
            "nationalty": element.nationalty,
            "Domain": element.Domain,
            "name": element.name,
            "url": element.url,
            "Competences": element.skills,
            "exprience": element.experiences,
            "location": element.location,
            "years_of_exp": element.years_of_exp,
            "image":element.picture
          })
            .then(response => {
              console.log(response)
            })
            .catch(e => {
              console.log(e)
              this.errors.push(e)
            })
        });
      },
    },
  }

</script>

