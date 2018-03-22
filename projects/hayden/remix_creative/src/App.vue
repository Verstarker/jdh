<template>
    <div id="app">
        <header>
            <div class="logo">
                <router-link v-bind:to="'/'">
                    <img src="./assets/remix-creative-logo.png" alt="">
                </router-link>
            </div>
            <!-- / logo -->
            <nav>
                <router-link v-bind:to="'/'">Home</router-link>
                <router-link v-bind:to="'/designers'">Our Designers</router-link>
                <router-link v-bind:to="'/about'">About</router-link>
            </nav>
        </header>

        <Banner></Banner>

        <div id="page">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <!-- / page -->

        <footer>
            <div class="holder">
                <div class="contact-info">
                    <h4>Contact us at</h4>
                    <div class="phone-number">
                        ph: {{ ph }}
                    </div>
                    <div class="email">
                        email: <a href="#">{{ email }}</a>
                    </div>
                    <div class="address">
                        address: {{ address }}
                    </div>
                </div><!-- / contact info -->
                <div class="social-media">
                    <h4>Also find us at:</h4>
                    <div class="social-media-icons">
                        <a href="#" target="_blank">
                            <span class="mdi mdi-facebook"></span>
                        </a>
                        <a href="#" target="_blank">
                            <span class="mdi mdi-twitter"></span>
                        </a>
                        <a href="#" target="_blank">
                            <span class="mdi mdi-instagram"></span>
                        </a>
                        <a href="#" target="_blank">
                            <span class="mdi mdi-linkedin"></span>
                        </a>
                    </div><!-- / social media icons -->
                </div><!-- / social media -->
            </div><!-- / holder -->
        </footer>
    </div><!-- / app -->
    <!-- / app -->
</template>

<script>

import Banner from 'components/Banner'
export default {
    name: 'app',
    data() {
        return {
            ph: '03-366-6666',
            email: 'hello@remixcreative.co.nz',
            address: '7 Hindess St, Christchurch 8025'
        }
    },
    components: {
        Banner
    }
}
</script>
<!-- styling for the component -->
<style>

html {
    background: #355c7d;
}

body { 
    margin: 0;
    background: -webkit-linear-gradient(180deg, rgb(246, 114, 128), rgb(53, 92, 125));
    background: linear-gradient(180deg, rgb(246, 114, 128), rgb(53, 92, 125));
    font-family: 'IBM Plex Serif', Helvetica, Arial, sans-serif;
}

a {
    color: #fff;
    text-decoration: none;
}

h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}

a:hover {
    color: #292929;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
}

header {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 1em;
    padding: 10px 30px;
}

header .logo {
    font-size: 0;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: end;
}

nav a {
    font-size: 30px;
    margin: 1.2em 1em;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}

.holder {
    max-width: 1500px;
    margin: 0 auto;
}

footer {
    border-top: 1px solid #fff;
}

footer .holder {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    padding: 50px 0;
    margin: 0 auto;
    max-width: 1200px;
}

.contact-info {
    text-align: left;
}

.social-media {
    text-align: right;
}

.social-media-icons span {
    background: #292929;
    font-size: 30px;
    padding: 5px 10px;
    border-radius: 50%;
    cursor: pointer;
}

.social-media-icons span:hover {
    background: #eee;
    color: #292929;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
