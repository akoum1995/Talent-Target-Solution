<template>
  <div class="wrapper wrapper-content animated fadeIn">
    <div class="row">
      <div class="col-lg-12">
      <div class="ibox float-e-margins">
        <div class="ibox-title">
          <h5>Search jobs List </h5>
        </div>
        <div class="ibox-content">
          <div id="people">
            <v-server-table :url="apiUrl" :columns="columns" :options="options" ref="table">
              <template slot="start_date" slot-scope="props">
                <div class="text-center">
                  <span class="label" v-if="!props.row.start_date">ND</span>
                  <span v-else>{{props.row.start_date}}</span>
                </div>
              </template>
              <template slot="profiles_number" slot-scope="props">
                <div class="text-center">
                  <span class="label">{{props.row.profiles_number }}</span>
                </div>
              </template>
              <template slot="state" slot-scope="props">
                  <div class="text-center">
                    <span v-if="props.row.state=='created'" class="label label-info">{{props.row.state}}</span>
                    <span v-if="props.row.state=='running'" class="label label-primary">{{props.row.state}}</span>
                    <span v-if="props.row.state=='blocked'" class="label label-warning">{{props.row.state}}</span>
                    <span v-if="props.row.state=='terminated'" class="label label-success">{{props.row.state}}</span>
                  </div>
              </template>
              <template slot="action" slot-scope="props">
                <div class="btn-group">
                  <button @click="start(props.row._id)" class="btn-white btn btn-xs" :disabled="props.row.state=='running'">Start</button>
                  <button @click="stop(props.row._id)" class="btn-white btn btn-xs" :disabled="props.row.state!='running'">Stop</button>
                  <button @click="remove(props.row._id)" class="btn-white btn btn-xs">Remove</button>
                  <a v-bind:href="'#/job/profiles/'+props.row._id" class="btn-white btn btn-xs">Details</a>
                </div>
              </template>
            </v-server-table>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import { startJob,stopJob } from '../../services/Modules';

  export default {
        name: "list-job",
      data () {
        return {
          apiUrl:"http://localhost:3003/api/v1/composer/job",
          columns: ['name','state', 'profiles_number','start_date','action'],
          options: {
            clientMultiSorting:true,
            responseAdapter: (resp) =>{
              return {
                data: resp,
                count: resp.length
              }
            }
          }
        }
      },
      mounted(){

      },
      methods: {

        async start(id){

          await startJob(id);
          this.$refs.table.refresh();
        },
        async stop(id){
          await stopJob(id).then(()=>{
            this.$refs.table.refresh();
          });

        },
        remove(id){
          alert(id)
        }
      }
      }


</script>

<style>
  .VueTables__sortable {
    text-align: center !important;
  }
  tr td{
    text-align: center !important;
  }
</style>
