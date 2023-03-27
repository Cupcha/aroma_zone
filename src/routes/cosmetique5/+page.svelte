<script>
	import cart from '$lib/images/cart.png';
	import Cosmetique10 from '$lib/images/Cosmetique10.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

<svelte:head>
	<title>cosmetique10</title>
	<meta name="cosmetique10" content="Cosmetique10 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
					<span>Silicon Végétal </span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Cosmetique10} alt="Cosmetique10" class="rounded-t-lg center">
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
									Silicon Végétal 
									</h1>
									<br>
									<h4 class="text-l text-gray-800   text-justify">
										Fabuleux actif marin riche en polysaccharides et en sels minéraux, le Silicone végétal renforce le film hydrolipidique cutané et protège la peau de la déshydratation. Il est aussi particulièrement intéressant dans vos recettes de produits capillaires, où il joue le rôle de véritable agent conditionneur naturel, en lissant et gainant le cheveu.									</h4>								
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">6.90&euro;</p>
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
					<li> Extrait aqueux de l'algue rouge Chondrus crispus et d'algue Lithothamne, conservé au Naticide (conservateur d'origine naturelle)</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>





  
