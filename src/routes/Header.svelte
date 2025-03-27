<script>
	import { onMount } from 'svelte';
	import { initSearch } from '../scripts/searchBar.js';
	import the_fool from '../img/generic-img/the_fool.png';
	import the_fool_back from '../img/generic-img/the_fool_back.webp';

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
<div class="card-logo {isSidebarVisible ? 'move' : ''}">
    <div class="card-inner">
        <img src={the_fool} class="card-front" alt="Carta frente" />
        <img src={the_fool_back} class="card-back" alt="Carta verso" />        
    </div>
</div>

<div id="sidebar" class="sidebar {isSidebarVisible ? 'show' : ''}"><h2 style="font-family: Rock Salt, cursive; text-align:center;">The menu</h2></div>

<div class="searchbar">
    <div class="searchbox">
      <input class="search" type="text" placeholder="Search..." />
      <button class="searchBTN">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      
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
        width: 100%;
        height: auto;
        background-color: rgb(10, 10, 10);
        border: 1px solid rgb(47, 47, 47);
        color: white;
    }

    .card-logo {
        position: absolute;
        margin-left: 2%;
        margin-top: 0.5%;
        width: 43px;
        height: 60px;
        perspective: 1000px;
        animation: float 3s ease-in-out infinite;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.3s;
        transform-style: preserve-3d;
    }

    .card-logo:hover .card-inner {
        transform: rotateY(180deg);
        cursor: pointer;
    }

    .card-front,
    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        backface-visibility: hidden;
        border-radius: 4px;
    }

    .card-back {
        transform: rotateY(180deg);
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
        margin-left: 340px;
        transition: margin-left 0.3s;
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

    .searchBTN {
        position: absolute;
        top: 0;
        right: 0;
        width: 32px;
        height: 32px;
        background: rgba(240, 240, 240, 0);
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    .searchBTN svg {
        width: 90px;
        height: 25px;
        stroke: black;
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