<script>
	import cart from '$lib/images/cart.png';
	import Beaute8 from '$lib/images/Beaute8.png';
	import Headerpage from '../Headerpage.svelte';
	import Footerpage from '../Footerpage.svelte';

</script>

<svelte:head>
	<title>Beaute8</title>
	<meta name="beaute8" content="beaute8 shop Aroma-zone IE=edge width=device-width initial-scale=1.0">
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
					<span>Gel natif d'aloe vera bio</span>
				</div>
			</div>
			
			<product-list class="flex">
				<div class="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:h-auto object-center">
					<div class="bg-white shadow-lg rounded-lg flex justify-center items-center">
						<a href=" ">
							<img src={Beaute8} alt="Beaute8" class="rounded-t-lg center">
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
									Gel natif d'aloe vera bio
									</h1>
									<br>

									<h4 class="text-l text-gray-800   text-justify">
										Ce gel d'Aloe vera est préparé à partir de jus natif frais, avec une teneur garantie en aloeverose de 1200 mg/L minimum, issu du cœur de l'Aloe vera par simple ajout d'un gélifiant naturel (la gomme xanthane), d'un conservateur naturel, et d'arginine (ajusteur de pH d'origine naturelle) pour en faire une formule adaptée à un usage cosmétique. Ce gel est fabriqué à froid pour préserver sa richesse en mucilages, en vitamines et en éléments nutritifs. Le jus d'aloe vera est connu pour ses multiples propriétés sur la peau… Un véritable trésor de la nature et un must pour tous types de peaux ! Retrouvez les différents ajouts possibles et leurs dosages sur cette fiche conseil.									</h4>
								</a>
								<p class="ml-auto text-l font-medium text-gray-800">3.60&euro;</p>
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
					<li> 93% de jus d'Aloe vera natif, 100% pur et naturel de culture biologique, auquel ont été ajoutés un conservateur naturel (composé de : Leuconostoc/radish root ferment filtrate, Aqua), de la gomme xanthane (gélifiant naturel) et de l'arginine (ajusteur de pH), afin d'en faire un gel cosmétique.</li>
				</h5>
				<div class="p-4">
				
				</div>
			</div>
		</div>
	</div>
	<Footerpage></Footerpage>
</body>
