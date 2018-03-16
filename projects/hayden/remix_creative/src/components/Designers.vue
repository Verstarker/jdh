<template>
    <div class="our-people">
        <Banner></Banner>

        <div class="holder">
            <div class="designers">
                <h2>Here are our people</h2>
                <ul class="designer-list">
                    <li class="designer" v-for="designer in designers" v-if="designer.images[276]">
                        <router-link v-bind:to="'/designers/' + designer.username">
                            <img v-bind:src="designer.images[276]" alt="">
                            <h3>{{ designer.first_name }} {{ designer.last_name }}</h3>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- / designers -->
        </div>
        <!-- / holder -->
    </div>
    <!-- / our people -->
</template>

<script>
import Banner from './Banner'
export default {
    name: 'designers',
    data() {
        return {
            designers: []
            //users: ['mattharvey', 'vitorugo', 'rafaeldraws', 'stanleysun']
        }
    },
    components: {
        Banner
    },
    methods: {
        getDesigners: function() {
            this.$http.jsonp('http://behance.net/v2/users/haydenwrat86b8/following?api_key=ddao6kwQUp8x90o1u1uk8Lt82md8thrX')
                .then(response => {
                    this.designers = response.body.following;
                    //console.log(JSON.stringify(this.designers))
                });
        },
    },
    created: function() {
        this.getDesigners();
    }
}
</script>

<!-- styling for the component -->
<style>
h2 {
    font-size: 50px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

.banner {
    position: relative;
    overflow: hidden;
}

.banner img {
    opacity: 0.7;
}

.banner h1 {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 140px;
    text-transform: uppercase;
    font-weight: 800;
    width: 80%;
}

.designers {
    margin: 50px 0 100px;
}

.designer-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr
}

.designer img {
    border-radius: 50%;
}
</style>
