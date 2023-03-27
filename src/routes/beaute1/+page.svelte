<script>
	import cart from '$lib/images/cart.png';
	import Beaute1 from '$lib/images/Beaute1.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';

</script>

<svelte:head>
	<title>Beaute1</title>
	<meta name="beaute1" content="beaute1 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
			<h1 class="font-bold text-center text-4xl py-7 ">BEAUTE</h1>
			<div id="facet-main">
				<div id="nb-products" class="text-center text-xl">
					<span>Sérum concentré d'acide hyaluronique</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Beaute1} alt="Beaute1" class="rounded-t-lg center">
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
									Sérum concentré d'acide hyaluronique
									</h1>
									<br>

									<h4 class="text-l text-gray-800   text-justify">
										Ce sérum d'acide hyaluronique 100 % d'origine naturelle est l'un des plus concentrés du marché : 2.5% contre 0.1 à 1% d'acide hyaluronique dans les cosmétiques classiques. Reconnu pour lisser, hydrater et repulper la peau, sa texture fraîche, naturellement gélifiée, pénètre instantanément sans la pelucher ni la tirailler. Son efficacité en tant que sérum anti-âge a été testée et prouvée pour combler les rides, hydrater et améliorer l'élasticité de la peau. Notre sérum d'acide hyaluronique fait également des miracles sur les cheveux secs et abimés qu'il adoucit et restructure. Ce sérum hydratant visage anti-âge s'utilise pur ou agrémenté d'actifs pour le personnaliser. Sa nouvelle formule ne contient pas d'alcool. Disponible en éco-recharge recyclable, écologique et économique pour recharger facilement son flacon tout en réduisant ses déchets. 									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">5.90&euro;</p>
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
					<li> Aqua (​eau), Salix nigra bark extract (extrait d'écorce de saule noir), Sodium hyaluronate (acide hyaluronique, actif anti-âge d'origine naturelle), Glycerin (glycérine végétale BIO non dérivée d'huile de palme , hydratante), Levulinic acid (agent antimicrobien d'origine végétale), Sodium Levulinate (agent antimicrobien d'origine végétale)</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>
