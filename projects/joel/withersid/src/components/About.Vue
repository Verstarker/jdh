<template>
    <div class="about">
        <h1>About Us</h1>
        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo laoreet sit amet. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Maecenas sed enim ut sem viverra aliquet eget. Tellus pellentesque eu tincidunt tortor. Ultrices vitae auctor eu augue ut. Ut diam quam nulla porttitor. Tincidunt dui ut ornare lectus sit. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed.</p>
        <div class='about-pic-div'>
            <img class='about-pic' src="../assets/business-pic.jpg">
            <img class ='about-pic' src='../assets/office-pic.jpg'>
        </div>
        <p class='about-text'>Rhoncus est pellentesque elit ullamcorper. Dapibus ultrices in iaculis nunc sed augue lacus. Habitasse platea dictumst quisque sagittis purus sit amet. Egestas sed sed risus pretium quam. Enim sed faucibus turpis in eu mi bibendum. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Molestie at elementum eu facilisis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Vestibulum rhoncus est pellentesque elit ullamcorper. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Vulputate dignissim suspendisse in est. Porta nibh venenatis cras sed felis eget velit. Diam in arcu cursus euismod quis. Porta nibh venenatis cras sed felis eget velit. Ut consequat semper viverra nam. Euismod in pellentesque massa placerat duis. Enim diam vulputate ut pharetra. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Ut pharetra sit amet aliquam id.</p>
    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

h1 {
    font-weight: 500;
    font-size: 50px;
    padding-bottom: 50px;
}

.about {
    margin: auto;
    text-align: center;
    padding: 150px 0px 100px 0px;
    color: #2B3D4E;
}

.about-text {
    width: 500px;
    margin: auto;
    text-align: left;
}

.about-pic-div {
    display: inline-block;
    width: 750px;
    margin: auto;
}

.about-pic {
    width: 45%;
    padding: 25px 10px;
}

@media only screen and (max-width: 800px) {
    .about-pic-div {
        width: 80%;
    }

    .about-pic {
        width: 100%;
    }
}

@media only screen and (max-width: 600px) {
    .about-text {
        width: 80%;
    }
}
</style>