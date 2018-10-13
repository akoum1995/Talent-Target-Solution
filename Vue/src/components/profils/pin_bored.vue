<template>
  <div class="wrapper wrapper-content animated fadeInRight">
    <div class="row wrapper border-bottom white-bg page-heading">
      <div class="col-lg-10">
        <h2>Pin Bored</h2>
      </div>
      <div class="col-lg-2">

      </div>
    </div>
  <div class="row">

    <div class="card">
      <div class="card-header">
        <b> Filtring Data</b>
      </div>
      <div class="card-body">
        <div class="input-group m-b">
          <div class="input-group-btn">
            <button tabindex="-1" class="btn btn-white" type="button">Search</button>
            <button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button"><span class="caret"></span></button>
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

    <br>
    <br>



    <!--  <button type="button" data-toggle="modal" data-target="#myModal" class="btn btn-danger btn-xs">Add Pin</button>-->
    <div class="col-lg-12">
      <div class="wrapper wrapper-content animated fadeInUp">
        <ul class="notes">
          <li v-for="(item,index) in filteredItems">
            <div>
              <small>{{item.UPDATE_DATE}} <a @click="showModal(index)" data-toggle="modal" data-target="#myModal2"><i class="fa fa-user "></i></a></small>
              <h4>{{item.name}}</h4>
              <p>{{item.Domain}}</p>
              <a v-on:click="removeSelectedItem(item,index)"><i class="fa fa-trash-o "></i></a>
            </div>
          </li>
        </ul>

        <div class="modal inmodal" id="myModal2" tabindex="-1" role="dialog" aria-hidden="true" v-if="current">
          <div class="modal-dialog">
            <div class="modal-content animated flipInY">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <img alt="image" class="img-circle" :src="current.image">
                <h4 class="modal-title">{{current.name}}</h4>
                <small class="font-bold">{{current.nationalty}}</small>
                <div class="infont"><a :href="current.url"><i class="fa fa-external-link"></i>Vist Profil</a></div>
                <small class="font-bold">Currentlly working as <b> {{current.current_job}}</b> </small>
                <br>
                <small class="font-bold">at <b>{{current.company}}</b></small>
                <br>
                <small class="font-bold">exprienced within <b>{{current.years_of_exp}}</b></small>
              </div>
              <div class="modal-body">
                <p><strong>Competences : </strong> {{current.Competences}}</p>
                <p><strong>exprience : </strong> {{current.exprience}}</p>
                <p><strong>information last update at : </strong> {{current.UPDATE_DATE | moment("dddd, MMMM Do YYYY") }}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>


  import axios from 'axios'

  export default {

    data: () => {
      return {
        items: [],
        errors: [],
        title:'',
        body:'',
        index:0,
        current:null,
        searchQuery: '',
        checked:false,
        checked2:false,
        checked3:false,
        checked5:false,
        checked6:false,
        checked7:false,
        checked8:false,
        checked9:false,
        checked10:false,
        checked11:false,
      }
    },

    computed:{

      filteredItems() {
        if(this.checked===true) {
          this.items.sort(function (a, b) {
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
          });
        }
        if(this.checked2===true) {
          this.checked2=false;
          function compare(a, b) {
            if (!isNaN(parseInt(a.years_of_exp))) {
              if (!isNaN(parseInt(b.years_of_exp))) {

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
          return item.years_of_exp.indexOf(this.searchQuery) > -1 ||
              item.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.Domain.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.nationalty.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.Competences.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.current_job.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 ||
              item.company.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
        })

      }
    },
    // Fetches posts when the component is created.
    created () {
      axios.get(`http://localhost:3003/bookMarkP`)
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
        this.current = this.items[index]
      },
      removeSelectedItem(item,index){
        this.items.splice(index, 1)
        axios.delete('http://localhost:3003/bookMarkP/' +item._id)
          .then((response) => {
            this.$notify({
              group: 'foo',
              type: 'warn',
              title: 'Delete profile from pin bored ',
              text: 'Profile deleted from pin bored',
              duration: 3000,
              speed: 1000,
              data: {}
            })
            console.log(response)
          }, (error) => {
            console.log(response)
          })
        // this.searchInTheList(this.searchItem, this.pagination.currentPage)
      },


      postPost() {
        this.items.push({
          "PIN_DATE": Date(),
          "PIN_TITLE": this.title,
          "PIN_BODY": this.body
        })
          axios.post(`http://localhost:3003/pin_bored`, {
            "PIN_DATE": Date.now,
            "PIN_TITLE": this.title,
            "PIN_BODY": this.body
          })
            .then(response => {
              console.log(response)
            })
            .catch(e => {
              console.log(e)
              this.errors.push(e)
            })

      }



    }
  }

</script>
