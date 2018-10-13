<template>

  <div class="wrapper wrapper-content animated fadeInRight">

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
      <div class="col-lg-3" v-for="(item, index) in items">
        <div class="contact-box center-version">

          <a href="#">

            <img alt="image" class="img-circle" :src="item.picture">


            <h3 class="m-b-xs"><strong>{{ item.name }}</strong></h3>

            <div class="font-bold">{{item.job_title}}</div>
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
            <small class="font-bold">{{current.location}}</small>
            <div class="infont"><a :href="current.url"><i class="fa fa-external-link"></i>Vist Profil</a></div>
            <small class="font-bold">Currentlly working as <b> {{current.current_job}}</b> </small>
            <br>
          </div>
          <div class="modal-body">
            <p><strong>educations : </strong> {{current.educations}}</p>
            <p><strong>experiences : </strong> {{current.experiences}}</p>
            <p><strong>skills : </strong> {{current.skills}}</p>
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
        stat_list:[],
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
    },

    // Fetches posts when the component is created.
    created () {
      axios.get("http://localhost:3003/api/v1/composer/profile/"+this.$route.params.id)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
          this.items = response.data



        })
        .catch(e => {
          console.log(e)
          this.errors.push(e)
        })
    },

    methods: {
      showModal (index) {
        console.log(index)
        console.log(this.items[index])
        this.current = this.items[index]
       // this.$refs.myModalRef.show()
      },
      hideModal () {
      // this.$refs.myModalRef.hide()
      },
      selectItem(item,index){
        item.selected = true
        this.selectedItems.push(item)
        this.items.splice(index, 1)
        if(this.disableButton===true)
          this.disableButton=false
      },
      removeSelectedItem(item,indexx){
        item.selected = false
        //this.selectedItems.$remove(item)
        this.selectedItems.splice(indexx, 1)
        this.items.push(item)
        axios.delete('http://localhost:3000/bookMarkP/' +item._id)
          .then((response) => {
            console.log(response)
          }, (error) => {
            console.log(response)
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
          axios.post(`http://localhost:3000/bookMarkP`, {
            "_id":element._id,
            "UPDATE_DATE": element.UPDATE_DATE,
            "current_job": element.current_job,
            "company": element.company,
            "nationalty": element.nationalty,
            "Domain": element.Domain,
            "name": element.name,
            "url": element.url,
            "Competences": element.Competences,
            "exprience": element.exprience,
            "location": element.location,
            "years_of_exp": element.years_of_exp,
            "image":element.image
          })
            .then(response => {
              console.log(response)
            })
            .catch(e => {
              console.log(e)
              this.errors.push(e)
            })
        });
      }

    }
  }

</script>

