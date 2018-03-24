<template>
    <div id="app" v-bind:class="{'mobile-nav-active': isMobile}">
        <nav class="mobile-nav">
            <header v-on:click="displayMobileMenu()">Close
                <span class="mdi mdi-close"></span>
            </header>
            <router-link v-bind:to="'/'">Home</router-link>
            <router-link v-bind:to="'/designers'">Our Designers</router-link>
            <router-link v-bind:to="'/about'">About</router-link>
        </nav>
        <header class="main-header">
            <div class="logo">
                <router-link v-bind:to="'/'">
                    <img src="./assets/remix-creative-logo.png" alt="">
                </router-link>
            </div>
            <!-- / logo -->
            <nav class="main-nav">
                <router-link v-bind:to="'/'">Home</router-link>
                <router-link v-bind:to="'/designers'">Our Designers</router-link>
                <router-link v-bind:to="'/about'">About</router-link>
            </nav>
            <aside class="mobile-nav-trigger" v-on:click="displayMobileMenu()">
                <span class="mdi mdi-menu"></span>
            </aside>
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
                        email:
                        <a href="#">{{ email }}</a>
                    </div>
                    <div class="address">
                        address: {{ address }}
                    </div>
                </div>
                <!-- / contact info -->
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
                    </div>
                    <!-- / social media icons -->
                </div>
                <!-- / social media -->
            </div>
            <!-- / holder -->
        </footer>
    </div>
    <!-- / app -->
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
            address: '7 Hindess St, Christchurch 8025',
            isMobile: false
        }
    },
    components: {
        Banner
    },
    methods: {
        displayMobileMenu: function() {
            this.isMobile = !this.isMobile
        }
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

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}

a:hover {
    color: #292929;
}

a,
a:hover,
span {
    transition: all 0.3s linear;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
}

.main-header {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 1em;
    padding: 10px 30px;
}

.main-header .logo {
    font-size: 0;
}

.mobile-nav {
    display: none;
    width: 350px;
    position: fixed;
    left: -350px;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    overflow: auto;
    background-color: #355c7d;
    transition: left .2s ease;
    z-index: 3000;
}

.mobile-nav header {
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 10px;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}

.mobile-nav a {
    display: block;
    text-align: center;
    padding: 10px 0;
    margin: 0;
}

.mobile-nav-active .mobile-nav {
    left: 0;
    display: block;
}

.mobile-nav-trigger {
    display: none;
}

.main-nav {
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
    padding: 0 20px;
}

footer {
    border-top: 1px solid #fff;
    padding: 0 20px;
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    opacity: 0;
}

@media only screen and (max-width: 1024px) {
    .main-nav {
        display: none;
    }

    .mobile-nav-trigger {
        display: block;
        position: absolute;
        top: 45px;
        right: 30px;
        font-size: 40px;
        cursor: pointer;
        color: #fff;
    }
}

@media only screen and (max-width: 640px) {
    .main-header {
        grid-template-columns: 1fr
    }

    .main-header img {
        width: 100%;
    }

    .mobile-nav-trigger {
        position: inherit;
        text-align: right;
    }
}

@media only screen and (max-width: 510px) {
    footer .holder {
        grid-template-columns: 1fr;
    }

    .contact-info,
    .social-media {
        text-align: center;
    }
}
</style>
