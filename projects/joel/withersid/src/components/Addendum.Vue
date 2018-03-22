<template>
  <div class="addendum">
    <div class="footer-container">
      <div class="contact">
        <h1 class="footer-header">Contact us</h1>
        <a href="mailto:withersid@gmail.com" class="contact-text">withersid@gmail.com</a>
        <p class="contact-text">027 123 4567</p>
        <p class="contact-text">03 123 4567</p>
      </div>
       <router-link v-bind:to="'/'"><img class="footer-logo" src="../assets/wwd-logo-cream.png"></router-link>
      <div class="social-media-footer">
        <h1 class="footer-header">Find us</h1>
        <div class="social-media-links">
          <a href="http://www.facebook.com" target="_blank"><img class="social-logo" src="../assets/facebook-logo.png"></a>
          <a href="http://www.twitter.com" target="_blank"><img class="social-logo" src="../assets/twitter-logo.png"></a>
          <a href="http://www.behance.net" target="_blank"><img class="social-logo" src="../assets/behance-logo.png"></a>
          <a href="http://www.youtube.com" target="_blank"><img class="social-logo" src="../assets/youtube-logo.png"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addendum'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.addendum {
  height: 200px;
  padding-top: 50px;
  color: #E4EACE;
  background-color: #2B3D4E;
  margin: auto;
  text-align: center;
}

.footer-container {
  margin: auto;
  /*margin-left: -25px;*/
}

.contact {
  display: inline-block;
  vertical-align: top;
  text-align: right;
}

.footer-header {
  font-weight: 500;
  font-size: 35px;
}

.contact-text {
  font-size: 20px;
  padding: 2px;
  color: #E4EACE;
  text-decoration: none;
}

.footer-logo {
  height: 150px;
  display: inline-block;
  vertical-align: top;
  padding: 0px 50px;
}

.social-media-footer {
  display: inline-block;
}

.social-media-links {
  width: 114px;
}

.social-logo {
  height: 50px;
  padding: 2px;
}

@media only screen and (max-width: 600px) {
  .footer-header {
    font-size:25px;
  }

  .contact-text {
    font-size: 15px;
  }

  .social-media-links {
    width: 100px;
  }

  .social-logo {
    height: 40px;
  }

  .footer-logo {
    height: 95px;
    padding: 0px 30px;
  }
}
</style>
