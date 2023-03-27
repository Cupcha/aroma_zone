
<script>
	import cart from '$lib/images/cart.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
  	import supabase from '../supabase.js';

	async function getData() {
	const { data: huileData, error: huileError } = await supabase
		.from('Huile')
		.select()

	const { data: cosmetiqueData, error: cosmetiqueError } = await supabase
		.from('Cosmetique')
		.select()

	const { data: nutritionData, error: nutritionError } = await supabase
		.from('Nutrition')
		.select()
		
	const { data: maisonData, error: maisonError } = await supabase
		.from('Maison')
		.select()
	
	const { data: beauteData, error: beauteError } = await supabase
		.from('Beaute')
		.select()	

	if (huileError) throw new Error(huileError.message)
	if (cosmetiqueError) throw new Error(cosmetiqueError.message)
	if (nutritionError) throw new Error(nutritionError.message)
	if (maisonError) throw new Error(maisonError.message)
	if (beauteError) throw new Error(beauteError.message)

	return { huileData, cosmetiqueData, nutritionData, maisonData, beauteData }
};
</script>


<svelte:head>
	<title>listproducts</title>
	<meta name="liste_touslesproduits" content="List products shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>

</svelte:head>

<body class="home font-karla">
    <Headerpage></Headerpage>

    <div id="container" class="bg-gray-200 pt-28">
		<product-facet>
			
			<h1 class="font-bold text-browntext text-center text-4xl py-7 ">TOUS LES PRODUITS</h1>
			
			<div id="facet-main">
				<div id="nb-products" class="text-center text-browntext text-xl">
					<span>50 produits</span>
				</div>
			</div>

			{#await getData()}
			<p> </p>
			{:then data}
			  <product-list class="flex text-browntext text-center">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:h-auto">
					{#each [...data.nutritionData] as product, i}
					<div class="bg-white shadow-lg rounded-lg">
					  <a href="/nutrition{i+1}">
						<img src={product.picture} alt="product" class="rounded-t-lg">
					  </a>
					  <div class="p-4">
						<div class="mb-5">
						  <a href=" ">
							<h3 class="text-l text-center font-bold text-lg">{product.name}</h3>
						  </a>
						  <p class="ml-auto text-l font-medium ">{product.price}€</p>
						</div>
						<a href="/nutrition{i+1}" class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
						  <span class="text-white text-lg">Acheter</span>
						  <img src={cart} alt="cart" class="ml-4 h-6 w-6">
						</a>
					  </div>
					</div>
				  {/each}
				  {#each [...data.cosmetiqueData] as product, i}
					<div class="bg-white shadow-lg rounded-lg">
					  <a href="/cosmetique{i+1}">
						<img src={product.picture} alt="product" class="rounded-t-lg">
					  </a>
					  <div class="p-4">
						<div class="mb-5">
						  <a href=" ">
							<h3 class="text-l text-center font-bold text-lg">{product.name}</h3>
						  </a>
						  <p class="ml-auto text-l font-medium ">{product.price}€</p>
						</div>
						<a href="/cosmetique{i+1}" class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
						  <span class="text-white text-lg">Acheter</span>
						  <img src={cart} alt="cart" class="ml-4 h-6 w-6">
						</a>
					  </div>
					</div>
				  {/each}
				  {#each [...data.huileData] as product, i}
					<div class="bg-white shadow-lg rounded-lg">
					  <a href="/huile{i+1}">
						<img src={product.picture} alt="product" class="rounded-t-lg">
					  </a>
					  <div class="p-4">
						<div class="mb-5">
						  <a href=" ">
							<h3 class="text-l text-center font-bold text-lg">{product.name}</h3>
						  </a>
						  <p class="ml-auto text-l font-medium ">{product.price}€</p>
						</div>
						<a href="/huile{i+1}" class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
						  <span class="text-white text-lg">Acheter</span>
						  <img src={cart} alt="cart" class="ml-4 h-6 w-6">
						</a>
					  </div>
					</div>
				  {/each}
				  {#each [...data.maisonData] as product, i}
					<div class="bg-white shadow-lg rounded-lg">
					  <a href="/maison{i+1}">
						<img src={product.picture} alt="product" class="rounded-t-lg">
					  </a>
					  <div class="p-4">
						<div class="mb-5">
						  <a href=" ">
							<h3 class="text-l text-center font-bold text-lg">{product.name}</h3>
						  </a>
						  <p class="ml-auto text-l font-medium ">{product.price}€</p>
						</div>
						<a href="/maison{i+1}" class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
						  <span class="text-white text-lg">Acheter</span>
						  <img src={cart} alt="cart" class="ml-4 h-6 w-6">
						</a>
					  </div>
					</div>
				  {/each}
				  {#each [...data.beauteData] as product, i}
					<div class="bg-white shadow-lg rounded-lg">
					  <a href="/beaute{i+1}">
						<img src={product.picture} alt="product" class="rounded-t-lg">
					  </a>
					  <div class="p-4">
						<div class="mb-5">
						  <a href=" ">
							<h3 class="text-l text-center font-bold text-lg">{product.name}</h3>
						  </a>
						  <p class="ml-auto text-l font-medium ">{product.price}€</p>
						</div>
						<a href="/beaute{i+1}" class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-brownbg">
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