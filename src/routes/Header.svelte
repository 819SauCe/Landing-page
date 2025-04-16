<script>
	import { onMount } from 'svelte';
	import { initSearch } from '../scripts/searchBar.js';
	import menu_button from '../img/generic-img/menu.gif';

	let isSidebarVisible = false;

	function toggleSidebar() {
		isSidebarVisible = !isSidebarVisible;
	}

	onMount(() => {
		const card = document.querySelector('.card-logo');
		const sidebar = document.getElementById('sidebar');

		if (card && sidebar) {
			card.addEventListener('click', () => {
				toggleSidebar();
			});
		}

		initSearch();
	});
</script>

<div class="e-header">
<header>
    <div class={`card-logo ${isSidebarVisible ? 'move' : ''}`}>
    <div class="card-inner">
        <img src={menu_button} class="card-front" alt="Carta frente" />  
    </div>
</div>

<div id="sidebar" class="sidebar {isSidebarVisible ? 'show' : ''}"><h2 style="font-family: Rock Salt, cursive; text-align:center;">The menu</h2></div>

<div class="searchbar">
    <div class="searchbox">
      <input class="search" type="text" placeholder="Search..." />
    </div>
</div>

    <div class="nav">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/websites">websites</a>
        <a href="/drivers">drivers</a>
        <a href="/+">+</a>
    </div>
</header>

<div id="resultados" style="margin-top:-2.8%; position:absolute; width: 100%;"></div>
</div>

<style>
    header {
        position: fixed;
        width: 100%;
        max-height: 78px;
        background-color: rgb(10, 10, 10);
        border: 1px solid rgb(47, 47, 47);
        color: white;
    }

    .card-logo {
        position: fixed;
        left: 2%;
        top: 0.5%;
        width: 43px;
        height: 60px;
        perspective: 1000px;
        animation: float 3s ease-in-out infinite;
        transition: left 0.3s;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.3s;
        transform-style: preserve-3d;
    }

    .card-logo:hover .card-inner {
        cursor: pointer;
    }

    .card-front{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        backface-visibility: hidden;
        border-radius: 4px;
    }

    .sidebar {
        position: fixed;
        left: 0;
        top: 0;
        width: 320px;
        height: 100%;
        background: rgba(20, 20, 20, 0.95);
        backdrop-filter: blur(6px);
        box-shadow: 4px 0 10px rgba(0, 0, 0, 0.6);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        transition: transform 0.3s ease;
        transform: translateX(-100%);
        z-index: 999;
    }


    .sidebar.show {
        transform: translateX(0);
    }

    .card-logo.move {
        left: 340px;
    }

    .searchbar {
        display: flex;
        justify-content: center;
        margin-top: 1%;
    }

    .searchbox {
        position: relative;
        width: 700px;
    }

    .search {
        width: 100%;
        height: 30px;
        font-size: 18px;
        border-radius: 7px;
    }

    .search::placeholder {
        padding-left: 1%;
    }

    .search:focus {
        outline: none;
        box-shadow: none;
        border: none;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 15px;
        padding-top: 0%;
    }

    .nav {
        display: flex;
        justify-content: center;
        margin-bottom: 0.3%;
        margin-top: 0.3%;
        gap: 60px;
    }

    #resultados {
        position: fixed;
        top: 93px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 685px;
        background: white;
        z-index: 9999;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        overflow: hidden;
    }

    :global(#resultados a) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    }

    :global(#resultados a:hover) {
        background-color: #ddd;
        color: black;
        cursor: pointer;
    }

    @keyframes float {
        0%   { transform: translate(0, 0); }
        25%  { transform: translate(-2px, -2px); }
        50%  { transform: translate(3px, -4px); }
        75%  { transform: translate(-1px, -2px); }
        100% { transform: translate(0, 0); }
    }
</style>