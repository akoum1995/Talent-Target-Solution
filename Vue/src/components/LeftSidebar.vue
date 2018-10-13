<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu">
        <li class="nav-header">
          <div class="logo-element">
            TTS
          </div>
        </li>
        <li class="active"> <!--landing_link ,special_link-->
          <a href="#"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboards</span> <span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li><a href="#">Dashboard v.1</a></li>
          </ul>
        </li>
        <li class=""> <!--landing_link ,special_link-->
          <a href="#"><i class="fa fa-briefcase"></i> <span class="nav-label">Search Jobs</span> <span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/job/add">Create a search job</router-link>
              <router-link to="/job/list">Search job list</router-link>
            </li>

          </ul>

        </li>
        <li class=""> <!--landing_link ,special_link-->
          <a href="#"><i class="fa fa-briefcase"></i> <span class="nav-label">Manage profiles</span> <span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/profiles/all">Profiles</router-link>
              <router-link to="/profiles/pin">Pin bored</router-link>
            </li>

          </ul>

        </li>
        <li class=""> <!--landing_link ,special_link-->
          <a href="#"><i class="fa fa-briefcase"></i> <span class="nav-label">Statistics</span> <span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/evolution">Evolutions</router-link>
              <router-link to="/reporting">Reporting</router-link>
              <router-link to="/help">Help</router-link>
            </li>

          </ul>

        </li>
      </ul>

    </div>
  </nav>

</template>

<script>
    export default {
        name: "left-sidebar"
    }
</script>

<style scoped>

</style>
