<template>
    <div class="modal-mask" v-on:click="closeModal()">
        <div id="modal">
            <slot name="header">
                <h2>{{projectDetails.name}}</h2>
                <div class="author">
                    <img src="" alt="">
                    <h3>Created By:<br>{{ projectDetails.owners[0].display_name }}</h3>
                </div><!-- / author -->
            </slot>
         <slot name="body">
            <div class="project-content">
                <div class="project-works" v-for="mod in projectDetails.modules">
                    <template v-if="mod.type = 'text'">
                        <img v-bind:src="mod.sizes.original" alt="">
                    </template>
                    <template v-else>
                        
                    </template>
                </div><!-- / project works -->
                <div class="project-info">
                    <div class="project-stats" v-for="projectStat in projectDetails.stats">
                        {{ projectStat }}<br>
                    </div><!-- / project stats -->
                    <div class="project-description">
                        {{ projectDetails.description }}
                    </div><!-- / project description -->
                </div><!-- / project info -->
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
    props: ['projectID'],
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
                console.log(response.body.project.stats)
            });
        },
        created: function() {
            this.getProjectDetails(this.projectID);
        },
        closeModal: function() {
            this.projectID = '';
            $('.modal-mask').css('display', 'none');
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
        display: none;
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

    #modal {
        background: #fff;
        max-width: 1200px;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,.33);
        color: #292929;
    }
</style>
