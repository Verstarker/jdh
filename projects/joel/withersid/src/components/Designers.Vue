<template>
  <div class="designers">
    <h1 class="designer-header">Take a look at our world class designers.</h1>
    <p class="designer-text">Vestibulum rutrum pellentesque pellentesque. Cras interdum finibus elit. Maecenas nec egestas nunc. Donec fringilla convallis aliquam. Duis ac tincidunt metus. Ut nunc libero, maximus nec scelerisque euismod, commodo bibendum est. Donec congue justo sed gravida pharetra. Ut vel velit ipsum. Aliquam nisi mi, dapibus vel ex vitae, lobortis porta tellus.</p>
    <div class="designers-cover">
      <div class="cover-container">
        <router-link v-bind:to="'/designer/' + designers[0].username"><img v-bind:src="designers[0].src" class="designer-icons"></router-link>
        <router-link v-bind:to="'/designer/' + designers[0].username"><p class="designer-name">{{ designerNames[0] }}</p></router-link>
      </div>
      <div class="cover-container">
        <router-link v-bind:to="'/designer/' + designers[1].username"><img v-bind:src="designers[1].src" class="designer-icons"></router-link>
        <router-link v-bind:to="'/designer/' + designers[1].username"><p class="designer-name">{{ designerNames[1] }}</p></router-link>
      </div>
      <div class="cover-container">
        <router-link v-bind:to="'/designer/' + designers[2].username"><img v-bind:src="designers[2].src" class="designer-icons"></router-link>
        <router-link v-bind:to="'/designer/' + designers[2].username"><p class="designer-name">{{ designerNames[2] }}</p></router-link>
      </div>
      <div class="cover-container">
        <router-link v-bind:to="'/designer/' + designers[3].username"><img v-bind:src="designers[3].src" class="designer-icons"></router-link>
        <router-link v-bind:to="'/designer/' + designers[3].username"><p class="designer-name">{{ designerNames[3] }}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'designers',
  data() {
    return {
      designers: [{ src: '' }, { src: '' }, { src: '' }, { src: '' }],
      designerNames: ['', '', '', '']
    }
  },
  methods: {
    getDesignerData: function() {
      this.$http.jsonp('http://www.behance.net/v2/users/Baby_Fridge/following?client_id=H0kzBzX75cebcL11a23UE6feEiqAMiZH')
        .then(response => {
          this.allDesigners = response.body.following;
          this.createDesignerArray(this.allDesigners);
        });
    },
    createDesignerArray: function(allDesigners) {
      for (var i = 0; i < allDesigners.length; i++) {
        // Gets the biggest designer image available.
        var designerImage = allDesigners[i].images[Object.keys(allDesigners[i].images)[Object.keys(allDesigners[i].images).length - 1]]
        this.designers[i].src = designerImage
        this.designers[i].username = allDesigners[i].username
        this.designerNames[i] = allDesigners[i].display_name
      }
    }
  },
  created: function() {
    this.getDesignerData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

a {
  text-decoration: none;
}

.designers {
  margin: auto;
  text-align: center;
  padding: 150px 0px 100px 0px;
  color: #2B3D4E;
}

h1 {
  font-weight: 500;
  font-size: 40px;
  padding-bottom: 50px;
}

.designer-text {
  width: 600px;
  margin: auto;
  color: #2B3D4E;
}

.designers-cover {
  padding-top: 50px;
  width: 620px;
  margin: auto;
}

.cover-container {
  display: inline-block;
  padding-bottom: 25px;
}

.designer-icons {
  border-radius: 50%;
  width: 250px;
  margin: 25px;
  transition: 0.3s;
  border: 2px solid #2B3D4E;
}

.designer-icons:hover {
  filter: brightness(90%);
  transition: 0.3s;
  cursor: pointer;
}

.designer-name {
  font-weight: 500;
  color: #2B3D4E;
  font-size: 20px;
}

@media only screen and (max-width: 650px) {
  .designers-cover {
    width: 400px;
  }

  .designer-icons {
    width: 140px;
  }

  .designer-text {
    width: 80%;
  }

  .designer-header {
    width: 80%;
    margin: auto;
  }
}
</style>
