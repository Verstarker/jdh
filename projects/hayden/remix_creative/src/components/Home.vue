<template>
    <div class="home">
        <Banner></Banner>

        <div class="holder">
            <div class="projects">
                <ul class="projects-list">
                    <li class="project" v-for="project in projects.slice(12)">
                        <a v-bind:href="project.url" target="_blank">
                            <template v-if="project.covers[404]">
                                <img v-bind:src='project.covers[404]' alt="project.name">
                            </template>
                            <template v-else>
                                <img v-bind:src='project.covers.original' alt="project.name">
                            </template>
                            <div class="project-hover">
                                <h5>{{ project.name }}</h5>
                                <template v-for="field in fields">
                                    {{ field }}<span>, </span>
                                </template>
                            </div>
                            <!-- / project hover -->
                        </a>
                    </li>
                </ul>
            </div>
            <!-- / projects -->
        </div>
        <!-- / holder -->
    </div>
    <!-- / home -->
</template>

<script>
import Banner from './Banner'
export default {
    name: 'home',
    data() {
        return {
            projects: [],
            users: ['mattharvey', 'vitorugo', 'rafaeldraws', 'stanleysun'],
            fields: []
        }
    },
    components: {
        Banner
    },
    methods: {
        getProjects: function() {
            this.$http.jsonp('http://behance.net/v2/users/mattharvey/projects?api_key=ddao6kwQUp8x90o1u1uk8Lt82md8thrX')
                .then(response => {
                    this.projects = response.body.projects;
                    this.fields = response.body.projects.fields;
                    this.shuffleArray(this.projects);
                });
        },
        shuffleArray: function(array) {
            var shuffle = require('shuffle-array');
            shuffle(array);
        }
    },
    created: function() {
        this.getProjects();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.projects {
    margin-top: 70px;
}

.projects-list {
    display: grid;
    grid-template-columns: repeat(6, 6fr);
    grid-gap: 1em;
}

.projects-list img {
    height: 300px;
    object-fit: cover;
    width: 100%;
}

.project:hover img {
    opacity: 0.5;
}

.project {
    position: relative;
}

.project-hover {
    display: none;
    background: #fff;
    padding: 10px;
    width: 70%;
    color: #292929;
    border-radius: 20px;
}

.project-hover h5,
.project-hover p {
    font-size: 12px;
}

.project:hover .project-hover {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
