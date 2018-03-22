<template>
  <div class="home">
    <h2 class="logo-text">Withers Illustration & Design</h2>
    <h1 class="home-header">We do design</h1>
    <h3>Featured Designer</h3>
    <router-link v-bind:to="'/designer/' + username">
      <div class="featured-designer-div">
        <img class="feature-profile-pic">
        <h4 class="home-designer-title"></h4>
      </div>
    </router-link>
    <div class="home-preview">
      <div class="small-preview-container">
        <img v-on:click="initiateModal(projects[0].id)" v-bind:src="projects[0].src" class="small-preview cover-preview">
        <img v-on:click="initiateModal(projects[1].id)" v-bind:src="projects[1].src" class="small-preview cover-preview">
        <img v-on:click="initiateModal(projects[2].id)" v-bind:src="projects[2].src" class="small-preview cover-preview">
        <img v-on:click="initiateModal(projects[3].id)" v-bind:src="projects[3].src" class="small-preview cover-preview">
      </div>
      <img v-on:click="initiateModal(projects[4].id)" v-bind:src="projects[4].src" class="large-preview cover-preview">
      <img v-on:click="initiateModal(projects[5].id)" v-bind:src="projects[5].src" class="large-preview cover-preview dissapear-cover">
      <div class="small-preview-container">
        <img v-on:click="initiateModal(projects[6].id)" v-bind:src="projects[6].src" class="small-preview cover-preview">
        <img v-on:click="initiateModal(projects[7].id)" v-bind:src="projects[7].src" class="small-preview cover-preview">
        <img v-on:click="initiateModal(projects[8].id)" v-bind:src="projects[8].src" class="small-preview cover-preview">
        <img v-on:click="initiateModal(projects[9].id)" v-bind:src="projects[9].src" class="small-preview cover-preview">
      </div>
      <img v-on:click="initiateModal(projects[5].id)" v-bind:src="projects[5].src" class="cover-preview large-preview large-cover-preview">
    </div>
    <div class="designers-link-div">
      <router-link v-bind:to="'/designers'" class="designers-link">View all of our designers</router-link>
    </div>
    <modal v-bind:projectID="projectID"></modal>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  name: 'home',
  data() {
    return {
      projects: [{ src: '' }, { src: '' }, { src: '' }, { src: '' }, { src: '' }, { src: '' }, { src: '' }, { src: '' }, { src: '' }, { src: '' }],
      projectID: '',
      username: ''
    }
  },
  components: {
    Modal
  },
  methods: {
    getProjects: function() {
      var users = ['Eduardo_Pena', 'reclarkgable', 'Jirka', 'zygat3r']
      var randUserNumber = Math.floor(Math.random() * 4);
      var chosenUser = users[randUserNumber];
      this.$http.jsonp('https://www.behance.net/v2/users/' + chosenUser + '/projects?api_key=H0kzBzX75cebcL11a23UE6feEiqAMiZH')
        .then(response => {
          this.projects = response.body.projects;
          this.username = this.projects[0].owners[0].username
          this.createCoverArray(this.projects);
          var chosenUserName = this.projects[0].owners[0].display_name;
          $('.home-designer-title').html(chosenUserName)
          $('.feature-profile-pic').attr('src', this.projects[0].owners[0].images[50])
        });
    },
    createCoverArray: function(projects) {
      var covers = [];
      for (var i = 0; i < this.projects.length; i++) {
        this.projects[i].src = projects[i].covers.original
      }
    },
    initiateModal: function(projectID) {
      this.projectID = projectID;
    }
  },
  created: function() {
    this.getProjects();
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

h2 {
  font-weight: 800;
  color: #2B3D4E;
  font-size: 18px;
}

.logo-text {
  text-transform: uppercase;
}

h3 {
  color: #2B3D4E;
  padding: 25px 0px 10px 0px;
}

h4 {
  color: #2B3D4E;
  padding: 5px 0px 25px 25px;
  display: inline-block;
  font-weight: normal;
  vertical-align: top;
  font-size: 35px;
}

.featured-designer-div {
  padding: 10px 0px 10px 0px;
  margin-left: -75px;
}

.feature-profile-pic {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid #2B3D4E;
  display: inline-block
}

.home-header {
  text-transform: uppercase;
  color: #2B3D4E;
  font-weight: 500;
  font-size: 50px;
  padding: 25px 0px 10px 0px;
}

.home {
  text-align: center;
  padding: 90px 0px 50px 0px;
}

.home-preview {
  width: 1200px;
  text-align: center;
  display: inline-block;
}

.small-preview-container {
  width: 45%;
  height: 400px;
  display: inline-block;
  padding: 10px 10px;
}


.cover-preview:hover {
  filter: brightness(90%);
  transition: 0.3s;
  cursor: pointer;
}

.cover-preview {
  transition: 0.3s;
}

.small-preview {
  background-color: #333;
  display: inline-block;
  height: 49.25%;
  width: 49.25%;
  margin: 1px;
}

.large-preview {
  height: 400px;
  width: 45%;
  background-color: #333;
  display: inline-block;
  margin: 0px 10px;
}

.large-cover-preview {
  display: none;
}

.designers-link {
  text-transform: uppercase;
  font-weight: 600;
  color: #2B3D4E;
  text-decoration: underline;
  font-size: 25px;
  width: 100%;
  margin-top: 50px;
}

.designers-link-div {
  padding: 50px 0px 25px 0px;
}

@media only screen and (max-width: 1216px) {
  .dissapear-cover {
    display: none;
  }

  .large-cover-preview {
    display: inline-block;
  }

  .home-preview {
    width: 600px;
  }

  .small-preview-container {
    width: 100%;
  }

  .large-preview {
    width: 100%;
  }
}

@media only screen and (max-width: 700px) {
  .home-preview {
    width: 400px;
  }

  .small-preview-container {
    width: 100%;
    height: 310px;
  }

  .small-preview {
    width: 48.75%;
    height: 150px;
  }

  .large-preview {
    height: 300px;
  }
}
</style>
