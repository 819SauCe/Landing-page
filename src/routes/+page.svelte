<script>
    import astronaut from "../img/generic-img/astronaut.png"
</script>

<main>
    <h1>Supp i am Vitor💀</h1>
    <div class="apresentacao">
    <p><span class="rec">
        Into Arduino, code in Python, and obsessed with Rust.<br>
        Database? PostgreSQL — fast and solid.<br>
        Building a 3-node Raspberry Pi cluster.<br>
        System? Arch Linux, of course.<br>
        <br>
        Frontend? Svelte, HTML, JS, CSS, PicoCSS, SASS.<br>
        Also know .liquid from Shopify — done it all.<br>
        <br>
        Always wanted to study at Fatech, but living far and broke, it didn’t<br>
        happen.<br>
        <br>
        Still, I always coded better than most people who got in.<br>
            
        Tech is what I do — my way.<br>
    </p>
    <img class="astronaut" src="{astronaut}" alt="astronaut">
</div>
<div>
    <button class="cv-download">Download CV</button>
</div>
</main>

<style>
    main {
        width: 100%;
        height: 39rem;
        background-image: url(../img/generic-img/space_background.gif);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: white;
        margin-top: 78px;
    }

    .apresentacao {
        width: 100%;
        height: auto;
        line-height: 1.5;
        display: flex;
        text-align: center;
    }

    h1 {
        max-width: 21rem;
        margin-left: 17%;
        margin-top: 5%;
    }

    .apresentacao p {
        font-size: 20px;
    }

    .rec {
        margin-left: 2em;
        display: inline-block;
    }

    .astronaut {
        width: 400px;
        height: auto;
        margin-left: 5%;
    }

    .cv-download {
        width: 210px;
        height: auto;
        border-radius: 7px;
        border: 1px solid rgb(117, 117, 117);
        font-size: 30px;
        cursor: pointer;
        color: aliceblue;
        background-color: rgba(0, 0, 0, 0.323);
        transition: background 0.2s ease;
        margin-left: 68%;
    }

    .cv-download:hover {
        background-color: rgba(30, 30, 30, 0.63);
    }
</style>