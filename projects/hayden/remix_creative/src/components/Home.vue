<template>
    <div class="home">

        <div class="holder">
            <h2>Here's some of the stuff we do</h2>
            <div class="projects">
                <ul class="projects-list">
                    <li class="project" v-for="project in projects.slice(0, 12)"  v-on:click="showModal(project.id)">
                        <template v-if="project.covers[404]">
                            <img v-bind:src='project.covers[404]' alt="project.name">
                        </template>
                        <template v-else>
                            <img v-bind:src='project.covers.original' alt="project.name">
                        </template>
                        <div class="project-hover">
                            <h5>{{ project.name }}</h5>
                        </div>
                        <!-- / project hover -->
                    </li>
                </ul>
            </div>
            <!-- / projects -->

            <ProjectDetails v-bind:projectID="projectID"></ProjectDetails>

        </div>
        <!-- / holder -->
    </div>
    <!-- / home -->
</template>

<script>

import ProjectDetails from './ProjectDetails'
export default {
    name: 'home',
    data() {
        return {
            projects: [],
            users: ['mattharvey', 'vitorugo', 'rafaeldraws', 'genevieveg3dd5'],
            projectID: ''
        }
    },
    components: {
        ProjectDetails
    },
    methods: {
        getProjects: function() {
            var randomIndex = Math.floor(Math.random()*this.users.length);
            this.$http.jsonp('http://behance.net/v2/users/' + this.users[randomIndex] + '/projects?api_key=ddao6kwQUp8x90o1u1uk8Lt82md8thrX')
                .then(response => {
                    this.projects = response.body.projects;
                    this.shuffleArray(this.projects);
                });
        },
        shuffleArray: function(array) {
            var shuffle = require('shuffle-array');
            shuffle(array);
        },
        showModal: function(projectID) {
            this.projectID = projectID;
            $('.modal-mask').css('display', 'flex');
            //console.log(projectID)
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
    margin: 70px 0;
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

.projects-list li {
    margin: 0;
}

.project:hover img {
    opacity: 0.5;
}

.project {
    position: relative;
    cursor: pointer;
}

.project-hover {
    display: none;
    background: #fff;
    padding: 10px;
    width: 70%;
    color: #292929;
    border-radius: 20px;
    visibility: hidden;
    opacity: 0;
    transition: visibility .5s ease, opacity .5 ease;
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
    opacity: 1;
    visibility: visible;
}

@media only screen and (max-width: 1340px){
    .projects-list {
        grid-template-columns: repeat(4, 4fr);
    }
}

@media only screen and (max-width: 950px){
    h1 {
        font-size: 90px;
    }

    .projects-list {
        grid-template-columns: repeat(3, 3fr);
    }
}

@media only screen and (max-width: 700px){
    .projects-list {
        grid-template-columns: repeat(2, 2fr);
    }
}

@media only screen and (max-width: 640px){
    h2 {
        font-size: 40px;
    }
}

@media only screen and (max-width: 510px){
    .projects-list {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
