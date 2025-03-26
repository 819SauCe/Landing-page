import noPicture from '../img/projects/no-picture.png';

let projects = [
	{ img: noPicture, nome: "Projeto 1", descricao: "teste", link: "/projects/1", id: 1 },
	{ img: noPicture, nome: "Projeto 2", descricao: "teste", link: "/projects/2", id: 2 },
	{ img: noPicture, nome: "Projeto 3", descricao: "teste", link: "/projects/3", id: 3 },
	{ img: noPicture, nome: "Projeto 4", descricao: "teste", link: "/projects/4", id: 4 },
	{ img: noPicture, nome: "Projeto 5", descricao: "teste", link: "/projects/5", id: 5 }
];

let item_shop = [
	{ img: noPicture, nome: "item 1", descricao: "coisado", valor: "16,99", link: "url" },
	{ img: noPicture, nome: "item 2", descricao: "coisado", valor: "16,99", link: "url" },
	{ img: noPicture, nome: "item 3", descricao: "coisado", valor: "16,99", link: "url" }
];

export function initSearch() {
	const input = document.querySelector('.search');
	const resultadosDiv = document.getElementById('resultados');
  const container = document.querySelector('.searchbox');

  document.addEventListener('click', (e) => {
		if (!container.contains(e.target)) {
			resultadosDiv.style.height = '0px';
		}
	});

  container.addEventListener('click', () => {
		if (input.value.trim()) {
			resultadosDiv.style.height = 'auto';
		}
	});

	if (!input || !resultadosDiv) return;

	input.addEventListener('input', () => {
		const filtro = input.value.toLowerCase();
		resultadosDiv.innerHTML = '';
		if (!filtro) {
			resultadosDiv.style.height = '0px';
			return;
		}

		const todos = [...projects, ...item_shop];
		const rankeados = todos
			.map(item => {
				const nome = item.nome.toLowerCase();
				const descricao = item.descricao.toLowerCase();
				const score =
					(nome === filtro ? 1000 : 0) +
					(nome.startsWith(filtro) ? 100 : 0) +
					(nome.includes(filtro) ? 10 : 0) +
					(descricao.includes(filtro) ? 1 : 0);
				return { item, score };
			})
			.filter(x => x.score > 0)
			.sort((a, b) => b.score - a.score)
			.slice(0, 5);

		resultadosDiv.style.height = `${rankeados.length * 32}px`;

		rankeados.forEach(({ item }) => {
			const link = document.createElement('a');
			link.href = item.link;
			link.style.display = 'flex';
			link.style.alignItems = 'center';
			link.style.gap = '8px';
			link.style.padding = '4px 8px';
			link.style.color = 'black';
			link.style.textDecoration = 'none';

			const img = document.createElement('img');
			img.src = item.img;
			img.alt = item.nome;
			img.style.width = '24px';
			img.style.height = '24px';
			img.style.objectFit = 'cover';
			img.style.borderRadius = '4px';

			const texto = document.createElement('span');
			texto.textContent = item.nome;

			link.appendChild(img);
			link.appendChild(texto);
			resultadosDiv.appendChild(link);
		});
	});
}
