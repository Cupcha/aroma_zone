<script>
	import cart from '$lib/images/cart.png';
	import Cosmetique9 from '$lib/images/Cosmetique9.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

<svelte:head>
	<title>cosmetique9</title>
	<meta name="cosmetique9" content="Cosmetique9 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
			<h1 class="font-bold text-center text-4xl py-7 ">COSMETIQUES</h1>
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Skin Repair Bio</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Cosmetique9} alt="Cosmetique9" class="rounded-t-lg center">
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
									Skin Repair Bio
									</h1>
									<br>
									<h4 class="text-l text-gray-800   text-justify">
										Cet extrait concentré d'Acanthe sauvage BIO d'Auvergne a une efficacité prouvée sur  la restauration de l'effet barrière de la peau, ce qui améliore la souplesse et prévient la déshydratation cutanée. Incorporé dans vos préparations cosmétiques, c'est un puissant allié pour réparer et régénérer les peaux irritées ou abîmées et un excellent actif pour les peaux sèches et les peaux matures.									</h4>								
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">4.20&euro;</p>
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
					<li> Extrait hydroalcoolique des parties aériennes d'Onopordon ou Acanthe sauvage</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>





  
