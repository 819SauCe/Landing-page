<script>
    import astronaut from "../img/generic-img/astronaut.png"
</script>

<main>
    <h1>Supp i am Vitor💀</h1>
    <div class="apresentacao">
    <p>
        <span class="rec">Sou Vitor, desenvolvedor web com foco em soluções criativas.<br>
        Sempre fui fascinado pela combinação entre lógica e estética.<br>
        Meu objetivo é transformar ideias em produtos funcionais.<br>
        Gosto de SvelteKit, JavaScript e café ☕.<br>
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
    }

    .apresentacao {
        width: 100%;
        height: auto;
        margin-left: 5%;
        line-height: 1.6;
        display: flex;
        align-items: center;
    }

    h1 {
        max-width: 25rem;
        margin-left: 10%;
        margin-top: 5%;
        position: absolute;
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