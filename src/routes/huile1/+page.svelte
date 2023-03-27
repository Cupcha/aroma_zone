<script>
	import cart from '$lib/images/cart.png';
	import Huile10 from '$lib/images/Huile10.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';
</script>

<svelte:head>
	<title>huile10</title>
	<meta name="huile10" content="Huile10 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
					<span>Huile essentielle de Baies Roses</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Huile10} alt="Huile10" class="rounded-t-lg center">
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
										
									Huile essentielle de Baies Roses
									</h1>
									<br>

									<h4 class="text-l text-gray-800   text-justify">
										L'huile essentielle de Baies roses ou faux poivrier a développe des notes épicées fraîches et poivrées et constitue un arôme original en cuisine. Chauffante, elle est aussi l'alliée des sportifs, elle aide à préparer les muscles à l'effort et à calmer les courbatures.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">3,90&euro;</p>
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
					<li> Monoterpènes : Delta-3-carène (0.14%), Alpha-pinène (4.27%), Alpha-phellandrène (26.46%), Béta-Phellandrène (10.10%), Limonène (9.97%), Myrcène (32.15%)</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>
