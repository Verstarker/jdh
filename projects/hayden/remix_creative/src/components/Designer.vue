<template>
    <div class="designer-page">

        <div class="holder">
            <h2>{{ designer.display_name }}</h2>
            <div class="designer-info">
                <div class="designer-photo">
                    <img v-bind:src="designer.images[276]" alt="designer.display_name">
                </div>
                <!-- / designer photo -->
                <div class="designer-about-me">
                    <template v-for="(section, key) in sections">
                        <h3>{{ key }}</h3>
                        <p>{{ section }}</p>
                    </template>
                    <h3>Fields</h3>
                    <template class="fields" v-for="designerField in designerFields">
                        {{ designerField }}<span>, </span>
                    </template>
                    <h3>Stats</h3>
                    <p>Followers: {{ designer.stats.followers }}</p>
                    <p>Following: {{ designer.stats.following }}</p>
                    <p>Appreciations: {{ designer.stats.appreciations }}</p>
                    <p>Views: {{ designer.stats.views }}</p>
                    <p>Comments: {{ designer.stats.comments }}</p>
                    <template v-if="designer.website">
                        <h3>Website</h3>
                        <a href="designer.website" target="_blank">{{ designer.website }}</a>
                    </template>
                    <template v-if="socialLinks">
                        <div class="social-links">
                            <template  v-for="socialLink in socialLinks">
                                <a v-bind:href="socialLink.url" target="_blank">
                                    <template v-if="socialLink.service_name === 'Facebook'">
                                        <span class="mdi mdi-facebook"></span>
                                    </template>
                                    <template v-if="socialLink.service_name === 'Twitter'">
                                        <span class="mdi mdi-twitter"></span>
                                    </template>
                                    <template v-if="socialLink.service_name === 'Instagram'">
                                        <span class="mdi mdi-instagram"></span>
                                    </template>
                                    <template v-if="socialLink.service_name === 'LinkedIn'">
                                        <span class="mdi mdi-linkedin"></span>
                                    </template>
                                    <template v-if="socialLink.service_name === 'Tumblr'">
                                        <span class="mdi mdi-tumblr"></span>
                                    </template>
                                    <template v-if="socialLink.service_name === 'Vimeo'">
                                        <span class="mdi mdi-vimeo"></span>
                                    </template>
                                </a>
                            </template>
                        </div><!-- / social links -->
                    </template>
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

            <transition name="fade">
                <ProjectDetails v-bind:projectID="projectID" v-bind:isShowModal="isShowModal"></ProjectDetails>
            </transition>

        </div>
        <!-- / holder -->
    </div>
</template>

<script>
import ProjectDetails from './ProjectDetails'
export default {
    name: 'designer',
    components: {
        ProjectDetails
    },
    props: ['username'],
    data() {
        return {
            designer: [],
            designerFields: [],
            projects: [],
            sections: [],
            projectID: '',
            socialLinks: [],
            isShowModal: false
        }
    },
    methods: {
        getUserDetails: function() {
            this.$http.jsonp('http://behance.net/v2/users/' + this.username + '?api_key=ddao6kwQUp8x90o1u1uk8Lt82md8thrX')
                .then(response => {
                    this.designer = response.body.user;
                    this.sections = response.body.user.sections;
                    this.designerFields = response.body.user.fields;
                    this.socialLinks = response.body.user.social_links;
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
            this.isShowModal = true;
            $('.modal-mask').css('display', 'flex')
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
    margin: 0;
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

.fields span:last-child {
    display: none;
}

.social-links {
    margin-top: 20px;
}

.social-links a {
    display: inline-block;
    margin-right: 10px;
}

.social-links span {
    background-color: #fff;
    color: #292929;
    padding: 5px 10px;
    border-radius: 50%;
    font-size: 30px;
}

.social-links span:hover {
    background-color:#292929;
    color: #fff;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 1340px){
    .projects-list {
        grid-template-columns: repeat(4, 4fr);
    }
}

@media only screen and (max-width: 950px){
    .projects-list {
        grid-template-columns: repeat(3, 3fr);
    }
}

@media only screen and (max-width: 700px){
    .projects-list {
        grid-template-columns: repeat(2, 2fr);
    }
    .designer-info {
        grid-template-columns: 1fr
    }
}

@media only screen and (max-width: 510px){
    .projects-list {
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>
