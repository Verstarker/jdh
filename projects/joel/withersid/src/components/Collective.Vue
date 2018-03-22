<template>
    <div class="collective">
        <div class="designer-title">
            <img class="designer-pic">
            <div class="designer-title-text">
                <h1>{{ designerName }}</h1>
                <span class="mdi mdi-map-marker"></span>
                <p class="designer-location">{{ designerLocation }}</p>
                <div class="designer-fields-container">
                    <p class="designer-fields" v-for="designerField in designerFields">
                        {{ designerField }}
                        <span>.&nbsp;</span>
                    </p>
                </div>
            </div>
        </div>
        <h1 v-on:click="setProjectDisplay()" class="projects-header active">Projects</h1>
        <h1 v-on:click="setDetailsDisplay()" class="details-header">Details</h1>
        <div class="project-div">
            <div v-on:click="initiateModal(project.id)" class="project" v-for="project in projects">
                <img class="project-image" v-bind:src='project.covers.original'>
                <p class="project-title">{{ project.name }}</p>
                <p class="project-field">{{ project.fields[0] }}</p>
            </div>
        </div>
        <div class="details-container">
            <p class="details-text">Behance: <a class="behance-link" v-on:click="setBehanceURL(ownerBehance)" target="_blank">{{ ownerBehance }}</a></p>
            <p class="details-text">Followers: {{ projectOwnerStats.followers }}</p>
            <p class="details-text">Following: {{ projectOwnerStats.following }}</p>
            <p class="details-text">Appreciations: {{ projectOwnerStats.appreciations }}</p>
            <p class="details-text">Views: {{ projectOwnerStats.views }}</p>
            <p class="details-text">Comments: {{ projectOwnerStats.comments }}</p>
        </div>
        <modal v-bind:projectID="projectID"></modal>
    </div>
</template>

<script>
import Modal from './Modal'
export default {
    name: 'collective',
    props: ['username'],
    data() {
        return {
            designerName: '',
            designerFields: [],
            projectID: '',
            designerLocation: '',
            projects: [],
            projectOwnerStats: [],
            ownerBehance: ''
        }
    },
    components: {
        Modal
    },
    methods: {
        getDesignerInfo: function(username) {
            this.$http.jsonp('http://www.behance.net/v2/users/' + username + '/projects?client_id=H0kzBzX75cebcL11a23UE6feEiqAMiZH')
                .then(response => {
                    this.projects = response.body.projects;
                    this.designerName = this.projects[0].owners[0].display_name;
                    this.designerLocation = this.projects[0].owners[0].location;
                    this.designerFields = this.projects[0].owners[0].fields;
                    this.projectOwnerStats = this.projects[0].owners[0].stats;
                    this.ownerBehance = this.projects[0].owners[0].url;
                    $('.designer-pic').attr('src', this.projects[0].owners[0].images[138])
                });
        },
        initiateModal: function(projectID) {
            this.projectID = projectID;
        },
        setProjectDisplay: function() {
            $('.modal').css('display', 'none');
            $('.project-div').css('display', 'block');
            $('.details-container').css('display', 'none');
            $('.projects-header').addClass('active');
            $('.details-header').removeClass('active');
        },
        setDetailsDisplay: function() {
            $('.project-div').css('display', 'none');
            $('.details-container').css('display', 'block');
            $('.details-header').addClass('active');
            $('.projects-header').removeClass('active');
        },
        setBehanceURL: function (ownerBehance) {
            $('.behance-link').attr('href', ownerBehance)
        }
    },
    created: function(username) {
        this.getDesignerInfo(this.username);
    },
    mounted() {
        this.$on('projectIdChanged', data => {
            //  Resets projectID incase same project is opened
            this.projectID = ''
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

.collective {
    margin: auto;
    text-align: center;
    padding: 150px 0px 100px 0px;
    color: #2B3D4E;
}

h1 {
    font-size: 50px;
    font-weight: 600;
    color: #2B3D4E;
}

.designer-title {
    margin: auto;
}

.designer-pic {
    border-radius: 50%;
    display: inline-block;
    border: 2px solid #2B3D4E;
}

.designer-title-text {
    display: inline-block;
    vertical-align: top;
    padding: 5px 0px 0px 25px;
    text-align: left;
}

.mdi-map-marker {
    font-size: 30px;
    display: inline-block;
}

.designer-location {
    font-size: 25px;
    font-weight: 500;
    display: inline-block;
}

.designer-fields-container {
    padding-top: 5px;
}

.designer-fields {
    display: inline-block;
}

.projects-header {
    margin: 50px 50px 0px 50px;
    display: inline-block;
    cursor: pointer;
}

.details-header {
    margin: 50px 50px 0px 50px;
    display: inline-block;
    cursor: pointer;
}

.active {
    text-decoration: underline;
}

.project-div {
    width: 810px;
    margin: auto;
    padding-top: 25px;
}

.project {
    display: inline-block;
    width: 350px;
    margin: 25px;
    border: 2px solid #2B3D4E;
    border-radius: 3px;
    height: 425px;
    vertical-align: top;
    cursor: pointer;
    overflow: hidden;
}

.project-image {
    width: 100%;
    height: 276px;
    border-bottom: 2px solid #2B3D4E;
    transition: 0.3s;
}

.project-title {
    font-size: 25px;
    font-weight: 600;
    text-align: left;
    padding: 0px 25px 10px 25px;
}

.details-container {
    display: none;
    padding-top: 100px;
    font-size: 35px;
    text-align: left;
    width: 850px;
    margin: auto;
}

.details-text {
    padding-bottom: 10px;
}

.behance-link {
    text-decoration: underline;
    color: #2B3D4E;
    cursor: pointer;
}

.project:hover .project-image {
    filter: brightness(90%);
    transition: 0.3s;
}

@media only screen and (max-width: 820px) {
    .project-div {
        width: 405px;
    }

    .project {
        width: 170px;
        height: 210px;
        margin: 12px;
    }

    .project-image {
        height: 138px;
    }

    .project-title {
        font-size: 15px;
        font-weight: 500;
    }
}
</style>
