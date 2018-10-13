<template>
  <div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-sm-4">
      <h2>{{mainTitle}}</h2>
    </div>
    <div class="col-sm-8">
      <div class="title-action">
        <a :href="gotoAction" class="btn btn-primary">{{gotoLabel}}</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "breadcrumb",
      data () {
        return {
        mainTitle:"",
        gotoLabel:"",
        gotoAction:""
        }
      },
      mounted(){
          this.uptadeBr(this.$route.fullPath);
      },
      watch:{
        $route (to, from){
          this.uptadeBr(to.fullPath);
        }
      },
      methods:{
        uptadeBr:function(route){

          switch (route) {
            case "/job/add":
              this.mainTitle = "Create a new job";
              this.gotoLabel="Search jobs List";
              this.gotoAction="#/job/list";
              break;
            case "/job/list":
              this.mainTitle = "Search jobs List";
              this.gotoLabel="Create a new job";
              this.gotoAction="#/job/add";
              break;
          }
        }
      }

    }
</script>

<style scoped>

</style>
