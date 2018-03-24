<template>
    <div class="about">

        <div class="holder">
            <h2>Who are we?</h2>
            <div class="about-description">
                <div class="about-text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque tenetur doloribus nulla? Tempora sit repellat a impedit pariatur repudiandae distinctio error iure! Magni facilis soluta iste minus minima doloribus praesentium!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque tenetur doloribus nulla? Tempora sit repellat a impedit pariatur repudiandae distinctio error iure! Magni facilis soluta iste minus minima doloribus praesentium!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque tenetur doloribus nulla? Tempora sit repellat a impedit pariatur repudiandae distinctio error iure! Magni facilis soluta iste minus minima doloribus praesentium!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque tenetur doloribus nulla? Tempora sit repellat a impedit pariatur repudiandae distinctio error iure! Magni facilis soluta iste minus minima doloribus praesentium!</p>
                    <h3>
                        <router-link v-bind:to="'/designers/'">Check out who exactly we are!</router-link>
                    </h3>
                </div>
                <!-- / about text -->
                <img src="../assets/remix-group.png" alt="">
            </div>
            <!-- / about description -->
        </div>
        <!-- / holder -->
    </div>
    <!-- / about -->
</template>

<script>
import Banner from './Banner'
export default {
    name: 'about'
}
</script>
<!-- styling for the component -->
<style>
.about-description {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    margin: 50px 0 100px;
}

.about-description img {
    width: 100%;
}

.about-text {
    padding: 0 30px;
    text-align: left;
}

.about-text a {
    font-weight: 700;
}

@media only screen and (max-width: 740px){
    .about-description {
        grid-template-columns: 1fr;
    }
}
</style>
