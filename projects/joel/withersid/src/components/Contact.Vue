<template>
    <div class="contact">
        <h1>Contact Form</h1>
        <div class="contact-div">
            <input type="text" class="input-name" placeholder="Name">
            <input type="text" class="input-name" placeholder="Topic">
            <textarea rows="5" class="input-message" placeholder="Message"></textarea>
            <button>Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact'
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

.contact {
    margin: auto;
    text-align: center;
    padding: 150px 0px 100px 0px;
    color: #2B3D4E;
}

.contact-div {
    width: 500px;
    margin: auto;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0px;
    border: 2px solid #2B3D4E;
    font-size: 25px;
}

::placeholder {
    color: rgba(43, 61, 78, 0.7);
}

textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0px;
    border: 2px solid #2B3D4E;
    font-size: 25px;
}

.input-message {
    height: 250px;
    text-align: top;
}

button {
    width: 250px;
    padding: 15px;
    background-color: #2B3D4E;
    border: 0px;
    color: #E4EACE;
    font-size: 25px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 25px;
}

@media only screen and (max-width: 600px) {
    .contact-div {
        width: 80%;
    }
}
</style>