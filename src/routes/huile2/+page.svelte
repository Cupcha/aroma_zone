<script>
	import cart from '$lib/images/cart.png';
	import Huile9 from '$lib/images/Huile9.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

<svelte:head>
	<title>huile9</title>
	<meta name="huile9" content="Huile9 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>



<body class=" home font-karla text-lg">
	<Headerpage></Headerpage>

	<div id="container" class="bg-gray-200">
		<br>
		<br>
		<br>
		<br>
		<product-facet>
			<h1 class="font-bold text-center text-4xl py-7 ">HUILES ESSENTIELLES</h1>
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Huile essentielle d'Anis Vert</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Huile9} alt="Huile9" class="rounded-t-lg center">
						</a>
						<div class="p-4"></div>
					</div>

					<div class="bg-white shadow-lg rounded-lg">
						<div class="p-4">
							<div class="flex mb-5">
								<a href=" ">
									<h1 class="text-l text-gray-900 font-bold text-center text-xl">
									<br>
									<br>
									<br>
										
									Huile essentielle d'Anis Vert
									</h1>
									<br>

									<h4 class="text-l text-gray-800   text-justify">
										Les graines d'Anis sont traditionnellement utilisées pour faciliter la digestion mais aussi pour contribuer au confort féminin. Calmante, son huile essentielle est appréciée pour son odeur anisée puissante.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">6.05&euro;</p>
							</div>
									<br>
									<br>
									<br>
									<br>
							<a href=" " class="inline-flex items-center justify-between px-5 py-1 shadow-sm font-medium rounded-md bg-stone-400">
								<span class="text-white text-lg">
									
									Acheter
								</span>
								<img src={cart} alt="cart" class="ml-4 h-6 w-6">
							</a>
						</div>
					</div>

				</div>
			
			</product-list>
		</product-facet>
		<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 md:h-auto">
					
			<div class="bg-gray-200 shadow-lg rounded-lg ">
				<h5>
					Composition : 
					<br>
					<li> Phénols méthyl éthers : (E)-anéthol (93.08%), (Z) anéthole (0.18%)</li>
					<li> Sesquiterpènes : gamma-himachalène (1.72%)</li>
					<li>Esters : 2 méthylbutyrate de pseudoisoeugényle (0.52%)</li>
					
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>
