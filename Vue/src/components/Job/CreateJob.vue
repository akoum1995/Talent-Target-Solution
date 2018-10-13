<template>
  <div>
    <div class="wrapper wrapper-content animated fadeIn">
      <div class="row">
        <div class="col-lg-12">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>Create a new job </h5>
            </div>
            <div class="ibox-content">
              <transition name="fade">
                <div v-if="errors.length" class="alert alert-danger">
                  <ul>
                    <li v-for="error in errors"><strong>{{error.name}}:</strong> {{error.desc}}.</li>
                  </ul>
                </div>
              </transition>
              <div v-if="!spinner">
                <form method="get" class="form-horizontal">
                  <div class="form-group">
                    <label for="name" class="col-sm-2 control-label">Name</label>
                    <div class="col-sm-10">
                      <input v-model="name" name="name" id="name" placeholder="Name" class="form-control"/>
                    </div>
                  </div>
                  <div class="hr-line-dashed"></div>
                  <div class="form-group">
                    <label for="countries" class="col-sm-2 control-label">Countries</label>
                    <div class="col-sm-10">
                      <multiselect
                        id="countries"
                        :multiple="true"
                        :searchable="true"
                        :loading="isLoading"
                        :hide-selected="true"
                        :close-on-select="false"
                        :show-labels="false"
                        v-model="countriesSelected"
                        label="name" track-by="code"
                        open-direction="bottom"
                        :options="countries"
                        placeholder="Select countries"
                      />
                      <span class="help-block m-b-none">Select the countries of the desired profiles</span>
                    </div>
                  </div>
                  <div class="hr-line-dashed"></div>
                  <div class="form-group">
                    <label for="modules" class="col-sm-2 control-label">Modules</label>
                    <div class="col-sm-10">
                      <multiselect

                        id="modules"
                        :multiple="true"
                        :searchable="true"
                        :loading="isLoading"
                        :hide-selected="true"
                        :close-on-select="false"
                        :show-labels="false"
                        v-model="selectedModules"
                        label="name" track-by="_id"
                        open-direction="bottom"
                        :options="modules"
                        placeholder="Select modules"
                      />
                      <span class="help-block m-b-none">Select the countries of the desired profiles</span>
                    </div>
                  </div>
                  <div class="hr-line-dashed"></div>
                  <div class="form-group">
                    <label for="tags" class="col-sm-2 control-label">Search tags</label>
                    <div class="col-sm-10">
                      <multiselect
                        id="tags"
                        :hide-selected="true"
                        open-direction="bottom"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="tag"
                        track-by="tag"
                        :options="tags"
                        :show-labels="false"
                        :multiple="true"
                        :taggable="true"
                        v-model="selectedTags"
                        @tag="addTag"
                      />
                      <span class="help-block m-b-none">Select the countries of the desired profiles</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-4 col-sm-offset-8">
                      <button class="btn btn-primary pull-right" @click.prevent="CreateJob()">Create</button>
                    </div>
                  </div>
                </form>
              </div>
              <div v-else>
                <div style="text-align: center;">
                  <h4>please wait this may take a few minutes</h4>
                </div>
                <div class="spiner-example">
                  <div class="sk-spinner sk-spinner-cube-grid">
                    <div class="sk-cube"></div>
                    <div class="sk-cube"></div>
                    <div class="sk-cube"></div>
                    <div class="sk-cube"></div>
                    <div class="sk-cube"></div>
                    <div class="sk-cube"></div>
                    <div class="sk-cube"></div>
                    <div class="sk-cube"></div>
                    <div class="sk-cube"></div>
                  </div>
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
  window.$ = window.jQuery = require('jquery');
  import multiselect from 'vue-multiselect'

  import { moduleService,searchTagsService,addSearchTag,countries,getJobByname,runJob } from '../../services/Modules';
  require('../../static/js/plugins/chosen/chosen.jquery');
    export default {
        name: "create-job",
      components: {multiselect},

      data () {

        return {
          errors:[],
          spinner:false,
          countries:countries,
          name:"",
          countriesSelected:[],
          countriesSelectedTeated:[],
          selectedModules: [],
          selectedModulesTeated: [],
          selectedTags: [],
          selectedTagsTeated: [],
          modules: [],
          tags: [],
          isLoading: false
        }
      },
      mounted(){
        $('.chosen-select').chosen({width: "100%"});
        $("#countries_chosen > ul > li > input").addClass("multiselect__input");
        this.load ();
        this.loadTags ();
      },
      methods: {
        load () {
          this.isLoading = false;
          moduleService
            .then(response => {
            this.modules = response.data;
            this.isLoading = false;
          })
            .catch(e => {
              this.isLoading = false;
              this.errors.push({name:"Load modules",desc:"Internal server error"});
          })
        },
        async CreateJob(){
          this.errors = [];
          this.countriesSelected.forEach(value=>{
            this.countriesSelectedTeated.push(value.name)
          });
          this.selectedModules.forEach(value=>{
            this.selectedModulesTeated.push(value._id)
          });
          this.selectedTags.forEach(value=>{
            this.selectedTagsTeated.push(value.tag)
          });

          if(!this.name) this.errors.push({name:"Name",desc:"The name field is required"});
          else{

              if(await getJobByname(this.name))
                this.errors.push({name:"Name",desc:"The name is already in use"});
              }

          if(!this.countriesSelectedTeated.length) this.errors.push({name:"Countries",desc:"Choose at least one country"});
          if(!this.selectedModulesTeated.length) this.errors.push({name:"Modules",desc:"Choose at least one module"});
          if(!this.selectedTagsTeated.length) this.errors.push({name:"Search tags",desc:"Choose at least one search tag"});
          console.log({
            "countries":this.countriesSelectedTeated,
            "tags":this.selectedTagsTeated,
            "name":this.name,
            "modules":this.selectedModulesTeated
          });
          if (this.errors.length==0){
            this.spinner=true;
            try {
              await runJob(this.countriesSelectedTeated, this.selectedTagsTeated, this.name, this.selectedModulesTeated)
              this.spinner=false;
              this.$router.push('/job/list');
            }
            catch(error) {
              console.log(error);
              this.errors.push({name:"Job",desc:"creating job"});
              this.spinner=false;
            }
          }

        },
        loadTags () {
          searchTagsService.then(response => {
            this.tags = response.data;
          }).catch(e => {
            this.errors.push({name:"Load search tag",desc:"Internal server error"});
          })
        },
        addTag (newTag) {
          const tag = {
            tag: newTag,
          };

          addSearchTag(newTag).then(response => {
            this.tags.push(tag);
            this.selectedTags.push(tag);
          }).catch(e => {
            this.errors.push({name:"add Search tag",desc:"Internal server error"});
          })
        }
      }
      }


</script>
<style src="../../static/css/vue-multiselect.min.css"></style>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .spinner1{
    margin-top: 50px;
  }
</style>
