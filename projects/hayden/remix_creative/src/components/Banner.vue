<template>
    <div class="banner">
        <img src="../assets/home-banner.png" alt="">
        <h1>This is <br>Remix Creative</h1>
    </div>
    <!-- / banner -->
</template>

<script>
export default {
    name: 'banner'
}
</script>

<style scoped>
@media only screen and (max-width: 950px) {
    .banner h1 {
        font-size: 90px;
    }
}

@media only screen and (max-width: 640px) {
    .banner h1 {
        font-size: 60px;
    }
}

@media only screen and (max-width: 440px) {
    .banner h1 {
        font-size: 40px;
    }
}
</style>
