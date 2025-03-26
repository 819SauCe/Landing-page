<script>
	import { page } from '$app/stores';
	import noPicture from '../../../img/projects/no-picture.png';

	let projetos = [
		{ id: "1", nome: "Projeto 1", descricao: "teste", img: noPicture },
		{ id: "2", nome: "Projeto 2", descricao: "coisa", img: noPicture },
        { id: "3", nome: "Projeto 3", descricao: "sdnjk", img: noPicture}
	];

	$: id = $page.params.id;
	$: projeto = projetos.find(p => p.id === id);
</script>

{#if projeto}
	<h1>{projeto.nome}</h1>
	<p>{projeto.descricao}</p>
	<img src={projeto.img} alt={projeto.nome} />
{:else}
	<h1>Projeto não encontrado</h1>
{/if}
