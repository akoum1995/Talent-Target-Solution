<template>
  <div>
    <div id="wrapper">
      <left-sidebar/>
      <div id="page-wrapper" class="gray-bg">
        <navbar/>
        <breadcrumb/>
        <notifications group="foo" />
        <router-view></router-view>
        <footer-tts/>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import LeftSidebar from './components/LeftSidebar'
  import Breadcrumb from './components/Breadcrumb'
  import FooterTts from './components/Footer'
  export default {
  name: 'app',
  components:{
    LeftSidebar,
    Navbar,
    FooterTts,
    Breadcrumb
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
