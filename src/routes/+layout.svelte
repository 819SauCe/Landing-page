<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Rock+Salt&display=swap');
    :global(*) {
        overflow-x: hidden;
        font-family: "Fira Code", monospace;
        font-optical-sizing: auto;
        padding: 0%;
        margin: 0%;
        border: 0%;
    }
</style>

<Header />
<slot />
<Footer />