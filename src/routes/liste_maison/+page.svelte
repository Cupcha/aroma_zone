<script>

	import cart from '$lib/images/cart.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
	import supabase from '../supabase.js';

	async function getData() {
		const { data, error } = await supabase
		.from('Maison')
		.select()
		if (error) throw new Error(error.message)
	
	return data
	};
</script>

<svelte:head>
	<title>listmaison</title>
	<meta name="liste_maison" content="List products shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>

</svelte:head>

<body class="home font-karla">
	<Headerpage></Headerpage>

	<div id="container" class="bg-gray-200 pt-28">
		<product-facet>
			
			<h1 class="font-bold text-browntext text-center text-4xl py-7 ">MAISON</h1>
			
			<div id="facet-main">
				<div id="nb-products" class="text-center text-browntext text-xl">
					<span>10 produits</span>
				</div>
			</div>
			
			{#await getData()}
			<p> </p>
			{:then data}
			  <product-list class="flex text-browntext text-center">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:h-auto">
				  {#each data as maison, i}
					<div class="bg-white shadow-lg rounded-lg">
					  <a href="/maison{i+1}">
						<img src={maison.picture} alt="maison" class="rounded-t-lg">
					  </a>
					  <div class="p-4">
						<div class="mb-5">
						  <a href=" ">
							<h3 class="text-l text-center font-bold text-lg">{maison.name}</h3>
						  </a>
						  <p class="ml-auto text-l font-medium ">{maison.price}€</p>
						</div>
						<a href="/maison{i+1}" class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
						  <span class="text-white text-lg">Acheter</span>
						  <img src={cart} alt="cart" class="ml-4 h-6 w-6">
						</a>
					  </div>
					</div>
				  {/each}
				</div>
			  </product-list>

		  	{/await}
		
		</product-facet>
	
	</div>

	<Footerpage></Footerpage>

</body>