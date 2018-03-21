<template>
    <div class="designer-page">
        <Banner></Banner>

        <div class="holder">
            <h2>{{ designer.display_name }}</h2>
            <div class="designer-info">
                <div class="designer-photo">
                    <img v-bind:src="designer.images[276]" alt="designer.display_name">
                </div>
                <!-- / designer photo -->
                <div class="designer-about-me">
                    <template v-for="section in sections">
                        <p>{{ section }}</p>
                    </template>
                    <h3>Fields</h3>
                    <template v-for="designerField in designerFields">
                        {{ designerField }}<span>, </span>
                    </template>
                    <h3>Stats</h3>
                    <p>Followers: {{ designer.stats.followers }}</p>
                    <p>Following: {{ designer.stats.following }}</p>
                    <p>Appreciations: {{ designer.stats.appreciations }}</p>
                    <p>Views: {{ designer.stats.views }}</p>
                    <p>Comments: {{ designer.stats.comments }}</p>
                </div>
                <!-- / designer about me -->
            </div>
            <!-- / designer info -->

           <div class="projects">
               <h2>{{designer.display_name }}'s Projects</h2>
                <ul class="projects-list">
                    <li class="project" v-for="project in projects" v-on:click="showModal(project.id)">
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
</template>

<script>
import Banner from './Banner'
import ProjectDetails from './ProjectDetails'
export default {
    name: 'designer',
    components: {
        Banner, ProjectDetails
    },
    props: ['username'],
    data() {
        return {
            designer: [],
            designerFields: [],
            projects: [],
            sections: [],
            projectID: '',
        }
    },
    methods: {
        getUserDetails: function() {
            this.$http.jsonp('http://behance.net/v2/users/' + this.username + '?api_key=ddao6kwQUp8x90o1u1uk8Lt82md8thrX')
                .then(response => {
                    this.designer = response.body.user;
                    this.sections = response.body.user.sections;
                    this.designerFields = response.body.user.fields;
                    //console.log(JSON.stringify(this.designer))
                    this.getUserProjects();
                });
        },
        getUserProjects: function() {
            this.$http.jsonp('http://behance.net/v2/users/' + this.username + '/projects?api_key=ddao6kwQUp8x90o1u1uk8Lt82md8thrX')
                .then(response => {
                    this.projects = response.body.projects;
                });
        },
        showModal: function(projectID) {
            this.projectID = projectID;
            $('.modal-mask').css('display', 'flex');
            //console.log(projectID)
        }
    },
    created: function() {
        this.getUserDetails();
    }
}
</script>
<!-- styling for the component -->
<style scoped>

li {
    font-size: 0;
}

.designer-info {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 1em;
}

.designer-photo {
    padding: 0 20px;
}

.designer-photo img {
    width: 100%;
}

.designer-about-me {
    text-align: left;
}

.designer-about-me span:last-child {
    display: none;
}

.projects {
    margin: 150px 0 70px;
    border-top: 1px solid #fff;
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
    cursor: pointer;
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
