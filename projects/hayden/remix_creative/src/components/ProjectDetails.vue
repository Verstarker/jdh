<template>
    <div class="modal-mask">
        <div id="modal">
            <slot name="header">
                <h2>Project Name</h2>
                <div class="author">
                    <img src="" alt="">
                    <h3>Created By:<br></h3>
                </div><!-- / author -->
            </slot>
         <slot name="body">
            <div class="project-content">
                <div class="project-images">

                </div><!-- / project images -->
                <!--<div class="project-info" v-bind:for="projectStat in projectStats">
                        {{ projectStat }}<br>
                </div> / project info -->
            </div><!-- / project content -->
         </slot>
        </div>
        <!-- / modal -->
    </div>
    <!-- / modal mask-->
</template>

<script>
export default {
    name: 'project-details',
    props: ['projectId'],
    data() {
        return {
            projectDetails: []
            //projectStats: []
        }
    },
    methods: {
        getProjectDetails: function(projectId) {
            this.$http.jsonp('http://behance.net/v2/projects/' + projectId + '?api_key=ddao6kwQUp8x90o1u1uk8Lt82md8thrX')
            .then(response => {
                this.projectDetails = response.body.project;
                //this.projectStats = response.body.project.stats;
            });
        },
        created: function() {
            this.getProjectDetails(this.projectId);
            console.log(projectDetails)
        }
    }
}
</script>

<style scoped>
    #modal {
        display: none;
    }
</style>
