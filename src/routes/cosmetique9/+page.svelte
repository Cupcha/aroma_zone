<script>
	import cart from '$lib/images/cart.png';
	import Cosmetique6 from '$lib/images/Cosmetique6.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

<svelte:head>
	<title>cosmetique6</title>
	<meta name="cosmetique6" content="Cosmetique6 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
					<span>Lait de Jument Bio</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Cosmetique6} alt="Cosmetique6" class="rounded-t-lg center">
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
									Lait de Jument Bio
									</h1>
									<br>
									<h4 class="text-l text-gray-800   text-justify">
										Doux et apaisant, le lait de jument est réputé pour son très fort pouvoir régénérant. De composition proche du lait maternel, il est particulièrement bien toléré par les peaux les plus sensibles. On le trouve d'ailleurs de plus en plus dans les soins des peaux irritées, sèches, voire intolérantes. C'est donc un ingrédient de choix pour vos cosmétiques "peaux sensibles". Cette qualité de poudre est très facile à disperser dans vos préparations aqueuses.									</h4>								
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">4.95&euro;</p>
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
					<li> Composition du mélange avant séchage : 80% lait de jument BIO, 20% maltodextrine de maïs BIO</li>
					<li> Composition approximative de la poudre séchée : 27% poudre de lait de jument, 73% maltodextrine de maïs BIO</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>





  
