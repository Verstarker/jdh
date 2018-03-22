<template>
    <div class="modal">
        <div class="modal-container">
            <div class="project-container">
                <div class="project-section" v-if="selectedProject.modules">
                    <div v-for="mod in selectedProject.modules">
                        <div v-if="mod.sizes">
                            <img class="project-image" v-bind:src="mod.sizes.original">
                        </div>
                        <div v-else v-html="mod.text"></div>
                    </div>
                </div>
            </div>
            <div class="project-info-container" v-if="selectedProject.modules">
                <div class="project-info-section">
                    <h2 class="project-name-title">{{selectedProject.name}}</h2>
                    <div v-on:click="closeModal()">
                        <router-link v-bind:to="'/designer/' + owner.username">
                            <div class="project-owner-container">
                                <img class="project-owner-pic" v-bind:src="owner.images[50]">
                                <h3 class="project-owner-title">{{owner.display_name}}</h3>
                            </div>
                        </router-link>
                    </div>
                    <h4>Description</h4>
                    <p class="project-description">{{selectedProject.description}}</p>
                    <div class="project-statistics">
                        <h4>Project Statistics</h4>
                        <p>Views: {{selectedProject.stats.views}}</p>
                        <p>Appreciations: {{selectedProject.stats.appreciations}}</p>
                        <p>Comments: {{selectedProject.stats.comments}}</p>
                    </div>
                </div>
            </div>
            <span class="mdi mdi-close close-btn" v-on:click="closeModal()"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal',
    props: ['projectID'],
    data() {
        return {
            selectedProject: {},
            owner: {}
        }
    },
    methods: {
        getProjectData: function(projectID) {
            this.$http.jsonp('http://www.behance.net/v2/projects/' + projectID + '?api_key=H0kzBzX75cebcL11a23UE6feEiqAMiZH')
                .then(response => {
                    this.selectedProject = response.body.project;
                    this.owner = this.selectedProject.owners[0];
                });
        },
        closeModal: function() {
            $('.modal').css('display', 'none');
            // Emits back to home page to reset projectID
            this.$parent.$emit('projectIdChanged');
        }
    },
    watch: {
        projectID: function(projectID) {
            if (projectID !== '') {
                $('.modal').css('display', 'block');
                this.getProjectData(projectID);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

.modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity .3s ease;
    display: none;
    color: #2B3D4E;
}

.modal-container {
    padding-top: 125px;
    width: 80%;
    height: 800px;
    margin: auto;
}

.project-container {
    width: 60%;
    height: 100%;
    background-color: white;
    display: inline-block;
    vertical-align: top;
    overflow-y: scroll;
}

.project-section {
    padding: 10px;
}

.project-image {
    width: 100%;
}

.project-info-container {
    width: 400px;
    height: 100%;
    background-color: white;
    display: inline-block;
    vertical-align: top;
    text-align: left;
}

.project-info-section {
    padding: 10px;
    height: 100%;
}

.project-name-title {
    padding-bottom: 15px;
    font-size: 30px;
    font-weight: 500;
}

.project-owner-pic {
    height: 30px;
    border-radius: 50%;
    display: inline-block;
}

.project-owner-title {
    padding: 5px 0px 20px 10px;
    vertical-align: top;
    font-weight: 600;
    display: inline-block;
    color: #2B3D4E;
}

.project-description {
    padding-bottom: 50px;
}

.project-statistics {
    vertical-align: text-bottom;
    width: 100%;
}

.close-btn {
    font-size: 75px;
    color: white;
    padding-left: 15px;
    cursor: pointer;
    display: inline-block;
}

@media only screen and (max-width: 1573px) {
    .modal-container {
        padding-top: 50px;
    }
}

@media only screen and (max-width: 1300px) {
    .project-container {
        width: 100%;
        height: 650px;
    }
    .project-info-container {
        margin-top: 5px;
        width: 100%;
        height: 250px;
        overflow-y: scroll;
    }
}
</style>