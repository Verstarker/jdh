<template>
  <div id="app">
    <div class="row">
      <div class="column column-3"> 
        <intro></intro>
      </div>
      <div class="column column-3"> 
        <joel></joel>
      </div>
      <div class="column column-3">
        <dan></dan>
      </div>
      <div class="column column-3">
        <hayden></hayden>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from './components/Intro'
import Dan from './components/Dan/Home-Dan'
import Hayden from './components/Hayden/Home-Hayden'
import Joel from './components/Joel/Home-Joel'
export default {
  name: 'app',
  components: {
    Intro, Dan, Hayden, Joel
  }
}
</script>
<!-- styling for the component -->
<style>
body {
  background-color: #191919;
  margin: 0;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

.row { font-size:0; position:relative; }
.column {
  display:inline-block; vertical-align: top; font-size: 16px; min-height:1px; height: 100%;
}
.column img { max-width:100%; height:auto !important; }
    /* columns */

    .column-1   { width: 8.333333333333%; }
    .column-2   { width: 16.66666666667%; }
    .column-3   { width: 25%; }
    .column-4   { width: 33.33333333333%; }
    .column-5   { width: 41.66666666667%; }
    .column-6   { width: 50%; }
    .column-7   { width: 58.33333333333%; }
    .column-8   { width: 66.66666666667%; }
    .column-9   { width: 75% }
    .column-10  { width: 83.33333333333%; }
    .column-11  { width: 91.66666666667%; }
    .column-12  { width: 100%; }

    .column-10-2  { width:10%; }
    .column-15  { width:15%; }
    .column-20  { width:20%; }
    .column-25  { width:25%; }
    .column-30  { width:30%; }
    .column-35  { width:35%; }
    .column-40  { width:40%; }
    .column-45  { width:45%; }
    .column-50  { width:50%; }
    .column-55  { width:55%; }
    .column-60  { width:60%; }
    .column-65  { width:65%; }
    .column-70  { width:70%; }
    .column-75  { width:75%; }
    .column-80  { width:80%; }
    .column-85  { width:85%; }
    .column-90  { width:90%; }
    .column-95  { width:95%; }
    /* end columns */

    /* offsets */
    .row .offset-1   { margin-left: 8.5%; }
    .row .offset-2   { margin-left: 17%; }
    .row .offset-3   { margin-left: 25.5%; }
    .row .offset-4   { margin-left: 34%; }
    .row .offset-5   { margin-left: 42.5%; }
    .row .offset-6   { margin-left: 51%; }
    .row .offset-7   { margin-left: 59.5%; }
    .row .offset-8   { margin-left: 68%; }
    .row .offset-9   { margin-left: 76.5%; }
    .row .offset-10  { margin-left: 85%; }
    .row .offset-11  { margin-left: 93.5%; }
    /* end offsets */
</style>
