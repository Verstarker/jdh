<template>
    <div class="modal-mask">
        <div id="modal">
            <slot name="header">
                <div class="heading">
                    <h2>{{projectDetails.name}}</h2>
                </div>
                <!-- / heading -->
                <div class="author" v-on:click="closeModal()">
                    <router-link v-bind:to="'/designers/' + projectDetails.owners[0].username">
                        <img v-bind:src="projectDetails.owners[0].images[138]" alt="">
                        <h3 v-if="projectDetails.owners[0].display_name">Created By:<br>{{ projectDetails.owners[0].display_name }}</h3>
                    </router-link>
                </div>
                <!-- / author -->
            </slot>
            <slot name="body">
                <div class="project-content">
                    <div class="project-works" v-for="mod in projectDetails.modules">
                        <template v-if="mod.sizes">
                            <img v-bind:src="mod.sizes.max_1240" alt="">
                        </template>
                        <template v-else>
                            <p v-html="mod.text"></p>
                        </template>
                    </div>
                    <!-- / project works -->
                </div>
                <!-- / project content -->
                <div class="project-info">
                    <h3>Stats</h3>
                    <div class="project-stats">
                        <template v-for="(projectStat, key) in projectDetails.stats">
                            {{ key }}: {{ projectStat }}<br>
                        </template>
                    </div>
                    <!-- / project stats -->
                    <div class="project-description" v-if="projectDetails.description">
                        <h3>Description</h3>
                        <p>{{ projectDetails.description }}</p>
                    </div>
                    <!-- / project description -->
                </div>
                <!-- / project info -->
            </slot>
        </div>
        <!-- / modal -->
        <span class="mdi mdi-close-circle-outline" v-on:click="closeModal()"></span>
    </div>
    <!-- / modal mask-->
</template>

<script>
export default {
    name: 'project-details',
    props: ['projectID', 'isShowModal'],
    data() {
        return {
            projectDetails: []
        }
    },
    methods: {
        getProjectDetails: function(projectID) {
            this.$http.jsonp('http://behance.net/v2/projects/' + projectID + '?api_key=ddao6kwQUp8x90o1u1uk8Lt82md8thrX')
                .then(response => {
                    this.projectDetails = response.body.project;
                });
        },
        created: function() {
            this.getProjectDetails(this.projectID);
        },
        closeModal: function() {
            this.projectID = '';
            this.isShowModal = false;
            $('.modal-mask').css('display', 'none')
        }
    },
    watch: {
        projectID: function(projectID) {
            this.getProjectDetails(projectID)

        }
    }
}
</script>

<style scoped>
.modal-mask {
    display: grid;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
    transition: all .5s ease;
}

.modal-mask span {
    position: absolute;
    top: 45px;
    right: 55px;
    font-size: 60px;
    /*color: #fff;*/
    cursor: pointer;
}

#modal {
    position: relative;
    background: #fff;
    max-width: 1500px;
    max-height: calc(100vh - 100px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    color: #292929;
    overflow-y: auto;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 250px 1fr;
    margin: 20px;
}


.heading {
    border-bottom: 1px solid #292929;
}

.author {
    padding: 0;
}

.author a {
    color: #292929;
}

.author img {
    border-radius: 50%;
    margin-top: 20px;
}

.project-content {
    border-right: 1px solid #292929;
    padding: 0 30px;
    overflow: auto;
}

.project-works img {
    width: 100%;
}

.project-info {
    padding: 20px 30px;
    text-align: left;
}

.project-stats {
    text-transform: capitalize;
}

.project-info p {
    font-size: 12px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

@media only screen and (max-width: 1840px) {
    .modal-mask span {
        position: static;
        font-size: 80px;
        cursor: pointer;
        margin: 0 30px;
    }
}

@media only screen and (max-width: 1040px) {
    #modal {
        grid-template-columns: 1fr;
    }

    #modal div:nth-of-type(4) {
        order: 3
    }
}
</style>
