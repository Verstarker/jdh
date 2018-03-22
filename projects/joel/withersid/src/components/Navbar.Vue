<template>
  <div class="navbar">
    <router-link v-bind:to="'/'" class="navlink navlink-left">Home</router-link>
    <router-link v-bind:to="'/designers'" class="navlink navlink-left">Designers</router-link>
    <router-link v-bind:to="'/'"><img class="main-logo" src="../assets/wwd-logo-blue.png"></router-link>
    <router-link v-bind:to="'/contact'" class="navlink navlink-right">Contact</router-link>
    <router-link v-bind:to="'/about'" class="navlink navlink-right">About</router-link>
    <div class="mdi mdi-menu" v-on:click="showNav()">
      <div class="small-nav-container">
        <div class="small-nav-menu">
          <div class="small-navlink-container">
            <router-link v-bind:to="'/'" class="small-nav-link">Home</router-link>
          </div>
          <div class="small-navlink-container">
            <router-link v-bind:to="'/designers'" class="small-nav-link">Designers</router-link>
          </div>
          <div class="small-navlink-container">
            <router-link v-bind:to="'/contact'" class="small-nav-link">Contact</router-link>
          </div>
          <div class="small-navlink-container">
            <router-link v-bind:to="'/about'" class="small-nav-link">About</router-link>
          </div>
          <div class="small-close-container">
            <p class="close-link">Close</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    showNav: function() {
      $('.small-nav-container').toggle();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

a {
  text-decoration: none;
}

.navbar {
  width: 100%;
  height: 75px;
  background-color: #E4EACE;
  margin: auto;
  text-align: center;
  padding-top: 25px;
}

.main-logo {
  display: inline-block;
  width: 150px;
  margin-top: -20px;
}

.navlink {
  display: inline-block;
  width: 175px;
  font-size: 30px;
  color: #2B3D4E;
  border-bottom: 3px solid #2B3D4E;
  font-weight: 600;
  vertical-align: top;
  transition: 0.3s;
  text-transform: uppercase;
}

.navlink-left {
  margin: 0px 5vw 0px 0px;
  text-align: right;
  padding: 0px 0px 0px 50px;
}

.navlink-right {
  margin: 0px 0px 0px 5vw;
  text-align: left;
  padding: 0px 50px 0px 0px;
}

.navlink:hover {
  color: #004177;
  border-bottom: 3px solid #004177;
  transition: 0.3s;
}

.mdi-menu {
  color: #2B3D4E;
  font-size: 50px;
  display: none;
  cursor: pointer;
}

.small-nav-container {
  position: relative;
  display: none;
}

.small-nav-menu {
  position: absolute;
  right: 0px;
  width: 300px;
  background-color: #2B3D4E;
  text-align: left;
  color: #E4EACE;
  z-index: 5;
  text-transform: uppercase;
  font-size: 30px;
}

.small-navlink-container {
  border-bottom: 2px solid #E4EACE;
  width: 100%;
  transition: 0.3s;
}

.small-nav-link {
  color: #E4EACE;
  padding: 15px 15px;
  height: 100%;
  display: block;
}

.small-close-container {
  background-color: #E4EACE;
  width: 100%;
  transition: 0.3s;
}

.close-link {
  color: #2B3D4E;
  padding: 15px;
}

.small-navlink-container:hover {
  background-color: #253544;
  transition: 0.3s;
}

.small-close-container:hover {
  background-color: #CBD0B7;
  transition: 0.3s;
}

@media only screen and (max-width: 1360px) {
  .navlink {
    display: none;
  }

  .mdi-menu {
    position: absolute;
    display: inline-block;
    vertical-align: top;
    right: 5vw;
  }
}
</style>
