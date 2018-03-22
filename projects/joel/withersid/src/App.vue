<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <addendum></addendum>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './components/Home'
import Addendum from './components/Addendum'
export default {
  name: 'app',
  components: {
    Navbar,
    Home,
    Addendum
  }
}
</script>
<!-- styling for the component -->
<style>
* {
  margin: 0px;
  font-family: 'Raleway', sans-serif;
}
</style>
