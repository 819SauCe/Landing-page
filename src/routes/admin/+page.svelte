<main style="margin-top: 78px;">
    <div id="tabela"></div>
</main>

<main style="margin-top: 78px;">
    <div id="tabela"></div>
</main>

<script>
	import { onMount } from 'svelte';
	import { createClient } from '@supabase/supabase-js';

	const supabase = createClient(
		'https://eaghblciigybxbsumuiq.supabase.co',
		import.meta.env.VITE_SUPABASE_KEY,
		{
			global: {
				headers: {
					'my-access-key': 'minha-chave-secreta'
				}
			}
		}
	);

	onMount(async () => {
		const { data, error } = await supabase.from('Payment').select('*');
		console.log('DADOS:', data);
		console.log('ERRO:', error);
	});
</script>

<style>
    main {
        width: 100%;
        height: auto;
        color: white;
        background-color: rgb(33, 33, 33);
        
    }
</style>